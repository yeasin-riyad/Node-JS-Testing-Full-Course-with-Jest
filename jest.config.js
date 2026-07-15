const { createDefaultPreset } = require("ts-jest");

// ts-jest এর Default Transform Configuration নিয়ে আসা হচ্ছে।
// এটি Jest-কে TypeScript (.ts) ফাইল বুঝতে এবং JavaScript-এ রূপান্তর করতে সাহায্য করে।
const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} */
module.exports = {
  // Jest কোন Environment-এ Test Run করবে তা নির্ধারণ করে।
  // Node.js Backend Project-এর জন্য "node" ব্যবহার করা হয়।
  // React বা Frontend Project-এর ক্ষেত্রে সাধারণত "jsdom" ব্যবহার করা হয়।
  testEnvironment: "node",

  // Jest-কে জানিয়ে দেয় যে Project-এ ts-jest Preset ব্যবহার করা হবে।
  // এর ফলে TypeScript ফাইলগুলো Jest সহজেই Compile এবং Execute করতে পারে।
  preset: "ts-jest",

  // Jest কোথায় Test File খুঁজবে তা নির্ধারণ করে।
  // এখানে শুধুমাত্র "tests" Folder-এর ভিতরের Test File গুলো Run হবে।
  roots: ["<rootDir>/tests"],

  // Jest কোন কোন ধরনের File চিনতে পারবে তা নির্ধারণ করে।
  // ts    → TypeScript File
  // js    → JavaScript File
  // json  → JSON File
  moduleFileExtensions: ["ts", "js", "json"],

  // Code Coverage Report তৈরি করার সময় কোন কোন File Include হবে তা নির্ধারণ করে।
  // এখানে src Folder-এর সকল TypeScript File-এর Coverage Report তৈরি হবে।
  collectCoverageFrom: ["src/**/*.ts"],

  // TypeScript File-কে কীভাবে Transform (Compile) করা হবে তা নির্ধারণ করে।
  // ts-jest-এর Default Transform Configuration এখানে ব্যবহার করা হয়েছে।
  transform: {
    ...tsJestTransformCfg,
  },
};
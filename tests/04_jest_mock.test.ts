// jest.mock()

import { buildStudentSummary } from "../src/04_jest_mock";
import { getLevelLabel } from "../src/04_level_label";

// jest.fn() ব্যবহার করা হয় যখন আপনি নিজে একটি Fake Function তৈরি করে Function-এর Parameter হিসেবে Pass করেন (যেমন createGatewayRefundMock)।
// jest.mock() ব্যবহার করা হয় যখন আপনার Test করা Function অন্য File থেকে কোনো 
// Function Import করে (যেমন getLevelLabel)। jest.mock() সেই Import করা F
// unction-কে Runtime-এ স্বয়ংক্রিয়ভাবে jest.fn()-এ রূপান্তর করে। 
// এরপর mockReturnValue(), mockReset(), toHaveBeenCalledWith() ইত্যাদি ব্যবহার করে 
// আপনি সেই Dependency-এর আচরণ পুরোপুরি নিয়ন্ত্রণ করতে পারেন। 
// এভাবে buildStudentSummary()-কে আলাদাভাবে Test করা যায়, 
// getLevelLabel()-এর আসল Implementation-এর উপর নির্ভর না করেই।

// jest.fn() -> you pass a function directly as an argument

// jest.mock() -> your file imports dependency from another file

jest.mock("../src/04_level_label.ts");

// vv imp -> this imported function becomes a jest mock at runtime

// cast it
const mockGetLevelLabel = getLevelLabel as jest.MockedFunction<
  typeof getLevelLabel
>;

// mockReturnedValue
//mockreset

describe("buildStudentSummary", () => {
  beforeEach(() => {
    // reset it before every test so each test starts clean
    mockGetLevelLabel.mockReset();
  });

  test("uses the mocked imported function and returns the mocked value", () => {
    // here we can decide what ur mocked function should return
    // even if ur actual functions is not returning that value
    // this test is not receiving expert as value from this mockGetLevelLabel

    mockGetLevelLabel.mockReturnValue("Beginner");

    const result = buildStudentSummary("Sangam", 40);

    expect(mockGetLevelLabel).toHaveBeenCalledTimes(1);

    expect(mockGetLevelLabel).toHaveBeenCalledWith(40);

    expect(result).toEqual({
      studentName: "Sangam",
      score: 40,
      level: "Beginner",
      message: `Sangam is currently at Beginner level`,
    });
  });
});

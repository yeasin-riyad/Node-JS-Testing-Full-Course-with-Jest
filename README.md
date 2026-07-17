# 🚀 Node.js Testing Practise with Jest

> A practical, beginner → intermediate guide to mastering **Node.js Testing** with **Jest** and **TypeScript**.

---

## 📖 About This Repository

Testing is one of the most important skills for every backend developer. Writing production-ready code is not enough—you also need to ensure that your code works correctly, remains maintainable, and is safe to refactor.

In this repo, you'll learn how to write **clean, reliable, and production-ready tests** for your Node.js applications using **Jest** with **TypeScript**.

This project follows a **practical-first** approach. Instead of only learning theory, you'll build your understanding by writing real test cases and exploring how Jest is used in modern backend applications.

Whether you're completely new to testing or already know the basics, this repo will help you build confidence in testing your backend code.

---

## 🎯 Repository Goals

By the end of this section, you will be able to:

- ✅ Set up Jest in a Node.js + TypeScript project
- ✅ Understand the mindset behind automated testing
- ✅ Write clean and maintainable unit tests
- ✅ Test edge cases confidently
- ✅ Mock dependencies using Jest
- ✅ Spy on existing methods
- ✅ Test asynchronous code
- ✅ Organize tests using Jest lifecycle hooks

---

# 🚀 What You Will Learn

## 🧪 1. Setting up Jest with Node.js & TypeScript

- Installing Jest
- Installing TypeScript support
- Configuring Jest
- Understanding Jest project structure

---

## ⚙️ 2. Understanding Testing

- What is testing?
- Why testing matters
- Manual vs Automated testing
- Test-driven mindset

---

## ✍️ 3. Writing Your First Test

- Creating your first test file
- Understanding `describe()`
- Understanding `test()`
- Understanding `expect()`

---

## 🎯 4. Matchers & Edge Cases

Learn the most commonly used Jest matchers:

- `toBe()`
- `toEqual()`
- `toThrow()`
- `toHaveLength()`
- `toContain()`
- `toBeNull()`
- `toBeTruthy()`
- `toBeFalsy()`

Also learn how to properly test:

- Boundary conditions
- Invalid inputs
- Edge cases

---

## 🎭 5. Mock Functions (`jest.fn()`)

Learn how to create fake functions for dependency injection.

Topics include:

- Creating mock functions
- Returning custom values
- Checking function calls
- Checking arguments
- Call count assertions

---

## 🧩 6. Module Mocking (`jest.mock()`)

Understand how to mock imported modules.

You'll learn:

- Why module mocking is useful
- How Jest replaces imported dependencies
- Mocking helper functions
- `mockReturnValue()`
- `mockReset()`

---

## 🔍 7. Spying on Real Functions (`jest.spyOn()`)

Learn how to observe real functions without replacing them.

Topics:

- Creating spies
- Watching method calls
- Verifying arguments
- Restoring original implementations
- Understanding the difference between spies and mocks

---

## ⏳ 8. Async Testing & Promises

Testing asynchronous code correctly.

Topics:

- `async/await`
- Promise testing
- `mockResolvedValue()`
- `mockRejectedValue()`
- `rejects.toThrow()`
- Mocking API requests
- Testing Fetch API

---

## 🔁 9. Jest Lifecycle Hooks

Learn how to prepare and clean up your tests.

Topics:

- `beforeEach()`
- `afterEach()`
- Resetting mocks
- Test isolation
- Keeping tests independent

---

# 📂 Project Structure

```text
.
├── src/
│   ├── 01_first_test.ts
│   ├── 02_matchers.ts
│   ├── 03_jest_fn.ts
│   ├── 04_jest_mock.ts
│   ├── 05_jest_spyon.ts
│   └── 06_async_fetch.ts
│
├── tests/
│   ├── 01_first_test.test.ts
│   ├── 02_matchers.test.ts
│   ├── 03_jest_fn.test.ts
│   ├── 04_jest_mock.test.ts
│   ├── 05_jest_spyon.test.ts
│   └── 06_async_fetch.test.ts
│
├── jest.config.js
├── package.json
└── tsconfig.json
```

---

# 🛠 Tech Stack

- Node.js
- TypeScript
- Jest

---

---

# 📚 Prerequisites


- Basic JavaScript
- Basic TypeScript
- Basic Node.js


---

---

# 📈 Repository Progress

- ✅ Jest Setup
- ✅ First Test
- ✅ Matchers
- ✅ Edge Cases
- ✅ jest.fn()
- ✅ jest.mock()
- ✅ jest.spyOn()
- ✅ Async Testing
- ✅ beforeEach()
- ✅ afterEach()


---

# ⭐ If You Find This Repository Helpful

Please consider giving it a **⭐ Star**.

---

## 👨‍💻 Author

**Yeasin Riyad**

Backend Developer passionate about building secure, scalable, and production-ready applications using modern JavaScript and TypeScript technologies.

Happy Testing! 🚀
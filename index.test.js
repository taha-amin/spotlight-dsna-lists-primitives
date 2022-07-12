const { reverseWords, titleCaseWords } = require(".");

describe("reverseWords", () => {
  it("should reverse the words of a sentence", () => {
    expect(reverseWords("alchemy rocks gold")).toBe("ymehcla skcor dlog");
  });
});

describe("title case words", () => {
  it("should uppercase the first letter in every word of a sentence", () => {
    expect(titleCaseWords("alchemy ROCKS goLD")).toBe("Alchemy Rocks Gold");
  });
});

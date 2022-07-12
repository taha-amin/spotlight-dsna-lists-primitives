const { reverseWords, titleCaseWords, oddishOrEvenish, at } = require(".");

describe("reverseWords", () => {
  it("should reverse the words of a sentence", () => {
    expect(reverseWords("alchemy rocks gold")).toBe("ymehcla skcor dlog");
  });
});

describe("title case words", () => {
  it.skip("should uppercase the first letter in every word of a sentence", () => {
    expect(titleCaseWords("alchemy ROCKS goLD")).toBe("Alchemy Rocks Gold");
  });
});

describe("oddishorEvenish", () => {
  it("should tell if the sum of the numbers are even or odd", () => {
    expect(oddishOrEvenish("121")).toBe("Evenish");
    expect(oddishOrEvenish("41")).toBe("Oddish");
  });
});

describe("at", () => {
  it("takes array and index and returns item at corresponding value", () => {
    expect(at[("a", "b", "c", "d", "e")]).toBe("b");
    expect(at[("a", "b", "c", "d", "e")]).toBe("d");
  });
});

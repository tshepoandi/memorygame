const { MemoryGame } = require("../src/algorithm.js");

describe("Tests for assigning items to blocks", () => {
  const memory = new MemoryGame();
  const arrayToTest = [];

  it("no two instances must be the same", () => {
    expect(memory.assignItemsToBlocks()).not.toBe(memory.assignItemsToBlocks());
  });
  it("in a 4 * 4 grid 1 must not repeat more than 4 times and not less", () => {
    expect(checkNumberOccurance(memory.assignItemsToBlocks(), 1)).toBe(4);
  });
  it("in a 4 * 4 grid 2 must not repeat more than 4 times and not less", () => {
    expect(checkNumberOccurance(memory.assignItemsToBlocks(), 2)).toBe(4);
  });
  it("in a 4 * 4 grid 3 must not repeat more than 4 times and not less", () => {
    expect(checkNumberOccurance(memory.assignItemsToBlocks(), 3)).toBe(4);
  });
  it("in a 4 * 4 grid 4 must not repeat more than 4 times and not less", () => {
    expect(checkNumberOccurance(memory.assignItemsToBlocks(), 4)).toBe(4);
  });
});

function checkNumberOccurance(object, subject) {
  const objectValues = Object.values(object);
  let count = 0;
  for (let i = 0; i < objectValues.length; i++) {
    if (objectValues[i] === subject) {
      count++;
    }
  }
  return count;
}

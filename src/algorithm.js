class MemoryGame {
  constructor() {
    this.items = [1, 2, 3, 4];
    this.blocks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  }
  assignItemsToBlocks() {
    let blockPairs = {};
    let j = 0;
    this.blocks = this.blocks.sort((a, b) => 0.5 - Math.random());
    for (let i = 0; i < this.blocks.length; i++) {
      blockPairs[this.blocks[i]] = this.items[j];
      j++;
      if (j === 4) {
        j = 0;
      }
    }
    return blockPairs;
  }
}

module.exports = {
  MemoryGame,
};

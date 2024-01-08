const jsdom = require('jsdom')
const { JSDOM } = jsdom
const fs = require('fs')
const window = new JSDOM(fs.readFileSync('index.html', 'utf-8')).window
const document = window.document

global.window = window
global.document = document

let { container, cardFlips, timer } = require('../src/variables.js')

let { submitGridSize } = require('../src/index.js')

describe('Tests for grid size feature', () => {
  it('should generate 6 divs when user submits 2*3 grid option', () => {
    document.getElementById('grids').value = '2*3'
    submitGridSize.click()
    expect(container.children.length).toBe(6)
  })
  it('should generate 12 divs when user submits 4*3 grid option', () => {
    document.getElementById('grids').value = '4*3'
    submitGridSize.click()
    expect(container.children.length).toBe(12)
  })
})

describe('Tests for the counted flips feature', () => {
  it('Should count every click', () => {
    document.getElementById('grids').value = '2*3'
    submitGridSize.click()

    container.children[0].click()
    container.children[1].click()
    expect(cardFlips.innerHTML).toBe("You've had 2 flips so far.")
    container.children[2].click()
    container.children[3].click()
    expect(cardFlips.innerHTML).toBe("You've had 4 flips so far.")
  })
})

describe('tests for timer feature', () => {
  it('timer should be 1', () => {
    document.getElementById('grids').value = '2*3'
    submitGridSize.click()
    setTimeout(() => {
      expect(timer.innerHTML).toBe(`00:00:01`)
    }, 1000)
  })

  it('timer should be at 5 seconds when 5 second passes after 4*3 grid is selected', () => {
    document.getElementById('grids').value = '4*3'
    submitGridSize.click()
    setTimeout(() => {
      expect(timer.innerHTML).toBe(`00:00:05`)
    }, 5000)
  })
})

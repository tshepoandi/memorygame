const container = document.getElementById('container')
const gridOptions = document.getElementById('grids')
const userResult = document.getElementById('userResult')
const assignNumbersToColors = {
  0: 'yellow',
  1: 'red',
  2: 'blue',
  3: 'green',
  4: 'purple',
  5: 'black',
}
const cardFlips = document.getElementById('cardFlips')
const timer = document.getElementById('timer')
module.exports = {
  timer,
  container,
  gridOptions,
  assignNumbersToColors,
  userResult,
  cardFlips,
}

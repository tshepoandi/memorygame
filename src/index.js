let {
    userResult,
    container,
    gridOptions,
    assignNumbersToColors,
    cardFlips,
    timer,
} = require('./variables.js')

const { shuffle } = require('./helperFunctions.js')
const submitGridSize = document.getElementById('submitGridSize')

let gridLength
let childArray = []
let matchedBlocks = []
let countFlips = 0
let userResultStatement = ''

seconds = 0
let stop = true
let totalSeconds = 0

function countTimer() {
    if (stop === true) {
        return ' '
    }
    ++totalSeconds
    let hour = Math.floor(totalSeconds / 3600)
    let minute = Math.floor((totalSeconds - hour * 3600) / 60)
    let seconds = totalSeconds - (hour * 3600 + minute * 60)
    if (hour < 10) hour = '0' + hour
    if (minute < 10) minute = '0' + minute
    if (seconds < 10) seconds = '0' + seconds
    document.getElementById('timer').innerHTML =
        hour + ':' + minute + ':' + seconds
}
submitGridSize.addEventListener('click', () => {
    cardFlips.innerHTML = ''
    stop = false
    totalSeconds = totalSeconds - totalSeconds
    timer.innerHTML = ''
    container.style.display = 'block'
    userResult.innerHTML = ''
    matchedBlocks = []
    container.disabled = false
    const blockArray = []
    const rows = Number(gridOptions.value.split('*')[0])
    const columns = Number(gridOptions.value.split('*')[1])

    countFlips = 0

    for (let i = 0; i < (rows * columns) / 2; i++) {
        blockArray.push(i)
        blockArray.push(i)
    }

    const shuffledValues = shuffle(blockArray)
    container.innerHTML = ''
    shuffledValues.forEach((value) => {
        container.innerHTML += `<div id="box_${value}">
    <p class="contents"></p>
    </div>`
    })
    timer.style.color = 'black'

    gridLength = blockArray.length
    changeToColor()
})

const changeToColor = () => {
    for (let i = 0; i < container.children.length; i++) {
        const child = container.children[i]
        const numberForColorAssignment = child.id.slice(child.id.indexOf('_') + 1)

        child.onclick = () => {
            if (timer.innerHTML === '') setInterval(countTimer, 1000)
            if (
                matchedBlocks.includes(child) === false &&
                childArray.includes(child) === false
            ) {
                childArray.push(child)
                child.disabled = true
                countFlips++
                cardFlips.innerHTML = `You've had ${countFlips} flips so far.`

                child.style =
                    'background-color:' + assignNumbersToColors[numberForColorAssignment]

                if (childArray.length === 2) {
                    if (
                        childArray[0].style.backgroundColor !==
                        childArray[1].style.backgroundColor
                    ) {
                        setTimeout(() => {
                            childArray[0].style = 'background-color: white'
                            childArray[1].style = 'background-color: white'
                            childArray = []
                        }, 300)
                    }
                    if (
                        childArray[0].style.backgroundColor ===
                        childArray[1].style.backgroundColor
                    ) {
                        matchedBlocks.push(childArray[0])
                        matchedBlocks.push(childArray[1])
                        childArray = []
                    }
                    if (matchedBlocks.length === gridLength) {
                        stop = true
                        cardFlips.innerHTML = ''
                        userResultStatement = `<br><div style="color:Red"> with ${countFlips} card Flips </div>`
                        userResult.innerHTML = `Congratulations! You have successfully won! ${userResultStatement} 
            and within ${timer.innerHTML}`
                    }
                }
            }
        }
    }
}

module.exports = {
    gridLength,
    childArray,
    matchedBlocks,
    changeToColor,
    userResultStatement,
    submitGridSize,
    countFlips,
}
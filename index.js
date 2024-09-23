const inversor = (arr) => {
  return arr.reverse()
}
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
readline.question('Input a array: ', arr => {
  if (arr.length >= 2 && arr[0] === '[' && arr[arr.length -1] === ']') {
    const strIn = arr.slice(1,-1).split(",")
    console.log(strIn)
    const response = inversor(strIn)
    console.log(`The origina array is ${arr}. The reverse array is [${response}].`)
    readline.close()
  } else {
    console.log('The input is null')
    readline.close()
  }
})
module.exports = inversor
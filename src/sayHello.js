const sayHello = () => {
  console.log('Hello from node!')
}

function sum (num1, num2) {
  return num1 + num2
}

const sumWithArrowFun = (num1, num2) => num1+num2

sayHello()

console.log(sum(2, 5))

console.log(sumWithArrowFun(2, 2))
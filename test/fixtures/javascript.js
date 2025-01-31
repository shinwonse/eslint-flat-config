// Modern JavaScript features
var oldVar = 'should use const'
const template = 'should use' + ' template literals'

// Arrow functions
function traditional() {
  return true
}

// Object shorthand
const name = 'test'
const age = 25

const person = {
  name: name,
  age: age,
}

// Promise handling
const promise = new Promise((resolve) => resolve('test'))
promise.then(function(result) {
  console.log(result)
})

// Array methods
const array = [1, 2, 3]
array.forEach(function(item) {
  console.log(item)
})

// Optional chaining and nullish coalescing
const obj = { nested: { value: null } }
const value = obj && obj.nested && obj.nested.value
const fallback = value || 'default'

// Unused variables and parameters
function unusedParams(required, unused) {
  const notUsed = 'this is not used'
  return required
}

// Console usage
console.log('development log')

// Multiple empty lines


// Spacing and formatting issues
function spacing(){return true} 
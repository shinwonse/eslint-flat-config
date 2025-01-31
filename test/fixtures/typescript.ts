// Type-related tests
const anyValue: any = 'test'
let inferredType = 'should use explicit type'

// Function tests
async function testFunction() {
  return Promise.resolve()
}

const arrowFunction = () => {
  return 'should use concise body'
}

// Promise handling
const promise = new Promise(resolve => resolve('test'))
promise.then(result => console.log(result))

// Optional chaining and nullish coalescing
const obj = { nested: { value: null } }
const value = obj && obj.nested && obj.nested.value
const fallback = value || 'default'

// Unused variables and parameters
function unusedParams(required: string, _unused: string) {
  const unused = 'this is not used'
  return required
}

// Boolean expressions
if (anyValue) {
  console.log('should use strict boolean expressions')
}

// Interface method style
interface Test {
  method(): void
  property: string
}

// Export/Import style
export type { Test }
import type { Feature } from '@wonse/eslint-common' 
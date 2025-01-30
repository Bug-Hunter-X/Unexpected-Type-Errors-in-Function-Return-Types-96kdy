function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

//Improved type safety
//To mitigate this issue, ensure that function return types are always consistent throughout the code.
//Conduct thorough testing, and if necessary, add runtime checks to prevent unexpected type issues.
//Consider using more specific types or type guards if the return type depends on various conditions.

let result = add(5, 3); // result is 8
result = subtract(result, 2); // result is 6

//Additional check for safety
if (typeof result === 'number') {
  console.log(result); // Type safety check
} else {
  console.error('Unexpected type for result');
}

//Using type guards and generics for more robust type checking
function operate<T>(a: T, b: T, operation: (x: T, y: T) => T): T {
  return operation(a, b);
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

let numResult = operate<number>(5, 3, add);

if (isNumber(numResult)) {
  console.log(numResult);
}

let strResult = operate<string>('hello', ' world', (x, y) => x + y);
console.log(strResult);
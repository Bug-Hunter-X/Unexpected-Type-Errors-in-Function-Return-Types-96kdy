function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // result is 8
result = subtract(result, 2); // result is 6

//Uncommon error: Type safety for function return values
//The return type of add and subtract is explicitly defined as number
//However, TypeScript might not always catch errors related to unexpected return types in these functions.
//For example, if a function internally changes its return type in a conditional or loop
//TypeScript compiler might not detect it, leading to runtime errors. 
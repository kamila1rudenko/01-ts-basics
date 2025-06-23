export {};
function getFirstElement<T>(arr: T[]): T | undefined {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
}
const numResult = getFirstElement<number>([1, 2, 3]);
console.log(`First number: ${numResult}, Type: ${typeof numResult}`);
const stringResult = getFirstElement<string>(["a", "b", "c"]);
console.log(`First string: ${stringResult}, Type: ${typeof stringResult}`);
const booleanResult = getFirstElement<boolean>([true, false, true]);
console.log(`First boolean: ${booleanResult}, Type: ${typeof booleanResult}`);
const mixedTypeArray = [1, "two", true];
const mixedResult = getFirstElement<number | string | boolean>(mixedTypeArray);
console.log(`First mixed: ${mixedResult}, Type: ${typeof mixedResult}`);
const emptyResult = getFirstElement<string>([]);
console.log(
  `First el of empty arr: ${emptyResult}, Type: ${typeof emptyResult}`
);

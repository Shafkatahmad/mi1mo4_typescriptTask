// Filtering even numbers
const filterEvenNumbers = (numOfArr: number[]) => {
  const evenNumArray: number[] = numOfArr.filter((number) => number % 2 === 0);
  // console.log(evenNumArray);
  return evenNumArray;
};

filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// Reverse a string
const reverseString = (input: string) => {
  let newString: string = "";

  for (let i = input.length - 1; i >= 0; i--) {
    newString = newString + input[i];
  }
  // console.log(newString);

  return newString;
};

reverseString("typescript");

// check type for string or number
type StringOrNumber = string | number;

const checkType = (input: StringOrNumber) => {
  if (typeof input === "string") return "String";
  else return "Number";
};

checkType(42);
// console.log(checkType(42));

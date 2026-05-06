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

// return the value of a key of that object
type User = {
  id: number;
  name: string;
  age: number;
};

const getProperty = <T extends User, K extends keyof T>(user: T, key: K) => {
  return user[key];
};

const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");
// console.log(getProperty(user, "name"));

// add a default value to a key of an object and toggle in every function call
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

type BookWithRead = Book & { isRead?: boolean };

const toggleReadStatus = (inputBook: BookWithRead, isRead: boolean = true) => {
  return {
    ...inputBook,
    isRead: inputBook.isRead !== undefined ? !inputBook.isRead : true,
  };
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
  isRead: true,
};
toggleReadStatus(myBook);
// console.log(toggleReadStatus(myBook));

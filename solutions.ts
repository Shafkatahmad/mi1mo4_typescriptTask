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

// Class
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
student.getDetails();
// console.log(student.getDetails());

// return intersection function
const getIntersection = (firstArray: number[], secondArray: number[]) => {
  let intersectionArray: number[] = [];

  for (let i = 0; i < firstArray.length; i++) {
    const value = firstArray[i];
    if (value === undefined) continue;

    for (let j = 0; j < secondArray.length; j++) {
      if (value === secondArray[j]) {
        intersectionArray.push(value);
        break;
      }
    }
  }
  return intersectionArray;
};

console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

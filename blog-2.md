# How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects?

`Inheritance` let's us to create a new sub-class based on a existing parent class. By this, the sub-class can have all the members from it's parent class and can have it's unique properties or methods. With that, we have **one scource of truth** meaning, if we have to change type of a variable, we can just change in the parent class and sub-class will inherite that automatically. It keeps a **smaller file size**. Also with inheritance, we don't need to rewrite the whole new class just to add a new member into the class, which helps us **not to repeat** simillar type code.

```ts
class Person {
  name: string; //common properties
  age: number; //common properties
  address: string; //common properties

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  //common properties
  getSleep(numOfHours: number) {
    console.log(`${this.name} ${numOfHours} ghonta ghumai`);
  }
}

class Student extends Person {}
class Teacher extends Person {
  designation: string; //extra property

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address); // super --> constructor of parent class

    this.designation = designation;
  }

  takesClass(numOfClass: number) {
    console.log(`${this.name} ${numOfClass} ghonta class ney`);
  }
}

const student1 = new Student("Mr. Fakibaz", 18, "bangaldesh");

student1.getSleep(10);

const teacher1 = new Teacher(
  "Mr. smart teacher",
  25,
  "Bangaldesh",
  "senior teacher",
);

teacher1.takesClass(4);
```

`Polymorphism` let's us to use different classes to be treated as an instance of a parent class or interface. Which allows the same method to behave differently depending on the variable it is calling with the same function. It gives us **flexibility** and we can avoide nested `if/else` blocks. Since we can rewrite the same method in differnet logics, we don't need to make a new class for a simple change and **don't repeat youselfs**

```ts
class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.height * this.width;
  }
}

const getArea = (param: Shape) => {
  console.log(param.getArea());
};

const shape1 = new Shape();
const shape2 = new Circle(10);
const shape3 = new Rectangle(10, 20);

getArea(shape3);
```

`Abstraction` let's us **reduce complexity**. It also **enforse structure** within the sub-classes by ensuring **type safty** and leave the complex logic to be implemented in the sub-classes.

```ts
abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

// implementation
class ShafPlayer extends MediaPlayer {
  play() {
    console.log(`Playing Music`);
  }
  pause() {
    console.log(`Music is Paused`);
  }
  stop() {
    console.log(`Music is stoped`);
  }
}

const shafPlayer = new ShafPlayer();
shafPlayer.play();
```

`Encapsulation` lets us to **control access** ensuring private data to be modified in the desired method and ensuring **type safty** by not letting external scource setting invalid values. Which **reduce complexity** in large-scale projects.

```ts
class BankAccount {
  readonly userId: number;
  userName: string;
  protected _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  private addBalance(balance: number) {
    this._userBalance = this._userBalance + balance;
  }

  getHiddenAddBalanceMethod(balance: number) {
    this.addBalance(balance);
  }
}

class StudentBankAccount extends BankAccount {
  test() {
    this._userBalance;
  }
}

const mezbaBhaiAccount = new BankAccount(111, "Mezba", 20);
mezbaBhaiAccount.getHiddenAddBalanceMethod(100);
console.log(mezbaBhaiAccount);
```

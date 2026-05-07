# Why type `any` is considered as safety hole and type `unknown` is considered as safer for handling unpredictable data in Typescript?

As we know Typescript checks for type errors in compile time, defining a variable as `any` makes the typescript compiler stop checking for type error in that variable. As a result I can do any operation on that variable or call any method on that variable and the compiler don't check if that operation is valid or that method exist on that class. Then the code gets compiled and the frontend will render an undefined type or worst can crash which gives a bad user experience.

On the other hand, defining a variable as `unknown` makes the typescript compiler think that this variable can be anything but it's exact type is currently not known. So the compiler knows that the value can be anything but `any` and is currently not specified. Like `any`, I can't do operation or call functions on an `unknown` type variable without first checking it's type.

Now to use that variable, I first have to specify the type by type narrowing that variable with `if(typeof variable === 'number')`. Type Narrowing makes sure that the operation or called function is valid and the code runs without throwing any error or undefined value and the frontend UI doesn't break.

```ts
let number: unknown = 222;

if (typeof number === "number") {
  console.log(number);
}
```

# How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects?

`Inheritance` let's us to create a new sub-class based on a existing parent class. By this, the sub-class can have all the members from it's parent class and can have it's unique properties or methods. With that, we have **one scource of truth** meaning, if we have to change type of a variable, we can just change in the parent class and sub-class will inherite that automatically. It keeps a **smaller file size**. Also with inheritance, we don't need to rewrite the whole new class just to add a new member into the class, which helps us **not to repeat** simillar type code.

`Polymorphism` let's us to use different classes to be treated as an instance of a parent class or interface. Which allows the same method to behave differently depending on the variable it is calling with the same function. It gives us **flexibility** and we can avoide nested `if/else` blocks. Since we can rewrite the same method in differnet logics, we don't need to make a new class for a simple change and **don't repeat youselfs**

`Abstraction` let's us **reduce complexity**. It also **enforse structure** within the sub-classes by ensuring **type safty** and leave the complex logic to be implemented in the sub-classes.

`Encapsulation` lets us to **control access** ensuring private data to be modified in the desired method and ensuring **type safty** by not letting external scource setting invalid values. Which **reduce complexity** in large-scale projects.

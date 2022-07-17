// object

// const object = {
//     key: "fsafdsafasfd"
// }

// console.log(object);

// Class

// class Employee {
//     firstname = "fasfa"
//     lastname = "Fsafsadf"
//     fullName() {
//         return this.firstname + " " + this.lastname
//     }
// }

// const emp = new Employee;

// console.log(emp.fullName())

// Constructor

// class Employee {
//     constructor(firstname,lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     fullName() {
//         return this.firstname + " " + this.lastname
//     }
// }

// const emp = new Employee("Fasfasf","fdsafsafd");

// console.log(emp.fullName())


// class ProductList {
//     products = [
//         {
//             image: "Fsadfsaf",
//             title: "Fasfasfd",
//             description: "fdsafadsf"
//         }, {
//             image: "Fsadfsaf",
//             title: "Fasfasfd",
//             description: "fdsafadsf"
//         }, {
//             image: "Fsadfsaf",
//             title: "Fasfasfd",
//             description: "fdsafadsf"
//         }, {
//             image: "Fsadfsaf",
//             title: "Fasfasfd",
//             description: "fdsafadsf"
//         },
//     ]

//     render() {
//         for (const product of this.products) {
//             const prod =  new Product(product)
//             prod.render()
//         }
//     }

// }

// class Product {
//     constructor(product) {
//         this.product = product;
//     }
//     render() {
//         console.log(this.product);
//     }
// }

// const productList = new ProductList();

// productList.render();

// inheritance

class Parent {    
    #car = "BMW"
    // constructor(car) {
    //     this.car = car;
    // }

    run() {
        // console.log("super class");
        console.log(this.car);
    }
}

class Child extends Parent {

    constructor(cars){
        super()
        this.cars = cars
    }
    run() {
        // super.run()
        console.log(this.car);
    }
}

const child = new Child("TATA")
child.run()






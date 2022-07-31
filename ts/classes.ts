// import { details } from './namespaces';
// Class
// class Employee {
//     protected firstName: string = "Fsafsdfa"
//     protected lastname:string =  "asfdasdf"

//     protected details() {
//         return `${this.firstName} ${this.lastname}`;
//     }
// }

// class Department extends Employee {
//     details() {
//         return `${this.firstName} ${this.lastname}`;
//     }
// }

// const dept = new Department();
// console.log(dept.details());


import  {firstName as first} from "./modules";

import {* as Emp} from "./namespaces";

console.log(Emp.details());




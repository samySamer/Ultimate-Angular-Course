//Primitives
let n: number = 10;
let s: string = "Samy";
let b: boolean = true;

let x = 5;
// Type Inference:

// x = "samy";

//we can Make it work like this :
let z: number | string = 5;
z = "samy";

//Type aliasing:
type Person = {
  name: string;
  age: number;
};

//Array and objects:

let names: string[];
names = ["samy", "hamada", "hamood"];

let person: Person;

let people: Person[];
people = [
  {
    name: "hamada",
    age: 25,
  },
  {
    name: "samy",
    age: 15,
  },
];
//Functions & Types:
function minus(a: number, b: number): number {
  return a + b;
}
function print_output(value: any): void {
  console.log(value);
}

//Generics:

function insertAtBeginning<T>(arr: T[], val: T) {
  const updatedArr = [val, ...arr];
  return updatedArr;
}

const IntArr: number[] = [1, 2, 3, 4];
let updateVal: number = 5;
const updatedArr = insertAtBeginning(IntArr, updateVal);
let Stringat: string[] = ["s", "a", "b"];
let stringVal: string = "hmm";
let updatedString = insertAtBeginning(Stringat, stringVal);

//Classes:
class Student {
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    private courses: string[]
  ) {}

  enroll(course: string) {
    this.courses.push(course);
  }
  printCourses() {
    return this.courses.slice();
  }
}
let student = new Student("samy", "samer", 21, ["Angular"]);
student.enroll("Html");
student.printCourses();
//student courses=> Angular & HTML

//Interfaces:
interface Human {
  firstName: string;
  lastName: string;
  helloFun: () => void;
}

let samy: Human;
samy = {
  firstName: "samsom",
  lastName: "samer",
  helloFun() {
    console.log("Hello Samsoom!!");
  },
};

class Teacher implements Human {
  firstName: string;
  lastName: string;
  constructor(first: string, last: string) {
    this.firstName = first;
    this.lastName = last;
  }
  helloFun() {
    console.log(`Hello ${this.firstName}`);
  }
}

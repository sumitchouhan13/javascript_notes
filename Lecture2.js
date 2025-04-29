let obj1 = { name: "object1", profession: "Software Engineer" };

// Type: Person(name, profession)
//Any function that defines a type, is referred as a constructor function

function Person(name, profession) {
  //1. a new empty object is created and assigned to "this" inside the function
  //this = {}

  //2. the function body executes and can modify "this"
  this.name = name;
  this.profession = profession;

  //3. The implicit "this" value is returned, if no explicit non-primitive value is returned
  //return this;
}

let obj2 = new Person("OBJ2", "SE");
console.log(obj2);

//Implicit return

let thisReference;

function Person1(name, profession) {
  this.name = name;
  this.profession = profession;

  thisReference = this;
}

let obj3 = new Person("obj3", "se");
console.log("Are you the same??", thisReference === obj3);

//Explicit Return

function Person3(name, profession) {
  this.name = name;
  this.profession = profession;

  //primitive
  //non-primitive: [], {}, () => {}
  return {
    name: "obj3",
  };
}

let obj4 = new Person("obj4", "SE");
console.log(obj4.name); //obj3

//Implicit return

let thisReference1;
function Person4(name, profession) {
  this.name = name;
  this.profession = profession;

  thisReference1 = this;

  return 2;
}

let obj5 = new Person("obj5", "SE");
console.log(thisReference1 === obj5); //true (this implies that "this" is always returned even in the case of implicit return)

//Prototype and constructor
function Person5(name, profession) {
  this.name = name;
  this.profession = profession;
}

Person.prototype.sayName = function () {
  console.log(this.name);
};

let obj6 = new Person("obj6", "SE");
obj6.sayName();

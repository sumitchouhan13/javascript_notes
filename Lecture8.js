//Prototype method

class YoutubeChannel {
  constructor(name) {
    this.name = name;
    this.subscribers = 0;
  }
}

var self = this;

YoutubeChannel.prototype.addSubscriber = function () {
  console.log(this === myChannel); //Here the execution context is of myChannel but in the case of arrow functions the execution context is of global
  this.subscribers++;
};

const myChannel = new YoutubeChannel("Devtools Tech");
myChannel.addSubscriber();
console.log(myChannel.subscribers);

//Constructor function

// When trying to create the constructor functions, don't use arrow functions (The regular functions has a property named as prototype which has constructor in it,
// which helps to create instances of the functions whereas the arrow functions doesn't have any property named as property in it)
const YoutubeChannelSecond = function (name) {
  this.name = name;
  this.subscribers = 0;
};

const myChannelSecond = new YoutubeChannelSecond("DevTools tech");
console.log(myChannelSecond);

//Methods in object literals
const YoutubeChannelThird = {
  name: "Devtools tech",
  videoCount: 10,
  subscribers: 0,
  subscribe: function () {
    //Here if arrow functions had been used in case of regular functions then this would have pointed to the execution context outside of
    //this object which is global object
    this.subscribers++;
  },
  unsubscribe: function () {
    this.subscribers--;
  },
  addVideo: function () {
    this.videoCount++;
  },
};

//Call, bind and apply
const obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};

var greet = function () {
  const reply = [
    this.animal,
    "typically sleeps between",
    this.sleepDuration.join(""),
  ];
  console.log(reply);
};

greet.call(obj);

//Arguments object (Arrow functions doesn't have arguments object)
function adder() {
  const args = [...arguments];
  console.log(args);
  return args.reduce(function (acc, value) {
    return acc + value;
  }, 0);
}

console.log(adder(1, 2, 3, 4));

//Events handler
//Usually when we bind any regular function with event handlers then browser adds that element's context with event handler but this is not the case for arrow functions
//Then to use arrow functions we can use the event object to target that particular element

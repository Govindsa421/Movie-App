// method 1 of HOF
function abcd(val) {}
abcd(function () {});

//method 2 of HOF
function abcd() {
  return function () {};
}
abcd();

// constructor
function saachaOfBiscuit() {
  this.width = 12;
  this.height = 22;
  this.color = "brown";
  this.taste = "sweety";
}

var biscuit1 = new saachaOfBiscuit();
var biscuit2 = new saachaOfBiscuit();
var biscuit3 = new saachaOfBiscuit();

//first class function

var abcd = function () {};
setTimeout(function () {});

//new keyword

function abcd() {
  this.name = "govind";
}
new abcd();
{
  name = "govind";
}

//iife - > immediately invoked function expression

var ans = (function () {
  let privateValue = 10;
  return {
    getter: function () {
      console.log(privateValue);
    },
    setter: function (val) {
      privateValue = val;
    },
  };
})();

//Prototypal Inheritance

var human = {
  canFly: false,
  canEat: true,
  canWalk: true,
};

var govindStudents = {
  canMakeAnimationWebsite: true,
  canMakeOttWebsite: true,
};

govindStudents.__prototype__ = human;

//call apply bind

//call

function abcd(val1, val2, val3) {
  console.log(this, val1, val2, val3);
}
var obj = { age: 25 };
abcd.call(obj, 1, 2, 3);

//apply

function abcd(val1, val2, val3) {
  console.log(this, val1, val2, val3);
}
var obj = { age: 25 };
abcd.apply(obj, [1, 2, 3]);

//bind

function abcd(val1, val2, val3) {
  console.log(this, val1, val2, val3);
}
var obj = { age: 25 };
var bindFunction = abcd.bind(obj, [1, 2, 3]);
bindFunction();



chanellege :
let g = n = `hello ${n}`
let h = g("Bob")
console.log(g("alias")) 

// closure ex-1

var sum = function(a){
  console.log(a,"hello")
  var c=3
  return function(b){
     return a+b+c
    }
}

var store = sum(2)
console.log(store(4))

// closure ex-2

var sum = function(a,b,c){
  return {
    getSumTwo: function(){
      return a+b
    },
    getSumThree:function(){
      return a+b+c
    }
  }
}

var store = sum(2,4,5)
console.log(store.getSumTwo())
console.log(store.getSumThree())
#! /usr/bin/env node
const chalk = require("chalk");
const readlineSync = require("readline-sync");
const uuid = require("uuid");

const error = chalk.bold.red;
const warning = chalk.keyword("orange");
const success = chalk.keyword("green");
const questionColor = chalk.keyword("yellow");

let user = {};
var userName = readlineSync.question("What's your name ?   ");
user.name = userName;
user.id = uuid.v4();
console.log("Welcome " + userName + " to ---- Do you know Mobashir ? ----");

let score = 0;

let highScores = [];

function play(question, options, answer) {
  console.log(questionColor(question));
  let idx = readlineSync.keyInSelect(options, null, {
    cancel: false,
  });
  var userAnswer = options[idx];
  //   console.log(userAnswer);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(success("Great! You are right! 😎"));
    console.log("-------👇👇👇👇------");
    score = score + 1;
    console.log("Curent score --> ", score);
  } else {
    console.log(error("Not quite right 😑"));
    console.log("-------👇👇👇👇------");
    console.log("Curent score --> ", score);
  }
}

const questions = [
  {
    question: "How old is JavaScript? ",
    options: ["1991", "1992", "1995"],
    answer: "1995",
  },
  {
    question: "Who has written JavaScript? ",
    options: ["Guido Van Rossum", "Dennis Rirchie", "Brendan Eich"],
    answer: "Brendan Eich",
  },
  {
    question:
      "Which array method in used to find index of particular element ? ",
    options: ["findIndex()", "indexOf()", "getIndex()"],
    answer: "indexOf()",
  },
  {
    question:
      'What you\'ll use in order to make a function which when called third time prints something ("Hello World") ',
    options: ["Closure", "Prototypal Inheritance", "callback"],
    answer: "Closure",
  },
  {
    question: "Is setTimeout() a javascript feauture or browser feature ? ",
    options: ["Javascript", "Browser"],
    answer: "Browser",
  },
  {
    question: "Which string method is used change the string to array? ",
    options: ["toArray()", "toArr()", "split()"],
    answer: "split()",
  },
  {
    question: 'Guess the output : "1" === 1? ',
    options: ["true", "false"],
    answer: "false",
  },
  {
    question:
      "Where does the __proto__ propety link to in the prototype of the [Object] object in javascript ? ",
    options: ["Array [object]", "null", "undefined", "Object [object]"],
    answer: "null",
  },
  {
    question: "Do arrow functions have their own arguments object ? ",
    options: ["Yes", "No"],
    answer: "No",
  },
];

for (let i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].options, questions[i].answer);
}

console.log("-------------------------");
console.log("You made it, you scored : ", score, "out of ", questions.length);

// highScores.push(user);
// console.log(highScores);

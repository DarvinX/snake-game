/*
Author: Tamal Hansda

Description: This script will draw a snake game board and its control buttons.
             The inputs will be taken from the keyboard inputs and also from
             the drawn control buttons(for mobile devices).

Script Flow: Document Object Loaded >
             Draw the snake, board and control buttons >
             Listen for user input to trigger the game >
             update the position of the snake body >
             Draw the snake body
*/

//Global variables
const boardDim = 80; //initial 8x8 board
const unitDim = 20 / boardDim;
const initBodyLength = 10;
const updatePositionDeplay = 150;
const refreshRate = 24;
const boardBackgroundColor = "blue";
const snakeBodyColor = "red";
let snakeBody = [];
var headPosition = 0;
var headPositionChange = 1;
var headMoveAmount = boardDim;
var shouldMove = false;

//Snake object to handle snake properties
class Snake {
  constructor(length = 8, color = "red", rate = 1, headColor = "green", board) {
    this._length = length; // Initial length of the snake
    this._color = color; // Initial color of the snake
    this._GrowthRate = rate; // Initial growth rate
    this._headColor = headColor;
    this._board = board;
    // this._snakeHead = 
    // this._snakeBody = 
  }

  Grow() {
    // Grow the length of the snake
    this._length += this._GrowthRate;
  }

  startMoving(){
    this._snakeHead[1] += 1;
    this._snakeBody
  }

  moveUp(){
    
  }

  get Color() {
    return this._color;
  }
  set Color(color) {
    this._color = color;
  }
  get Length() {
    return this._color;
  }
  set Length(color) {
    this._color = color;
  }

  get GrowthRate() {
    return this._GrowthRate;
  }
  set GrowthRate(rate) {
    this._GrowthRate = rate;
  }
}

class Board {
  constructor(
    height = 80,
    width = 80,
    backgroundColor = "blue",
    borderColor = "black",
    resolution = "1",
    resUnit = "vw"
  ) {
    this._height = height;
    this._width = width;
    this._backgroundColor = backgroundColor;
    this._borderColor = borderColor;
    this._resolution = resolution;
    this._resUnit = resUnit;
  }

  get HTML() {
    //returns the html of the complete board
    let board = document.createElement("div");
    board.id = "board";
    board.className = "game-board";
    // style the board
    board.style.height = this._height * this._resolution + this._resUnit;
    board.style.width = this._width * this._resolution + this._resUnit;
    board.style.border =
      "solid " + this._borderColor + " " + this._resolution + this._resUnit;

    for (let i = 0; i < this._height*this._width; i++) {
        let child = document.createElement("div");
        child.style.height = this._resolution + this._resUnit;
        child.style.width = this._resolution + this._resUnit;
        child.style.backgroundColor = this._backgroundColor;
        child.id = i;
        board.appendChild(child);
    }

    return board;
  }

  get height() {
    return this._height;
  }

  set height(height) {
    this._height = height;
  }

  get width() {
    return this._width;
  }

  set width(width) {
    this._width = width;
  }

  get backgroundColor() {
    return this._backgroundColor;
  }

  set backgroundColor(color) {
    this._backgroundColor = color;
  }
}

class Game {
  constructor(board =new Board(), snake =new Snake()) {
    this._snake = snake;
    this._board = board;
    document.getElementById("app").innerHTML = this._board.HTML.outerHTML;
  }
  start() {
    this._snake.startMoving();
  }
  pause() {}
  gameOver() {}
}
game = new Game;
/*
document.addEventListener("DOMContentLoaded", function () {
  // Draw the game board
  for (let i = 0; i < boardDim * boardDim; i++) {
    let unit = document.createElement("i");
    unit.id = i;
    unit.style.height = unitDim + "rem";
    unit.style.width = unitDim + "rem";
    document.querySelector(".game-board").appendChild(unit);
  }

  // Draw the snake every 250 ms
  let drawSnake = setInterval(() => {
    if (!shouldMove) {
      return;
    }
    console.log("snake drawn");
    for (let cell of snakeBody) {
      try {
        document.getElementById(cell).style.background = snakeBodyColor;
      } catch {}
    }
    // Check if it's special condition
    checkOver();
  }, 1000 / refreshRate);

  // Update snake position
  let updateSnakePosition = setInterval(() => {
    console.log("first", snakeBody);
    if (!shouldMove) {
      return;
    }
    console.log("snake position updated");
    if (snakeBody.length == 0) {
      for (let i = 0; i < initBodyLength; i++) {
        snakeBody.push(i);
        headPosition = i;
      }
    }
    if (shouldMove) {
      console.log("shouldMove:");
      headPosition += headPositionChange;
      document.getElementById(
        snakeBody.shift()
      ).style.background = boardBackgroundColor;
      snakeBody.push(headPosition);
      console.log("head position", headPosition);
      console.log("should be pushed here", snakeBody);
    }
  }, updatePositionDeplay);

  window.addEventListener("keydown", function (key) {
    if (key.defaultPrevented) {
      return;
    }
    console.log("key detected", key.code);

    switch (key.code) {
      case "KeyW":
      case "ArrowUp":
        headPositionChange = -headMoveAmount;
        shouldMove = true;
        break;
      case "KeyS":
      case "ArrowDown":
        headPositionChange = headMoveAmount;
        shouldMove = true;
        break;
      case "KeyA":
      case "ArrowLeft":
        headPositionChange = -1;
        shouldMove = true;
        break;
      case "KeyD":
      case "ArrowRight":
        headPositionChange = 1;
        shouldMove = true;
        break;
    }

    key.preventDefault();
  });
  // update the positions of the snake

  function checkOver() {
    console.log("checking conditions");
    if (headPosition > boardDim * boardDim || headPosition < 0) {
      alert("GAME OVER!!");
      for (let i = 0; i < initBodyLength; i++) {
        snakeBody.push(i);
        headPosition = i;
      }

      clearInterval(drawSnake);
      clearInterval(updateSnakePosition);
      shouldMove = false;
    }
  }
});
*/

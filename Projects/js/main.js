var gameBoard = require('./gameboard');
var ship = require('./ship');

function Player(name){
    this.name = name;
    this.yourTurn = false;
}


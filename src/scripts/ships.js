import {boardArray} from './gameboard.js';

function ShipFactory(name, size) {
  let location = [2,3,4,5,6];
  function isSunk() {
    for(let i = 0; i <= location.length; i++) {
      if(boardArray[i] === 2) { // if all boardArray locations equal value of hit(2) then sink(3)
          return name + ' is sunk!!',
          boardArray[i] = 3 // sunk
      } else { 
          return // do nothing
      }
    }
  }
  return {name, size, location, isSunk}
}

module.exports = ShipFactory;



const ShipFactory = require("./ships");
const BoardFactory = require("./gameboard");

test("BoardFactory creates a 10x10 board array", () => {
    const player = BoardFactory();
    expect(player).toBeDefined();
});

test("The board is initally filled with empty 0 cells", () => {
    const player = BoardFactory();
    expect(player.boardArray[2]).toEqual(0)
});

test("placeShip() fills ship.location with coordinates", () => {
    const player = BoardFactory();
    const carrier = ShipFactory('Carrier', 5);
    player.placeShip(73, carrier);
    const locationString = JSON.stringify(carrier.location);
    expect(locationString).toEqual('[73,74,75,76,77]');
});

test("cells included in ship.location are turned from 0 to 1", () => {
    const player = BoardFactory();
    const carrier = ShipFactory('Carrier', 5);
    player.placeShip(12, carrier);
    expect(player.boardArray[12]).toEqual(1)
});

test("strike(num) returns miss, hit, or already attacked depending on number", () => {
    const player = BoardFactory();
    player.boardArray[0] = 0; // empty cell
    player.boardArray[1] = 1; // occupied cell
    player.boardArray[2] = 2; // hit cell
    player.boardArray[3] = 3; // sunk cell
    player.boardArray[4] = 4; // miss cell
    expect(player.strike(0)).toBe(4) // attack empty cell, return miss
    expect(player.strike(1)).toEqual(2) // attack occupied cell, return hit
    expect(player.strike(2)).toEqual("This location has already been attacked")
    expect(player.strike(3)).toEqual("This location has already been attacked")
    expect(player.strike(4)).toEqual("This location has already been attacked")
});

test("If all cells equal 2 that ship is sunk", () => {
    const player = BoardFactory();
    const carrier = ShipFactory('Carrier', 5);
    player.placeShip(12, carrier);
    player.strike(12), player.strike(13), player.strike(14), player.strike(15), player.strike(16); // all cells hit
    player.checkSink(carrier)
    expect(player.checkSink(carrier)).toBe('Carrier is sunk!!');
});


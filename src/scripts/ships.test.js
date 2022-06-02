const ShipFactory = require("./ships");
const BoardFactory = require("./gameboard");

test("If all cells equal 2 that ship is sunk", () => {
    const player = BoardFactory();
    const carrier = ShipFactory('Carrier', 5);
    player.placeShip(12, carrier);
    player.strike(12), player.strike(13), player.strike(14), player.strike(15), player.strike(16); // all cells hit
    player.checkSink(carrier)
    expect(player.checkSink(carrier)).toBe('Carrier is sunk!!');
});
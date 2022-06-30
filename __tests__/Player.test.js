const Player = require('../lib/Player');
const Potion = require('../lib/Potion');
//replaces the real Potion.js with the mock Potion.js for testing purposes
jest.mock('../lib/Potion');

test('creates a player object', () => {
    const player = new Player('Karlos');

    //Note: best practice is to use .toEqual for everything instead of .toBe
    expect(player.name).toBe('Karlos');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
});

test("gets player's stats as an object", () => {
    const player = new Player('MosNes');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
    
    console.log("Player Stats: ", player.getStats());
});

test("gets inventory from player or returns false", () => {
    const player = new Player('MosNes');

    console.log("full inv: ", player.getInventory());
    expect(player.getInventory()).toEqual(expect.any(Array));

    //simulates empty inventory
    player.inventory = [];
    
    console.log("empty inv: ", player.getInventory());
    expect(player.getInventory()).toEqual(false);
});
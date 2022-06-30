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

test("gets player health value", () => {
    const player = new Player('MosNes');

    console.log("Health Message: ",player.getHealth());
    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
} );

test("check if player is alive or not", () => {
    const player = new Player('MosNes');

    //if health is above 0, return true
    expect(player.isAlive()).toBeTruthy();

    //if health is 0 or less, return false
    player.health = 0;
    expect(player.isAlive()).toBeFalsy();
} );

test("subtracts from player health without going negative", () => {
    const player = new Player('MosNes');
    const oldHealth = player.health;
    console.log("test Health: ", oldHealth);

    player.reduceHealth(5);
    console.log("hp -5: ", player.health);
    expect(player.health).toEqual(oldHealth-5);

    player.reduceHealth(9999);
    console.log("hp -9999: ",player.health);
    expect(player.health).toEqual(0);
} );
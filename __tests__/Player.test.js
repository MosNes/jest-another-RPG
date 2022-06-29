const Player = require('../lib/Player');
const Potion = require('../lib/Potion');
//replaces the real Potion.js with the mock Potion.js for testing purposes
jest.mock('../lib/Potion');

test('creates a player object', () => {
    const player = new Player('Karlos');

    expect(player.name).toBe('Karlos');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
});

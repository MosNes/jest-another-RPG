const Enemy = require('../lib/Enemy');
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion.js');

test('creates an enemy object', () => {
    const enemy = new Enemy('goblin','sword');

    expect(enemy.name).toEqual('goblin');
    expect(enemy.weapon).toEqual('sword');
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.potion).toEqual(expect.any(Object));

});
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

test("gets enemy health value", () => {
    const enemy = new Enemy('MurderTruck', 'sword');

    console.log("Health Message: ",enemy.getHealth());
    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
} );

test("check if enemy is alive or not", () => {
    const enemy = new Enemy('goblin','sword');

    //if health is above 0, return true
    expect(enemy.isAlive()).toBeTruthy();

    //if health is 0 or less, return false
    enemy.health = 0;
    expect(enemy.isAlive()).toBeFalsy();
} );

test("subtracts from enemy health without going negative", () => {
    const enemy = new Enemy('goblin','sword');
    const oldHealth = enemy.health;
    console.log("test Health: ", oldHealth);

    enemy.reduceHealth(5);
    console.log("hp -5: ", enemy.health);
    expect(enemy.health).toEqual(oldHealth-5);

    enemy.reduceHealth(9999);
    console.log("hp -9999: ",enemy.health);
    expect(enemy.health).toEqual(0);
} );

test("gets enemy attack value", () => {
    const enemy = new Enemy('goblin','sword');
    enemy.strength = 10;

    //enemy attack value should be equal to strength +/- 5
    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
    
} );

test("gets a description of the enemy's weapon", () => {
    const enemy = new Enemy('goblin','sword');

    expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));
    expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));
});
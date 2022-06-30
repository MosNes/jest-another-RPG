const Potion = require('../lib/Potion');

function Player(name = '') {
    this.name = name;
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    //initializes inventory with 2 potions
    this.inventory = [new Potion('health'), new Potion()];
};

//----METHODS-----
//create using .prototype to avoid creating methods 
//with each new initialized player object

//returns an object with player stats
Player.prototype.getStats = function () {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

//returns the inventory array or false if empty
Player.prototype.getInventory = function () {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};

//returns the player's health as a string
Player.prototype.getHealth = function () {
    return `${this.name}'s health is now ${this.health}!`;
};

//returns true or false if the player is alive or not (alive = health above 0)
Player.prototype.isAlive = function () {
    if (this.health === 0) {
        return false;
    } else {
        return true;
    }
};

//subtracts player.health by the specified amount, but prevents player health
//from going below 0
Player.prototype.reduceHealth = function(health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    }
};

module.exports = Player;
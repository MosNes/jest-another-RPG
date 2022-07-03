const Potion = require('../lib/Potion');
const Character = require('../lib/Character');

class Player extends Character {

    constructor(name = '') {
        //calls super constructor to initialize the Character superclass before constructing the rest of the Player class
        super(name);
    
        //initializes inventory with 2 potions
        this.inventory = [new Potion('health'), new Potion()];
    }

    //-----METHODS-------

    getStats () {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    };

    addPotion(potion) {
        this.inventory.push(potion);
    };

    usePotion(index) {
        const potion = this.getInventory().splice(index, 1)[0];
    
        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.health += potion.value;
                break;
        }
    };

};


module.exports = Player;
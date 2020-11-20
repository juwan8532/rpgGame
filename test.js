import { Player } from './classes.js';
import { Character } from './classes.js';
import { gameItems } from './classes.js';

let hero = new Player('juwan', 'Mage');
let monster = new Character('evil', 'beast')

console.log(hero);
// console.log(monster);

//! __________________________________________________________________________
//! Below will be functions used for battle

let battle = (attacker, defender, ability) => {

    let damage;

//? if the attacker is a monster
    if(attacker instanceof Character){
        damage = ability - defender.toughness * 1.5;
        defender.health -= damage;
        if(defender.health === 0){
            console.log('your hero has died');
        }
    }

//?if the attacker is a player
    if(attacker instanceof Player){
        //! critical hit condition
        if(Math.floor((Math.random() * 100) + 1) <= attacker.luck){
            damage = ability * attacker.intellect * 1.5;
            defender.health -= damage;
        }else{
            damage = ability * attacker.intellect;
            defender.health -= damage;
        }
        //! if the player kills the monster
        if(defender.health <= 0){
            attacker.experience += defender.experience;
            console.log('monster has died')
            lootDrop(gameItems, player.lvl)
        }
    }

    return damage;
}
//!_________________________________________________________________________________________________
//! below will be the random loot drop function
// console.log(gameItems);

let lootDrop = (gameItems, lvl) => {

    let common = [];
    let uncommon = [];
    let rare = [];
    let epic = [];
    let legendary = [];

    //! this will look at every item in gameItems
    for(let item in gameItems){
        console.log(item)

        if(item.rarity == 'common') common.push(item);
        if(item.rarity == 'uncommon') common.push(item);
        if(item.rarity == 'rare') common.push(item);
        if(item.rarity == 'epic') common.push(item);
        if(item.rarity == 'legendary') common.push(item);

    }

    if(lvl <= 10){

    }
    console.log(common);
    console.log(uncommon);
    console.log(rare);
    console.log(epic);
    console.log(legendary);
}

lootDrop(gameItems, 3)
// console.log(battle(monster, hero, monster.abilities.bite))
// console.log(battle(hero, monster, hero.abilities.basic))

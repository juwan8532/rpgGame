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

    console.log(gameItems);

    //! this will look at every ele in gameItems
    gameItems.forEach((ele) => {

        if(gameItems.hasOwnProperty(ele)){
            // console.log(ele);
            // if(ele['rarity'] == 'common' )common.push(ele);
            // if(ele['rarity'] == 'uncommon') uncommon.push(ele);
            // if(ele['rarity'] == 'rare') rare.push(ele);
            // if(ele['rarity'] == 'epic') epic.push(ele);
            // if(ele['rarity'] == 'legendary') legendary.push(ele);
        }
    })

}

lootDrop(gameItems, 3)
// console.log(battle(monster, hero, monster.abilities.bite))
// console.log(battle(hero, monster, hero.abilities.basic))

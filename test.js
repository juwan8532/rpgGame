import { Player } from './classes.js';
import { Character } from './classes.js';
import { gameItems } from './classes.js';

let hero = new Player('juwan', 'Mage');
let monster = new Character('evil', 'beast')

// console.log(hero);
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

// console.log(gameItems);

//!_________________________________________________________________________________________________
//! below will be the random loot drop function

let lootDrop = (gameItems, lvl) => {

    // console.log(gameItems);
    let dropsArr = [];

//!_______________________________________________________________________________________________________________________
//! now to calculate the actual drop

    let drops = (dropsArr, lvl) => {

        let droppedNum = 0;
        let dropped = [];

        for(let i = 0; i < dropsArr.length; i++){

            if(dropsArr[i]['rarity'] === 'common' &&
            Math.floor((Math.random() * 1000) + 1) <= lvl + 75){

                droppedNum++;
                dropped.push(dropsArr[i]);

            }else if(dropsArr[i]['rarity'] === 'uncommon' &&
            Math.floor((Math.random() * 1000) + 1) <= lvl + 60){

                droppedNum++;
                dropped.push(dropsArr[i]);

            }else if(dropsArr[i]['rarity'] === 'legendary' &&
            Math.floor((Math.random() * 1000) + 1) <= lvl + 40){

                droppedNum++;
                dropped.push(dropsArr[i]);

            }else if(dropsArr[i]['rarity'] === 'epic' &&
            Math.floor((Math.random() * 1000) + 1) <= lvl + 10){
                droppedNum++;
                dropped.push(dropsArr[i]);
            }

            if(droppedNum === 2) return dropped;
        }

        return dropped;
    }


//!_______________________________________________________________________________________________________________________
    //! this will look at every ele in gameItems
    for(let ele in gameItems){
        if(lvl <= 15 && (gameItems[ele]['rarity'] === 'common'
                     || gameItems[ele]['rarity'] === 'uncommon')){
            dropsArr.push(gameItems[ele]);
        } //? common and uncommon if()

        else if(lvl <= 30 && (gameItems[ele]['rarity'] === 'uncommon'
                          || gameItems[ele]['rarity'] === 'rare')){

            dropsArr.push(gameItems[ele]);
        } //? uncommon and rare if()

        else if(lvl <= 45 && (gameItems[ele]['rarity'] === 'rare'
                          || gameItems[ele]['rarity'] === 'epic')){

            dropsArr.push(gameItems[ele]);
        } //?rare and epic if()

        else if(lvl <= 60 && (gameItems[ele]['rarity'] === 'epic'
                          || gameItems[ele]['rarity'] === 'legendary')){

            dropsArr.push(gameItems[ele]);
        } //?epic and legendary if()
    }



//!!!!!!!!!!!!!!!!!!!!!for testing purposes only!!!!!!!!!!!!!!!!!!!!!!!
//! will test loot drop function and rate
    // setInterval(function(){
    //     console.log(drops(dropsArr, lvl));
    // }, 2000)

    drops(dropsArr, lvl)
} //! end of lootDrop()

lootDrop(gameItems, 3)
// console.log(battle(monster, hero, monster.abilities.bite))
// console.log(battle(hero, monster, hero.abilities.basic))

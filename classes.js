export class Character {
    constructor(name, type){
        this.name = name;
        this.type = type;
        this.lvl = 1;
        this.health = 70;
        // this.offense = 0;
        // this.defense = 0;
        this.assignPower(this.type)
    }

    assignPower(type){

        if(this.type == 'beast'){
            this.health += 10;
            this.abilities = {
                bite:5,
                claw:5,
                basic:5
            }
            // this.defense = 10;
            // this.offense = 10;
            this.experience = this.lvl * 7
        }

        if(this.type == 'undead'){
            this.health += 5;
            this.abilities = {
                consume:5, //this should heal 5
                zombieSpawns:5,
                basic:5
            }
            // this.defense = 5;
            // this.offense = 12;
            this.experience = this.lvl * 7
        }

        if(this.type == 'slime'){
            this.health += 20;
            this.abilities = {
                regen:5, //this should heal
                slice:5,
                basic:5
            }
            // this.defense = 1;
            // this.offense = 1;
            this.experience = this.lvl * 7;
        }
//************************************************************************** */
//!----- intellect directly affects abilities
//!----- toughness weakens damage
//!----- luck directly affects critical hits

            if(type == 'Mage'){
            this.abilities = {
                fireBlast:5,
                arcaneBlast:5,
                basic:5
            }
            this.intellect = 3;
            this.toughness = 1;
            this.luck = 1;
            // this.offense += 12;
            // this.defense += 14;
        }

        if(type == 'Knight'){
            this.abilities = {
                strike:5,
                stab:5,
                basic:5
            }
            this.intellect = 1;
            this.toughness = 3;
            this.luck = 1;
            // this.offense += 17;
            // this.defense += 17;
        }

        if(type == 'Elf'){
            this.abilities = {
                heal:5, //should heal
                naturesRevenge:5,
                basic:5
            }
            this.intellect = 2;
            this.toughness = 1;
            this.luck = 2;
            // this.offense += 13;
            // this.defense += 13;
        }

        if(type == 'Rogue'){
            this.abilities = {
                swiftStrike:5,
                counterStrike:5,
                basic:5
            }
            this.intellect = 1;
            this.toughness = 1;
            this.luck = 4;
            // this.offense += 15;
            // this.defense += 16;
        }

    }
}//end of assignPower()


export class Player extends Character{
    constructor(name, type){  //assign player the stats
        super(name, type);
        this.lvl = 3;
        this.health = 125;
        this.experience = 0;
        this.items = {}
    }
}

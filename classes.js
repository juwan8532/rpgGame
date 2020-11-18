export class Character {
    constructor(name, type, lvl){
        this.name = name;
        this.type = type;   //beast, slime, undead, etc
        this.lvl = lvl;
        this.health = 70;
        this.offense = 0;
        this.defense = 0;
    }

    assignPower(type){  //assign the different minion types their stats

        if(this.type == 'beast'){
            this.health += 10;
            this.abilities = ['bite', 'claw', 'basic'];
            this.defense = 10;
            this.offense = 10;
            this.basicAttack = 5 + this.offense;
            this.experience = this.lvl * 7
        }

        if(this.type == 'undead'){
            this.health += 5;
            this.abilities = ['consume', 'zombieSpawns', 'basic'];
            this.defense = 5;
            this.offense = 12;
            this.basicAttack = 5 + this.offense;
            this.experience = this.lvl * 7
        }

        if(this.type == 'slime'){
            this.health += 20;
            this.abilities = ['regen', 'slice', 'basic'];
            this.defense = 1;
            this.offense = 1;
            this.basicAttack = 3 + this.offense;
            this.experience = this.lvl * 7
        }

    }//end of assignPower()
}

export class Player extends Character{
    constructor(name){  //assign player the stats
        super(name);
        this.lvl = 3;
        this.health = 125;
        this.experience = 0;
        this.defense = 5;
        this.offense = 5;
        this.abilityPower = 0;
        this.abilities = this.setType
    }

    setType(type){

        if(type == 'Mage'){
            this.type ='Mage'
            this.abilities = ['fireBlast', 'arcaneBlast', 'basic'];
            this.abilityPower += 10;
            this.offense += 2;
            this.defense += 4;
            this.basicAttack = 7 + this.offense;
        }

        if(type == 'Knight'){
            this.type = 'Knight'
            this.abilities = ['strike', 'stab', 'basic'];
            this.abilityPower += 2;
            this.offense += 7;
            this.defense += 7;
            this.basicAttack = 7 + this.offense;
        }

        if(type == 'Elf'){
            this.type = 'Elf'
            this.abilities = ['heal', 'naturesRevenge', 'basic'];
            this.abilityPower += 7;
            this.offense += 3;
            this.defense += 3;
            this.basicAttack = 7 + this.offense;
        }

        if(type == 'Rogue'){
            this.type = 'Rogue'
            this.abilities = ['swiftStrike', 'counterStrike', 'basic'];
            this.abilityPower += 5;
            this.offense += 5;
            this.defense += 6;
            this.basicAttack = 7 + this.offense;
        }
    }

}

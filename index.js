// window.addEventListener('DOMContentLoaded', (event) => {

    //**** NEED TO MAKE SO OFFENSE AND DEFENSE PLAY ROLE

    class Character {
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

    class Player extends Character{
        constructor(name){  //assign player the stats
            super(name);
            this.lvl = 3;
            this.health = 125;
            this.abilities = this.assignPower();
            this.experience = 0;
            this.defense = 5;
            this.offense = 5;
            this.basicAttack = 7 + this.offense;
        }
    }

    // let juwan = new Player('juwan')
    // console.log(juwan)

    // let beast = new Character('ragnar', 'beast', '3')
    // beast.assignPower(this.type)
    // console.log(beast)
// })

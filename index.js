window.addEventListener('DOMContentLoaded', (event) => {

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
        constructor(name, type){  //assign player the stats
            super(name, type);
            this.lvl = 3;
            this.type = type;
            this.health = 125;
            this.experience = 0;
            this.defense = 5;
            this.offense = 5;
            this.abilityPower = 0;
            this.abilities = this.setType
            this.basicAttack = 7 + this.offense;
        }

        setType(){

            if(this.type == 'mage'){
                this.abilities = ['fireBlast', 'arcaneBlast', 'basic'];
                this.abilityPower += 10;
                this.offense += 2;
                this.defense += 4;
            }

            if(this.type == 'knight'){
                this.abilities = ['strike', 'stab', 'basic'];
                this.abilityPower += 2;
                this.offense += 7;
                this.defense += 7;
            }

            if(this.type == 'elf'){
                this.abilities = ['heal', 'naturesRevenge', 'basic'];
                this.abilityPower += 7;
                this.offense += 3;
                this.defense += 3;
            }

            if(this.type == 'rogue'){
                this.abilities = ['swiftStrike', 'counterStrike', 'basic'];
                this.abilityPower += 5;
                this.offense += 5;
                this.defense += 6;
            }
        }

    }

    const loginButton = document.getElementById('loginButton');
    const createButton = document.getElementById('createButton');
    const userName = document.getElementById('userName');
    const userPassword = document.getElementById('userPassword');
    const isValid = () =>{

    }
    loginButton.addEventListener('click', (event) =>{
        //if passes login we launch game
    })

    createButton.addEventListener('click', (event) => {
        //taken to the crate player screen
    })

    let juwan = new Player('juwan', 'mage')
    juwan.setType();
    console.log(juwan)
})


import { Player } from './classes.js';
document.addEventListener('DOMContentLoaded', () => {


    const rogue = document.getElementById('rogue');
    const knight = document.getElementById('knight');
    const mage = document.getElementById('mage');
    const elf = document.getElementById('elf');
    let rogueConfirm = document.getElementById('Rogue');
    let mageConfirm = document.getElementById('Mage');
    let knightConfirm = document.getElementById('Knight');
    let elfConfirm = document.getElementById('Elf');

    let confirmButtons = document.querySelectorAll('.confirmButton');
    // const rogueImg = document.createElement('img');
    // const elfImg = document.createElement('img');
    // const knightImg = document.createElement('img');
    // const mageImg = document.createElement('img');

    rogue.addEventListener('click', (event) =>{
        rogueConfirm.style.display = 'block'
        knightConfirm.style.display = 'none';
        mageConfirm.style.display = 'none';
        elfConfirm.style.display = 'none';
        //displaying the confirm button and making sure the others arent showing
    })

    knight.addEventListener('click', (event) =>{
        knightConfirm.style.display = 'block'
        rogueConfirm.style.display = 'none';
        mageConfirm.style.display = 'none';
        elfConfirm.style.display = 'none';
    })

    mage.addEventListener('click', (event) =>{
        mageConfirm.style.display = 'block'
        rogueConfirm.style.display = 'none';
        knightConfirm.style.display = 'none';
        elfConfirm.style.display = 'none';
    })

    elf.addEventListener('click', (event) =>{
        elfConfirm.style.display = 'block'
        rogueConfirm.style.display = 'none';
        mageConfirm.style.display = 'none';
        knightConfirm.style.display = 'none';
    })

    confirmButtons.forEach((button) => {

        button.addEventListener('click', (event) => {
            //grabbing the choice that they selected and confirmed
// ------------------- need to pick a hero name-----------------------------------------
            let choice = event.target.id;
            let hero = new Player('NotChosenYet', choice)
            location.href = "./index.html"
        })
    })

})

// console.log(hero)

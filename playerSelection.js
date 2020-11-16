document.addEventListener('DOMContentLoaded', () => {

    const rogue = document.getElementById('rogue');
    const knight = document.getElementById('knight');
    const mage = document.getElementById('mage');
    const elf = document.getElementById('elf');
    let rogueConfirm = document.getElementById('1')

    let mageConfirm = document.getElementById('2')
    let knightConfirm = document.getElementById('3')
    let elfConfirm = document.getElementById('4')

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

    rogueConfirm.addEventListener('click', (event) => {

    })

    mageConfirm.addEventListener('click', (event) => {

    })

    knightConfirm.addEventListener('click', (event) => {

    })

    elfConfirm.addEventListener('click', (event) => {

    })
})

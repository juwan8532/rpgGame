document.addEventListener('DOMContentLoaded', () => {

    const loginButton = document.getElementById('loginButton');
    const createButton = document.getElementById('createButton');
    const isValidDiv = document.getElementById('isValid');
    const isValidDiv2 = document.getElementById('isValid2');
    const div = document.createElement('div');

    const isValid = () =>{
        const createName = document.getElementById('createName');
        const createPassword = document.getElementById('createPassword');
        const recreatePassword = document.getElementById('recreatePassword');
        const badWords = '/-*=+!@#$%^&()"][}{~';
        const isPassing = false;
        //if not valid make text pop up in red
        if(createName.value.length < 7){
            isValidDiv.innerHTML = "User Name needs to be at least 7 characters."
            isValidDiv.style.cssText = 'font-size: 13px; color: red'
        }
        if(createPassword.value.length < 7){
            const newDiv = isValidDiv.appendChild(div)
            newDiv.innerHTML = "Password needs to be at least 7 characters."
        }

        if(createPassword.value !== recreatePassword.value){
            isValidDiv2.innerHTML = "Passwords do not match."
            isValidDiv2.style.cssText = 'font-size: 13px; color: red'
            isValidDiv2.innerHTML = "Passwords do not match."
        }


        //--------the bad word check isnt working ----------

        // if(userName.value.includes(badWords)){
        //     console.log('in the bad word')
        //     const newDiv = isValidDiv.appendChild(div)
        //     newDiv.innerHTML = "Enter a valid user name."
        // }
    }

    createButton.addEventListener('click', (event) =>{
        event.preventDefault();
        let result = isValid();

        if(result){

        }
    })

    loginButton.addEventListener('click', (event) =>{
        event.preventDefault();
        location.href = "./index.html"
    })
})

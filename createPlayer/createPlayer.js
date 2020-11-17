document.addEventListener('DOMContentLoaded', () => {

    const loginButton = document.getElementById('loginButton');
    const createButton = document.getElementById('createButton');
    const isValidDiv = document.getElementById('isValid');
    const isValidDiv2 = document.getElementById('isValid2');
    const isValidDiv3 = document.getElementById('isValid3');
    const div = document.createElement('div');

    const isValid = () =>{
        const createName = document.getElementById('createName');
        const createPassword = document.getElementById('createPassword');
        const recreatePassword = document.getElementById('recreatePassword');
        const badWords = '/-*=+!@#$%^&()"][}{~';
        let isPassing = true;
        //if not valid make text pop up in red
        if(createName.value.length < 7){
            isValidDiv.innerHTML = "User Name needs to be at least 7 characters."
            isValidDiv.style.cssText = 'font-size: 13px; color: red'
            isPassing = false;
        }
        console.log(createPassword.value)
        if(createPassword.value.length < 7){
            isValidDiv2.innerHTML = "Password needs to be at least 7 characters."
            isValidDiv2.style.cssText = 'font-size: 13px; color: red'
            isPassing = false;
        }

        if(createPassword.value !== recreatePassword.value){
            isValidDiv3.innerHTML = "Passwords do not match."
            isValidDiv3.style.cssText = 'font-size: 13px; color: red'
            isPassing = false;
        }

        if(isPassing){
            return true;
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
            location.href = "../playerSelection/playerSelection.html"
        }//if we pass all the requirements to make an account we go to selection page
    })

    loginButton.addEventListener('click', (event) =>{
        event.preventDefault();
        location.href = "../index/index.html"
    })
})

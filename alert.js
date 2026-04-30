const buttonOne = document.querySelector('.btn-1');
const buttonTwo = document.querySelector('.btn-2');
const container = document.querySelector('.container');
const buttonThree = document.querySelector('.btn-3');

    function setAlert() {
        alert('I love Javascript');

    }
    function changeBgcolor(){
        container.classList.add('containerChange');
    }

    function tranformButton(){

    }

buttonOne.addEventListener('click', setAlert);
buttonTwo.addEventListener('click', changeBgcolor);

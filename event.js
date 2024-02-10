console.log('this is alogn with js file');

// option 3 another

const purpleButton = document.getElementById('pink');
purpleButton.onclick = function purpleClicked (){
    document.body.style.backgroundColor= 'pink';
}

// option 4


const pinkButton = document.getElementById('tomato');
pinkButton.addEventListener('click', makeTomato)

function makeTomato (){
    document.body.style.backgroundColor= 'tomato';
}

// option 5 

const makeGreen = document.getElementById('green');
makeGreen.addEventListener('click', 
function greenButton(){
    document.body.style.backgroundColor= 'green';
})
console.log('this is alogn with js file');

// option 4 to add events

const purpleButton = document.getElementById('pink');
purpleButton.onclick = function purpleClicked (){
    document.body.style.backgroundColor= 'pink';
}
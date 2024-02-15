// function play(){
// // step-1: hide the home screen
// const homeSection=document.getElementById('home-screen')
// // console.log(homeSection.classList)
// homeSection.classList.add('hidden');


// // step-2:show the playground
// const playgroundSection=document.getElementById('play-ground');
// // console.log(playgroundSection.classList)
// playgroundSection.classList.remove('hidden')
// }

function continueGame(){
    // step-1:generate a random alphabet
    const alphabet=getARandomAlphabet();
    console.log('your alphabet',alphabet);
    const currentAlphabetElement=document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=alphabet;
    // set background color
    setBackgroundColorById(alphabet)
};


function play(){
    hideElementByID('home-screen');
    showElementByID('play-ground');
    continueGame();
}
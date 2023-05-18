let highscore = 0;

// Ask if a component needs to be in the loop

const updateCounter = (counter) => {
    setTimeout(() => {
        document.querySelector('.counter').textContent = counter;
    }, counter * 0.15); // Adjust the delay time as needed
};

const updateHighscore = (prop) => {
    setTimeout(() => {
        document.querySelector('#highscore').textContent = prop;
    }, prop * 0.18); // Adjust the delay time as needed
};

document.querySelector('.Luck').addEventListener('click', function () {

    let heads = 0;
    let score = 1;

    for (i = 0; i < score; i++) {



        const randomFlip = Math.trunc(Math.random() * 2);

        const flipFunc = () => {
            if (randomFlip === 1) {
                return 'Heads'
            } else {
                return 'Tails'
            }
        }

        console.log(flipFunc());



        if (flipFunc() === 'Heads') {
            heads = heads + 1;
        } else {
            heads = null;
        }


        if (heads < 10) {
            score = score + 1;
        } else {
            console.log(score);
            console.log(highscore);
            console.log(`x10 Heads in a row, on ${score} attempts`);
        }
        updateCounter(i);

        if(highscore === 0 && heads === 10){
            highscore = i;
            updateHighscore(i)
        }else if(score < highscore && heads === 10) {
            highscore = score;
            updateHighscore(i);
        }
    }
})

const audio = new Audio("collectcoin-6075.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

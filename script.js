let highscore = 0;
let htArray = [];

let headsCounter = 0;
let tailsCounter = 0;


// Ask if a component needs to be in the loop

const updateCounter = (counter) => {
    setTimeout(() => {
        document.querySelector('.counter').textContent = `${counter}`;
    }, counter * 0.15); // Adjust the delay time as needed
};

const updateHighscore = (prop) => {
    setTimeout(() => {
        document.querySelector('#highscore').textContent = prop;
    }, prop * 0.18); // Adjust the delay time as needed
};

const updateHeadsCounter = (data) => {
  setTimeout(() => {
    document.querySelector('#green-heads').textContent = data;
  }, data * 0.18);
};

const updateTailsCounter = (data) => {
  setTimeout(() => {
    document.querySelector('#green-tails').textContent = data;
  }, data * 0.18);
};

document.querySelector('.Luck').addEventListener('click', function () {
  let total = 0;
    let heads = 0;
    tails = 0;
    let score = 1;

    for (i = 0; i < score; i++) {
        const randomFlip = Math.trunc(Math.random() * 2);

        const flipFunc = () => {
            if (randomFlip === 1) {
        return 'Heads';
            } else {
        return 'Tails';
            }
    };

    console.log(flipFunc());

    if (flipFunc() === 'Heads') {
      headsCounter++;
    } else if (flipFunc() === 'Tails') {
      tailsCounter++;
        }

    updateHeadsCounter(headsCounter);
    updateTailsCounter(tailsCounter);

    // console.log(headsCounter + tailsCounter);

        if (flipFunc() === 'Heads') {
            heads = heads + 1;
      tails = 0;
        } else {
            heads = 0;
            tails = tails + 1;
        }


        if (heads < 10) {
            score = score + 1;
        } else {
            console.log(score);
      // console.log(highscore);
      htArray = [];
      headsCounter = 0;
      tailsCounter = 0;
            console.log(`x10 Heads in a row, on ${score - 10} attempts`);
        }
    updateCounter((i + 1) - 10);

    if (highscore === 0 && heads === 10) {
            highscore = i;
      updateHighscore(score - 10);
      total = (score - 10);
    } else if (score < highscore && heads === 10) {
            highscore = score;
      updateHighscore(highscore - 10);
      total = (score - 10)
      
        }
        
        console.log(total);

        if(total === 0){
          updateHighscore(1);
          updateCounter(1);
        } else {
          updateHighscore(`Error for 1st attempt`)
        }
    
    }
});

const audio = new Audio('collectcoin-6075.mp3');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    audio.play();
  });
});

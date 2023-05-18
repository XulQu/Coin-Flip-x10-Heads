let highscore = 0;
let htArray = [];

let headsCounter = 0;
let tailsCounter = 0;

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
  let heads = 0;
  let score = 1;
  let tails = 0;
  let sum = 0;
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

    // console.log(heads, tails);

    // console.log(headArray);

    if (heads < 10) {
      score = score + 1;
    } else {
      console.log(score);
      // console.log(highscore);
      htArray = [];
      headsCounter = 0;
      tailsCounter = 0;
      console.log(`x10 Heads in a row, on ${score} attempts`);
    }
    updateCounter(i + 1);

    if (highscore === 0 && heads === 10) {
      highscore = i;
      updateHighscore(i + 1);
    } else if (score < highscore && heads === 10) {
      highscore = score;
      updateHighscore(i + 1);
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

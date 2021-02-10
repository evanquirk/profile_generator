const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer1) => {
  rl.question('What city do you live in? ', (answer2) => {
    rl.question('How many years have you lived there (in numeral form - ex \'5\')? ' , (answer3) => {
      rl.question('What is your favourite coding music? ', (answer4) => {
        rl.question('What type of computer are you using? ' , (answer5) => {
          rl.question('What is your chosen pro-noun? ex. (him, her, or them) ' , (answer6) => {
            let gender ='';
            let gender2 ='';
            if (answer6 == 'him'){
              gender += 'he has'
              gender2 += 'his'
            } else if (answer6 == 'her') {
              gender = 'she has'
              gender2 += 'her'
            } else if (answer6 == 'them') {
              gender ='they have'
              gender2 += 'their'
            };
            rl.question('What is your nickname? ' , (answer7) => {
              console.log(`${answer1} is a new coder from ${answer2}, where ${gender} been living for approximately ${answer3 * 525600} minutes! You can find ${answer6} listening to ${answer4}, while typing away on ${gender2} ${answer5}. If you see ${answer6} around, make sure to say "Hi, ${answer7}", for ${gender} a good sense of humour! `);
              rl.close();
            });
          });
        });
      });
    });
  });
});
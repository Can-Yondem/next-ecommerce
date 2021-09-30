let counter = 0;
let showRandomCategories = [];

export function getRandomCategories(max, category, showNumber) {
    while (counter < showNumber) {
      const randomNumber = Math.floor(Math.random() * max);
      if (prevRandomNumber !== randomNumber) {
        showRandomCategories.push(category[randomNumber]);
        counter++
      }
      const prevRandomNumber = randomNumber;
      if(counter === showNumber){
          return showRandomCategories
      }
    }
  }
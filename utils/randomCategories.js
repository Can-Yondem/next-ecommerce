let counter = 0;
let showRandomCategories = [];

export function getRandomCategories(max, subcategory, showNumber) {
    while (counter < showNumber) {
      const randomNumber = Math.floor(Math.random() * max);
      if (prevRandomNumber !== randomNumber) {
        showRandomCategories.push(subcategory[randomNumber]);
        counter++
      }
      const prevRandomNumber = randomNumber;
      if(counter === showNumber){
          return showRandomCategories
      }
    }
  }
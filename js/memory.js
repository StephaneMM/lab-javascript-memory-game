class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards) {
    //   if (this.cards !== cards) {
    //     return undefined;
    //   } else {
    //     const shuffledCards = [];
    //     console.log(shuffledCards)
    //     var m = shuffledCards.length, t, i;
    //     while (m) {
    //         i = Math.floor(Math.random() * m--);
    //         t = shuffledCards[m];
    //         shuffledCards[m] = shuffledCards[i];
    //         shuffledCards[i] = t;
    //       }
    //     return shuffledCards;
    //   } 
    // }

    // let counter = cards.length;
    // // While there are elements in the array
    // while (counter > 0) {
    //     // Pick a random index
    //     let index = Math.floor(Math.random() * counter);

    //     // Decrease counter by 1
    //     counter--;

    //     // And swap the last element with it
    //     let temp = cards[counter];
    //     cards[counter] = cards[index];
    //     cards[index] = temp;

    // if (this.cards === "" || this.cards.length === 0) {
    //   return undefined;
    // } else {
    //   let index = Math.floor(Math.random() * cardsarray.length);
    //   let temp = 0;
    //   for (let i = 0; i < cardsarray.length; i++) {
    //     temp = cardsarray[i];
    //     cardsarray[i] = cardsarray[index];
    //     cardsarray[index] = temp;
    //   }
    // }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }
  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}

class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {

  if (!this.cards) {
      return undefined;
  }

  const shuffledCards = [...this.cards];

  for (let i=shuffledCards.length-1; i>0;i--){
    const randomIndex=Math.floor(Math.random() * (i+1));
    [shuffledCards[i],shuffledCards[randomIndex]]=[shuffledCards[randomIndex],shuffledCards[i]];

  }
  this.cards=shuffledCards
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

 
  checkIfFinished() {
    
    if (this.pairsGuessed === 0) {
      return false;
    } else{ 
      return this.pairsGuessed === this.cards.length/2;
    }
  }
}


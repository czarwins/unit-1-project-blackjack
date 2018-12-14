// Make a deck
//    Each card needs to have a value
//    Provide a image for each card / Generate each card
//    Each card needs a suit
// Make a Deal button
//    Deal button starts the game
//    Adds two random cards to your hand
//        Hand has a value of all your cards
//    Also deals 2 cards to dealer. One faces down
//  Blackjack Win ---> If you a dealt 21 on draw then you double your winnings
// Make a Hit button 
//    Hit button adds one card to your hand
//        Score value of your hand goes up now
//    Ends game if total is greater than 21
//    If you draw an ace and the value of the ace plus your hand is over 21 then subtract 10 from your hand value
// Make a Stand button
//    Stand button ends your turn essentially
//    Automatically,the Dealer draws as long as his hand value is less         than your hand value
// Win/Lose
//    If your hand value goes over 21 at any point you instantly Lose
//    If your ending hand value is less than the dealer's ending hand value, you Lose
//    Else {Win}
// Betting
//    You start with $100 
//    You Place your Bet
//    On lose, your bet is subtracted from your cash
//    On win, your bet is doubled and added to your cash

let cash = 100;
let ante = 10;

let faceValue = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
const cardSuits = ['Diamonds','Clubs','Hearts','Spades'];

function card(name, face, suit, value) {
  this.name = name;
  this.face = face;
  this.suit = suit;
  this.value = value;
}

let deck = [];

// console.log(faceValue[0] +  cardSuits[0]);

let newDeck = []
let j = cardSuits;
let i;
makeCard = () => {
    newDeck.push(cardSuits[j] + faceValue[i])
    console.log(newDeck);
    
    // makeCard()
    
}
    makeSuit = () => {
        
        for(j = 0; j < cardSuits.length; j++){
            console.log(cardSuits[j]);
        }
        
    }
    // makeSuit()
    makeValue = () => {
        
        for(i = 0; i < faceValue.length; i++){
        
            console.log(faceValue[i])
            
        }
        
    }
    // makeValue()

function makeNewCard(suit,value){
    console.log(suit + " " + value);
}
makeNewCard(j,faceValue[0])

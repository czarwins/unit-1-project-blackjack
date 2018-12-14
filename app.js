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

let purse = 100;
let ante = 10;

// MAKE THE DECK
let faceValue = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
const cardSuits = ['Diamonds','Clubs','Hearts','Spades'];

let deck = [];
let cnt;
let cntr;
makeDeck = () => {
   
    for(cnt = 0; cnt < faceValue.length; cnt++){
    
        for(cntr = 0; cntr < cardSuits.length; cntr++){

            let scoreValue = Number(faceValue[cnt]);

            if(faceValue[cnt] == 'J' || faceValue[cnt] == 'Q' || faceValue[cnt] == 'K'){
                scoreValue = 10
            }

            if (faceValue[cnt] == 'A'){
                scoreValue = 11
            }
            let card = {
                Face: faceValue[cnt], Suit: cardSuits[cntr], Value: scoreValue
            }
            deck.push(card)
        }   
    }    
}
makeDeck()
console.log(deck);
// MAKE DEAL BUTTON
let randomDeal =  deck[Math.floor(Math.random()*52)];
playerHand = [];
deal = () => {
    document.getElementById('dealBtn')
    for(i = 0;i <= 1  ;i++){
        playerHand.push(randomDeal)
        console.log(deck[Math.floor(Math.random()*52)]);
         
    }
    // console.log(deck[Math.floor(Math.random()*52)])
    // console.log(deck[Math.floor(Math.random()*52)])

    // console.log('deal');  
}


// MAKE HIT BUTTON
hit = () => {
    document.getElementById('hitBtn')
    console.log('hit');
}
// MAKE STAND BUTTON
stand = () => {
    document.getElementById('standBtn')
    console.log('stand');
} 

    
        
        
    


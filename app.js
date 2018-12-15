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
let faceValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const cardSuits = ['Diamonds', 'Clubs', 'Hearts', 'Spades'];

let deck = [];
let cnt;
let cntr;
let card;
makeDeck = () => {

    for (cnt = 0; cnt < faceValue.length; cnt++) {

        for (
            cntr = 0; 
            cntr < cardSuits.length; 
            cntr++
            ) {
            let scoreValue = Number(faceValue[cnt]);

            if (faceValue[cnt] == 'J' || faceValue[cnt] == 'Q' || faceValue[cnt] == 'K') {
                scoreValue = 10
            }

            if (faceValue[cnt] == 'A') { scoreValue = 11  }

            card = {  face: faceValue[cnt], suit: cardSuits[cntr], value: scoreValue  }

            deck.push(card)
        }
    }
}

makeDeck()
// console.log(deck);
// MAKE DEAL BUTTON
// deal button pulls 2 random cards and pushes them into array playerHand
// let randomDeal = deck[Math.floor(Math.random() * 52)];
let totalValue = 0;
playerHand = [];
deal = () => {

    document.getElementById('dealBtn')

    for (
        dealCnt = 0; 
        dealCnt <= 1; 
        dealCnt++
        ) {
        const randomDeal = deck[Math.floor(Math.random() * 52)]
        playerHand.push(randomDeal)
    }
    console.log(playerHand)

    for (let hndCnt = 0; 
        hndCnt < playerHand.length; 
        hndCnt++
        ) {
        totalValue += playerHand[hndCnt].value
    }

      console.log(totalValue)

    if(totalValue > 21){

        totalValue = (totalValue - 10)
    }
}


// Player score add the scoreValues together


// MAKE HIT BUTTON
hit = () => {

    document.getElementById('hitBtn')

    const hitHand = deck[Math.floor(Math.random() * 52)]
    playerHand.push(hitHand)
    console.log(playerHand);

    let totalValue = 0

    for (
        let hitHndCnt = 0; 
        hitHndCnt < playerHand.length; 
        hitHndCnt++) {
        totalValue += playerHand[hitHndCnt].value
    }
    console.log(totalValue);
    
    if(totalValue > 21){

        alert("You Lose")
    }
}
// MAKE STAND BUTTON
dealerHand = [];
stand = () => {
    document.getElementById('standBtn')
    // alert("It's the Dealer's turn")
    
    for(
        stnCnt = 0; 
        stnCnt <= 1; 
        stnCnt++
        ){
        const dealerTurn = deck[Math.floor(Math.random() * 52)]
        dealerHand.push(dealerTurn)

    }
    console.log(dealerHand);

    let dHandValue = 0

    for(
        let dHndCnt = 0; 
        dHndCnt < dealerHand.length; 
        dHndCnt++
        ){
        dHandValue += dealerHand[dHndCnt].value
    }
        console.log(dHandValue);    
        // console.log(totalValue);
        
    
}



let scoreCheck = () =>{
    console.log(totalValue);
    
}
scoreCheck()
// scoreCheck.push(dHandValue)



// let totalValue;
// playerHand = [];
// deal = () => {

//     document.getElementById('dealBtn')

//     for (dealCnt = 0; dealCnt <= 1; dealCnt++) {

//         const randomDeal = deck[Math.floor(Math.random() * 52)]
//         playerHand.push(randomDeal)
//     }
//     console.log(playerHand)

//     let totalValue = 0

//     for (let hndCnt = 0; hndCnt < playerHand.length; hndCnt++) {
    
//         totalValue += playerHand[hndCnt].value
//     }

//     console.log(totalValue)

//     if(totalValue > 21){

//         totalValue = (totalValue - 10)
//     }
// }

// **********
// // deal = () => {

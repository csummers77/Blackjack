// blackjack deal function
const freshDeck = createDeck()
let theDeck = freshDeck.slice();
let playerHand = [];
let dealerHand = [];

$('.deal-button').click(()=>{
    // console.log('User clicked me')
    shuffleDeck(theDeck);
    console.log(theDeck)
    let topCard = theDeck.shift();
    playerHand.push(topCard)
    topCard = theDeck.shift();

    dealerHand.push(topCard);
    topCard = theDeck.shift()
    playerHand.push(topCard)
    topCard =  theDeck.shift()
    dealerHand.push(topCard)
    placeCard('player',1,playerHand[0])
    placeCard('dealer',1,dealerHand[0])
    placeCard('player',2,playerHand[1])
    placeCard('dealer',2,dealerHand[1])
    calculateTotal(playerHand,'player')
    calculateTotal(dealerHand,'dealer')
})
function placeCard(who,where,what){
    const classSelector = `.${who}-cards .card-${where}`;
    $(classSelector).html(`<img src="cards/${what}.png" />`)
}
function calculateTotal(hand,who){
    purpose:
    1. Find out the number and return
    // 2. Update the DOM with the right number for whoever's hand it is
    let handTotal = 0;
    hand.forEach((card,i)=>{
        console.log(card);
    })
}
function createDeck(){
    let newDeck = [];
    // Card = suit letter + value
    const suits = ['h', 's', 'd', 'c'];
    // forEach loop takes 1 arg: function
    // that function gets 2 args
    
    suits.forEach((s,index)=>{
        // inner loop for card value
        for(let c = 1; c <= 13; c++){
            newDeck.push(`${c}${s}`)
        }
    })
    return newDeck;
}
function shuffleDeck(aDeckToBeShuffled){
    for(let i = 0; i < 100000; i++){
        let rand1 = Math.floor(Math.random() * 52);
        let rand2 = Math.floor(Math.random() * 52);
        let card1Defender = aDeckToBeShuffled[rand1];
        aDeckToBeShuffled[rand1] = aDeckToBeShuffled[rand2]
        aDeckToBeShuffled[rand1] = card1Defender;
    }
    console.log(aDeckToBeShuffled)
}

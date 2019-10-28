$(document).ready(function() {
  $("form#start").submit(function(event) {
    event.preventDefault();

    var suitValues = ["Hearts", "Spades", "Clubs", "Diamonds"];
    var cardValues = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

    suitValues.forEach(function(suit){
      cardValues.forEach(function(card){
        $("ul#deckOfCards").append("<li>" + card + " of " + suit + "</li>")
      })
    })

    $(".hideSection").hide();
  });
});

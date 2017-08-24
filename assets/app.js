$(document).ready(function(){
  // set variables
  let playerOne = 0;
  let playerTwo = 0;
  let finish = 10;
  function beginRace(){
    $(document).on("keypress", function(e){
      // player one action
      if (e.charCode === 47){
        playerOne ++;
        $(".flash-run").animate({left:"+=8%"}, 0100)
        // player two action
      } else if (e.charCode === 122) {
        playerTwo ++;
        $(".reverse-flash-run").animate({left:"+=8%"},0100)
      }
      // stop game after completion
      if (playerOne === 10 || playerTwo === 10){
        $(document).off("keypress");
      };
      // when player one wins, update header to show winner
      if (playerOne === finish){
        $("h1").text("Barry Allen is the fastest man alive!")
      };
      // when player two wins, update header to show winner
      if (playerTwo === finish){
        $("h1").text("Jay Garrick is the fastest man alive!")
      };
    });
  };
  // call function to play game
  beginRace();
});

$(document).ready(function(){
  console.log("linked");
  let playerOne = 0;
  let playerTwo = 0;
  let finish = 10;
  function beginRace(){
    $(document).on("keypress", function(e){
      // player one action
      if (e.charCode === 47){
        playerOne ++;
          $(".flash-run").animate({left:"+=9.9%"}, 0100)
          if (playerOne > finish){
            alert("The Flash is the fastest man alive!")
          }
          console.log(playerOne);
          console.log(finish);
          // player two action
        } else if (e.charCode === 122) {
          playerTwo ++;
            $(".reverse-flash-run").animate({left:"+=8%"},0100)
            if (playerTwo > finish){
              alert("The Reverse Flash is the fastest man alive!")
            }
            console.log(playerTwo)
        } else if (playerOne === 10 || playerTwo === 10){
          $(document).off("keyup")
        };
      });
    };
    beginRace();
  });

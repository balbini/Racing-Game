$(document).ready(function(){
  console.log("linked");
  let playerOne = 0;
  let playerTwo = 0;
  let finish = 20;

  function beginRace(){
    $(document).keypress(function(e){
      if (e.charCode === 47){
        playerOne ++;
          $(".flash-run").animate({left:"+=50px"})
          console.log("flash moved");
          console.log(playerOne);
        } else if (e.charCode === 122) {
          playerTwo ++;
            $(".reverse-flash-run").animate({left:"+=50px"})
            console.log("reverse flash moved")
            console.log(playerTwo)
        } else {
          alert("Wrong key!")
        };
      });
    };
    beginRace();
  });

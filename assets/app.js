$(document).ready(function(){
  console.log("linked");
let playerOne = 0;
let playerTwo = 0;

$(document).ready(function beginRace(){
  $("body").keypress(function(e){
    if (e.charCode === 47){
    console.log("keypress");
  } else if (e.charCode === 122) {
    console.log("right key");
  } else {
    console.log("incorrect");
  }
});
});
});

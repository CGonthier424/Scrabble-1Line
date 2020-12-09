/* File: scrabble.js
Connor Gonthier
connor_gonthier@student.uml.edu
UMass Lowell student taking course 91.61 GUI Programming I
updated on 12/9/20
*/

//Array Taken from the given assosiated array given to us in examples
//needed to and image so that i could pull tile images from the array as
// i also anded rand for my random function to grab an associated tile with a number 0-26
var ScrabbleTiles = [] ;
ScrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_A.jpg", "rand" : 0  } ;
ScrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_B.jpg", "rand" : 1  } ;
ScrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_C.jpg", "rand" : 2  } ;
ScrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_D.jpg", "rand" : 3  } ;
ScrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_E.jpg", "rand" : 4 } ;
ScrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_F.jpg", "rand" : 5  } ;
ScrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_G.jpg", "rand" : 6  } ;
ScrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_H.jpg", "rand" : 7  } ;
ScrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9 , "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_I.jpg", "rand" :8 } ;
ScrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_J.jpg", "rand" : 9  } ;
ScrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_K.jpg", "rand" : 10  } ;
ScrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_L.jpg", "rand" : 11  } ;
ScrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_M.jpg", "rand" : 12  } ;
ScrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_N.jpg", "rand" : 13  } ;
ScrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_O.jpg", "rand" : 14  } ;
ScrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_P.jpg", "rand" : 15  } ;
ScrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_Q.jpg", "rand" : 16  } ;
ScrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_R.jpg", "rand" : 17  } ;
ScrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_S.jpg", "rand" : 18  } ;
ScrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_T.jpg", "rand" : 19  } ;
ScrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_U.jpg", "rand" : 20  } ;
ScrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_V.jpg", "rand" : 21  } ;
ScrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_W.jpg", "rand" : 22  } ;
ScrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_X.jpg", "rand" : 23  } ;
ScrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_Y.jpg", "rand" : 24  } ;
ScrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_Z.jpg", "rand" : 25  } ;
ScrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_Blank.jpg", "rand" : 26  } ;

var wordScore = 0; // current word score
var totalScore = 0; // total score across words in a single game
// scores for each spot, held here so that it that i Can access it accrose functions easily
var spot1Score=0;
var spot2Score=0;
var spot3Score=0;
var spot4Score=0;
var spot5Score=0;
var spot6Score=0;
var spot7Score=0;

var tileCount= 0;// var is used to keep track of how many tiles are used
var tilesLeft= 100;// var to keep track of how many tiles are left

$( function() {
  $("#spot1").droppable({
    drop: function(event, ui){
    spot1Score = parseInt(ui.draggable.attr("data-value")) // adds the value of the tiles and
    wordScore += spot1Score;                              // puts it into the variable spot1Score to be used in scoring
    updateWordScore(); // updates the wordScore
    $(ui.draggable).addClass("onBoard") // adds onBoard Class to be used in deletion
    $(ui.draggable).draggable("disable");
    $(this).droppable("disable");
    enableNext("1");

  },/* This out code was used untill i disabled each spot's after dropping a tile on it so
  the out code serve's no purpose but leaving here for reference
    out: function(event, ui){
      wordScore -= spot1Score; // subtract this spots score before removing the values from the variable
      spot1Score = 0;
      updateWordScore();// updates the wordScore
      $(ui.draggable).removeClass("onBoard") // adds onBoard Class for taking a tile off the board

    },*/
    tolerance:"fit" // makes the tile need to be specificly on the spot
  }); // This droppable's comments apply for spots 1-7

  $("#spot2").droppable({
    drop: function(event, ui){
    spot2Score = parseInt(ui.draggable.attr("data-value"))
      wordScore += spot2Score;
      updateWordScore();
        $(ui.draggable).addClass("onBoard")
        $(ui.draggable).draggable("disable");
        $(this).droppable("disable");
          enableNext("2");
    },/*
    out: function(event, ui){
      wordScore -= spot2Score;
      spot2Score = 0;
      updateWordScore();
      $(ui.draggable).removeClass("onBoard")

    },*/
    tolerance:"fit"
  });

  $("#spot3").droppable({
    drop: function(event, ui){
    spot3Score = (parseInt(ui.draggable.attr("data-value"))*2) // * 2 for the bonus letter spot
      wordScore += spot3Score;
      updateWordScore();
      $(ui.draggable).addClass("onBoard")
      $(ui.draggable).draggable("disable");
      $(this).droppable("disable");
      enableNext("3");
    },/*
    out: function(event, ui){
        wordScore -= spot3Score;
      spot3Score = 0;
      updateWordScore();
      $(ui.draggable).removeClass("onBoard")
    },*/
    tolerance:"fit"
  });

  $("#spot4").droppable({
    drop: function(event, ui){
    spot4Score = parseInt(ui.draggable.attr("data-value"))
      wordScore += spot4Score;
      updateWordScore();
      $(ui.draggable).addClass("onBoard")
      $(ui.draggable).draggable("disable");
      $(this).droppable("disable");
        enableNext("4");
    },/*
    out: function(event, ui){
        wordScore -= spot4Score;
      spot4Score = 0;
      updateWordScore();
      $(ui.draggable).removeClass("onBoard")
    },*/
    tolerance:"fit"
  });

  $("#spot5").droppable({
    drop: function(event, ui){
    spot5Score = (parseInt(ui.draggable.attr("data-value"))* 2) // * 2 for the bonus letter spot
      wordScore += spot5Score;
      updateWordScore();
      $(ui.draggable).addClass("onBoard")
      $(ui.draggable).draggable("disable");
      $(this).droppable("disable");
        enableNext("5");
    },/*
    out: function(event, ui){
        wordScore -= spot5Score;
      spot5Score = 0;
      updateWordScore();
      $(ui.draggable).removeClass("onBoard")
    },*/
    tolerance:"fit"
  });

  $("#spot6").droppable({
    drop: function(event, ui){
    spot6Score = parseInt(ui.draggable.attr("data-value"))
    wordScore += spot6Score;
    updateWordScore();
    $(ui.draggable).addClass("onBoard")
    $(ui.draggable).draggable("disable");
    $(this).droppable("disable");
      enableNext("6");

    },/*
    out: function(event, ui){
      wordScore -= spot6Score;
      spot6Score = 0;
      updateWordScore();
      $(ui.draggable).removeClass("onBoard")
    },*/
    tolerance:"fit"
  });

  $("#spot7").droppable({
    drop: function(event, ui){
    spot7Score = parseInt(ui.draggable.attr("data-value"))
      wordScore += spot7Score;
      updateWordScore();
      $(ui.draggable).addClass("onBoard")
      $(ui.draggable).draggable("disable");
      $(this).droppable("disable");
      //enableNext("7"); here to see but not needed as nothing to be enabled after 7

    },/*
    out: function(event, ui){
        wordScore -= spot7Score;
      spot7Score = 0;
      updateWordScore();
      $(ui.draggable).removeClass("onBoard")
    },*/
    tolerance:"fit"
  });

  $("#Rack").droppable({
    drop: function(event, ui){
      $(ui.draggable).addClass("onRack") // adds onRack class to check for leftover tiles
    },
    tolerance:"fit"
  });

} );// end of $Function


// this function is to enable the next droppable after the one to the left has been filled
function enableNext(x){
  x++;
  $("#spot"+ x ).droppable("enable")
  //console.log("enabled: "+x)
}


//updates the word score html for every change to wordScore variable
function updateWordScore(){
  document.getElementById("header4").innerHTML= "Word Score: " + wordScore;
}


//updates the Total score html for every change to TotalScore variable
function countTotalScore(){
  totalScore += wordScore;
  document.getElementById("header3").innerHTML= "Total Score: " + totalScore;
}

//updates tiles remaing
function updateTilesRemaining(){
  document.getElementById("header5").innerHTML= "Tiles Remaining: " + tilesLeft;
}


// function to delete all tiles with class .newTiles
function deleteTiles(){
  console.log("outside delete if");
  while(document.querySelector(".onBoard")){
    console.log("inside delete if");
    var tempDiv = document.querySelector(".onBoard");
    tempDiv.parentNode.removeChild(tempDiv);
  }
}// end delete tiles


// function pertains to creating a new hand, ie reseting values, deleting used tiles and counting score
function newHand(){
  // re enable's spot 1 if a tile was dropped on it
  $("#spot1").droppable("enable");

  //disables all other spots so they may be enabled with the enableNext() function
  for(var i = 2; i<8;i++){
    $("#spot" + i).droppable("disable");
  }

  deleteTiles(); // Delete used Tiles
  countTotalScore();// updates total score

  spot1Score=0;
  spot2Score=0;
  spot3Score=0;
  spot4Score=0;
  spot5Score=0;
  spot6Score=0;
  spot7Score=0;
  wordScore=0;// reset all values to 0 for new hand
  updateWordScore(); // update word score to be 0 after resetting

  //calculate how many new tiles are needed
  var leftovers=0;
  leftovers = parseInt($('div.onRack').length);
  var newTilesNeeded = (7 - leftovers);

  // generating new tiles based off the leftovers
  for(var i=0;i<newTilesNeeded;i++){
    console.log("TilesLeft: " + tilesLeft);
    if (tilesLeft < 1){
      alert("No more tiles left to pull, click restart game to begin a new game!")
      return;
    }
    else {
      tilesLeft--;
    }
    updateTilesRemaining();
    randTileGen ();
  }
}// end of newHand()


// used w3 Scholls Rand Page https://www.w3schools.com/js/js_random.asp
function getRandTileNumber (){
  return Math.floor(Math.random() *(26 - 0 + 1) + 0 )
} // this random generates number from 0-26 inclusive


function randTileGen (){


  var tileNum = 0;
  tileNum = getRandTileNumber();
  var intToChar = 65; // uses for the fromn CharCode to int
  var index;

  // gets the index, manually if blank tile otherwise done in the if
  if (tileNum <26){
    intToChar = intToChar + tileNum;
    index = String.fromCharCode(intToChar);
  }
  else{
    index = "_"; // manually adds blank space is tileNum is 26 as _ doesnt come after Z in CharCode
  }

// chesk th at tileNum has tiles left
  while(ScrabbleTiles[index]['number-remaining'] < 1){
    tileNum = getRandTileNumber();

    if (tileNum <26){
      intToChar = 65;
      intToChar = intToChar + tileNum;
      index = String.fromCharCode(intToChar);
    }

    else{
    index = "_"; // manually adds blank space is tileNum is 26 as _ doesnt come after Z in CharCode
    }
  }// while end

  //cheks that there are tiles remaining
  if (ScrabbleTiles[index]['number-remaining'] > 0){
    // generate the tile, idea of how taken from our multiplication table generation HW
    var body = document.getElementsByTagName("body")[0];
    var tileDiv= document.createElement("div");
    tileDiv.setAttribute("id", "tile" + tileCount);
    tileDiv.setAttribute("class", "newTiles")
    tileDiv.setAttribute("data-value", ScrabbleTiles[index]["value"]);

    var tileInner= document.createElement("img");
    tileInner.setAttribute("src", ScrabbleTiles[index]['image']);
    tileInner.setAttribute("height", 75);
    tileInner.setAttribute("width", 75);

    body.appendChild(tileDiv);
    tileDiv.appendChild(tileInner);

    $("#tile" + tileCount).draggable({
      revert:"invalid"
    });
    $("#tile"+ tileCount).addClass("onRack");

    // lower the number of tiles remaining
    var newRemain = ScrabbleTiles[index]['number-remaining'];
    newRemain--;

    ScrabbleTiles[index]['number-remaining'] = newRemain;
    tileCount++; // up tile count for next tile generation
  } // if ends

  else{
    console.log(" ran out of tile shouldnt happen: " + index);
    return;
  }

}// TileGen end
function restartGame(){
  // reset values of variables
  tilesLeft=100;
  tileCount=0;

  spot1Score=0;
  spot2Score=0;
  spot3Score=0;
  spot4Score=0;
  spot5Score=0;
  spot6Score=0;
  spot7Score=0;

  wordScore=0;
  totalScore=0;

  // Delete all Tiles, even those on the rack to start fresh so special version of delete function
    console.log("outside  big delete if");
  while(document.querySelector(".newTiles")){
      console.log("inside  big delete if");
      var tempDiv = document.querySelector(".newTiles");
      tempDiv.parentNode.removeChild(tempDiv);
    }

  // refresh the tiles remaining count
  var intToChar = 65;

  for (var i = 0; i<26;i++){
    var index = String.fromCharCode(intToChar);
    ScrabbleTiles[index]['number-remaining'] = ScrabbleTiles[index]['original-distribution'];
  }
  //special case _
  ScrabbleTiles["_"]['number-remaining'] = ScrabbleTiles["_"]['original-distribution'];

  newHand(); // create new hand for new game
}


// start a hand when document is ready
$().ready(function(){
  newHand(); // call newHandto start
});

Connor Gonthier Connor_gonthier@student.uml.edu
HW8 Link:https://cgonthier424.github.io/Scrabble-GUI-1/
GitHub Link:https://github.com/CGonthier424/Scrabble-GUI-1


Implemented Features write-up:
Here I will step through the rubric laying out what i did for all main parts of it

Features:
-The Associated Array is implemented and tiles are pulled randomly from the data-structure with the proper distribution

-The letter tiles start on the tile rack and if they are not dropped onto an enabled board spot they revert back to the rack

-The program identifies which tiles where dropped onto which board spots and can properly count the score 
of the tile + if there is a bonus spot used

-The Player can keep submitting words and and getting more tiles untill they cannot pull enough tiles to 
fill up a hand of 7 at 
which they will submit the word to count score but an alert will tell they they need to start a new game

-The board is cleared after each round or "submit Word" as the button is named where used tiles are deleted and
 new tiles are pulled until the hand is full

-The total score is kept until restart game button is clicked, where the game is properly restarted and values
 are reset to original values

-Tiles cannot be moved once they are dropped onto the Scrabble board.

-All tiles must be placed following the first letter which must be placed on spot 1 
as the other spots are disabled untill the previous slot is filled.

-And at any time the game can be restarted by clicking restart game

Important Note:
You can only place the first tiles in the first slot then the other slots unlock is sequesntial order
as thats my understanding of the rubric.
Also once a tiles is placed it can no longer move. 
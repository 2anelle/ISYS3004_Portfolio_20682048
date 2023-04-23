/* I found the text to speech code at the following URL.
I wrapped into a function.
https://dev.to/asaoluelijah/text-to-speech-in-3-lines-of-javascript-b8h
*/
function say(myMessage){
    var msg = new SpeechSynthesisUtterance(myMessage);
     window.speechSynthesis.speak(msg);
    }
  
/* This is a simplified version of the game. The Computer ALWAYS picks ROCK. Does the user's choose win, lose, or tie vs ROCK? */
/* Let user choose a letter */
    function play(user) {
        let result = "";
        /* If user chooses rock, the result will output as tie */
        if (user === 'rock') {
            result = "tie";
        }
        /* If user chooses paper, the result will output as win */
        if (user === 'paper') {
              result = "win";
        }
        /* If user chooses scissors, the result will output as lose */
        if (user === 'scissors') {
            result = "lose";
        }

        /* Device will pay this sound out */
        var theMessage= "Computer chose rock, you " + result + "!";
        
        alert(theMessage);
        say(theMessage);
    }
    
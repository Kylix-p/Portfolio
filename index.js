const dynamicContent = document.getElementById("dynamic-text");

const phrases = ["Lodu Lalit...", "Chutiya...", "Gandu..."];
let phraseIndex = 0;
let letterIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 75;

console.log(phrases);
function printletter(phrase) {
    if (letterIndex == phrase.length) {
        // clear the letter which has been typed
        clearLetters();
    }
    else if (letterIndex < phrase.length) {
        
        console.log(phrase.length);
        dynamicContent.textContent += phrase.charAt(letterIndex);
        console.log(dynamicContent.textContent);
        letterIndex += 1;
        console.log("this is "+letterIndex);
        setTimeout(function () {
            printletter(phrase)
        }, 200)
    }
}

function clearLetters () {
    if (letterIndex == -1) {
        console.log("clear "+letterIndex);
        phraseIndex = (phraseIndex+1) % phrases.length;
        console.log("phraseIndex "+phraseIndex);
        letterIndex = 0;
        printletter(phrases[phraseIndex]);
    }
    else if (letterIndex > -1) {
        console.log("clear else"+letterIndex);
        let updatedPhrase = "";
        for (let index = 0; index < letterIndex; index++) {
            updatedPhrase += phrases[phraseIndex].charAt(index);
            console.log("updated "+updatedPhrase);
        }
        dynamicContent.textContent = updatedPhrase;
        letterIndex -= 1;
        setTimeout(clearLetters,100)
    }
}

printletter(phrases[phraseIndex]);
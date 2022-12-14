document.addEventListener("DOMContentLoaded", function() {

    const autoTyping = document.getElementById("dynamic-text");
    
const arrayWord = ["Programmer...","Mentor...","Web developer..."];
let letterIndex = 0;
let arrayCounter = 0;

function printLetters(phrase) {
    if (letterIndex == phrase.length) {
        removeElement();
    }
    else if (letterIndex < phrase.length) {
        autoTyping.textContent += phrase.charAt(letterIndex);
        letterIndex +=1;

        setTimeout(function() {
            printLetters(phrase)
        },200)
    }
}

function removeElement () {
    if (letterIndex == -1) {
        arrayCounter = (arrayCounter+1) % arrayWord.length;
        letterIndex = 0;
        printLetters(arrayWord[arrayCounter]);
    }
    else if (letterIndex > -1) {
        let updateArray = "";
        for (let index = 0; index < letterIndex; index++) {
            updateArray += arrayWord[arrayCounter].charAt(index);
        }
        autoTyping.textContent = updateArray;
        letterIndex -= 1;
        setTimeout(removeElement,100)
    }
}
printLetters(arrayWord[arrayCounter]);

})
const text = document.getElementById("typing-text");
const words = ["Software Developer", "Data Analyst", "Web Developer"];
let index = 0;
let currentWord = "";
let letter = 0;

function type() {
    if (letter < words[index].length) {
        currentWord += words[index][letter];
        text.textContent = currentWord;
        letter++;
        setTimeout(type, 100);
    } else {
        index++;
        if (index === words.length) index = 0;
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (letter > 0) {
        currentWord = currentWord.slice(0, -1);
        text.textContent = currentWord;
        letter--;
        setTimeout(erase, 50);
    } else {
        setTimeout(type, 1000);
    }
}

type();
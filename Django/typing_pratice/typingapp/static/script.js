const quotes = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "To be or not to be, that is the question.",
    "All that glitters is not gold.",
    "In the midst of chaos, there is also opportunity."
];

let successfulAttempts = 0;
let totalAttempts = 0;
let currentQuote = "";
let intervalBetweenWords = 200;
let practiceInProgress = false;
let runningTimeInterval;

const newWordAudio = new Audio('new_word_sound.mp3');
const correctWordAudio = new Audio('correct_word_sound.mp3');
const incorrectLetterAudio = new Audio('incorrect_letter_sound.mp3');

//used to bring the random quotes
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}
 

function displayWordsWithInterval(quote) {
    const words = quote.split(" ");
    const quoteElement = document.getElementById("quote");
    quoteElement.innerHTML = ""; 

   
    words.forEach((word, index) => {
        const wordSpan = document.createElement("span");
        wordSpan.textContent = word + " "; 
        wordSpan.id = `word-${index}`; 

      
        quoteElement.appendChild(wordSpan);
    });
}

// fucntion for highlighting
function highlightWord(wordIndex, isCorrect) {
    const wordSpan = document.getElementById(`word-${wordIndex}`);
    if (isCorrect) {
        wordSpan.style.backgroundColor = "lightgreen";
    } else {
        wordSpan.style.backgroundColor = "lightcoral";
    }
}

function clearWordHighlights() {
    const quoteElement = document.getElementById("quote");
    quoteElement.querySelectorAll("span").forEach(wordSpan => {
        wordSpan.style.backgroundColor = ""; 
    });
}

function updateRunningTime(startTime) {
    const currentTime = new Date().getTime();
    const elapsedTime = (currentTime - startTime) / 1000;
    document.getElementById("running-time").textContent = `Running Time: ${elapsedTime.toFixed(2)} seconds`;
}

function startPractice() {
    practiceInProgress = true;
    currentQuote = getRandomQuote();
    document.getElementById("quote").textContent = "";
    displayWordsWithInterval(currentQuote);
    const input = document.getElementById("input");
    const promptWordInput = document.getElementById("prompt-word");
    const words = currentQuote.split(" ");
    let wordIndex = 0;
    promptWordInput.value = words[wordIndex];
    input.value = "";
    input.focus();
    document.getElementById("try-again-message").classList.add("hidden");
    document.getElementById("congratulations-message").classList.add("hidden");
    document.getElementById("total-attempts").textContent = `Total attempts: ${totalAttempts}`;

    const startTime = new Date().getTime();
    runningTimeInterval = setInterval(() => {
        updateRunningTime(startTime);
    }, 1000);

    let prevWordEndTime = startTime;

    newWordAudio.play();

    input.oninput = function(e) {
        const typedText = input.value.trim();
        const currentTypedWord = typedText.split(" ").pop();
        const currentPromptWord = words[wordIndex];
        
        if (currentTypedWord === currentPromptWord) {
            
            highlightWord(wordIndex, true);
            input.value = ""; 
            wordIndex++; 
            if (wordIndex < words.length) {
              
                promptWordInput.value = words[wordIndex];
                correctWordAudio.play(); 
            } else {
          
                successfulAttempts++;
                totalAttempts++;
                clearInterval(runningTimeInterval);
                const endTime = new Date().getTime();
                const totalTime = (endTime - startTime) / 1000;
                const wpm = Math.round((currentQuote.split(" ").length / totalTime) * 60);
                document.getElementById("successful-attempts").textContent = `Successful attempts: ${successfulAttempts}`;
                document.getElementById("total-attempts").textContent = `Total attempts: ${totalAttempts}`;
                document.getElementById("results").innerHTML = `Time: ${totalTime} seconds | Speed: ${wpm} WPM`;
                document.getElementById("congratulations-message").classList.remove("hidden");
                setTimeout(() => {
                    document.getElementById("congratulations-message").classList.add("hidden");
                    startPractice(); 
                }, 2000);
            }
        } else if (currentPromptWord.startsWith(currentTypedWord)) {
           
            highlightWord(wordIndex, false); 
        } else {
          
            highlightWord(wordIndex, false);
            input.classList.add("flash");
            setTimeout(() => {
                input.classList.remove("flash");
                input.value = ""; 
            }, 500);
            document.getElementById("try-again-message").classList.remove("hidden");
            document.getElementById("congratulations-message").classList.add("hidden"); 
            incorrectLetterAudio.play(); 
        }
    };

    input.onkeydown = function(e) {
        if (e.key === "Backspace" && input.value === "") {
            e.preventDefault(); 
            if (wordIndex > 0) {
             
                wordIndex--;
                promptWordInput.value = words[wordIndex];
                clearWordHighlights(); 
            }
        }
    };
}

function stopPractice() {
    practiceInProgress = false;
    clearInterval(runningTimeInterval);
    const input = document.getElementById("input");
    input.value = "";
    input.oninput = null;
    input.onkeydown = null;
    document.getElementById("start-button").classList.remove("hidden");
    document.getElementById("stop-button").classList.add("hidden");
    clearWordHighlights();
}

document.getElementById("start-button").addEventListener("click", function() {
    if (!practiceInProgress) {
        startPractice();
        document.getElementById("start-button").classList.add("hidden");
        document.getElementById("stop-button").classList.remove("hidden");
    }
});

document.getElementById("stop-button").addEventListener("click", stopPractice);


displayWordsWithInterval(currentQuote);
updateRunningTime(0);
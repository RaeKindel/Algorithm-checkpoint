console.log("hello world")

function countSentenceInfo(sentence) {
    let sentenceLength = 0;
    let wordCount = 0;
    let vowelCount = 0;

    for (let i = 0; i < sentence.length; i++) {
        const currentCharacter = sentence[i];

        if (currentCharacter !== '.') {
            sentenceLength++;

            if (isLetter(currentCharacter)) {
                if (isVowel(currentCharacter)) {
                    vowelCount++;
                }
            }

            if (currentCharacter === ' ') {
                wordCount++;
            }
        }
    }

    // Account for the last word ending at the point
    wordCount++;

    return {
        sentenceLength,
        wordCount,
        vowelCount
    };
}

function isLetter(char) {
    return /^[A-Za-z]$/.test(char);
}

function isVowel(char) {
    return /^[aeiouAEIOU]$/.test(char);
}

// Example usage:
const inputSentence = "This is a sample sentence.";
const result = countSentenceInfo(inputSentence);
console.log(result.sentenceLength); // Output: 24
console.log(result.wordCount);     // Output: 5
console.log(result.vowelCount);    // Output: 8
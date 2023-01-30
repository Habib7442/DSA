const numToWords = (num) => {
    let digitToWord = ["zero", "one", "two", "three", "four", "five", "six", 
    "seven", "eight", "nine"];

    let words = [];
    let str = num.toString();

    for(let i=0; i<str.length; i++) {
        words.push(digitToWord[str[i]]);
    }

    return words.join(" ");
}

console.log(numToWords(542))
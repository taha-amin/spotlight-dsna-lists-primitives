function reverseWords(sentence) {
  //split the sentence
  //map over the split sentence
  //reverse the arr
  //join it all
  let reversedSentence = sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""));
  return reversedSentence.join(" ");
}

function titleCaseWords(sentence) {
  //split sentece
  //map through each word and uppercase each word at index 0
  //join sentence back together

  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice[1].toLowerCase())
    .join(" ");

  //make sentence all lowercase
  //split sentence
  //map through each word
  //use charAt for first letter and make that uppercase
  //join sentence back together
  //   let caseWords = sentence
  //     .toLowerCase()
  //     .split(" ")
  //     .map((word) => {
  //       word.charAt(0).toUpperCase() + word.slice(1);
  //     });
  //   return caseWords.join(" ");
}
function oddishOrEvenish(number) {
  //split the number
  //turn the strings into numbers
  //then use .reduce add the numbers
  // use the remainder in an if statement, if % = 1 return oddish else evenish
  let x = number
    .toString(number)
    .split("")
    .map(Number)
    .reduce((acc, sum) => acc + sum, 0);
  return x % 2 === 1 ? "Oddish" : "Evenish";
}

function at(arr, index) {
  x = arr[index];
  console.log("here is x", x);
  return x;
}

module.exports = { reverseWords, titleCaseWords, oddishOrEvenish, at };

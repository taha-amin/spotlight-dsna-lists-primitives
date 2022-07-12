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

module.exports = { reverseWords, titleCaseWords };

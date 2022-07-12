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
  //make sentence all lowercase
  //split sentence
  //map through each word
  //use charAt for first letter and make that uppercase
  //join sentence back together
  sentence
    .toLowerCase()
    .split(" ")
    .map((word) => {
      word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

module.exports = { reverseWords, titleCaseWords };

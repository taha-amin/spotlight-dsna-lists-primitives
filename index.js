function reverseWords(sentence) {
    //split the sentence
    //map over the split sentence 
    //reverse the arr 
    //join it all 
    let reversedSentence = sentence.split(" ")
    .map(word => word.split("")
    .reverse()
    .join(""));
    return reversedSentence.join(" ");
    
}


module.exports = { reverseWords };

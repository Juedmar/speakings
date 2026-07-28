function myFunctionThree() {
 idArray = new Array()

 // UNIT 10 - GRAMMAR: Superlative adjectives, be going to (plans), be going to for predictions.
 // UNIT 10 - VOCABULARY: places & buildings, future time expressions, city vacations, verb phrases.

 idArray [1] = "<b>TOPIC C:</b> Answer this question: What's <u>the worst recent movie</u>? (Unit 10)."
 idArray [2] = "<b>TOPIC C:</b> Answer this question: What's <u>the greatest TV series you've watched</u>? (Unit 10)."
 idArray [3] = "<b>TOPIC C:</b> Answer this question: What's <u>the weirdest movie you have ever seen</u>? (Unit 10)."
 idArray [4] = "<b>TOPIC C:</b> Answer this question: What's <u>the most delicious meal you've ever eaten</u>? (Unit 10)."
 idArray [5] = "<b>TOPIC C:</b> Answer this question: What's <u>the most addictive game you've ever played</u>? (Unit 10)."
 idArray [6] = "<b>TOPIC C:</b> Answer this question: What's <u>the strangest restaurant or bar you've been to</u>? (Unit 10)."
 idArray [7] = "<b>TOPIC C:</b> Answer this question: Who is <u>your best friend? Why are they your best friend</u>? (Unit 10)."
 idArray [8] = "<b>TOPIC C:</b> Answer this question: What's <u>the most popular tourist attraction in this country</u>? (Unit 10)."

document.getElementById("select3").onclick = myFunctionThree;
randomParagraph = Math.floor(Math.random()*8);

document.getElementById("result-three").innerHTML = idArray[randomParagraph + 1];       
}
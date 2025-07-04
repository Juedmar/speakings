function myFunctionThree() {
 idArray = new Array()

 // UNIT 11 - GRAMMAR: Verbs + infinitive (want, need, hope, expect... to), THE Definite Article (the / NO the).
 // UNIT 11 - VOCABULARY: Verbs that take the infinitive, Common adverbs of manner & modifiers, phones & the internet.

 idArray [1] = "<b>TOPIC 3:</b> Talk about <u>something you always forget to do.</u> Explain. (Unit 11)."
 idArray [2] = "<b>TOPIC 3:</b> Talk about <u>something you hope to do in the future.</u> Why? (Unit 11)."
 idArray [3] = "<b>TOPIC 3:</b> Talk about some <u>places you want/hope to go on vacation</u> some day. Why? (Unit 11)."
 idArray [4] = "<b>TOPIC 3:</b> What are <u>some of your wishes for the future</u>, either in your personal life, family life or professional aspirations? (Unit 11)."
 idArray [5] = "<b>TOPIC 3:</b> Talk about what you<u> want, hope or expect to do after you graduate.</u> What other wishes or life goals <u>will you try to accomplish</u>? (Unit 11)."

 // UNIT 12 - GRAMMAR: Perfect Present, Present Perfect or Simple Past?
 // UNIT 12 - VOCABULARY: Irregular verbs, Irregular Past Participles.

 idArray [6] = "<b>TOPIC 3:</b> Talk about some <u>interesting hobbies have you tried</u>. Why did you like doing them? (Unit 7 & 12)."
 idArray [7] = "<b>TOPIC 3:</b> Talk about <u>some of the places where you've been on vacation</u>. What did you do there? (Unit 7 & 12)."
 idArray [8] = "<b>TOPIC 3:</b> Talk about <u>some interesting places you've been to in this country</u>. What did you do there? (Unit 7 & 12)."
 idArray [9] = "<b>TOPIC 3:</b> Talk about <u>how many times have you been to a concert or a theme park</u>? What did you do there? (Unit 7 & 12)."
 idArray [10] = "<b>TOPIC 3:</b> Talk about <u>something you have done in your free time for entertainment</u>. Mention where, when and who you have done this with. (Unit 12)."
 idArray [11] = "<b>TOPIC 3:</b> Have you <u>ever been hospitalized or very sick at home</u>? Mention what happened to you, what the doctors or parents told you, what you did to get better, and the final result. (Unit 7 & 12)."
 idArray [12] = "<b>TOPIC 3:</b> Talk about a <u>medical problem you have experienced</u>, including symptoms, treatment, recovery time, advice & prevention, etc. (Unit 7 & 12)."

 document.getElementById("select3").onclick = myFunctionThree;
 randomParagraph = Math.floor(Math.random()*12);

 document.getElementById("result-three").innerHTML = idArray[randomParagraph + 1];
}
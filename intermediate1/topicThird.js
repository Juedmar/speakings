function myFunctionThree() {
  idArray = new Array()
  idArray [1] = "<b>TOPIC 1:</b> Talk about some <u>interesting hobbies have you tried</u>. Why did you like doing them? (Unit 4: Present Perfect & Past Simple)."
  idArray [2] = "<b>TOPIC 1:</b> Talk about <u>some of the places where you've been on vacation</u>. What did you do there? (Unit 4: Present Perfect & Past Simple)."
  idArray [3] = "<b>TOPIC 1:</b> Talk about <u>some interesting places you've been to in this country</u>. What did you do there? (Unit 4: Present Perfect & Past Simple)."
  idArray [4] = "<b>TOPIC 1:</b> Talk about <u>how many times have you been to a concert or a theme park</u>? What did you do there? (Unit 4: Present Perfect & Past Simple)."
  idArray [5] = "<b>TOPIC 1:</b> Talk about <u>something you have done in your free time for entertainment</u>. Mention where, when and who you have done this with. (Unit 4: Present Perfect & Past Simple)."
  idArray [6] = "<b>TOPIC 1:</b> Have you <u>ever been hospitalized or very sick at home</u>? Mention what happened to you, what the doctors or parents told you, what you did to get better, and the final result. (Unit 4: Present Perfect & Past Simple)."
  idArray [7] = "<b>TOPIC 1:</b> Talk about a <u>medical problem you have experienced</u>, including symptoms, treatment, recovery time, advice & prevention, etc. (Unit 4: Present Perfect & Past Simple)."

  document.getElementById("select3").onclick = myFunctionThree;
  randomParagraph = Math.floor(Math.random()*7);

  document.getElementById("result-three").innerHTML = idArray[randomParagraph + 1];       
}
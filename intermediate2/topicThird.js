function myFunctionThree() {
  idArray = new Array()
  idArray [1] = "<b>TOPIC 3:</b> Talk about some <u>interesting hobbies have you tried</u>. Why did you like doing them? (Unit 9B & 9C)."
  idArray [2] = "<b>TOPIC 3:</b> Talk about <u>some of the places where you've been on vacation</u>. What did you do there? (Unit 9B & 9C)."
  idArray [3] = "<b>TOPIC 3:</b> Talk about <u>some interesting places you've been to in this country</u>. What did you do there? (Unit 9B & 9C)."
  idArray [4] = "<b>TOPIC 3:</b> Talk about <u>how many times have you been to a concert or a theme park</u>? What did you do there? (Unit 9B & 9C)."
  idArray [5] = "<b>TOPIC 3:</b> Talk about <u>something you have done in your free time for entertainment</u>. Mention where, when and who you have done this with. (Unit 9B & 9C)."
  idArray [6] = "<b>TOPIC 3:</b> Have you <u>ever been hospitalized or very sick at home</u>? Mention what happened to you, what the doctors or parents told you, what you did to get better, and the final result. (Unit 9B & 9C)."
  idArray [7] = "<b>TOPIC 3:</b> Talk about a <u>medical problem you have experienced</u>, including symptoms, treatment, recovery time, advice & prevention, etc. (Unit 9B & 9C)."

  idArray [8] = "<b>TOPIC 3:</b> In <u>what country were the greatest works of art created</u>? Who was it made by? (Unit 10A)."
  idArray [9] = "<b>TOPIC 3:</b> What is <u>the greatest invention ever created</u>? Who was it invented by? Where was it invented? (Unit 10A)."

  idArray [10] = "<b>TOPIC 3:</b> Talk about all the <u>things you used to do when you were in high school</u>. Mention the activities, the places, the people, the food, hobbies, frequency, etc. (Unit 10B)."
  idArray [11] = "<b>TOPIC 3:</b> Talk to each other about <u>your childhood hobbies and pastimes</u>. Mention all the things you used to do, the frequency, games, toys, TV shows, favorite meals, etc. (Unit 10B)."

  document.getElementById("select3").onclick = myFunctionThree;
  randomParagraph = Math.floor(Math.random()*11);

  document.getElementById("result-three").innerHTML = idArray[randomParagraph + 1];       
}
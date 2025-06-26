function myFunctionThree() {
  idArray = new Array()

  // Present Perfect
  idArray [1] = "<b>TOPIC 3:</b> Talk about some <u>interesting hobbies HAVE you TRIED</u>. Why did you like doing them? (Unit 9B & 9C)."
  idArray [2] = "<b>TOPIC 3:</b> Talk about <u>some of the places where you HAVE BEEN on vacation</u>. What did you do there? (Unit 9B & 9C)."
  idArray [3] = "<b>TOPIC 3:</b> Talk about <u>some interesting places you HAVE BEEN to in this country</u>. What did you do there? (Unit 9B & 9C)."
  idArray [4] = "<b>TOPIC 3:</b> Talk about <u>how many times HAVE you BEEN to a concert or a theme park</u>? What did you do there? (Unit 9B & 9C)."
  idArray [5] = "<b>TOPIC 3:</b> Talk about <u>something you HAVE DONE in your free time for entertainment</u>. Mention where, when and who you have done this with. (Unit 9B & 9C)."
  idArray [6] = "<b>TOPIC 3:</b> HAVE you <u>ever BEEN hospitalized or very sick at home</u>? Mention what happened to you, what the doctors or parents told you, what you did to get better, and the final result. (Unit 9B & 9C)."
  idArray [7] = "<b>TOPIC 3:</b> Talk about a <u>medical problem you HAVE EXPERIENCED</u>, including symptoms, treatment, recovery time, advice & prevention, etc. (Unit 9B & 9C)."

  // Passive voice
  idArray [8] = "<b>TOPIC 3:</b> How <u>IS a delicious breakfast PREPARED</u>? What are the steps for making it?"
  idArray [9] = "<b>TOPIC 3:</b> What are <u>the most important human discoveries or inventions</u>? When <u>WERE they DISCOVERED/INVENTED</u>? By whom were they discovered/invented? (Unit 10C)."
  idArray [10] = "<b>TOPIC 3:</b> What's the greatest invention of all times? <u>Where was it invented?</u> Why was it invented?"
  idArray [11] = "<b>TOPIC 3:</b> What are <u>your favorite movies</u>? By whom where they directed? Were they based on any books? (Unit 10C)."

  // Used to
  idArray [12] = "<b>TOPIC 3:</b> What games <u>did you use to play</u> when you were young? Mention everything you can, such as the rules, gear, toys, places, people, etc. (Unit 11A)"
  idArray [13] = "<b>TOPIC 3:</b> Talk about all the <u>things you used to do when you were in high school</u>. Mention the activities, the places, the people, the food, hobbies, frequency, etc. (Unit 11A)."
  idArray [14] = "<b>TOPIC 3:</b> Talk to each other about <u>your childhood hobbies and pastimes</u>. Mention all the things you used to do, the frequency, games, toys, TV shows, favorite meals, etc. (Unit 11A)."
  idArray [15] = "<b>TOPIC 3:</b> What <u>would you usually do after school finished</u> when you were younger? How would you get home from elementary school? (Unit 11A)."

  // Past Perfect
  idArray [16] = "<b>TOPIC 3:</b> <u>What interesting books had you read</u> (red) before the start of your university studies? Mention the titles, stories, the authors, etc. (Unit 12A)."
  idArray [17] = "<b>TOPIC 3:</b> <u>Had you learned to cook</u> before starting university / moving out of your parents' house? What meals had you prepared the most? (Unit 12A)."

  document.getElementById("select3").onclick = myFunctionThree;
  randomParagraph = Math.floor(Math.random()*17);

  document.getElementById("result-three").innerHTML = idArray[randomParagraph + 1];       
}
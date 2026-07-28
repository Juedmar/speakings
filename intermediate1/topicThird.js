function myFunctionThree() {
  idArray = new Array()

  // UNIT 4: Present Perfect + yet & already, housework (make or do), Present Perfect or Past Simple.
  idArray [1] = "<b>TOPIC C:</b> What are some <u>strange types of food you’ve eaten?</u> (Unit 4)"
  idArray [2] = "<b>TOPIC C:</b> <u>Have you ever been camping? Where have you camped?</u> (Unit 4)"
  idArray [3] = "<b>TOPIC C:</b> Where are some <u>interesting places you’ve been in your country?</u> (Unit 4)"
  idArray [4] = "<b>TOPIC C:</b> <u>Have you ever broken any bones?</u> Which ones have you broken? What happened? (Unit 4)"
  idArray [5] = "<b>TOPIC C:</b> How many times <u>have you been to a theme park / fun fair?</u> Which ones have you been to? (Unit 4)"
  idArray [6] = "<b>TOPIC C:</b> <u>Have you tried Japanese or Mexican food?</u> How was it? What other international cuisine have you tried? (Unit 4)"

  idArray [7] = "<b>TOPIC C:</b> Talk about some <u>interesting hobbies have you tried</u>. Why did you like doing them? (Unit 4)"
  idArray [8] = "<b>TOPIC C:</b> Talk about <u>some of the places where you've been on vacation</u>. What did you do there? (Unit 4)"
  idArray [9] = "<b>TOPIC C:</b> Talk about <u>some interesting places you've been to in this country</u>. What did you do there? (Unit 4)"
  idArray [10] = "<b>TOPIC C:</b> Talk about <u>how many times have you been to a concert or a theme park</u>? What did you do there? (Unit 4)"
  idArray [11] = "<b>TOPIC C:</b> Talk about <u>something you have done in your free time for entertainment</u>. Mention where, when and who you have done this with. (Unit 4)"

  // UNIT 4: Shopping, Vocabulary (something, anything, nothing), adjective endings -ed & -ing.
  // NOTHING!	

  document.getElementById("select3").onclick = myFunctionThree;
  randomParagraph = Math.floor(Math.random()*11);

  document.getElementById("result-three").innerHTML = idArray[randomParagraph + 1];       
}
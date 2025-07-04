function myFunctionTwo() {
  idArray = new Array()

  // UNIT 3: be going to (plans & predictions), airports, Present Continuous (future arrangements).
  idArray [1] = "<b>TOPIC 2:</b> Talk about <u>something you hope to do in the future.</u> Why? (Unit 3)"
  idArray [2] = "<b>TOPIC 2:</b> Talk about some <u>places you want/hope to go on vacation</u> some day. Why? (Unit 3)"
  idArray [3] = "<b>TOPIC 2:</b> Talk about <u>some of the activities/hobbies you're considering doing?</u> What are they? Explain why. (Unit 3)"
  idArray [4] = "<b>TOPIC 2:</b> What are <u>some of your wishes for the future</u>, either in your personal life, family life or professional aspirations? (Unit 3)"
  idArray [5] = "<b>TOPIC 2:</b> Talk about what you<u> want, hope or expect to do after you graduate.</u> What other wishes or life goals <u>will you try to accomplish</u>? (Unit 3)"

  // UNIT 3: Defining relative clauses.
  // NOTHING!

  // UNIT 4: Present Perfect + yet & already, housework (make or do), Present Perfect or Past Simple.
  idArray [6] = "<b>TOPIC 2:</b> What are some <u>strange types of food you’ve eaten?</u> (Unit 4)"
  idArray [7] = "<b>TOPIC 2:</b> <u>Have you ever been camping? Where have you camped?</u> (Unit 4)"
  idArray [8] = "<b>TOPIC 2:</b> Where are some <u>interesting places you’ve been in your country?</u> (Unit 4)"
  idArray [9] = "<b>TOPIC 2:</b> <u>Have you ever broken any bones?</u> Which ones have you broken? What happened? (Unit 4)"
  idArray [10] = "<b>TOPIC 2:</b> How many times <u>have you been to a theme park / fun fair?</u> Which ones have you been to? (Unit 4)"
  idArray [11] = "<b>TOPIC 2:</b> <u>Have you tried Japanese or Mexican food?</u> How was it? What other international cuisine have you tried? (Unit 4)"

  idArray [12] = "<b>TOPIC 2:</b> Talk about some <u>interesting hobbies have you tried</u>. Why did you like doing them? (Unit 4)"
  idArray [13] = "<b>TOPIC 2:</b> Talk about <u>some of the places where you've been on vacation</u>. What did you do there? (Unit 4)"
  idArray [14] = "<b>TOPIC 2:</b> Talk about <u>some interesting places you've been to in this country</u>. What did you do there? (Unit 4)"
  idArray [15] = "<b>TOPIC 2:</b> Talk about <u>how many times have you been to a concert or a theme park</u>? What did you do there? (Unit 4)"
  idArray [16] = "<b>TOPIC 2:</b> Talk about <u>something you have done in your free time for entertainment</u>. Mention where, when and who you have done this with. (Unit 4)"

  // UNIT 4: Shopping, Vocabulary (something, anything, nothing), adjective endings -ed & -ing.
  // NOTHING!	

  document.getElementById("select2").onclick = myFunctionTwo;
  randomParagraph = Math.floor(Math.random()*16);

  document.getElementById("result-two").innerHTML = idArray[randomParagraph + 1];       
}
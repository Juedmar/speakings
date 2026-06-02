function myFunctionTwo() {
  idArray = new Array()

  // UNIT 2: Simple Past (regular & irregular verbs), Vacations, Regular verbs (-ed endings), Past Continuous, time sequencers and connectors.
  idArray [1] = "<b>TOPIC:</b> What was <u>a funny movie you watched recently?</u> What happened to the characters? (Unit 2B)"
  idArray [2] = "<b>TOPIC:</b> Talk about the <u>last time you went out</u> with a friend or family member. You can say <u>where you went, what you did</u> and why. (Unit 2B)"
  idArray [3] = "<b>TOPIC:</b> What was <u>the last movie you saw in the cinema</u>? Talk about what the main story was, who were the main characters, what happened to them. (Unit 2B)"
  idArray [4] = "<b>TOPIC:</b> Tell me a stody about <u>your last trip on summer vacation, including what you were doing at the time</u>, including the people you were with, the food you ate, etc. (Unit 2B)"

  // UNIT 3: be going to (plans & predictions), airports, Present Continuous (future arrangements).
  idArray [5] = "<b>TOPIC:</b> Talk about <u>something you hope to do in the future.</u> Why? (Unit 3)"
  idArray [6] = "<b>TOPIC:</b> Talk about some <u>places you want/hope to go on vacation</u> some day. Why? (Unit 3)"
  idArray [7] = "<b>TOPIC:</b> Talk about <u>some of the activities/hobbies you're considering doing?</u> What are they? Explain why. (Unit 3)"
  idArray [8] = "<b>TOPIC:</b> What are <u>some of your wishes for the future</u> in your personal life, family life or professional aspirations? (Unit 3)"
  idArray [9] = "<b>TOPIC:</b> Talk about what you<u> want, hope or expect to do after you graduate.</u> What other wishes or life goals <u>will you try to accomplish</u>? (Unit 3)"

  // UNIT 3/6: Will / won't (predictions), Will / won't (other uses).
  idArray [10] = "<b>TOPIC:</b> Talk about <u>what you will do when you retire.</u> (Unit 3/6)."
  idArray [11] = "<b>TOPIC:</b> Talk about <u>how your life will be like in 5 years.</u> (Unit 3/6)."
  idArray [12] = "<b>TOPIC:</b> Talk about <u>how video games will be like in 7 years.</u> (Unit 3/6)."
  idArray [13] = "<b>TOPIC:</b> Talk about <u>how communication will change in the future.</u> (Unit 3/6)."
  idArray [14] = "<b>TOPIC:</b> Talk about <u>how entertainment will change in the future.</u> (Unit 3/6)."
  idArray [15] = "<b>TOPIC:</b> Talk about <u>how you think the world will look like in 50 years.</u> (Unit 3/6)."
  idArray [16] = "<b>TOPIC:</b> Talk about <u>how robots will become part of daily life in the future.</u> (Unit 3/6)."
  idArray [17] = "<b>TOPIC:</b> Talk about <u>how the future will be better or worse than the present. How will things change?</u> (Unit 3/6)."
  idArray [18] = "<b>TOPIC:</b> Talk about <u>what companies will change society the most. Will it be a good change or bad change.</u> (Unit 3/6)."

  // UNIT 3B: Defining relative clauses.
  // NOTHING!

  document.getElementById("select2").onclick = myFunctionTwo;
  randomParagraph = Math.floor(Math.random()*18);

  document.getElementById("result-two").innerHTML = idArray[randomParagraph + 1];       
}
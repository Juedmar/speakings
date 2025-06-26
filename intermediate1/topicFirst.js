function myFunctionOne() {
  idArray = new Array()

  // UNIT 1: Word order in questions (are you? can you? do you?), Verb phrases, The alphabet, Simple Present, Describing people, Appearance & Personality.
  idArray [1] = "<b>TOPIC 1:</b> <u>What's a typical Saturday for you?</u> Describe what you generally do and what you don't do on this day. (Unit 1)"
  idArray [2] = "<b>TOPIC 1:</b> <u>What do you usually do on Friday nights?</u> Talk about what you usually do at the end of the week, including the activities, frequency, times, locations, etc. (Unit 1)"
  idArray [3] = "<b>TOPIC 1:</b> <u>Talk about your pastimes & hobbies</u>. Mention what activities you like doing, when you do them, how frequent, why you like them, etc. Do you do them by yourself, or with your friends? (Unit 1)"

  // UNIT 1: Describing people, Appearance & Personality, Clothes.
  idArray [4] = "<b>Topic 3:</b> Talk about <u>a family member or a person you know well</u>. You can mention their name & appearance... but, most importantly, what she/he does, daily activities & routines, hobbies, etc. (Unit 3).</u>"

  // UNIT 1: Present Continuous, Prepositions of place.
  idArray [4] = "<b>TOPIC 1:</b> Talk about <u>all the things you are doing right now</u> in your life, including your personal life, education, music, hobbies, etc. Mention why you like doing them. (Unit 1)"
  idArray [5] = "<b>TOPIC 1:</b> Imagine you are in the middle of a busy city area. <u>Describe the things that are happening & mention all there is around you</u> at that moment. You can use your imagination. (Unit 1)"
  idArray [6] = "<b>TOPIC 1:</b> Look outside your window / outside your front door. <u>Describe all the things that are happening at that moment, including all there is around you</u>. (Unit 1)"

  // UNIT 2: Simple Past (regular & irregular verbs), Vacations, Regular verbs (-ed endings), Past Continuous, time sequencers and connectors.
  idArray [7] = "<b>TOPIC 1:</b> What was <u>the last restaurant you went to?</u> How was it? What did you eat? (Unit 2)"
  idArray [8] = "<b>TOPIC 1:</b> What was <u>the last movie you saw? How was it?</u> What happened to the characters? (Unit 2)"
  idArray [9] = "<b>TOPIC 1:</b> What was <u>a funny movie you watched recently?</u> What happened to the characters? (Unit 2)"
  idArray [10] = "<b>TOPIC 1:</b> Were you <u>a well behaved child?</u> What did you usually do to get into trouble? Explain. (Unit 2)"

  idArray [11] = "<b>TOPIC 1:</b> Talk about the <u>last time you went out</u> with a friend or family member. You can say <u>where you went, what you did</u> and why. (Unit 2)"
  idArray [12] = "<b>TOPIC 1:</b> What was <u>the last movie you saw in the cinema</u>? Talk about what the main story was, who were the main characters, what happened to them. (Unit 2)"
  idArray [13] = "<b>TOPIC 1:</b> Talk about <u>your last trip on summer vacation, including the activities you did</u>, including the people you were with, the food you ate, etc. (Unit 2)"
  idArray [14] = "<b>TOPIC 1:</b> Talk about the <u>last time you stayed at a friend's house</u>. You can say <u>who you stayed with, where you went, what you did</u> and if you enjoyed it. (Unit 2)"
  idArray [15] = "<b>TOPIC 1:</b> Talk about <u>the last time you went camping, went on a road trip or stayed at a hotel</u>, including how long it was, where you stayed, what you did or ate, etc. (Unit 2)"
  idArray [16] = "<b>TOPIC 1:</b> Talk about <u>the last time you were outside in nature</u> (like the countryside, a forest, river or lake). You can mention was there, the activities you did, the people you met, etc. (Unit 2)"

  document.getElementById("select1").onclick = myFunctionOne;
  randomParagraph = Math.floor(Math.random()*16);

  document.getElementById("result-one").innerHTML = idArray[randomParagraph + 1];
}
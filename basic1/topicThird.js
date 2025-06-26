function myFunctionThree() {
  idArray = new Array()

  // UNIT 5: Present Continuous (be + verb + ing).
  idArray [1] = "<b>TOPIC 3:</b> Looks outside your window / outside your front door. <u>Describe all the things that are happening at that moment, including all there is around you</u>. (Unit 5)."
  idArray [2] = "<b>TOPIC 3:</b> Talk about <u>all the things you are doing right now</u> in your life, including your personal life, education, music, hobbies, etc. Mention why you like doing them. (Unit 5)."
  idArray [3] = "<b>TOPIC 3:</b> Imagine you are in the middle of a busy city area. <u>Describe the things that are happening & mention all there is around you</u> at that moment. You can use your imagination. (Unit 5)."

  // UNIT 5: can / can't (modal verb), verb phrases (buy a newspaper, etc), the weather and seasons.
  idArray [4] = "<b>TOPIC 3:</b> <u>What can you do on Friday nights?</u> Talk about what you usually do at the end of the week, including what you can / can't do, frequency, times, locations, etc. (Unit 5)."
  idArray [5] = "<b>TOPIC 3:</b> <u>What can you usually do in the summer?</u> Talk about what you usually do in the hot/sunny months, including what you can / can't do, frequency, times, locations, etc. (Unit 5)."
  idArray [6] = "<b>TOPIC 3:</b> <u>What can you usually do in the winter?</u> Talk about what you usually do in the cold/rainy months, including what you can / can't do, frequency, times, locations, etc. (Unit 5)."
  idArray [7] = "<b>TOPIC 3:</b> <u>What can you usually do when you are young?</u> Talk about what you usually do after turning 40/50, including what you can / can't do, frequency, times, locations, etc. (Unit 5)."
  idArray [8] = "<b>TOPIC 3:</b> <u>What can you usually do when you are sick?</u> Talk about what you usually do when you have a the flue/acold, including what you can / can't do, frequency, times, locations, etc. (Unit 5)."

  // UNIT 6: object pronouns (me, you, him), words in a story, Preference verbs (love + ing), the date, ordinal numbers (1st, 2nd), review (be or do?), music.
  idArray [9] = "<b>TOPIC 3:</b> <u>Talk about your pastimes & hobbies</u>. Mention what activities you like doing, when you do them, how frequent, why you like them, etc. Do you do them by yourself, or with your friends? (Unit 6)."
  idArray [10] = "<b>TOPIC 3:</b> <u>Talk about all the vegetables you like or dislike</u>, including their names, why you like or dislike them, how often you eat them, etc. How do they taste? In what format or containers do they come? (Unit 5C: Present Simple / 6B: Prefence verbs)."
  idArray [11] = "<b>TOPIC 3:</b> Talk about some <u>interesting hobbies you like doing</u>. Why do you like doing them? How often do you do them. (Unit 6)."
  idArray [12] = "<b>TOPIC 3:</b> Talk about <u>some interesting places you like visiting frequently</u>. What do you enjoy going there? What activities do you like doing there? (Unit 6)."

  document.getElementById("select3").onclick = myFunctionThree;
  randomParagraph = Math.floor(Math.random()*12);

  document.getElementById("result-three").innerHTML = idArray[randomParagraph + 1];       
}
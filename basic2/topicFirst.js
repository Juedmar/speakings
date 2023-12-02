function myFunctionOne() {
  idArray = new Array()
  idArray [1] = "<b>TOPIC 1:</b> <u>What's a typical Saturday for you?</u> Describe what you generally do and what you don't do on this day. (Unit 5C: Present Simple)."
  idArray [2] = "<b>TOPIC 1:</b> Talk about <u>all the things you are doing right now</u> in your life, including your personal life, education, music, hobbies, etc. Mention why you like doing them. (Unit 5C: Present Continuous)."
  idArray [3] = "<b>TOPIC 1:</b> <u>What do you usually do on Friday nights?</u> Talk about what you usually do at the end of the week, including the activities, frequency, times, locations, etc. (Unit 5C: Present Simple)."
  idArray [4] = "<b>TOPIC 1:</b> <u>Talk about your pastimes & hobbies</u>. Mention what activities you like doing, when you do them, how frequent, why you like them, etc. Do you do them by yourself, or with your friends? (Units 5C & 6B)."
  idArray [5] = "<b>TOPIC 1:</b> <u>Talk about all the vegetables you like or dislike</u>, including their names, why you like or dislike them, how often you eat them, etc. How do they taste? In what format or containers do they come? (Unit 5C: Present Simple / 6B: Prefence verbs)."
  idArray [6] = "<b>TOPIC 1:</b> Imagine you are in the middle of a busy city area. <u>Describe the things that are happening & mention all there is around you</u> at that moment. You can use your imagination. (Unit 5C: Present Continuous)."
  idArray [7] = "<b>TOPIC 1:</b> Look outside your window / outside your front door. <u>Describe all the things that are happening at that moment, including all there is around you</u>. (Unit 5C: Present Continuous)."

  document.getElementById("select1").onclick = myFunctionOne;
  randomParagraph = Math.floor(Math.random()*7);

  document.getElementById("result-one").innerHTML = idArray[randomParagraph + 1];
}
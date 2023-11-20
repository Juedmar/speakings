function myFunctionOne() {
  idArray = new Array()
  idArray [1] = "<b>TOPIC 1:</b> <u>What's a typical Saturday for you?</u> Describe what you generally do and what you don't do on this day."
  idArray [2] = "<b>TOPIC 1:</b> Talk about <u>all the things you are doing right now</u> in your life, including your personal life, education, music, hobbies, etc. Mention why you like doing them."
  idArray [3] = "<b>TOPIC 1:</b> <u>What do you usually do on Friday nights?</u> Talk about what you usually do at the end of the week, including the activities, frequency, times, locations, etc."
  idArray [4] = "<b>TOPIC 1:</b> <u>Talk about your pastimes & hobbies</u>. Mention what activities you like doing, when you do them, how frequent, why you like them, etc. Do you do them by yourself, or with your friends?"
  idArray [5] = "<b>TOPIC 1:</b> <u>Talk about your home and family chores & obligations</u>, including all the things you have to do, the frequency, why you like (or dislike) doing them. What happens if you don't do them?"
  idArray [6] = "<b>TOPIC 1:</b> <u>Talk about any housework</u> people with pets need to do</u> to keep their house clean. Mention all the things they have to do, how frequently they must do them. Why is it necessary to do them?"
  idArray [7] = "<b>TOPIC 1:</b> <u>Talk about all the vegetables you like or dislike</u>, including their names, why you like or dislike them, how often you eat them, etc. How do they taste? In what format or containers do they come?"
  idArray [8] = "<b>TOPIC 1:</b> Imagine you are in the middle of a busy city area. <u>Describe the things that are happening & mention all there is around you</u> at that moment. You can use your imagination."

  document.getElementById("select1").onclick = myFunctionOne;
  randomParagraph = Math.floor(Math.random()*8);

  document.getElementById("result-one").innerHTML = idArray[randomParagraph + 1];
}
function myFunctionOne() {
  idArray = new Array()
  idArray [1] = "<b>TOPIC 1:</b> <u>What's a typical Saturday for you?</u> Describe what you generally do and what you don't do on this day. (Unit 1: Present Simple & Continuous)."
  idArray [2] = "<b>TOPIC 1:</b> Talk about <u>all the things you are doing right now</u> in your life, including your personal life, education, music, hobbies, etc. Mention why you like doing them. (Unit 1: Present Simple & Continuous)."
  idArray [3] = "<b>TOPIC 1:</b> <u>What do you usually do on Friday nights?</u> Talk about what you usually do at the end of the week, including the activities, frequency, times, locations, etc. (Unit 1: Present Simple & Continuous)."
  idArray [4] = "<b>TOPIC 1:</b> <u>Talk about your pastimes & hobbies</u>. Mention what activities you like doing, when you do them, how frequent, why you like them, etc. Do you do them by yourself, or with your friends? (Unit 1: Present Simple & Continuous)."

  idArray [5] = "<b>TOPIC 1:</b> Imagine you are in the middle of a busy city area. <u>Describe the things that are happening & mention all there is around you</u> at that moment. You can use your imagination. (Unit 1: Present Simple & Continuous / There is & are)."
  idArray [6] = "<b>TOPIC 1:</b> Look outside your window / outside your front door. <u>Describe all the things that are happening at that moment, including all there is around you</u>. (Unit 1: Present Simple & Continuous / There is & are)."

  idArray [7] = "<b>TOPIC 1:</b> Talk about what <u>housework you do not mind doing every day, or in general.</u> Explain. (Unit 1: Present Simple & Continuous / Unit 4: Make or Do)."
  idArray [8] = "<b>TOPIC 1:</b> Talk about some <u>activities you dislike doing every day</u>. Explain why. (Unit 1: Present Simple & Continuous / Unit 4: Make or Do)."
  idArray [9] = "<b>TOPIC 1:</b> Talk about what activities <u>you enjoy doing on the weekend.</u> Explain. (Unit 1: Present Simple & Continuous / Unit 4: Make or Do)."

  idArray [10] = "<b>TOPIC 1:</b> Talk about <u>something you hope to do in the future.</u> Why? (Unit 3: Future Plans / Present Continuous for Future Arrangements)."
  idArray [11] = "<b>TOPIC 1:</b> Talk about some <u>places you want/hope to go on vacation</u> some day. Why? (Unit 3: Future Plans / Present Continuous for Future Arrangements)."
  idArray [12] = "<b>TOPIC 1:</b> Talk about <u>some of the activities/hobbies you're considering doing?</u> What are they? Explain why. (Unit 3: Future Plans / Present Continuous for Future Arrangements)."
  idArray [13] = "<b>TOPIC 1:</b> What are <u>some of your wishes for the future</u>, either in your personal life, family life or professional aspirations? (Unit 3: Future Plans / Present Continuous for Future Arrangements)."
  idArray [14] = "<b>TOPIC 1:</b> Talk about what you<u> want, hope or expect to do after you graduate.</u> What other wishes or life goals <u>will you try to accomplish</u>? (Unit 3: Future Plans / Present Continuous for Future Arrangements)."

  document.getElementById("select1").onclick = myFunctionOne;
  randomParagraph = Math.floor(Math.random()*14);

  document.getElementById("result-one").innerHTML = idArray[randomParagraph + 1];
}
function myFunctionThree() {
  idArray = new Array()
  idArray [1] = "<b>Topic 3:</b> What <u>TV shows</u> do you watch regularly? (Unit 3).</u>"
  idArray [2] = "<b>Topic 3:</b> What do <u>you eat or drink</u> when it is <u>really hot</u> outside? (Unit 3).</u>"
  idArray [3] = "<b>Topic 3:</b> When you're <u>on vacation</u>, do you <u>relax or try to do many things</u>? (Unit 3).</u>"
  idArray [4] = "<b>Topic 3:</b> <u>What's a typical Saturday for you?</u> Describe what you generally do and what you don't do on this day. (Unit 3).</u>"
  idArray [5] = "<b>Topic 3:</b> Talk about <u>your daily routine during the weekend</u>. Describe the times, frequency, activities, meals, hobbies, etc. (Unit 3).</u>"
  idArray [6] = "<b>Topic 3:</b> Talk about what <u>you usually do at the end of the week</u>, including the activities, frequency, times, locations, etc. (Unit 3).</u>"
  idArray [7] = "<b>Topic 3:</b> <u>Talk about your pastimes & hobbies</u>. Mention what activities you do, when you do them, how frequent, why you like them, etc. (Unit 3).</u>"
  idArray [8] = "<b>Topic 3:</b> Talk about <u>sport and/or hobbies people like to practice regularly</u>, including the activities, the frequency, competitions, teams, etc. (Unit 3).</u>"
  idArray [9] = "<b>Topic 3:</b> Talk about <u>your daily routine as a university student</u>, including the activities, times, frequency, meals, hobbies, family, transportation, etc. (Unit 3).</u>"
  idArray [10] = "<b>Topic 3:</b> Discuss <u>the hobbies and sports younger people like to practice</u>, including the activities, the frequency, the gear and locations, etc. Exchange personal experiences. (Unit 3).</u>"
  idArray [11] = "<b>Topic 3:</b> Talk about <u>a family member or a person you know well</u>. You can mention their name & appearance... but, most importantly, what she/he does, daily activities & routines, hobbies, etc. (Unit 3).</u>"

  idArray [12] = "<b>Topic 3:</b> Talk about <u>interesting or difficult jobs</u>, including the name of that profession or occupation, the activities they do, places they visit, tools they use, etc. (Unit 3B).</u>"

  document.getElementById("select3").onclick = myFunctionThree;
  randomParagraph = Math.floor(Math.random()*12);

  document.getElementById("result-three").innerHTML = idArray[randomParagraph + 1];       
}
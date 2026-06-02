function myFunctionTwo() {
  idArray = new Array()

  // UNIT 2: Imperatives / Recommendations.
  idArray [1] = "<b>TOPIC:</b> Give <u>some instructions to plan a great vacation.</u> (Unit 2C)."
  idArray [2] = "<b>TOPIC:</b> Give <u>some recommendations for a hobby or pastime you have.</u> (Units 2/3)."
  idArray [3] = "<b>TOPIC:</b> What are your <u>best tips & recommendations for a happy life?</u> (Units 2/3)."
  idArray [4] = "<b>TOPIC:</b> Give some <u>step-by-step instructions on how to make a lot of money.</u> (Units 2/3)."

  // UNIT 3: Simple Present, Family members, Verb phrases, Question words (what, where, when, which, why, who), Third person verb change.
  idArray [5] = "<b>TOPIC:</b> Talk about<u> what your dad/mom usually does every day</u>. Mention the activities, his/her daily habits, frequency, etc. (Units 3/4)."
  idArray [6] = "<b>TOPIC:</b> Talk about<u> what your best friend does on weekends</u>. Mention the activities, the frequency, his/her weekend habits, etc. (Units 3/4)."
  idArray [7] = "<b>TOPIC:</b> Talk about<u> some of your best friends</u>. Mention who they are, their names, what they do, where they live, when they meet, etc. (Units 3/4)."
  idArray [8] = "<b>TOPIC:</b> Talk about<u> what one of your family members usually does every day</u>. Mention the activities, his/her daily habits, frequency, etc. (Units 3/4)."

  // UNIT 3: Simple Present, Jobs, Third person verb change.
  idArray [9] = "<b>TOPIC:</b> Talk about <u>2 difficult or dangerous jobs/professions</u>. Mention where he/she works, the activities he/she does, the times and frequency he/she works, etc. (Units 3/4)."
  idArray [10] = "<b>TOPIC:</b> Talk about <u>2 interesting or exciting jobs/professions</u>. Mention where he/she works, the activities he/she does, the times and frequency he/she works, etc. (Units 3/4)."
  idArray [11] = "<b>TOPIC:</b> Talk about <u>interesting or difficult jobs</u>, including the name of that profession or occupation, the activities they do, places they visit, tools they use, etc. (Units 3)."

  document.getElementById("select2").onclick = myFunctionTwo;
  randomParagraph = Math.floor(Math.random()*11);

  document.getElementById("result-two").innerHTML = idArray[randomParagraph + 1];       
}
function myFunctionTwo() {
  idArray = new Array()

  // UNIT 3: Simple Present, Family members, Verb phrases, Question words (what, where, when, which, why, who), Third person verb change.
  idArray [1] = "<b>Topic 2:</b> Talk about<u> what your dad/mom usually does every day</u>. Mention the activities, his/her daily habits, frequency, etc. (Units 3/4)."
  idArray [2] = "<b>Topic 2:</b> Talk about<u> what your best friend does on weekends</u>. Mention the activities, the frequency, his/her weekend habits, etc. (Units 3/4)."
  idArray [3] = "<b>Topic 2:</b> Talk about<u> some of your best friends</u>. Mention who they are, their names, what they do, where they live, when they meet, etc. (Units 3/4)."
  idArray [4] = "<b>Topic 2:</b> Talk about<u> what one of your family members usually does every day</u>. Mention the activities, his/her daily habits, frequency, etc. (Units 3/4)."

  // UNIT 3: Simple Present, Jobs, Third person verb change.
  idArray [5] = "<b>Topic 2:</b> Talk about <u>2 difficult or dangerous jobs/professions</u>. Mention where he/she works, the activities he/she does, the times and frequency he/she works, etc. (Units 3/4)."
  idArray [6] = "<b>Topic 2:</b> Talk about <u>2 interesting or exciting jobs/professions</u>. Mention where he/she works, the activities he/she does, the times and frequency he/she works, etc. (Units 3/4)."
  idArray [7] = "<b>Topic 2:</b> Talk about <u>interesting or difficult jobs</u>, including the name of that profession or occupation, the activities they do, places they visit, tools they use, etc. (Units 3)."

  // UNIT 4: Possessive 's, daily routine, position of adverbs, months, adverbs and expressions of frequency.
  idArray [8] = "<b>Topic 2:</b> <u>What's a typical Saturday for you?</u> Describe what you generally do, and what you don't do on this day. (Units 3/4)."
  idArray [9] = "<b>Topic 2:</b> What TV shows / Social Media channels <u>do you usually watch</u>? How often and for how long do you watch them? (Units 3/4)."
  idArray [10] = "<b>Topic 2:</b> When you're on vacation, <u>what do you usually do to relax or have fun</u>? How often do you do those activities? (Units 3/4)."
  idArray [11] = "<b>Topic 2:</b> Talk about <u>your daily routine during the weekend</u>. Describe the times, frequency, activities, meals, hobbies, etc. (Units 3/4)."
  idArray [12] = "<b>Topic 2:</b> Talk about what <u>you usually do at the end of the week</u>, including the activities, frequency, times, locations, etc. (Units 3/4)."
  idArray [13] = "<b>Topic 2:</b> Talk about <u>your daily routine as a university student</u>, including the activities, times, frequency, meals, hobbies, family, transportation, etc. (Units 3/4)."
  idArray [14] = "<b>Topic 2:</b> Discuss <u>the hobbies and sports younger people like to practice</u>, including the activities, the frequency, the gear and locations, etc. Exchange personal experiences. (Units 3/4)."
  idArray [15] = "<b>Topic 2:</b> Talk about <u>a family member or a person you know well</u>. You can mention their name & appearance... but, most importantly, what she/he does, daily activities & routines, hobbies, etc. (Units 3/4)."

  document.getElementById("select2").onclick = myFunctionTwo;
  randomParagraph = Math.floor(Math.random()*15);

  document.getElementById("result-two").innerHTML = idArray[randomParagraph + 1];       
}
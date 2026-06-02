function myFunctionThree() {
  idArray = new Array()

  // UNIT 4: Possessive 's, daily routine, position of adverbs, months, adverbs and expressions of frequency.
  idArray [1] = "<b>TOPIC:</b> <u>What's a typical Saturday for you?</u> Describe what you generally do, and what you don't do on this day. (Units 3/4)."
  idArray [2] = "<b>TOPIC:</b> What TV shows / Social Media channels <u>do you usually watch</u>? How often and for how long do you watch them? (Units 3/4)."
  idArray [3] = "<b>TOPIC:</b> When you're on vacation, <u>what do you usually do to relax or have fun</u>? How often do you do those activities? (Units 3/4)."
  idArray [4] = "<b>TOPIC:</b> Talk about <u>your daily routine during the weekend</u>. Describe the times, frequency, activities, meals, hobbies, etc. (Units 3/4)."
  idArray [5] = "<b>TOPIC:</b> Talk about what <u>you usually do at the end of the week</u>, including the activities, frequency, times, locations, etc. (Units 3/4)."
  idArray [6] = "<b>TOPIC:</b> Talk about <u>your daily routine as a university student</u>, including the activities, times, frequency, meals, hobbies, family, transportation, etc. (Units 3/4)."
  idArray [7] = "<b>TOPIC:</b> Discuss <u>the hobbies and sports younger people like to practice</u>, including the activities, the frequency, the gear and locations, etc. Exchange personal experiences. (Units 3/4)."
  idArray [8] = "<b>TOPIC:</b> Talk about <u>a family member or a person you know well</u>. You can mention their name & appearance... but, most importantly, what she/he does, daily activities & routines, hobbies, etc. (Units 3/4)."

  document.getElementById("select3").onclick = myFunctionThree;
  randomParagraph = Math.floor(Math.random()*8);

  document.getElementById("result-three").innerHTML = idArray[randomParagraph + 1];       
}
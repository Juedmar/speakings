function myFunctionOne() {
  idArray = new Array()

  // UNIT 1: Verb to be, Days of the week, countries, alphabet, numbers, Possessive adjectives (my ___, your___, etc), classroom language.
  idArray [1] = "<b>TOPIC:</b> <u>Talk about you.... introduce yourself</u>, including your name, spell your name, say your age, what you do, your likes, etc. (Unit 1)."
  idArray [2] = "<b>TOPIC:</b> Talk about<u> some people who live in your family</u>. Mention their names, their age & what they do. (Unit 1/3)."
  idArray [3] = "<b>TOPIC:</b> Talk about<u> some of your best friends</u>. Mention their names, their age & what they do. (Unit 1/3)."
  idArray [4] = "<b>TOPIC:</b> Talk about<u> some of your closest classmates</u>. Mention their names, their age & what they do. (Unit 1)."

  // UNIT 2: Singular/Plural nouns (these / those) (there is / are), things, prepositions (in, on, under), adjectives.
  idArray [5] = "<b>TOPIC:</b> Show and describe <u>some of the things there are in your bedroom</u>, including what those things are, their size & color, where they are, etc. (Unit 2)."
  idArray [6] = "<b>TOPIC:</b> Show and describe <u>some of the things there are in your kitchen</u>, including what those things are, their size & color, where they are, etc. (Unit 2)."
  idArray [7] = "<b>TOPIC:</b> Show and describe <u>some of the things there are in your living room</u>, including what those things are, their size & color, where they are, etc. (Unit 2)."
  idArray [8] = "<b>TOPIC:</b> Show and describe <u>some of the things there are in your backpack</u>, including what those things are, their size & color, how many there are, etc. (Unit 2)."

  // UNIT 2: Imperatives / Daily activities.
  idArray [9] = "<b>TOPIC:</b> Give some <u>instructions and recommendations to have a healthy & productive day.</u> Include all the activities, times, food, habits, studies, hobbies, etc. (Unit 2/3)."
  idArray [10] = "<b>TOPIC:</b> Give some <u>instructions and recommendations to have a relaxing & interesting weekend.</u> Include all the activities, times, food, habits, studies, hobbies, etc. (Unit 2/3)."
  idArray [11] = "<b>TOPIC:</b> Give some <u>instructions and recommendations to become a strong & healthy person.</u> Include all the activities, times, food, routine activities, daily habits, etc. (Unit 2/3)."
  idArray [12] = "<b>TOPIC:</b> Give some <u>instructions and recommendations to become a responsible college student.</u> Include all the activities, times, food, routine activities, study habits, etc. (Unit 2/3)."

  // UNIT 1B & 2C: Feelings.
  idArray [13] = "<b>TOPIC:</b> Talk about <u>how you feel during week days / or in Winter.</u> Explain why, and what you do in those moments. (Unit 1B & 2C)."
  idArray [14] = "<b>TOPIC:</b> Talk about <u>how you feel during the weekend / or in Summer.</u> Explain why, and what you do in those moments. (Unit 1B & 2C)."

  document.getElementById("select1").onclick = myFunctionOne;
  randomParagraph = Math.floor(Math.random()*14);

  document.getElementById("result-one").innerHTML = idArray[randomParagraph + 1];
}
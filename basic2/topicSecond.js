function myFunctionTwo() {
  idArray = new Array()
  idArray [1] = "<b>TOPIC 2:</b> What was <u>the last movie you saw</u>? Talk about what the main story was, who were the main characters, what happened to them. (Units 7 & 8A: Past Simple & Irregular verbs)."
  idArray [2] = "<b>TOPIC 2:</b> Talk about the <u>last time you went out</u> with a friend or family member. You can say <u>where you went, what you did</u> and why. (Units 7 & 8A: Past Simple & Irregular verbs)."
  idArray [3] = "<b>TOPIC 2:</b> Talk about the <u>last time you went on holiday</u>. You can say <u>who you went with, where you went, what you did</u> and if you enjoyed it. (Units 7 & 8A: Past Simple & Irregular verbs)."
  idArray [4] = "<b>TOPIC 2:</b> Talk about <u>your last trip on summer vacation, including the activities you did</u>, including the people you were with, the food you ate, etc. (Units 7 & 8A: Past Simple & Irregular verbs)."
  idArray [5] = "<b>TOPIC 2:</b> Talk about <u>the last time you went camping, went on a road trip or stayed at a friend's house</u>, including how long it was, where you stayed, what you did or ate, etc. (Units 7 & 8A: Past Simple & Irregular verbs)."
  idArray [6] = "<b>TOPIC 2:</b> Talk about <u>the last time you were outside in nature</u> (like the countryside, a forest, river or lake). You can mention was there, the activities you did, the people you met, etc. (Units 7 & 8A: Past Simple & Irregular verbs)."

  document.getElementById("select2").onclick = myFunctionTwo;
  randomParagraph = Math.floor(Math.random()*6);

  document.getElementById("result-two").innerHTML = idArray[randomParagraph + 1];       
}
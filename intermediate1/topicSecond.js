function myFunctionTwo() {
  idArray = new Array()
  idArray [1] = "<b>TOPIC 2:</b> What was <u>the last movie you saw in the cinema</u>? Talk about what the main story was, who were the main characters, what happened to them. (Unit 2: Past Simple, Regular & Irregular verbs)."
  idArray [2] = "<b>TOPIC 2:</b> Talk about the <u>last time you went out</u> with a friend or family member. You can say <u>where you went, what you did</u> and why. (Unit 2: Past Simple, Regular & Irregular verbs)."
  idArray [3] = "<b>TOPIC 2:</b> Talk about the <u>last time you stayed at a friend's house</u>. You can say <u>who you stayed with, where you went, what you did</u> and if you enjoyed it. (Unit 2: Past Simple, Regular & Irregular verbs)."
  idArray [4] = "<b>TOPIC 2:</b> Talk about <u>your last trip on summer vacation, including the activities you did</u>, including the people you were with, the food you ate, etc. (Unit 2: Past Simple, Regular & Irregular verbs)."
  idArray [5] = "<b>TOPIC 2:</b> Talk about <u>the last time you went camping, went on a road trip or stayed at a hotel</u>, including how long it was, where you stayed, what you did or ate, etc. (Unit 2: Past Simple, Regular & Irregular verbs)."
  idArray [6] = "<b>TOPIC 2:</b> Talk about <u>the last time you were outside in nature</u> (like the countryside, a forest, river or lake). You can mention was there, the activities you did, the people you met, etc. (Unit 2: Past Simple, Regular & Irregular verbs)."

  document.getElementById("select2").onclick = myFunctionTwo;
  randomParagraph = Math.floor(Math.random()*6);

  document.getElementById("result-two").innerHTML = idArray[randomParagraph + 1];       
}
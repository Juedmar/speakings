function myFunctionOne() {
 idArray = new Array()

 // UNIT 7 - Grammar: Simple Past (to be: was / were), regular verbs, spelling -ed endings.
 // UNIT 7 - Vocabulary: Past time expressions (yesterday, last night, a month ago, etc.), Word Formation (write -> writer), expressions with go/have/get.

 idArray [1] = "<b>TOPIC 1:</b> What was <u>the last movie you saw</u>? Talk about who were the main characters and what happened to them. (Unit 8)."
 idArray [2] = "<b>TOPIC 1:</b> Talk about the <u>last time you went out</u> with a friend or family member. You can say <u>where you went, what you did</u> and why. (Unit 8)."
 idArray [3] = "<b>TOPIC 1:</b> Talk about the <u>last time you went on holiday</u>. You can say <u>who you went with, where you went, what you did</u> and if you enjoyed it. (Unit 8)."
 idArray [4] = "<b>TOPIC 1:</b> Talk about <u>your last trip on summer vacation, including the activities you did</u>, including the people you were with, the food you ate, etc. (Unit 8)."
 idArray [5] = "<b>TOPIC 1:</b> Talk about <u>the last time you went camping, went on a road trip or stayed at a friend's house</u>, including how long it was, where you stayed, what you did or ate, etc. (Unit 8)."
 idArray [6] = "<b>TOPIC 1:</b> Talk about <u>the last time you were outside in nature</u> (like the countryside, a forest, river or lake). You can mention was there, the activities you did, the people you met, etc. (Unit 8)."

 // UNIT 8 - Grammar: Simple Past (Irregular verbs), there is / there are, there was / were, some / any + plural nouns.
 // UNIT 8 - Vocabulary: the house & house objects (singular / plural), Prepositions: place & movement.

 idArray [7] = "<b>TOPIC 1:</b> <u>Describe your bedroom in detail</u>, including all the things you can see there, where they are, the colors and sizes, the number of things, etc. Remember to use correct prepositions. (Units 8)."
 idArray [8] = "<b>TOPIC 1:</b> <u>Describe your living room in detail</u>, including all the things you can see there, where they are, the colors and sizes, the number of things, etc. Remember to use correct prepositions. (Units 8)."
 idArray [9] = "<b>TOPIC 1:</b> <u>Describe your kitchen in detail</u>, including all the things you can see, where they are, the colors and sizes, the number of things, etc. Remember to use correct prepositions. (Units 8)."

 document.getElementById("select1").onclick = myFunctionOne;
 randomParagraph = Math.floor(Math.random()*9);

 document.getElementById("result-one").innerHTML = idArray[randomParagraph + 1];
}
function myFunctionThree() {
  idArray = new Array()
  idArray [1] = "<b>TOPIC 3:</b> <u>Describe your bedroom in detail</u>, including all the things you can see there, where they are, the colors and sizes, the number of things, etc. Remember to use correct prepositions."
  idArray [2] = "<b>TOPIC 3:</b> <u>Describe your living room in detail</u>, including all the things you can see there, where they are, the colors and sizes, the number of things, etc. Remember to use correct prepositions."
  idArray [3] = "<b>TOPIC 3:</b> <u>Describe your kitchen in detail</u>, including all the things you can see, where they are, the colors and sizes, the number of things, etc. Remember to use correct prepositions."
  idArray [4] = "<b>TOPIC 3:</b> <u>Talk about all your favorite food</u>. Mention why you like it, when and where you eat it, how often you eat it, etc. What are the main ingredients? How do you prepare it?"
  idArray [5] = "<b>TOPIC 3:</b> <u>Talk about all the delicious snacks you like</u>. Mention what they are, why you like them, how often you eat them, the amounts, etc. In what sizes, formats or containers do they come?"
  idArray [6] = "<b>TOPIC 3:</b> <u>Describe the meals or dishes you eat when you are very hungry</u>, including the names, the types of meal, why you like them, how often you eat them, the main ingredients, etc."
  idArray [7] = "<b>TOPIC 3:</b> Talk about <u>the meals you eat during the day</u>. You can mention the meals, the times & frequency, the ingredients, desserts, drinks, condiments, etc."

  document.getElementById("select3").onclick = myFunctionThree;
  randomParagraph = Math.floor(Math.random()*7);

  document.getElementById("result-three").innerHTML = idArray[randomParagraph + 1];       
}
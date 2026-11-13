function myFunctionTwo() {
 idArray = new Array()

 // UNIT 9 - GRAMMAR: Countable/Uncountable nouns, Comparative adjectives, a/an, some/any.
 // UNIT 9 - VOCABULARY: food and drink, food containers, quantifiers (how much/many, a lot of, etc.), high numbers.

 idArray [1] = "<b>TOPIC B:</b> Which was <u>your favorite food when you were a kid</u>? Talk about your favorite snacks when you were a kid / in school. (Unit 9)."
 idArray [2] = "<b>TOPIC B:</b> <u>Talk about all your favorite food</u>. Mention why you like it, when and where you eat it, how often you eat it, etc. What are the main ingredients? How do you prepare it? (Unit 9)."
 idArray [3] = "<b>TOPIC B:</b> <u>Talk about all the delicious snacks you like</u>. Mention what they are, why you like them, how often you eat them, the amounts, etc. In what sizes, formats or containers do they come? (Unit 9)."
 idArray [4] = "<b>TOPIC B:</b> <u>Describe the meals or dishes you eat when you are very hungry</u>, including the names, the types of meal, why you like them, how often you eat them, the main ingredients, etc. (Unit 9)."
 idArray [5] = "<b>TOPIC B:</b> Talk about <u>the meals you eat during the day</u>. You can mention the meals, the times & frequency, the ingredients, desserts, drinks, condiments, etc. (Unit 9)."

 idArray [6] = "<b>TOPIC B:</b> Compare <u>two musicians</u>. Who do you think is more talented? (Unit 9)."
 idArray [7] = "<b>TOPIC B:</b> Compare <u>two recent movies</u>. Which one is more entertaining? (Unit 9)."
 idArray [8] = "<b>TOPIC B:</b> Compare <u>two countries</u>. Which one is a better vacation location? (Unit 9)."
 idArray [9] = "<b>TOPIC B:</b> Compare <u>two types of international food.</u> Which is more delicious? Which is cheaper?"
 idArray [10] = "<b>TOPIC B:</b> Compare <u>two of your favorite restaurants.</u> Which is cheaper? Which is healthier? (Unit 9)."
 idArray [11] = "<b>TOPIC B:</b> Compare <u>two of your favorite foods or dishes.</u> Which is cheaper? Which is healthier? (Unit 9)."
 idArray [12] = "<b>TOPIC B:</b> Answer this question: Which is <u>more important, money or happiness</u>? (Unit 9)."
 idArray [13] = "<b>TOPIC B:</b> Answer this question: Which is <u>more important, friends or family? Why</u>? (Unit 9)."
 idArray [14] = "<b>TOPIC B:</b> Answer this question: Is it better to <u>live in the country or in a city</u>? Why? (Unit 9)."
 idArray [15] = "<b>TOPIC B:</b> Answer this question: Is it better to <u>have more free time or more money</u>? Why? (Unit 9)."
 idArray [16] = "<b>TOPIC B:</b> Answer this question: Which is <u>more relaxing, reading a book or watching TV</u>? Why? (Unit 9)."
 idArray [17] = "<b>TOPIC B:</b> Answer this question: Which is <u>more exciting, playing a video game or playing a sport</u>? Why? (Unit 9)."
 idArray [18] = "<b>TOPIC B:</b> Answer this question: Which is a better place to have a vacation, <u>mountains or a beach</u>? Why? (Unit 9)."

document.getElementById("select2").onclick = myFunctionTwo;
randomParagraph = Math.floor(Math.random()*18);

document.getElementById("result-two").innerHTML = idArray[randomParagraph + 1];       
}
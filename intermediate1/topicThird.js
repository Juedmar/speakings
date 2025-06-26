function myFunctionThree() {
  idArray = new Array()

  // UNIT 5: Comparative adjectives & adverbs, as... as.
  idArray [1] = "<b>Topic 3:</b> Answer this question: <u>Which is more important, friends or family? Why?</u> (Unit 5)"
  idArray [2] = "<b>Topic 3:</b> Answer this question: <u>Which is more important, money or happiness?</u> Why? (Unit 5)"
  idArray [3] = "<b>Topic 3:</b> Answer this question: <u>Is it better to live in the country or in a city?</u> Why? (Unit 5)"
  idArray [4] = "<b>Topic 3:</b> Answer this question: <u>Is it better to have more free time or more money?</u> Why? (Unit 5)"
  idArray [5] = "<b>Topic 3:</b> Answer this question: <u>Which is more relaxing, reading a book or watching TV?</u> Why? (Unit 5)"
  idArray [6] = "<b>Topic 3:</b> Answer this question: <u>Is it better to have many friends or just a few close friends?</u> (Unit 5)"
  idArray [7] = "<b>Topic 3:</b> Answer this question: <u>Which is more exciting, playing a video game or playing a sport?</u> Why? (Unit 5)"
  idArray [8] = "<b>Topic 3:</b> Answer this question: <u>Which is a better place to have a vacation, mountains or a beach?</u> Why? (Unit 5)"
  idArray [9] = "<b>Topic 3:</b> Answer this question: <u>Which is more enjoyable, going to a theme park or going to a museum?</u> Why? (Unit 5)"

  // UNIT 5: Compare:
  idArray [10] = "<b>Topic 3:</b> <u>Compare two recent movies.</u> Which one is more entertaining? (Unit 5)"
  idArray [11] = "<b>Topic 3:</b> <u>Compare two countries.</u> Which one is a better vacation spot? Which has better food? (Unit 5)"
  idArray [12] = "<b>Topic 3:</b> <u>Compare two types of foreign food.</u> Which is more delicious? Which is cheaper? (Unit 5)"

  // UNIT 5: Superlatives (+ ever + Present Perfect), Describing a town or city.
  idArray [13] = "<b>Topic 3:</b> Answer this question: <u>Who is the happiest person you know?</u> (Unit 5)."
  idArray [14] = "<b>Topic 3:</b> Answer this question: <u>What’s the greatest TV series you’ve watched?</u> (Unit 5)."
  idArray [15] = "<b>Topic 3:</b> Answer this question: <u>What’s the weirdest movie you have ever seen?</u> (Unit 5)."
  idArray [16] = "<b>Topic 3:</b> Answer this question: <u>When was the most exciting period of your life?</u> (Unit 5)."
  idArray [17] = "<b>Topic 3:</b> Answer this question: <u>What’s the most amazing hotel you’ve stayed at?</u> (Unit 5)."
  idArray [18] = "<b>Topic 3:</b> Answer this question: <u>What’s the most exciting thing you’ve ever done?</u> (Unit 5)."
  idArray [19] = "<b>Topic 3:</b> Answer this question: <u>What’s the most delicious meal you’ve ever eaten?</u> (Unit 5)."
  idArray [20] = "<b>Topic 3:</b> Answer this question: <u>What’s the most addictive game you’ve ever played?</u> (Unit 5)."
  idArray [21] = "<b>Topic 3:</b> Answer this question: <u>What’s the strangest restaurant or bar you’ve been to?</u> (Unit 5)."
  idArray [22] = "<b>Topic 3:</b> Answer this question: <u>Who is your best friend? Why are they your best friend?</u> (Unit 5)."
  idArray [23] = "<b>Topic 3:</b> Answer this question: <u>What’s the most popular tourist attraction in your country?</u> (Unit 5)."
  idArray [24] = "<b>Topic 3:</b> Answer this question: <u>Where is the worst place in your country to live?</u> How about the best place to live? (Unit 5)."

  // UNIT 5: Quantifiers, health & the body, Modifiers, too, (not) enough.
  // NOTHING!

  // UNIT 6: Will / won't (predictions), Will / won't (other uses).
  idArray [25] = "<b>Topic 3:</b> Answer this question: <u>What will you do when you retire?</u> (Unit 6)."
  idArray [26] = "<b>Topic 3:</b> Answer this question: <u>What will your life be like in 5 years?</u> (Unit 6)."
  idArray [27] = "<b>Topic 3:</b> Answer this question: <u>What will video games be like in 7 years?</u> (Unit 6)."
  idArray [28] = "<b>Topic 3:</b> Answer this question: <u>How will communication change in the future?</u> (Unit 6)."
  idArray [29] = "<b>Topic 3:</b> Answer this question: <u>How will entertainment change in the future?</u> (Unit 6)."
  idArray [30] = "<b>Topic 3:</b> Answer this question: <u>What do you think the world will look like in 50 years?</u> (Unit 6)."
  idArray [31] = "<b>Topic 3:</b> Answer this question: <u>What will have the biggest impact on you in the near future?</u> (Unit 6)."
  idArray [32] = "<b>Topic 3:</b> Answer this question: <u>Will robots become part of daily life in the future? Why or why not?</u> (Unit 6)."
  idArray [33] = "<b>Topic 3:</b> Answer this question: <u>Will the future be better or worse than the present? Why or why not?</u> (Unit 6)."
  idArray [34] = "<b>Topic 3:</b> Answer this question: <u>What company will change society the most? Will it be a good change or bad change?</u> (Unit 6)."

  // UNIT 6: Review of verb forms (Present, past & future).
  // NOTHING!

  document.getElementById("select3").onclick = myFunctionThree;
  randomParagraph = Math.floor(Math.random()*34);

  document.getElementById("result-three").innerHTML = idArray[randomParagraph + 1];       
}
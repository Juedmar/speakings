function myFunctionTwo() {
  idArray = new Array()
  idArray [1] = "<b>Topic 2:</b> What are <u>your best tips to live a happy life?</u> (Unit 2C)."
  idArray [2] = "<b>Topic 2:</b> Give <u>some tips for a hobby or pastime you have.</u> (Unit 2C)."
  idArray [3] = "<b>Topic 2:</b> Give <u>some instructions to plan a great vacation.</u> (Unit 2C)."
  idArray [4] = "<b>Topic 2:</b> What should <u>someone do if there is an earthquake?</u> (Unit 2C)."
  idArray [5] = "<b>Topic 2:</b> Tell me how to <u>prepare some kind of delicious food.</u> (Unit 2C)."
  idArray [6] = "<b>Topic 2:</b> What are your <u>best tips & recommendations for a happy marriage?</u> (Unit 2C)."
  idArray [7] = "<b>Topic 2:</b> Give some <u>step-by-step instructions on how to make a lot of money.</u> (Unit 2C)."

  document.getElementById("select2").onclick = myFunctionTwo;
  randomParagraph = Math.floor(Math.random()*7);

  document.getElementById("result-two").innerHTML = idArray[randomParagraph + 1];       
}
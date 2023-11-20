function myFunctionOne() {
  idArray = new Array()
  idArray [1] = "<b>TOPIC 1:</b> Talk about <u>all the things that are happening right now</u> in your life, including your family or personal life, education, sports, music or hobbies, etc. Also, say why you like (or dislike) doing them."
  idArray [2] = "<b>TOPIC 1:</b> Imagine you are in the middle of the city, in a busy downtown area. <u>Describe all the things happening in your imaginary city</u> at the current moment. You can use your imagination."
  idArray [3] = "<b>TOPIC 1:</b> <u>Describe your bedroom in detail</u>, including all the things you can see there, where they are, the colors and sizes, the number of things, etc. Remember to use correct prepositions."
  idArray [4] = "<b>TOPIC 1:</b> <u>Describe your living room in detail</u>, including all the things you can see there, where they are, the colors and sizes, the number of things, etc. Remember to use correct prepositions."
  idArray [5] = "<b>TOPIC 1:</b> <u>Describe your kitchen in detail</u>, including all the things you can see, where they are, the colors and sizes, the number of things, etc. Remember to use correct prepositions."
  idArray [6] = "<b>TOPIC 1:</b> <u>Talk about your home and family chores & obligations</u>, including all the things you have to do, the frequency, why you like (or dislike) doing them. What happens if you don't do them?"
  idArray [7] = "<b>TOPIC 1:</b> <u>Talk about any house </u>chores people with pets need to do</u> to keep their house clean. Mention all the things they have to do, how frequently they must do them. Why is it necessary to do them?"

  document.getElementById("select1").onclick = myFunctionOne;
  randomParagraph = Math.floor(Math.random()*7);

  document.getElementById("result-one").innerHTML = idArray[randomParagraph + 1];
}
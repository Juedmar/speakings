function myFunctionTwo() {
  idArray = new Array()

  // Modal verbs
  idArray [1] = "<b>TOPIC B:</b> Tak about <u>what a person has do to be happy.</u> Why? (Unit 7C & 8A)."
  idArray [2] = "<b>TOPIC B:</b> Talk about what <u>activities you recommend to stay healthy.</u> Explain. (Unit 7)."
  idArray [3] = "<b>TOPIC B:</b> Tak about <u>what students have to do if they want to improve their English.</u> (Unit 7C & 8A)."
  idArray [4] = "<b>TOPIC B:</b> Tak about <u>some of the things a person has to do to become successful.</u> Why? (Unit 7C & 8A)."
  idArray [5] = "<b>TOPIC B:</b> Tak about <u>some necessary foods people have to eat at least once a week.</u> Why? (Unit 7C & 8A)."
  idArray [6] = "<b>TOPIC B:</b> Tak about <u>some things you must or must not do at your job or university.</u> Explain. (Unit 7C & 8A)."
  idArray [7] = "<b>TOPIC B:</b> Tak about <u>some things you must do or must not do when you go to the airport, or the bank.</u> Explain. (Unit 7C & 8A)."
  idArray [8] = "<b>TOPIC B:</b> Tak about <u>some interesting customs & traditions people have to follow in this country.</u> Explain. (Unit 7C & 8A)."
  idArray [9] = "<b>TOPIC B:</b> What <u>health advice and recommendation has a friend</u>, or someone in your family, <u>ever told you that helps you stay fit and healthy</u>? (Unit 7)."

  document.getElementById("select2").onclick = myFunctionTwo;
  randomParagraph = Math.floor(Math.random()*9);

  document.getElementById("result-two").innerHTML = idArray[randomParagraph + 1];       
}
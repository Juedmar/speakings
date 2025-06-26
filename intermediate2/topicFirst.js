function myFunctionOne() {
  idArray = new Array()

  // VERBS + PARTICIPLE (want to do, need to do, hope to do, expect do to, forget to do, etc.)
  idArray [1] = "<b>TOPIC 1:</b> Talk about <u>something you always forget to do.</u> Explain. (Unit 7)."
  idArray [2] = "<b>TOPIC 1:</b> Talk about <u>something you hope to do in the future.</u> Why? (Unit 7)."
  idArray [3] = "<b>TOPIC 1:</b> Talk about some <u>places you want/hope to go on vacation</u> some day. Why? (Unit 7)."
  idArray [4] = "<b>TOPIC 1:</b> Tak about <u>some things you have to do when you get home.</u> Explain. (Unit 7C & 8A)."
  idArray [5] = "<b>TOPIC 1:</b> What are <u>some of your wishes for the future</u>, either in your personal life, family life or professional aspirations? (Unit 7)."
  idArray [6] = "<b>TOPIC 1:</b> Talk about what you<u> want, hope or expect to do after you graduate.</u> What other wishes or life goals <u>will you try to accomplish</u>? (Unit 7)."

  // VERBS + GERUND (enjoy doing, avoid doing, hate doing, refuse doing, admint doing, etc.)
  idArray [7] = "<b>TOPIC 1:</b> Talk about what <u>housework do you not mind doing.</u> Explain. (Unit 7)."
  idArray [8] = "<b>TOPIC 1:</b> Talk about some <u>activities you dislike doing</u>. Explain why. (Unit 7)."
  idArray [9] = "<b>TOPIC 1:</b> Talk about what activities <u>you enjoy doing on the weekend.</u> Explain. (Unit 7)."
  idArray [10] = "<b>TOPIC 1:</b> Talk about some <u>high school activities you miss doing.</u> Explain. (Unit 7)."
  idArray [11] = "<b>TOPIC 1:</b> Talk about <u>what kind of activities your job or studies involve doing.</u> (Unit 7)."
  idArray [12] = "<b>TOPIC 1:</b> Talk about if you think that <u>playing video games is useful or a waste of time.</u> Why or why not? (Unit 7)."
  idArray [13] = "<b>TOPIC 1:</b> Talk about <u>some of the something you're considering doing?</u> What are they? Explain why. (Unit 7)."

  // Modal verbs
  idArray [14] = "<b>TOPIC 1:</b> Tak about <u>what a person has do to be happy.</u> Why? (Unit 7C & 8A)."
  idArray [15] = "<b>TOPIC 1:</b> Talk about what <u>activities you recommend to stay healthy.</u> Explain. (Unit 7)."
  idArray [16] = "<b>TOPIC 1:</b> Tak about <u>what students have to do if they want to improve their English.</u> (Unit 7C & 8A)."
  idArray [17] = "<b>TOPIC 1:</b> Tak about <u>some of the things a person has to do to become successful.</u> Why? (Unit 7C & 8A)."
  idArray [18] = "<b>TOPIC 1:</b> Tak about <u>some necessary foods people have to eat at least once a week.</u> Why? (Unit 7C & 8A)."
  idArray [19] = "<b>TOPIC 1:</b> Tak about <u>some things you must or must not do at your job or university.</u> Explain. (Unit 7C & 8A)."
  idArray [20] = "<b>TOPIC 1:</b> Tak about <u>some things you must do or must not do when you go to the airport.</u> Explain. (Unit 7C & 8A)."
  idArray [21] = "<b>TOPIC 1:</b> Tak about <u>some interesting customs & traditions people have to follow in this country.</u> Explain. (Unit 7C & 8A)."
  idArray [22] = "<b>TOPIC 1:</b> What <u>health advice and recommendation has a friend</u>, or someone in your family, <u>ever told you that helps you stay fit and healthy</u>? (Unit 7)."

  document.getElementById("select1").onclick = myFunctionOne;
  randomParagraph = Math.floor(Math.random()*22);

  document.getElementById("result-one").innerHTML = idArray[randomParagraph + 1];
}
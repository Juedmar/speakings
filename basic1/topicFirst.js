function myFunctionOne() {
  idArray = new Array()
  idArray [1] = "<b>Topic 1:</b> Talk about<u> all the people who live in your family</u>. Mention their names, their age & what they do. (Unit 1)."
  idArray [2] = "<b>Topic 1:</b> Talk about<u> some of your best friends</u>. Mention their names, their age & what they do. (Unit 1)."
  idArray [3] = "<b>Topic 1:</b> Talk about<u> some of your closest classmates</u>. Mention their names, their age & what they do. (Unit 1)."

  document.getElementById("select1").onclick = myFunctionOne;
  randomParagraph = Math.floor(Math.random()*3);

  document.getElementById("result-one").innerHTML = idArray[randomParagraph + 1];
}
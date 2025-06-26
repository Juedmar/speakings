function myFunctionTwo() {
  idArray = new Array()

  // FIRST CONDITIONAL
  idArray [1] = "<b>TOPIC 2:</b> Talk about <u>the things you will do if you are bored</u>. (Unit 8B)."
  idArray [2] = "<b>TOPIC 2:</b> What will you do <u>if it rains every day this weekend</u>? (Unit 8B)."
  idArray [3] = "<b>TOPIC 2:</b> What will you do <u>if you meet a celebrity you admire</u>? (Unit 8B)."
  idArray [4] = "<b>TOPIC 2:</b> Who will you eat with <u>if you go out to dinner this week</u>? (Unit 8B)."
  idArray [5] = "<b>TOPIC 2:</b> <u>If you go out for dinner this evening</u>, what will you eat? (Unit 8B)."
  idArray [6] = "<b>TOPIC 2:</b> Talk about <u>some of the things you will do when you graduate</u>. (Unit 8B)."
  idArray [7] = "<b>TOPIC 2:</b> What will you do <u>if the power goes out in your home tonight</u>? (Unit 8B)."
  idArray [8] = "<b>TOPIC 2:</b> Talk about <u>what type of food you will order if you go out to eat</u>. (Unit 8B)."
  idArray [9] = "<b>TOPIC 2:</b> Talk about <u>where you will go if you want to relax or have some fun</u>. (Unit 8B)."
  idArray [10] = "<b>TOPIC 2:</b> What will you do <u>if you crack the screen on your phone</u> or <u>drop it in the toilet</u>? (Unit 8B)."
  idArray [11] = "<b>TOPIC 2:</b> What will you do <u>if you forget an important birthday</u>, like your best friend or a family member? (Unit 8B)."
  idArray [12] = "<b>TOPIC 2:</b> If you get a chance to start studying at university again, <u>what area or program will you choose</u>? (Unit 8B)."
  idArray [13] = "<b>TOPIC 2:</b> Talk about <u>what you will do when you go to the cinema</u>, including movie types, friends, times, popcorn, drinks, etc. (Unit 8B)."
  idArray [14] = "<b>TOPIC 2:</b> Talk about <u>how your life will be affected if there is a very serious financial crisis.</u> What parts of your life will be changed or be forced to stop? (Unit 8B)."
  idArray [15] = "<b>TOPIC 2:</b> Talk about <u>how your life will be affected if you become absolutely rich & wealthy.</u> What parts of your life will be changed or improved by your new wealth? (Unit 8B)."

  // SECOND CONDITIONAL
  idArray [16] = "<b>TOPIC 2:</b> If you were an animal,<u> what animal would you be</u>? (Unit 9A)."
  idArray [17] = "<b>TOPIC 2:</b> <u>If you had only one week to live</u>, what would you do? (Unit 9A)."
  idArray [18] = "<b>TOPIC 2:</b> What spell would you want to know <u>if you were a wizard</u>? (Unit 9A)."
  idArray [19] = "<b>TOPIC 2:</b> If you could have any animal as a pet, <u>what animal would you want</u>? (Unit 9A)."
  idArray [20] = "<b>TOPIC 2:</b> If you could create a superhero, <u>what would their power and name be</u>? (Unit 9A)."
  idArray [21] = "<b>TOPIC 2:</b> If you could be a master at one skill, <u>what would you be a master of</u>? (Unit 9A)."
  idArray [22] = "<b>TOPIC 2:</b> What would you tell yourself <u>if you could go back in time and talk to your younger self</u>? (Unit 9A)."
  idArray [23] = "<b>TOPIC 2:</b> If you could <u>buy all of your possessions & things again</u> but brand new, <u>what would you buy</u>? What stores would you visit? (Unit 9A)."
  idArray [24] = "<b>TOPIC 2:</b> What <u>food & supplies</u> would you buy <u>if there was a zombie apocalypse</u>? Where would you go & eat to survive the initial weeks? (Unit 9A)."
  idArray [25] = "<b>TOPIC 2:</b> Talk about the activities you would do if you were a millionaire. What would you do every day? What will you never do again after you become rich? (Unit 9A)."
  idArray [26] = "<b>TOPIC 2:</b> Choose <u>one housekeeping activity you will have to do every day & another you won't ever have to do again</u> for the rest of your life. Explain your choices. (Unit 9A)."
  idArray [27] = "<b>TOPIC 2:</b> If you could buy the house of your dreams, <u>what would you like to have in your ideal house?</u> Swimming pool, basketball court, barbecue area, a private cinema? Why? (Unit 9A)."

  document.getElementById("select2").onclick = myFunctionTwo;
  randomParagraph = Math.floor(Math.random()*27);

  document.getElementById("result-two").innerHTML = idArray[randomParagraph + 1];       
}
//character info
var player ={
  playerHealth: 10,
  playerAttack: 1,
  playerMoney: 100,
  PlayerGuns: 'revolver',
  playerArmor:'leatherjacket',
  playerWins:0,
  playerInventory:['revolver','leatherjacket']
}

var enemy1 ={
  enemyHealth: 3,
  enemyMoney: 100,
  enemyAttack: 1
}

var enemy2 ={
  enemyHealth: 3,
  enemyMoney: 100,
  enemyAttack: 1
}

var enemy3 ={
  enemyHealth: 3,
  enemyMoney: 100,
  enemyAttack: 1
}

var boss ={
  enemyHealth: 10,
  enemyMoney: 500,
  enemyAttack: 2
}

//battle mechanic funciton
var battleMech = function(enemycode){
  playerC = prompt("choose ur attack(1.fast Shot 2.Brutal Shot 3.Timing Shot)");
  enemyC = Math.floor(Math.random() * (3 - 1 +1)) + 1;

  if (playerC == 1 && enemyC == 1){
    alert("you fast shoot enemy for "+player.playerAttack+" damage\n\nenemy shoot you with fast shoot for "+enemycode.enemyAttack+" damage")

    player.playerHealth -= enemycode.enemyAttack;
    enemycode.enemyHealth -= player.playerAttack;
    alert("player health : "+player.playerHealth+"\n\nenemy health: "+enemycode.enemyHealth)

  }else if (playerC == 1 && enemyC == 2){
    alert("you fast shoot enemy for "+player.playerAttack+" damage\n\nenemy shoot you with brutal shoot for "+enemycode.enemyAttack*2+" damage")

    player.playerHealth -= enemycode.enemyAttack*2;
    enemycode.enemyHealth -= player.playerAttack;
    alert("player health : "+player.playerHealth+"\n\nenemy health: "+enemycode.enemyHealth)

  }else if (playerC == 1 && enemyC == 3){
    alert("you fast shoot enemy for "+player.playerAttack+" damage\n\nenemy cannot timing shot properly and cancel the attack")

    player.playerHealth -= 0;
    enemycode.enemyHealth -= player.playerAttack;
    alert("player health : "+player.playerHealth+"\n\nenemy health: "+enemycode.enemyHealth)

  }else if (playerC == 2 && enemyC == 1){
    alert("you shoot enemy brutaly for "+player.playerAttack*2+" damage\n\nenemy shoot you with fast shoot for "+enemycode.enemyAttack+" damage")

    player.playerHealth -= enemycode.enemyAttack;
    enemycode.enemyHealth -= player.playerAttack*2;
    alert("player health : "+player.playerHealth+"\n\nenemy health: "+enemycode.enemyHealth)

  }else if (playerC == 2 && enemyC == 2){
    alert("you shoot enemy brutaly for "+player.playerAttack*2+" damage\n\nenemy shoot you with brutal shoot for "+enemycode.enemyAttack*2+" damage")

    player.playerHealth -= enemycode.enemyAttack*2;
    enemycode.enemyHealth -= player.playerAttack*2;
    alert("player health : "+player.playerHealth+"\n\nenemy health: "+enemycode.enemyHealth)

  }else if (playerC == 2 && enemyC == 3){
    alert("you shoot enemy brutaly but you missed\n\nenemy perfectly timing the shoot and hit you for "+enemycode.enemyAttack*2+" damage")

    player.playerHealth -= enemycode.enemyAttack*2;
    enemycode.enemyHealth -= 0;
    alert("player health : "+player.playerHealth+"\n\nenemy health: "+enemycode.enemyHealth)

  }else if (playerC == 3 && enemyC == 1){
    alert("you timing your shoot but unfortunately the enemy got you first\n\nenemy shoot you with fast shoot for "+enemycode.enemyAttack+" damage")

    player.playerHealth -= enemycode.enemyAttack;
    enemycode.enemyHealth -= 0;
    alert("player health : "+player.playerHealth+"\n\nenemy health: "+enemycode.enemyHealth)

  }else if (playerC == 3 && enemyC == 2){
    alert("you perfectly timing your shoot and hit the enemy for "+player.playerAttack*2+" damage\n\nenemy shoot you with brutal shoot but missed")

    player.playerHealth -= 0;
    enemycode.enemyHealth -= player.playerAttack*2;
    alert("player health : "+player.playerHealth+"\n\nenemy health: "+enemycode.enemyHealth)

  }else if (playerC == 3 && enemyC == 3){
    alert("you timing your shoot but missed\n\nenemy timing their shoot but missed")

    player.playerHealth -= 0;
    enemycode.enemyHealth -=  0;
    alert("player health : "+player.playerHealth+"\n\nenemy health: "+enemycode.enemyHealth)

  }else{};
}

//battle encounter function
var battleEncounter = function(enemycode) {
  while (enemycode.enemyHealth > 0) {
    battleMech(enemycode);
    if (enemycode.enemyHealth <= 0 && player.playerHealth > 0) {
      alert("You Win");
      alert("You get $" + enemycode.enemyMoney + " from the dead enemy body");
      player.playerMoney += enemycode.enemyMoney;
      player.playerWins += 1;
      alert(name + " status : Health = " + player.playerHealth + "\n\n Money =" + player.playerMoney);
    } else if (player.playerHealth <= 0) {
      alert("GAME OVER")
      break;
    }
  }
}

//merchant function
var merchantCounter = function(){
  var shop = true
  alert("you've found a merchant!")
  alert("merchant: \"hey young man, what are you doing here? this is the skull bandit den")
  alert("merchant: \"me? im a merchant even a criminal bandit gang need a people like me, i dont care my costumer is a gang of bandit or a sherif or anybody bussines is bussines... whatever.. see my wares!")
  while(shop == true){
    playerChoiceMerchant = prompt("what you wanna buy?\n1.Shotgun = $300\n2.Bulletproofvest = $300\n3.quit")
    if (playerChoiceMerchant == 1){
      if (player.playerMoney >= 300){
        player.playerGuns = 'shotgun';
        player.playerAttack = 3;
        player.playerMoney -= 300;
        player.playerInventory[0] = 'shotgun'
        alert('you bought shotgun! your attack increase by 2')
        break;
      }else{
        alert("you dont have enough money!")
      }
    }else if (playerChoiceMerchant == 2){
      if (player.playerMoney >= 300){
        player.playerArmor = 'bulletproofvest'
        player.playerHealth = 15
        alert('you bought bulletproofvest! your health increase by 5')
        player.playerInventory[1] = 'bulletproofvest'
        break;
      }else{
        alert("you dont have enough money!")
      }
    }else if(playerChoiceMerchant == 3) {
      alert("you didnt buy anything")
      break;
    }else{
      alert("enter the right number")
    }
  }
}


alert("you're a bounty hunter...");
alert("you wandering through every town to seek a wanted poster and take a reward");
alert("also..");
alert("you search for a criminal gang who rob and slaughtered your family");
var name = prompt("Enter you name:");
alert("you start your journey..");
alert("until finally arriving at the first city you meet");
alert("You are looking for a bar to get the information ");
alert("bartender: \"welcome, can I help you?\"");
alert(name+":\" i'm a bounty hunter.., is there any job to be done?\"");
alert("bartender: \"ah..a bounty hunter, It is such a coincidence!, well take a look at this the mayor spread this poster recently \"");
alert("(the bartender give you a wanted poster)");
alert("bartender: \"they called \"skull bandit\" they cruel and brutal.. a lot of people in this town has been victim of his wickedness... if you want to hunt them down, they hide in the \"hill canyon\" but please be carefull\"");
alert("you take the poster, leave the bar and go to \"Hill Canyon\"");
alert("you arrive at Hill Canyon");
alert("you meet a bandit member who guard the enterance");
alert("bandit member: \"Hey you what are you doing here this no place for someone like you\"");
alert(name+": \"well unfortunately this is the right place.. i came for this(you showed the wanted poster)\"");
alert("bandit member: you'll regret it!");
alert("***THIS IS THE HINT FOR BATTLE***\nwhen you encounter the enemy you will have to choose the attack\n1.fast shoot\n2.brutal shoot\n3.timing shoot");
alert("***THIS IS THE HINT FOR BATTLE***\nfast shoot = give normal damage to enemy\nbrutal shoot = give critical damage to enemy but you will missed if enemy choose timing shoot\ntiming shoot = give critical damage to enemy but it can be canceled if enemy choose fast shoot");



battleEncounter(enemy1);

if (player.playerWins == 1){
	alert("you've defeated the enemy and you go deeper to the den");
  alert("as you go deeper into the den.. there is a lot of dead body everywhere, probably it is the victim body.. you remembered the night when the criminal gang who slaughtered your enemy");
  alert("the criminal gang try to open your door by force.. your mother hide you in the dark small room under the floor, you witnessed the criminal gang slaughtered your whole family from that room through the hole in the door..");
  alert("you see a tatoo of skull and guns on their hand,every member has it on their right hand but the leader have it on both of his hand, ");
  alert("you feel anger and rage, as you remembered.. you walk faster try to find the leader");
  alert("you found another enemy.. without hestitation you draw your guns and fight the enemy");
  battleEncounter(enemy2);
}

if (player.playerWins == 2){
  alert('you walk over the enemy dead body.. you see a room with a skull sign at the door, it looks like a leader room')
  alert("you see a man outside the door you draw your guns but you realize he is different from the enemy you fought, you choose to approach him with peace")
  merchantCounter();
  alert("merchant : \"here drink this, it will restore your health..")
  if (player.playerArmor == 'leatherjacket'){
    player.playerHealth = 10;
  }else if (player.playerArmor == 'bulletproofvest'){
    player.playerHealth = 15;
  }
  alert("your health restored")
  alert(name + " status : Health = " + player.playerHealth + "\n\n Money =" + player.playerMoney);
  alert("you check your guns make the condition is still fine, you prepare yourself for whatever you face behind that door..")
  alert("you open the door you see a man with the tatoo skull and guns on their hand")
  alert("Boss : \"so.. the noise out there, it was your doing.. you're here that's mean you beat my men.. who are you? a new sherif or perhaps a bounty hunter?")
  alert(name+" : \"im a bounty hunter.. but no matter who i am,.. your tatoo, i will kill you i will revenge my family ")
  alert("Boss : \"ah.. east town isn't it? i though we kill al the people in there..")
  alert(name+" : \"your life end here!!")
  alert("Boss Fight")
  battleEncounter(boss);
}

if (player.playerWins == 3){
  alert("Boss : \"i lost.. but you see, i only have a tatoo on right hand i was a member back then.. but i quit and make my own gangs.. you have a good skill young man.. but the leader he has a talent, you won't have a chance\"")
  alert(name+" : \"shut up and enjoy your rest in hell..\"")
  alert("you leave the den with the head of a leader skull bandit to the town")
  alert("to be continue...")
}

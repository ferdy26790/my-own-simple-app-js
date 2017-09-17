var merchantCounter = function(){
  alert("you've found a merchant!")
  alert("merchant: \"hey young man, what are you doing here? this is the skull bandit den")
  alert("merchant: \"me? im a merchant even a criminal bandit gang need a people like me, i dont care my costumer is a gang of bandit or a sherif or anybody bussines is bussines... whatever.. see my wares!")
  playerChoiceMerchant = prompt("what you wanna buy?\n1.Shotgun = $300\n2.Bulletproofvest = $300\n3.quit")
  if (playerChoiceMerchant == 1){
    if (player.playerMoney >= 300){
      player.playerGuns = 'shotgun';
      player.playerAttack = 3;
      player.playerMoney -= 300;
      player.playerInventory[0] = 'shotgun'
      console.log('you bought shotgun! your attack increase by 2')
    }else{
      console.log("you dont have enough money!")
    }
  }else if (playerChoiceMerchant == 2){
    if (player.playerMoney >= 300){
      player.playerArmor = 'bulletproofvest'
      player.playerHealth = 15
      console.log('you bought bulletproofvest! your health increase by 5')
      player.playerInventory[1] = 'bulletproofvest'
    }else{
      console.log("you dont have enough money!")
    }
  }else if(playerChoiceMerchant == 3) {
    console.log("you didnt buy anything")
  }else{
    console.log("enter the right number")
  }
}

var battleMechEnemy = function(enemycode){
  playerC = prompt("choose ur attack(1.fast Shot 2.Brutal Shot 3.Timing Shot)");
  enemyC = Math.floor(Math.random() * (3 - 1 +1)) + 1;

  if (playerC == 1 && enemyC == 1){
    alert("you fast shoot enemy for "+player.playerAttack+" damage\n\nenemy shoot you with fast shoot for "+enemycode.enemyAttack+" damage")
    alert("player health : "+player.playerHealth+"\n\nenemy health: "+enemycode.enemyHealth)
    player.playerHealth -= enemycode.enemyAttack;
    enemycode.enemyHealth -= player.playerAttack;

  }else if (playerC == 1 && enemyC == 2){
    alert("you fast shoot enemy for "+player.playerAttack+" damage\n\nenemy shoot you with brutal shoot for "+enemycode.enemyAttack*2+" damage")
    alert("player health : "+player.playerHealth+"\n\nenemy health: "+enemycode.enemyHealth)
    player.playerHealth -= enemycode.enemyAttack*2;
    enemycode.enemyHealth -= player.playerAttack;
  }else if (playerC == 1 && enemyC == 3){
    alert("you fast shoot enemy for "+player.playerAttack+" damage\n\nenemy cannot timing shot properly and cancel the attack")
    alert("player health : "+player.playerHealth+"\n\nenemy health: "+enemycode.enemyHealth)
    player.playerHealth -= 0;
    enemycode.enemyHealth -= player.playerAttack;

  }else if (playerC == 2 && enemyC == 1){
    alert("you shoot enemy brutaly for "+player.playerAttack*2+" damage\n\nenemy shoot you with fast shoot for "+enemycode.enemyAttack+" damage")
    alert("player health : "+player.playerHealth+"\n\nenemy health: "+enemycode.enemyHealth)
    player.playerHealth -= enemycode.enemyAttack;
    enemycode.enemyHealth -= player.playerAttack*2;
  }else if (playerC == 2 && enemyC == 2){
    alert("you shoot enemy brutaly for "+player.playerAttack*2+" damage\n\nenemy shoot you with brutal shoot for "+enemycode.enemyAttack*2+" damage")
    alert("player health : "+player.playerHealth+"\n\nenemy health: "+enemycode.enemyHealth)
    player.playerHealth -= enemycode.enemyAttack*2;
    enemycode.enemyHealth -= player.playerAttack*2;
  }else if (playerC == 2 && enemyC == 3){
    alert("you shoot enemy brutaly but you missed\n\nenemy perfectly timing the shoot and hit you for "+enemycode.enemyAttack*2+" damage")
    alert("player health : "+player.playerHealth+"\n\nenemy health: "+enemycode.enemyHealth)
    player.playerHealth -= enemycode.enemyAttack*2;
    enemycode.enemyHealth -= 0;

  }else if (playerC == 3 && enemyC == 1){
    alert("you timing your shoot but unfortunately the enemy got you first\n\nenemy shoot you with fast shoot for "+enemycode.enemyAttack+" damage")
    alert("player health : "+player.playerHealth+"\n\nenemy health: "+enemycode.enemyHealth)
    player.playerHealth -= enemycode.enemyAttack;
    enemycode.enemyHealth -= 0;
  }else if (playerC == 3 && enemyC == 2){
    alert("you perfectly timing your shoot and hit the enemy for "+player.playerAttack*2+" damage\n\nenemy shoot you with brutal shoot but missed")
    alert("player health : "+player.playerHealth+"\n\nenemy health: "+enemycode.enemyHealth)
    player.playerHealth -= 0;
    enemycode.enemyHealth -= player.playerAttack*2;
  }else if (playerC == 3 && enemyC == 3){
    alert("you timing your shoot but missed\n\nenemy timing their shoot but missed")
    alert("player health : "+player.playerHealth+"\n\nenemy health: "+enemycode.enemyHealth)
    player.playerHealth -= 0;
    enemycode.enemyHealth -=  0;
  }else{};
}

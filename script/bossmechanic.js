var battleMechboss = function(){
  playerC = prompt("choose ur attack(1.fast Shot 2.Brutal Shot 3.Timing Shot)");
  bossC = Math.floor(Math.random() * (3 - 1 +1)) + 1;

  if (playerC == 1 && bossC == 1){
    console.log("you fast shoot boss for "+player.playerAttack+" damage")
    console.log("boss shoot you with fast shoot for "+boss.bossAttack+" damage")
    player.playerHealth -= boss.bossAttack;
    boss.bossHealth -= player.playerAttack;
  }else if (playerC == 1 && bossC == 2){
    console.log("you fast shoot boss for "+player.playerAttack+" damage")
    console.log("boss shoot you with brutal shoot for "+boss.bossAttack*2+" damage")
    player.playerHealth -= boss.bossAttack*2;
    boss.bossHealth -= player.playerAttack;
  }else if (playerC == 1 && bossC == 3){
    console.log("you fast shoot boss for "+player.playerAttack+" damage")
    console.log("boss cannot timing shot properly and cancel the attack")
    player.playerHealth -= 0;
    boss.bossHealth -= player.playerAttack;

  }else if (playerC == 2 && bossC == 1){
    console.log("you shoot boss brutaly for "+player.playerAttack*2+" damage")
    console.log("boss shoot you with fast shoot for "+boss.bossAttack+" damage")
    player.playerHealth -= boss.bossAttack;
    boss.bossHealth -= player.playerAttack*2;
  }else if (playerC == 2 && bossC == 2){
    console.log("you shoot boss brutaly for "+player.playerAttack*2+" damage")
    console.log("boss shoot you with brutal shoot for "+boss.bossAttack*2+" damage")
    player.playerHealth -= boss.bossAttack*2;
    boss.bossHealth -= player.playerAttack*2;
  }else if (playerC == 2 && bossC == 3){
    console.log("you shoot boss brutaly but you missed")
    console.log("boss perfectly timing the shoot and hit you for "+boss.bossAttack*2+" damage")
    player.playerHealth -= boss.bossAttack*2;
    boss.bossHealth -= 0;

  }else if (playerC == 3 && bossC == 1){
    console.log("you timing your shoot but unfortunately the boss got you first")
    console.log("boss shoot you with fast shoot for "+boss.bossAttack+" damage")
    player.playerHealth -= boss.bossAttack;
    boss.bossHealth -= 0;
  }else if (playerC == 3 && bossC == 2){
    console.log("you perfectly timing your shoot and hit the boss for "+player.playerAttack*2+" damage")
    console.log("boss shoot you with brutal shoot but missed")
    player.playerHealth -= 0;
    boss.bossHealth -= player.playerAttack*2;
  }else if (playerC == 3 && bossC == 3){
    console.log("you timing your shoot but missed")
    console.log("boss timing their shoot but missed")
    player.playerHealth -= 0;
    boss.bossHealth -=  0;
  }else{};
}

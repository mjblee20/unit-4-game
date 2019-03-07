
// player character stats
let player = {
}

// enemy character stats
let enemy = {
}

// keeps track of how many times players have attacked
let attackCount = 1; 
// player is player = 0, enemy is player = 1
let playerChoosing = true;
let chosenEnemy = [];
let chosenPlayer;
let inGame = false;
let enemyNumber = 0;
let characters = $("#character");

$("document").ready(function() {
    $("#attack").on("click", function() {
        attack();
    });
    $("#restart").on("click", function() {
        restart();
    });
    $(".character").on("click", function() {
        console.log(this.id);
        if (playerChoosing) {
            chooseChar(this);
            player.hp = parseInt(this.dataset["health"]);
            player.dmg = parseInt(this.dataset["attack"]);
            player.counterdmg= parseInt(this.dataset["counter"]);
            
            chosenPlayer = this;
        } else {
            chooseEnemy(this); 
            enemy.hp = parseInt(this.dataset["health"]);
            enemy.dmg = parseInt(this.dataset["attack"]);
            enemy.counterdmg= parseInt(this.dataset["counter"]);
            // keep track of the hidden defeated character cards
            chosenEnemy.push(this);
        }  
            
    });
});

// player chooses a character by selecting character's picture
function chooseChar(obj) {
    console.log("in chooseChar");
    // player character box moves to the playerCharacter side of the battlefield
    $("#"+obj.id).appendTo($("#playerChar"));

    
    // move all other characters to the Enemies Available To Attack
    for (let i = 0; i < characters.length; i++) {
        console.log(characters[i]);
        if (characters[i].dataset["selected"] == "false") {
            characters[i].appendTo($("#potentialEnemies"));
        }
    }

    playerChoosing = false;
}

// player chooses opponent by selecting character's picture, defender is moved to defender_area, button attack is now enabled
function chooseEnemy(obj) {
    console.log("in chooseEnemy");
    inGame = true;
    // move the selected enemy to enemyChar side of the battlefield
    $("#"+obj.id).appendTo($("#enemyChar"));
    // enables the attack button
    document.getElementById("attack").disabled = false;
}

// attack player character damages enemy, shown in decrease of HP, which is displayed at the bottom of the enemy's picture

function attack() {
    console.log("in attack");
    // press attack to dmg enemy character
    // get attack value and health value of the enemy from html using data[]
    enemy.hp -= player.dmg
    chosenEnemy[enemyNumber].dataset["health"] = "" + enemy.hp;
    console.log(document.getElementById(""+chosenEnemy[enemyNumber].id));
    document.getElementById(""+chosenEnemy[enemyNumber].id).querySelector(".hp").innerHTML = "" + enemy.hp;
    // enemy counter attack immediately. get health value and counter attack value of the enemy from html using data[]
    // update player health


    // each time the player attacks, their character's Attack Power increases by its base Attack Power.
    attackCount++;
    // get attack value from html and update it
    player.dmg *= attackCount;
    chosenPlayer.dataset["attack"] = ""+player.dmg;
    // if player char health is <= 0, player has lost display You have been defeated... GG! in log
    if (player.hp <= 0) {
        inGame = false;
        // show restart button
        document.getElementById("restart").style.display = "block";
        // disable attack button
        document.getElementById("attack").disabled = true;
        // defeat message
        document.getElementById("log").innerHTML = "You have been defeated... GG!";
    }

    // if enemy char health is <= 0, remove the character box from enemyChar in battlefield by changing display to none in css stylesheet
    // initiate another chooseEnemy, if there are no more enemies initiate win screen
    if (enemy.hp <= 0) {
        
        inGame = false;
        // hides the defeated enemy card and move it back to character selection box
        console.log(enemyNumber, $("#"+chosenEnemy[enemyNumber].id));
        $("#"+chosenEnemy[enemyNumber].id)[0].style.display = "none";
        $("#"+chosenEnemy[enemyNumber].id).appendTo($("#start"));
        enemyNumber++;

        // checks if inGame is true and if all enemies have been defeated
        if (inGame === true && enemyNumber === chosenEnemy.length - 1) {
            document.getElementById("log").innerHTML = "You have been victorious!... GG!";
            // show restart button
            document.getElementById("restart").style.display = "block";
        }

    }
}

function restart() {
    // show all the character boxes
    
    for (let i = 0; i < characters.length; i++) {
        characters[i].style.display = "block";
    }
    // reset inGame
    chosenPlayer.appendTo($("#start"));
    document.getElementById("restart").style.display = "none";
}
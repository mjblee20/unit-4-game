
// player character stats
var player = {
    healthPoints: "",
    attackPower: "",
    counterAttackPower: "",
}

// enemy character stats
var enemy = {
    healthPoints: "",
    attackPower: "",
    counterAttackPower: "",
}

// keeps track of how many times players have attacked
var attackCount = 1; 
// player is player = 0, enemy is player = 1
var player = 0;
var chosenEnemy = [];
var chosenPlayer;
var inGame = false;
var enemyNumber;

$("document").ready(function() {
    console.log(document.getElementById("playerChar"));
    $("#attack").on("click", function() {
        attack();
    });
    $("#restart").on("click", function() {
        restart();
    });
    $(".character").on("click", function() {
        console.log(this.id);
        if (player === 0) {
            chooseChar(this);
            player.healthPoints = parseInt(this.dataset["health"]);
            player.attackPower = parseInt(this.dataset["attack"]);
            player.counterAttackPower= parseInt(this.dataset["counter"]);
            console.log(this.dataset["health"], this.dataset["attack"], this.dataset["counter"]);
            chosenPlayer = this;
        } else {
            chooseEnemy(this); 
            enemy.healthPoints = parseInt(this.dataset["health"]);
            enemy.attackPower = parseInt(this.dataset["attack"]);
            enemy.counterAttackPower= parseInt(this.dataset["counter"]);
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
    var children;


    player = 1;
}

// player chooses opponent by selecting character's picture, defender is moved to defender_area, button attack is now enabled
function chooseEnemy(obj) {
    console.log("in chooseEnemy");
    enemyNumber = 1;
    inGame = true;
    // $("#"+obj.id).parent().appendTo($("#enemyChar"));
    console.log("choosing Enemy Character")
    // move the selected enemy to enemyChar side of the battlefield
    // enables the attack button
    document.getElementById("attack").disabled = false;

}

// attack player character damages enemy, shown in decrease of HP, which is displayed at the bottom of the enemy's picture

function attack() {
    // press attack to dmg enemy character
    // get attack value and health value of the enemy from html using data[]

    // enemy counter attack immediately. get health value and counter attack value of the enemy from html using data[]
    // update player health
    // each time the player attacks, their character's Attack Power increases by its base Attack Power.
    attackCount++;
    // get attack value from html and update it
    console.log(document.getElementById("playerChar"));
    player.attackPower *= attackCount;
    chosenPlayer.data["attackPower"] = "" + player.attackPower
    // if player char health is <= 0, player has lost display You have been defeated... GG! in log
    if (player.healthPoint <= 0) {
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
    if (enemy.healthPoints <= 0) {
        inGame = false;
        // show restart button
        document.getElementById("restart").style.display = "block";
        chosenEnemy.style.display = "none";
        // checks if inGame is true and if all enemies have been defeated
        if (enemyNumber === chosenEnemy.length) {
            document.getElementById("log").innerHTML = "You have been victorious!... GG!";
        }

    }
}

function restart() {
    // show all the character boxes
    characters = $(".character");
    for (let i = 0; i < character.length; i++) {
        characters[i].style.display = "block";
    }
    // reset inGame
    
    document.getElementById("restart").style.display = "none";
}

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

$("document").ready(function() {
    $("#attack").on("click", function() {
        attack();
    });
    $("img").on("click", function() {
        console.log(this.id);
        if (player === 0) {
            chooseChar(this);
        } else {
            chooseEnemy(this); 
        }  
            
    });
    gameStart();
});

// initialize game 
function gameStart() {
    //allow 
    
}

// player chooses a character by selecting character's picture
function chooseChar(obj) {
    // player character box moves to the playerCharacter side of the battlefield
    $("#"+obj.id).parent().appendTo($("#playerChar"));
    
    
    // move all other characters to the Enemies Available To Attack
    console.log($("#start")[0].childNodes);
    var children = $("#start")[0].childNodes
    for (let i = 0; i < children.length; i++) {

    }

    player = 1;
}

// player chooses opponent by selecting character's picture, defender is moved to defender_area, button attack is now enabled
function chooseEnemy(obj) {
    $("#"+this.id).parent().appendTo($("#enemyChar"));
    console.log("choosing Enemy Character")
    // move the selected enemy to enemyChar side of the battlefield
    $("img").on("click", function() {
        $("#"+obj.id).parent().appendTo($("#enemyChar"));
    });
    // 

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

    // if player char health is <= 0, player has lost display You have been defeated... GG! in log


    // if enemy char health is <= 0, remove the character box from enemyChar in battlefield
    // initiate another chooseEnemy, if there are no more enemies initiate win screen
    if (#) {

    }
}

function restart() {

}
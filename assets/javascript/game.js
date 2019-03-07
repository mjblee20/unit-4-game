
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
    gameStart();
});

// initialize game 
function gameStart() {
    $("img").on("click", function() {
        console.log(this.id);
        if (player === 0) {
            chooseChar(this);
        } else {
            $("#"+this.id).parent().appendTo($("#enemyChar"));
        }
            
    });
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
}

// player chooses opponent by selecting character's picture, defender is moved to defender_area, button attack is now enabled
function chooseEnemy() {
    console.log("choosing Enemy Character")
    // move the selected enemy to enemyChar side of the battlefield
    $("img").on("click", function() {
        $("#hydraliskImg").parent().appendTo($("#enemyChar"));
    });
    // 

}

// attack player character damages enemy, shown in decrease of HP, which is displayed at the bottom of the enemy's picture

function attack() {
    // press attack to dmg enemy character

    // enemy counter attack immediately

    // each time the player attacks, their character's Attack Power increases by its base Attack Power.

    // if player char health is <= 0, player has lost display You have been defeated... GG! in log

    // if enemy char health is <= 0, remove the character box from enemyChar in battlefield
    // initiate another chooseEnemy, if there are no more enemies initiate win screen
}
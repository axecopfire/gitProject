function castSpell () {
    console.log("Shoot fireball");
}
function dragonFightBack () {
    console.log("Bite at the wizard")
}

function setScene() {
    console.log("A wizard is confronted by a big dragon.");
}

function gameOver() {
    console.log("wizard wins!");
}


function fight(turn, turnNumber) {
    if (turnNumber === 0) {
        setScene();
    }
    console.log("It is the", turn + "'s turn")

    if(turn === "wizard") {
        castSpell();

    } else if (turn === "dragon") {
        dragonFightBack();
    } else if(turnNumber === "end") {
        gameOver();
    }
}


for(var i = 0; i < 5; i ++) {
    if(i === 4 ) {
        fight("", "end");
    } else if (i % 2 === 0) {
        fight("wizard", i);
    } else {
        fight("dragon", i);
    }

}
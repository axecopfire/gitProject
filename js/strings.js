var ourInput = prompt();
var hackedInput = "";

console.log(ourInput);
for(var i = 0; i < ourInput.length; i ++) {
    if(ourInput[i]  === "s" ) {
        hackedInput += "hacked ";
    } else {
        hackedInput += ourInput[i];
    }
}

console.log(hackedInput);
var i = 0;

while(i < 3) {
    var line = "";

    for(var j = 0; j < 3; j++) {

        if(i === 2 && j === 2) {
            line += ("("+ i + ", "+ j+ ")");
        } else {
            line += ("("+ i + ", "+ j+ "), ");
        }
    }

    console.log(line);
    ++i;
}



var i = 0;

while (i < 100 ) {

    if((i % 3 === 0) && (i % 5 === 0)) {
        console.log(i, "fizzbuzz");

    } else if (i % 3 === 0) {
        console.log(i, "fizz");

    } else if (i % 5 === 0) {
        console.log(i, "buzz");
        
    } else {
        console.log(i);
    }

    i++;
}
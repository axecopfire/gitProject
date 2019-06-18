var i = 0;

while(i < 3) {
    var line = "";

    for(var j = 0; j < 3; j++) {
        line += ("("+ i + ", "+ j+ "), ");
    }

    console.log(line);
    ++i;
}
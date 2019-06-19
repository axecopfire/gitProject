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
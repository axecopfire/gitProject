var knivesCounter = 0;
var forksCounter = 0;

function pack (forks, knives) {

    
    var sanitization = function (input) {
        if(input === undefined) {
            return input = 0;
        }
        return input;
    }
    
    knives = sanitization(knives);
    forks = sanitization(forks);
    
    forksCounter += forks;
    knivesCounter += knives;

    if(packedDone()) {
        return packedDone();
    }

    return forks + " forks packed\n"+ knives + " knives packed\n";
}



function packedDone () {

    // If counters are both greater than 5
    if(forksCounter >= 5 && knivesCounter >= 5) {
        return "We are all packed";
    } else {
        return false;
    }
}

console.log(pack(1,5));
console.log(pack(1));
console.log(pack(3,5));
console.log("forks Number:", forksCounter);
console.log("knives Number:", knivesCounter);
// Function Definition
function wakeUp (time, alarm) {
    
    if(time === 4) {
        console.log("whisper: Im 'hitting the gym'");
        
    } else {
        console.log("Its too early going back to sleep");
    }
    
    if(alarm) {
        turnOffAlarm();
    }
}

// Function Expression
var turnOffAlarm = function () {
    console.log("that alarm is super annoying");
}

// Call Functions
wakeUp(12, true);
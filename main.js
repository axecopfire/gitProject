"use strict"



var invJams = 1;
var invJellies = 2;
var invGrapes = 3;
var guavas = false;
























var groceryCart = "1 jellies, 1 jams, 1 grapes";

invJams--;
invJellies--;
--invGrapes;

console.log("Jams are at: ", invJams);
console.log("Jellies are at: ", invJellies);
console.log("Grapes are at: ", invGrapes);

if (invJellies === 0 ) {
    console.log("We are out of jellies");
}
else if (invJams === 0) {
    console.log("we are out of jams");
}
else if (invGrapes === 0 ) {
    console.log("We are out of grapes");
} else {
    console.log("Everything is in stock");

}









// invJams = 0;
// invJellies = 1;
// invGrapes = 2;

// console.log("This is guavas", guavas);

// console.log("This is in our grocery cart", groceryCart);
// console.log("Our Inventory is now", invJams, invJellies, invGrapes);

// // groceryCart = 'jams, grapes';
// var groceryCartWithoutJellies = 'jams, grapes';

// console.log(groceryCartWithoutJellies, groceryCart);

// var groceryCartWithBreadAndPeanutButter = "jams, jellies, grapes, bread, peanutButter";
// // console.log(groceryCart);

// console.log("123000000000000000000000000000000000000000000000000000000000000000000000000000000000012");
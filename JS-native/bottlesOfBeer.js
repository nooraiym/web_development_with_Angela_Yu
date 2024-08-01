/* 
99 bottles of beer on the wall. 99 bottles of beer! Take one down, pass it around, 98 bottles of beer on the wall.
...
2 bottles of beer on the wall. 2 bottles of beer! Take one down, pass it around, 1 bottles of beer on the wall.
No bottles of beer on the wall. No bottles of beer! We took 'em down passed 'em around, no more bottles of beer on the wall!
 */

function decrement() {

let x = 100;
let y= 99;

while (x >1 && y>1){
x--;
y--;

console.log(x + " bottles of beer on the wall. "+ x + " bottles of beer! Take one down, pass it around, "+ y + " bottles of beer on the wall.");
}
console.log ("No bottles of beer on the wall. No bottles of beer! We took 'em down passed 'em around, no more bottles of beer on the wall!");
}

decrement();
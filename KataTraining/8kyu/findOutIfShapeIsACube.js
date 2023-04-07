/*
Instruction - 8 kyu
Find out whether the shape is a cube

- To find the volume (centimeters cubed) of a cuboid you use the formula:

-- volume = Length * Width * Height

- But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
- It's up to you to find out whether the cuboid has equal sides (= is a cube).
- Return true if the cuboid could have equal sides, return false otherwise.
- Return false for invalid numbers too (e.g volume or side is less than or equal to 0).
- Note: side will be an integer
*/

// Solution

const cubeChecker = (volume, side) => 
volume === side ** 3 && side > 0 ? true : false;

// Tests 

console.log(cubeChecker(56.3, 1));
console.log(cubeChecker(8, 2));
console.log(cubeChecker(-1, 2));
console.log(cubeChecker(0, 0));


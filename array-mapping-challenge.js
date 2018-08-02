var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
//map is for looping and obj is var name that assigned each time we loop through//
// var result = input.map(obj => Math.sqrt(obj.x*obj.x + obj.y*obj.y));

//Another way to do it//
var newResult = [];
var result = input.map(obj => (obj.x*obj.x + obj.y*obj.y));
for(i=0; i<result.length; i++)
{
  newResult.push(Math.sqrt(result[i]));
}
console.log(newResult[0] === 5);
console.log(newResult[1] === 13);
console.log(newResult[2] === 17);
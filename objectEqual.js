
//Gabriel Aboy
//iSystems assessment
// You have two arrays with the same type of objects.
// Please explain the logic of how to identify and isolate objects in the two arrays that match.

//save to a file
//npm init to create a package.json and import node_modules
//npm install --save lodash
//node objectEqual.js to run script
/*
  Inorder to understand this problem we must learn about objects and forIn loops. Additionally how we can manipulate
  arrays. Arrays have a method that is push which takes in a variable and adds to the end of the array.
  ForIn loops are similar to for loops but take two arguments one is a variable that changes on every iteration.
  Second is the object you want to loop through.

  The algorithm needs a set of nested for loops to hold values for each index individually. We use two for loops here
  to void the length differences between both arrays. So for each of array1 we want to check all array2 indexs.
  Since we cant use any = operators we must use a forIn loop to check each object key value. Since the keys are the
  same on both arrays we can recycle the first arugment which we defined as variable. We use an if statement
  to check both arrays on a the variable using bracket notation. There is dot notation, but in this case we are using
  a string variable which requires bracket notation. We need to know if all values in the object are true for matching.
  I initialized an array that will hold all true false of each index. If true we push true to this array variable else push false.
  Once the forIn loop ends we can check if both array index are true if so we save the index of the matching
  on both arrays to isolate and identify the values then terminate so that the for loops dont continue to add
  more runtime complexity to the algorithm.


*/
var _ = require('lodash');
var obj = {
  name:"Gabriel",
  last:"Aboy"
}
var obj2 = {
  name:"Gabriel",
  last:"Aboy"
}
console.log('Using lodash module to avoid the === ',_.isEqual(obj,obj2));
console.log('As you can see you cant check objects with either == || ===',obj===obj2);

var array2=[
  {
   name:"Gabriel",
   last:"Agirl"
 },
 {
  name:"Kal",
  last:"Drogo"
},
{
 name:"John",
 last:"Johnson"
},
{
 name:"Gabriel",
 last:"Aboy"
}
]
var array1 = [
  {
   name:"Gabriel",
   last:"Aboy"
 },
 {
  name:"John",
  last:"Snow"
},
{
 name:"Rick",
 last:"Morty"
},
{
 name:"Frodo",
 last:"Baggins"
}
]
var sameUserIndex=[]
for (var i = 0; i < array1.length; i++) {
  var outerCheck = array1[i]
  for (var n = 0; n < array2.length; n++) {
    //Keep this block for both solutions
    var innerCheck = array2[n]
    var arrCheck = []

    //The only line of solution one
    //  _.isEqual(outerCheck,innerCheck)?sameUserIndex.push(i,n):null
    //solution 2
    for (var variable in array2[n]) {
      if(array1[i][variable]===array2[n][variable])arrCheck.push(true)
      else arrCheck.push(false)
    }
    //Keep the code below
    if(arrCheck[0]&&arrCheck[1]){
      sameUserIndex.push(i)
      sameUserIndex.push(n)
      break;
    }
  }
}
console.log(array1[sameUserIndex[0]],'Found at array1 index of: '+sameUserIndex[0]);
console.log(array2[sameUserIndex[1]],'Found at array2 index of: '+sameUserIndex[1]);

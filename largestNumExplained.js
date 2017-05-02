//Gabriel Aboy
//iSystems assessment
var array = [1,3,5,2,0,4,5,2,9,100,9000,8,2];
var x = array[0];

for (var i = 1; i < array.length; i++) {
  if(x<array[i])x=array[i]
}
console.log(x);
/*
You have an array of non-sequential, random numbers.
Please explain the logic of how to find and return the lowest or highest number in the array.

Inorder to understand the question I want to review a few fundamental javascript concepts.
An array is a special data type which can hold a list of all data types. In this example we
have a set array of an abitrary length of variables with the data type of number. Inorder to access
each number in the array "list" we use bracket notation that holds the index. Array indexs start from zero until
the length of the array plus one.
Inorder to automate this process we should use a loop in this case I will
teach a for loop. For loops take in 3 arguments, the first is a variable that we declare at what ever value of data
type of number. Second is the condition statement which uses operators such as = or < to determine how many times the
program interates. The for loop runs until the condition statement is false. The final argument is the iterator which is optional, but is best
practice to iterate on the first argument. We need to know about if statements which are conditional statements and when true
it enters. Now that we got all that out of the way we can get into the algorithm that will
solve the problem above.

We have an array declated to a variable named array and variable x declared to array at index 0.
We use a for loop with the first arument that we will use to access each index of the array. Since we already
initialized the first value of the array starting at index 0. We will declare the for loop accessor variable  i equal to 1.
The conditional will go until the end of the array length of the array. In order to get the length of an array we can take
advantage of methods on data types. Array has one that is the .length prototype which returns the length of the array.
The final argument is the iterator which we want to increment i one at a time. So now we have a for loop which starts at 1
we have access to the first index of the array saved on x. We need to check each element based on a condition if x is
less than array[i] then set x = array[i].

Finally this check each array index on the condition if the previous largest number is smaller than the next then reset
the previous to the next until the end.
*/

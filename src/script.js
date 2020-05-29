var q_arr = []; // will hold Q1, Q2, etc
var n = 5 // total no. of elements in arr
var arr = []; // array to perform operations
var op = 2; // number of operations on array

/* Solution begins */

// Test case 1 as specified in problem statement
arr.push(1,2,3,4,5); // randomize these elements to test different values
q_arr.push(1,0); // randomize these elements to test different values

var sum = 0;

/* @params
  arr - array
  X - value to deduct
  i - current index
*/
function deductBy(arr, X, i) {
  // this function will make sure after deducting X the array will return proper index in circular manner
  
  Number.prototype.mod = function(a) {
    return ((this % n) + n) % n;
  }
  var index = ((i - X).mod(n));
  return index;
}

var calc = []; // calc will hold the operations result
let q = 0; // q will be iterating over q_arr array
let value = 0;

// this loop will run till all the operations are finished, current op = 2
for(var k = 0; k < op; k++) {
  q = q_arr[k]; // q will hold the X to be performed on array
  
  // this loop will iterate over the elements array to perform operations
  for(var i = 0; i < n; i++) {
    if(q === 0) {    
      // do operation on calc array if X = 0
      
      // if calc is empty, take a copy from arr
      if(calc.length === 0){
        calc = arr.slice();  
      }
      // else take own copy to proceed
      else {
       calc = calc.slice(); 
      }
      // replace with your sum itself
      calc[i] = parseInt(arr[i] + arr[i]);
    }
    else {
      // if calc is empty, take a copy from arr
      if(calc.length === 0){
        calc = arr.slice();  
      }
      // else take own copy to proceed
      else {
       calc = calc.slice(); 
      }
      
      value = deductBy(arr, q, i); // calculate the index
      
      // do operation on calc array from arr if X != 0
      calc[i] = parseInt(calc[i] + arr[value]);
    }
  }
  arr = calc.slice(); // update initial array with operation array
}

// now array is built, find sum of elements in array and do the rest
var sum = calc.reduce(function(a, b) { return a + b; }, 0);

sum  = parseInt(sum % (10 ** (9 + 7))); // sum % (10 ^ 9 + 7)

// There IS a newline character at the end of the last line of the output.
document.write("Sum: "+ sum +"\n");
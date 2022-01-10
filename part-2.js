// Make sure to RETURN all of your results

//const joinStrings = (str1, str2) => {
  // Return a string with both strings combined. You MUST include a space between the two strings when joining.

//
function joinStrings(str1,str2) { return (str1 + " " + str2)
}
console.log(joinStrings('Hot', 'Potato'))

/*
const absoluteSum = (arrNums) => {
  // Return the absolute sum of all INTEGERS in an array
  // Note not all items in the array may be a number datatype
  // Remember to check the type of the element

}*/
let num = 0
function absoluteSum(arr) {
  for (let i = 0; i < arr.length; i++){
    num += arr[i]
  }
  return num
} 
console.log(absoluteSum([5,6,-7,8]))
/*
const returnAllValues = (object) => {
  // return all values from the provided object in a new array

}*/
let values = ["Spaghetti", "Kitty", "Fireplace"];
let returnAllValues = values;

console.log(returnAllValues)


/*const countItems = (arr) => {
  // return total number of items in the provided array
  
}

/*
const returnAllEvens = (nums) => {
  // return all even numbers in a new array from the provided nums array.

}

const returnPower = (num, pow) => {
  // return the provided num to the power provided

}
*/
function returnPower(num,pow) {
  return (Math.pow(num,pow))
}
console.log(returnPower(5,3))
/*
module.exports = {
  joinStrings,
  absoluteSum,
  returnAllValues,
  countItems,
  returnAllEvens,
  returnPower
}
*/

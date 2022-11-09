var friends = ["Megan", "Nate", "Alice", "Michelle"]
var ages = [31, 32, 75, 88]
var likesCats = [true, true, true, false]

//This line of code calls the pop method on the friends Array. The pop method will remove the last element from the Array and return that element
friends.pop()
console.log(friends)

//This line of code calls the shift method on the ages Array. The shift method will remove the first element of the Array and returns that element.
ages.shift()
console.log(ages)

//This line of code calls the push method on the likesCats Array. The push element will add one or more elements to the end of an Array and returns the new length of said Array.
likesCats.push(false)
console.log(likesCats)
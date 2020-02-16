/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function identity(firstName, lastName, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.eyeColor = eyeColor;
}
let identity = new identity('irina', 'sverzhanovskaya', 'brown' );

console.log(identity.firstName, identity.lastName, identity.eyeColor)

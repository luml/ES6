/** 
 * Hoisting means Javascript can declare variables after use them. JavaScript Initializations can't be hoisted, declarations can be hoisted
 * Here's my opinion abount what difference between const let and var
 * Common, 
 *        all of them need to be used within scope,
 * Difference,
 *        First, var has global scope and local scope, but there's no priority between them. 
 *            Value will be replaced if you redeclare myName, also you can't console.log them before declaration
 *        Second, let: global scope has the priority than local scope. Can't change value a let in if-structure if you redeclare it
 *        Third, const can't change the value if it is already declared and compilation fails
 * */ 

/**
 * var
 * global scope
 * result: Chris
 */
var wannaChange = true
var yourName = 'Chris'
var myName = 'Elio'
function changeName(){
    if(wannaChange){
       myName = yourName;
    }
    console.log(myName)
}
changeName()


/**
 * var
 * local scope
 * result: Chris
 */
var wannaChange = true
var yourName = 'Chris'
var myName = 'Elio'
function changeName(){
    if(wannaChange){
       var myName = yourName;
    }
    console.log(myName)
}
changeName()



/**
 * let
 * can't change value a let in if structure
 * result: Elio
 */
var wannaChane = true
var yourName = 'Chris'
let myName = 'Elio'
function changeName(){
    if(wannaChane){
      let myName = yourName;
    }
    console.log(myName)
}
changeName()

/**
 * let
 * can change value
 * result: Chris
 */
var wannaChane = true
var yourName = 'Chris'
let myName = 'Elio'
function changeName(){
    if(wannaChane){
      myName = yourName;
    }
    console.log(myName)
}
changeName()


/**
 * const
 */ 
var wannaChane = true
const yourName = 'Chris'
const myName = 'Elio'
console.log(myName)
/**
 * changeName is illegal
 */
// function changeName(){
//     if(wannaChane){
//       myName = yourName;
//     }
//     console.log(myName)
// }

/**
 * showName is good
 */
function showName(){
  console.log(myName)
}
showName()

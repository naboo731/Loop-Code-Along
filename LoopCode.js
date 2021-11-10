

let jonSnowAttack = 35
let jamieLannisterAttack = 35

let jonSnowHealth = 50 
let jamieLannisterHealth = 50

let jonSnowDefense = 0
let jamieLannisterDefense = 20

// if (jonSnowAttack < jamieLannisterAttack) {
//     console.log("Jamie has the stronger attack")
// }   else if (jamieLannisterAttack < jonSnowAttack) {
//     console.log("Jon has the stronger attack")
// } else {
//     console.log("Both attacks are equally powerful")
// }

if (jonSnowHealth <= 0){
    console.log("Jon Snow is in critical condition")
} else{ 
    jonSnowHealth -= jamieLannisterAttack 
    console.log(`Jon's health is ${jonSnowHealth}`)
}

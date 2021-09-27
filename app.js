/*
if(tingimus){
	// tegevused if puhul
} else {
	// tegevused else puhul
}
*/
const id = 100 

// võrdub - ==
// võrdub + tüübikontroll - ===
// ei võrdu - !=
// ei võrdu + tüübikontroll - !==

if(id == 100){
	console.log("OK");
} else {
	console.log("NOT OK");
}

let testId
if (testId !== 'undefined') {
console.log("Id is ok");
} else {
	console.log("id is not exists");
}

// > ja <

if (id > 100) {
console.log("Id is greater than 100");
} else {
	console.log("id is equal 100 and less than");
}

// if - else if - else

let color = 'green'

if(color === 'red'){
	console.log("Stop")

} else if(color === 'yellow'){
	console.log("Attention")
} else if(color === 'green'){
	console.log("Go")
} else {
	console.log('This color is not allowed')
}

//and - &&
//or - ||

let name = 'Kadi'
let age = 21

if(age > 0 && age <= 12){
	console.log(`${name} on laps`)
} else if(age>12 && age<18) {
	console.log(`${name} on nooruk`)
} else {
	console.log(`${name} on täiskasvanud`)
}

if(age < 18 || age > 65){
	console.log(`${name} ei saa registreerida`)
} else {
	console.log(`${name} saab registreerida`)
}

// ? - ternary operator
console.log(id === 100 ? 'OK' : 'NOT OK')

if(id === 100) 
	console.log('OK')
else
	console.log('NOT')
// event elements
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');

// keyboard

//task.addEventListener('keydown', runEvent);
//task.addEventListener('keyup', runEvent);
//task.addEventListener('keypress', runEvent);

//focus & blur
//task.addEventListener('focus', runEvent);
//task.addEventListener('blur', runEvent);

// cut & paste
task.addEventListener('cut', runEvent);
task.addEventListener('paste', runEvent);

// imput by symbol
task.addEventListener('input', runEvent);

function runEvent(e){
	console.log(`Event is ${e.type}`);
	// something to do
	console.log(e.target.value);
}
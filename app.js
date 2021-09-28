// deklareerimine
function greeting(firstname, lastname){
	/*
	if(typeof firstname === 'undefined'){
		firstname = 'Kadi'
	}
	if(typeof lastname === 'undefined'){
		lastname = 'Tamm'
	}
	*/
	return 'Tere, ' + firstname + ' ' + lastname
}
// kasitamine
greet = greeting('a','b')
console.log(greet)

// f-on defineeritud nagu const
const square = function(number = 3){
	return Math.pow(number, 2)
}
console.log(square())

//
/*(function(){
	console.log('funktison is ran');
})();
(function(name){
	console.log('tere, ' + name);
})('aaaaaaaaaaa');
*/
// f-oni 
const todoList = {
	add: function(task){
		console.log('Task is added')
	},
	edit: function(oldtask, newtask){
		console.log(`${oldtask} is changed to ${newtask}`)
	},
	delete: function(task){
		console.log(task + ' is delted')
	}
}

todoList.add('Study JS')
todoList.edit('Study JS', 'Study TypeScript')
todoList.delete('Study JS')
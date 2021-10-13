
const form = document.querySelector('form')
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('ul');
const clearTasks = document.getElementById('clear-tasks');


taskList.addEventListener('click', delTask);


// click by symbol


form.addEventListener('submit', addTask);

clearTasks.addEventListener('click', clearTask);


function addTask(e) {
	
	const li = document.createElement('li');
	li.className = 'collection-item';
	li.appendChild(document.createTextNode(taskInput.value));
		

	const link = document.createElement('a');
	link.className = 'secondary-content';
	link.appendChild(document.createTextNode('X'))
	link.setAttribute('href', '#');
	li.appendChild(link);
	taskList.appendChild(li);
	
	addTaskToLS(taskInput.value)

	taskInput.value = ``;
	
	e.preventDefault();
};

function delTask(e){
	if(e.target.textContent == 'X'){
		if(confirm('Do you want to delete this task?')){
			e.target.parentElement.remove()
			removeTaskFromLS(e.target.parentElement.firstChild.textContent);
		}
	}

}

function clearTask(e){
	while(taskList.firstChild){
	taskList.removeChild(taskList.firstChild)
	}

}

function addTaskToLS(task){
	let tasks;
	if(localStorage.getItem('tasks') === null){
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'))
	}
	tasks.push(task);
	localStorage.setItem('tasks', JSON.stringify(tasks))

}

function removeTaskFromLS(task){
		let tasks;
	if(localStorage.getItem('tasks') === null){
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'))
	}
	tasks.forEach(function(tasksElement, tasksIndex){
		if(tasksElement === task){
			tasks.splice(tasksIndex, 1)
		}
	})

	localStorage.setItem('tasks', JSON.stringify(tasks))
}
// confirm() - ok/cancel alert
// remove() - delete element

let newTask = document.querySelector('.add-task-input'),
	btnConfirm = document.querySelector('.js-add-task'),
	btnCancel = document.querySelector('.js-cancel-add-task'),
	tasksList = document.querySelector('.tasks-list');


btnConfirm.onclick = (e) => {
	if (newTask.value === "") return;

	let task = document.createElement('li');
	task.appendChild(document.createTextNode(newTask.value));
	tasksList.appendChild(task);
	addButtonRemove(task)
	newTask.value = "";
};
btnCancel.onclick = (e) => {
	newTask.value = "";
};

Array.from(tasksList.querySelectorAll('.task')).forEach((task) => {
	addButtonRemove(task);
});

function addButtonRemove(task) {
	let el = document.createElement('span');
	el.classList.add('remove-task');
	el.appendChild(document.createTextNode('\u2718'));
	task.appendChild(el);

	// add event listener to remove any task
	el.onclick = (e) => e.target.parentElement.remove();
}

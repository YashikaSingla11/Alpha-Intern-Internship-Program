const newPasswordName = document.getElementById('new-password-name');
const newPassword = document.getElementById('new-password');
const addPassword = document.getElementById('add-password');
const passwordList = document.getElementById('password-list');

addPassword.addEventListener('click', () => {
	const li = document.createElement('li');
	const span = document.createElement('span');
	span.textContent = newPasswordName.value + ': ' + newPassword.value;
	li.appendChild(span);
	const deleteButton = document.createElement('button');
	deleteButton.classList.add('delete-button');
	deleteButton.textContent = 'Delete';
	deleteButton.addEventListener('click', () => {
		li.remove();
	});
	li.appendChild(deleteButton);
	passwordList.appendChild(li);
	newPasswordName.value = '';
	newPassword.value = '';
});

newPasswordName.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		addPassword.click();
	}
});

newPassword.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		addPassword.click();
	}
});
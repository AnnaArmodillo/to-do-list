let count = 0;
function addNewTask() {
    let res = prompt('type here');
    if (res) {
    let task = document.createElement('p');
    task.className = 'task';
    task.innerHTML = '<input type="checkbox"><label>' + res + '</label><button class="button_remove" title="delete" onclick="removeTask(event); updateStorage()"><i class="fa-solid fa-trash"></i></button>';
    let targ = document.querySelector('.tasks');
    targ.appendChild(task);
    task.firstChild.id = `task${count}`;
    task.firstChild.nextSibling.setAttribute('for', `task${count}`);
    return (count ++);}
}
let done = 0;
function rate() {
    done = 0;
    let parent = document.querySelector('.rating');
    if (parent.firstChild) parent.firstChild.remove();
    let allTasks = document.querySelectorAll('.task');
    allTasks.forEach(task => {
        if (task.firstChild.checked === true) done++;
    })
    if ((done / allTasks.length) === 1) {
        text = 'Молодец какой!';
    } else if ((done / allTasks.length) >= 0.8) {
        text = 'Надо лучше стараться.';
    } else {
        text = 'Чё весь день делал-то тогда?';
    }
    let rating = document.createElement('p');
    rating.innerText = text;
    parent.appendChild(rating);
}

function removeTask(event) {
    let task = event.currentTarget;
    task.parentNode.remove();
}

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : {};
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));
const restoreTasks = item => {
    const task = document.createElement('p');
    task.className = 'task';
    if (data[item] === true) {
    task.innerHTML = '<input type="checkbox" checked><label>' + item + '</label><button class="button_remove" title="delete" onclick="removeTask(event)"><i class="fa-solid fa-trash"></i></button>';
    }
    else {
    task.innerHTML = '<input type="checkbox"><label>' + item + '</label><button class="button_remove" title="delete" onclick="removeTask(event)"><i class="fa-solid fa-trash"></i></button>';    
    }
    task.firstChild.id = `task${count}`;
    task.firstChild.nextSibling.setAttribute('for', `task${count}`);
    document.querySelector('.tasks').appendChild(task);
    count += 1;
}

const taskList = document.querySelector('.tasks');
function updateStorage() {
    const data = {};
    for (let element of taskList.querySelectorAll('p')) {
        data[element.innerText] = element.firstChild.checked;
    }
    localStorage['items'] = JSON.stringify(data);
}

for (let item in data) {
    restoreTasks(item);
}


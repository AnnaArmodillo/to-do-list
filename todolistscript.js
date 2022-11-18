let count = 0;
function addNewTask() {
    let res = prompt('type here');
    if(res) {
    let task = document.createElement('p');
    task.className = 'task';
    task.innerHTML = '<input type="checkbox"><label>' + res + '</label>';
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
    if(parent.firstChild) parent.firstChild.remove();
    let allTasks = document.querySelectorAll('.task');
    allTasks.forEach(task => {
        console.log(task.firstChild.value);
        if(task.firstChild.checked === true) done++;
    })
    if((done / allTasks.length) >= 0.8) {
        text = 'Молодец какой!';
    }
    else {
        text = 'Чё весь день делал-то тогда?';
    }
    let rating = document.createElement('p');
    rating.innerText = text;
    parent.appendChild(rating);
}

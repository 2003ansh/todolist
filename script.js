document.addEventListener('DOMContentLoaded', function () {
let clear = document.querySelector('.clear');
let inputbox = document.querySelector('.items');
let list=document.querySelector('.list')
console.log(inputbox);
let arr=[];
// arr=inputbox.Items.value
console.log(localStorage)
// localStorage.clear();
let i=0;
// localStorage.setItem(i, '');
let random = document.querySelector('.random');
random.addEventListener('click', (e) => {
   e.preventDefault();
   if(inputbox.value==''){return;}
   else{}
    let li=document.createElement('li')
    li.textContent=inputbox.value
    li.classList.add('list-group-item');
    li.classList.add('back');
    list.append(li)
    inputbox.value=''
    saveTasksToLocalStorage();
})
function saveTasksToLocalStorage() {
    let arr = [];
    for (let i = 0; i < list.children.length; i++) {
        arr.push(list.children[i].textContent);
    }
    localStorage.setItem('tasks', JSON.stringify(arr));
    console.log(localStorage)
}
function loadTasksFromLocalStorage() {
    if(!localStorage.getItem('tasks')) {return;}
    else{
    let arr = JSON.parse(localStorage.getItem('tasks'));
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.textContent = arr[i];
        li.classList.add('list-group-item');
        li.classList.add('back');
        list.append(li);

    }}
}
window.onload = loadTasksFromLocalStorage;
clear.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.clear();
    list.innerHTML='';
})
})

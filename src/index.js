document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  let list = document.getElementById('tasks');
  const button = document.getElementById('button');

  function sortList(event){
    let newList = Array.from(list.children);
    newList.sort((a, b) => {
      if(a.classList[0] > b.classList[0]) return 1;
      if(a.classList[0] < b.classList[0]) return -1;
      return 0;
    });
    if (event.target.value === 'true'){
      reRenderList(newList);
      event.target.value = 'false';
    }else{
      reRenderList(newList.reverse());
      event.target.value = 'true';
    }
  }

  function reRenderList(newList){
    while (list.firstChild) {
      list.removeChild(list.firstChild);
  }
  newList.forEach(item => list.appendChild(item));
  }

  form.addEventListener('submit', event => {
    event.preventDefault()
    let task = event.target.newTask.value;
    let priority = event.target.priority.value;
    newListItem(task, priority);
    form.reset()
  });
  
  button.addEventListener('click', sortList);

  function deleteTask(event){
    event.target.remove();
  }

  function newListItem(taskDesc, priorityLevel){
    listItem = document.createElement('li');
    listItem.append(taskDesc);
    switch (priorityLevel){
      case "high":
        listItem.style.color = "red";
        listItem.classList.add('1');
        break;
      case "medium":
        listItem.style.color = "gold";
        listItem.classList.add('2');
        break;
      case "low":
        listItem.style.color = "green";
        listItem.classList.add('3');
        break;
    }
    listItem.addEventListener('click', deleteTask);
    list.appendChild(listItem);
  }

});

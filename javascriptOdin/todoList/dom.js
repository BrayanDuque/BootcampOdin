function renderProjects(projects, projectList) {
    projectList.innerHTML = '';
    projects.forEach((project, index) => {
        const li = document.createElement('li');
        li.textContent = project.name;
        li.dataset.index = index;
        projectList.appendChild(li);
    });
}

function renderTasks(tasks, taskList) {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = `${task.title} - ${task.dueDate}`;
        li.dataset.index = index;
        li.style.color = task.priority === 'high' ? 'red' : 'black';
        taskList.appendChild(li);
    });
}

export { renderProjects, renderTasks };

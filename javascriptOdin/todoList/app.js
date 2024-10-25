import Project from './project.js';
import Task from './task.js';
import { saveProjects, loadProjects } from './storage.js';
import { renderProjects, renderTasks } from './dom.js';

let projects = loadProjects();
if (projects.length === 0) {
    projects.push(new Project("Default Project"));
}

let currentProjectIndex = 0;
const projectList = document.getElementById('projectList');
const taskList = document.getElementById('taskList');
const projectTitle = document.getElementById('projectTitle');
const addProjectBtn = document.getElementById('addProjectBtn');
const addTaskBtn = document.getElementById('addTaskBtn');

function updateUI() {
    renderProjects(projects, projectList);
    renderTasks(projects[currentProjectIndex].tasks, taskList);
    projectTitle.textContent = projects[currentProjectIndex].name;
}

addProjectBtn.addEventListener('click', () => {
    const projectName = prompt("Enter project name:");
    if (projectName) {
        const newProject = new Project(projectName);
        projects.push(newProject);
        saveProjects(projects);
        updateUI();
    }
});

addTaskBtn.addEventListener('click', () => {
    const title = prompt("Enter task title:");
    const description = prompt("Enter task description:");
    const dueDate = prompt("Enter due date:");
    const priority = prompt("Enter priority (high/low):");
    const newTask = new Task(title, description, dueDate, priority);
    projects[currentProjectIndex].addTask(newTask);
    saveProjects(projects);
    updateUI();
});

projectList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        currentProjectIndex = e.target.dataset.index;
        updateUI();
    }
});

taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const taskIndex = e.target.dataset.index;
        projects[currentProjectIndex].tasks.splice(taskIndex, 1);
        saveProjects(projects);
        updateUI();
    }
});

updateUI();

import { createProject } from './project'
import { createTask } from './task'
import { editTask } from './task'
import { deleteTask } from './task'


const displayArea = document.getElementById('project-area')

export function clearDisplay() {
    displayArea.innerHTML = ''
}

export function renderProjectInput() {
    clearDisplay()
    let projectInputArea = document.createElement('div')
    projectInputArea.id = 'project-input-area'

    let titleLabel = document.createElement("label")
    titleLabel.setAttribute("for", "input-title")
    titleLabel.textContent = "Project Name:"
    projectInputArea.appendChild(titleLabel)
    let title = document.createElement('input')
    title.type = 'text'
    title.id = 'input-title'
    projectInputArea.appendChild(title)

    let descriptionLabel = document.createElement("label")
    descriptionLabel.setAttribute("for", "input-description")
    descriptionLabel.textContent = "Project Description:"
    projectInputArea.appendChild(descriptionLabel)
    let description = document.createElement('textarea')
    description.id = 'input-description'
    projectInputArea.appendChild(description)

    let createButton = document.createElement('button')
    createButton.id = 'input-create-button'
    createButton.textContent = 'Create Project'
    createButton.addEventListener('click', () => { createProject() })
    projectInputArea.appendChild(createButton)

    displayArea.appendChild(projectInputArea)
}

export function renderProject(project) {
    clearDisplay()
    let projectRenderedArea = document.createElement('div')
    projectRenderedArea.id = 'project-rendered-area'

    let projectTitle = document.createElement('h1')
    projectTitle.textContent = project.title
    projectRenderedArea.appendChild(projectTitle)

    let projectDescription = document.createElement('p')
    projectDescription.textContent = project.description
    projectRenderedArea.appendChild(projectDescription)

    let createNoteButton = document.createElement('button')
    createNoteButton.textContent = "Add Task"
    createNoteButton.addEventListener('click', () => { createTask(project) })
    projectRenderedArea.appendChild(createNoteButton)


    displayArea.appendChild(projectRenderedArea)
    renderTasks(project)
}

export function addSidebarProject(project) {
    const sidebarArea = document.getElementById("projects-list")
    let sidebarProject = document.createElement("div")

    let projectName = document.createElement("h1")
    projectName.id = "sidebar-project-title"
    projectName.textContent = project.title
    projectName.addEventListener("click", () => {
        renderProject(project)
    })

    sidebarProject.appendChild(projectName)
    sidebarArea.appendChild(sidebarProject)
}

export function renderTasks(project) {
    if (project.taskList != null) {
        for (let key in project.taskList) {
            let task = project.taskList[key]

            let taskArea = document.createElement("div")
            taskArea.id = "task-rendered-area"

            let taskName = document.createElement("h1")
            taskName.textContent = task.name
            taskName.setAttribute("style", "grid-column: 2 / 4;margin: 0%;justify-self: center;")

            let taskDescription = document.createElement("p")
            taskDescription.textContent = task.text
            taskDescription.setAttribute("style", "grid-column: 2 / 4; padding: 1%")

            let taskCreatedDate = document.createElement("p")
            taskCreatedDate.textContent = "Task Created Date: " + task.createdDate
            taskCreatedDate.id = "task-created-date"
            taskCreatedDate.setAttribute("style", "grid-column: 3 / 4; grid-row: 3 / 4;align-self:center; justify-self:center")

            let taskDueDate = document.createElement("p")
            let notFormattedDueDate = new Date(task.dueDate)
            let formattedDueDate = notFormattedDueDate.toLocaleDateString()
            taskDueDate.textContent = "Task Due Date: " + formattedDueDate
            taskDueDate.id = "task-due-date"
            taskDueDate.setAttribute("style", "grid-column: 2 / 3;align-self:center; justify-self:center")

            let taskCheckBox = document.createElement("input")
            taskCheckBox.setAttribute("type", "checkbox")
            taskCheckBox.setAttribute("id", "checkbox")
            taskCheckBox.checked = task.checked
            taskCheckBox.setAttribute("style", "grid-row: 1 / 5")

            let editButton = document.createElement("button")
            editButton.textContent = "Edit"
            editButton.id = "task-btn"
            editButton.addEventListener('click', () => {
                editTask(project, task)
            })
            editButton.setAttribute("style", "grid-column: 2 / 3")

            let deleteButton = document.createElement("button")
            deleteButton.textContent = "Delete"
            deleteButton.id = "task-btn"
            deleteButton.addEventListener('click', () => {
                deleteTask(project, key)
            })
            deleteButton.setAttribute("style", "grid-column: 3 / 4")

            taskArea.appendChild(taskName)
            taskArea.appendChild(taskDescription)
            taskArea.appendChild(taskCreatedDate)
            taskArea.appendChild(taskDueDate)
            taskArea.appendChild(taskCheckBox)
            taskArea.appendChild(editButton)
            taskArea.appendChild(deleteButton)
            displayArea.appendChild(taskArea)
        }
    }
}
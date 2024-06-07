import { renderProject } from "./display"

export class Task {
    constructor(name, text, createdDate, dueDate, checked) {
        this.name = name
        this.text = text
        this.createdDate = createdDate
        this.dueDate = dueDate
        this.checked = checked
    }

    update(name, text, dueDate, checked) {
        this.name = name
        this.text = text
        this.dueDate = dueDate
        this.checked = checked
    }
}

export function createTask(project) {
    const projectArea = document.getElementById("project-rendered-area")

    let taskArea = document.createElement("div")
    taskArea.id = "task-area"

    const form = document.createElement("form")

    const taskLabel = document.createElement("label")
    taskLabel.setAttribute("for", "task")
    taskLabel.textContent = "Task name:"
    const taskInput = document.createElement("input")
    taskInput.setAttribute("type", "text")
    taskInput.setAttribute("id", "task")

    const descriptionLabel = document.createElement("label")
    descriptionLabel.setAttribute("for", "description")
    descriptionLabel.textContent = "Task description:"
    const descriptionInput = document.createElement("input")
    descriptionInput.setAttribute("type", "text")
    descriptionInput.setAttribute("id", "description")

    let createdDate = new Date()
    let formattedDate = createdDate.toLocaleDateString()

    const dueDateLabel = document.createElement("label")
    dueDateLabel.setAttribute("for", "duedate")
    dueDateLabel.textContent = "Due Date:"
    const dueDate = document.createElement("input")
    dueDate.setAttribute("type", "date")
    dueDate.setAttribute("id", "dueDate")

    const taskCheckBox = document.createElement("input")
    taskCheckBox.setAttribute("type", "checkbox")
    taskCheckBox.setAttribute("id", "checkbox")

    const submitButton = document.createElement("button")
    submitButton.setAttribute("type", "submit")
    submitButton.setAttribute("value", "Submit")
    submitButton.textContent = "Create Task"

    form.appendChild(taskLabel)
    form.appendChild(taskInput)
    form.appendChild(descriptionLabel)
    form.appendChild(descriptionInput)
    form.appendChild(dueDateLabel)
    form.appendChild(dueDate)
    form.appendChild(taskCheckBox)
    form.appendChild(submitButton)

    taskArea.appendChild(form)
    projectArea.appendChild(taskArea)

    submitButton.addEventListener("click", (e) => {
        e.preventDefault()

        const taskName = document.getElementById("task").value
        const taskDescription = document.getElementById("description").value
        const createdDate = formattedDate
        const dueDate = document.getElementById("dueDate").value
        const taskCompleted = document.getElementById("checkbox").checked
        const task = new Task(taskName, taskDescription, createdDate, dueDate, taskCompleted)

        project.addTask(task)
        taskArea.remove()
        renderProject(project)
    })
}

export function editTask(project, task) {
    const projectArea = document.getElementById("project-rendered-area")

    let taskArea = document.createElement("div")
    taskArea.id = "task-area"

    const form = document.createElement("form")

    const taskLabel = document.createElement("label")
    taskLabel.setAttribute("for", "task")
    taskLabel.textContent = "Task name:"
    const taskInput = document.createElement("input")
    taskInput.setAttribute("type", "text")
    taskInput.setAttribute("id", "task")
    taskInput.value = task.name

    const descriptionLabel = document.createElement("label")
    descriptionLabel.setAttribute("for", "description")
    descriptionLabel.textContent = "Task description:"
    const descriptionInput = document.createElement("input")
    descriptionInput.setAttribute("type", "text")
    descriptionInput.setAttribute("id", "description")
    descriptionInput.value = task.text

    const dueDateLabel = document.createElement("label")
    dueDateLabel.setAttribute("for", "duedate")
    dueDateLabel.textContent = "Due Date:"
    const dueDate = document.createElement("input")
    dueDate.setAttribute("type", "date")
    dueDate.setAttribute("id", "dueDate")
    dueDate.value = task.dueDate 
    
    const taskCheckBox = document.createElement("input")
    taskCheckBox.setAttribute("type", "checkbox")
    taskCheckBox.setAttribute("id", "checkbox")

    const submitButton = document.createElement("button")
    submitButton.setAttribute("type", "submit")
    submitButton.setAttribute("value", "Submit")
    submitButton.textContent = "Save"

    form.appendChild(taskLabel)
    form.appendChild(taskInput)
    form.appendChild(descriptionLabel)
    form.appendChild(descriptionInput)
    form.appendChild(dueDateLabel)
    form.appendChild(dueDate)
    form.appendChild(taskCheckBox)
    form.appendChild(submitButton)

    taskArea.appendChild(form)
    projectArea.appendChild(taskArea)

    submitButton.addEventListener("click", (e) => {
        e.preventDefault()

        const taskName = document.getElementById("task").value
        const taskDescription = document.getElementById("description").value
        const dueDate = document.getElementById("dueDate").value
        const taskCompleted = document.getElementById("checkbox").checked
        task.update(taskName, taskDescription, dueDate, taskCompleted)
        renderProject(project)
        taskArea.remove()
    })
}

export function deleteTask(project, index) {
    project.taskList.splice(index, 1)
    renderProject(project)
}
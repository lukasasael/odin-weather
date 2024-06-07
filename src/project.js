import {renderProject} from './display'
import { addSidebarProject } from './display'

export class Project {
    constructor(title, description) {
        this.title = title
        this.description = description
        this.taskList = []
    }

    addTask(task) {
        this.taskList.push(task)
    }
}

export function createProject() {   
    let title = document.getElementById('input-title')
    let description = document.getElementById('input-description')
    const project = new Project(title.value, description.value)
    renderProject(project)
    addSidebarProject(project)
}
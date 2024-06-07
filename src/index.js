import './styles.css'
import { renderProjectInput } from './display.js'

const newProjectButton = document.getElementById('create-project-btn')
newProjectButton.addEventListener('click', function () {
    renderProjectInput()
})

const sidebarProjectButton = document.getElementById("new-project-btn")
sidebarProjectButton.addEventListener('click', function () {
    renderProjectInput()
})
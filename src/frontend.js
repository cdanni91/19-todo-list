import { FunctionFactory } from "./shared";
import { ProjectManager, Project, Task } from "./backend";

const functionFactory = FunctionFactory();
const projectManager = new ProjectManager();


function eraseNewTaskContainer () {
    const container = functionFactory.getElement(".new.task.container");
    functionFactory.removeElementHTML(container);
}


function modifyUIRightContainer(elementToShow) {
    const elementToModify = functionFactory.getElement(".new.task.container")
    functionFactory.removeElementHTML(elementToModify);
    functionFactory.appendChildToElement(elementToModify, elementToShow);
}


function modifyUIProjectsContainer() {

    // dummy data
    const testTask1 = new Task("primera", "random task", "no");
    const testTask2 = new Task("2", "random task", "2");
    const testTask3 = new Task("3", "random task", "3");
    const testProject1 = new Project("primer_test_project");
    const testProject2 = new Project("segundo_test_project");
    testProject1.addTask(testTask1);
    testProject2.addTask(testTask1);
    testProject2.addTask(testTask2);
    testProject2.addTask(testTask3);


    projectManager.addProject(testProject1);
    projectManager.addProject(testProject2);
    projectManager.printProjects();

    // limpia el contenedor de projects (1)
    const allProjectsContainer = functionFactory.getElement(".projects-container");
    functionFactory.removeElementHTML(allProjectsContainer);

    // obtenemos todos los proyectos (2)
    const projects = projectManager.getProjects();

    // ejecutar para actualizar el listado de projects (3)
    // por cada proyecto
    projects.forEach(project => {
        // creamos un div con classname project-"project.name"
        const projectClassName = `project-`+`${project.name}`;
        // html correspondiente al project
        const newProjectElement = functionFactory.createNewElement("div",projectClassName);
            const newProjectHeader = functionFactory.createNewElement("div","project-header");
                const newProjectTitle =  functionFactory.createNewElement("div","project-title","",project.name);
                const addTaskButton = functionFactory.createNewElement("button","add-task", "", "+");
        // appends
        functionFactory.appendChildToElement(newProjectHeader,newProjectTitle);
        functionFactory.appendChildToElement(newProjectHeader,addTaskButton);
        functionFactory.appendChildToElement(newProjectElement,newProjectHeader);
        // obtenemos todas las tasks del proyecto correspondiente
        const tasks = project.getTasks();
        /////
        // crear un elemento para cada task
        tasks.forEach(task => {
            //console.log(task)
        const newTaskContainer = functionFactory.createNewElement("div", "task", "");
            const newTaskNameContainer = functionFactory.createNewElement("div", "task-name", "", task.name);
            const removeTaskButton = functionFactory.createNewElement("button","remove-task","","X");
        // appends
        functionFactory.appendChildToElement(newTaskContainer,newTaskNameContainer);
        functionFactory.appendChildToElement(newTaskContainer,removeTaskButton);
        functionFactory.appendChildToElement(newProjectElement,newTaskContainer);
            
        });
        
    functionFactory.appendChildToElement(allProjectsContainer, newProjectElement);
    })
        



    //const allProjectsContainer = functionFactory.getElement("projects-container");
    //functionFactory.removeElementHTML(allProjectsContainer);



}



function defaultUITaskContainer() {
    const title = functionFactory.createNewElement("h1","greetings-title","","Hola");
    const description = functionFactory.createNewElement("h2","greetings-title","","Description");
    const footer = functionFactory.createNewElement("h3","greetings-title","","foooooter");

    const newTaskContainer = functionFactory.getElement(".new.task.container");

    functionFactory.appendChildToElement(newTaskContainer, title);
    functionFactory.appendChildToElement(newTaskContainer, description);
    functionFactory.appendChildToElement(newTaskContainer, footer);

}


export {eraseNewTaskContainer, modifyUIRightContainer, defaultUITaskContainer, modifyUIProjectsContainer}
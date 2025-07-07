import { FunctionFactory } from "./shared";

const functionFactory = FunctionFactory();

function eraseNewTaskContainer () {
    const container = functionFactory.getElement(".new.task.container");
    functionFactory.removeElementHTML(container);
}


function modifyUInewTaskForm(newTaskForm) {
    const elementToModify = functionFactory.getElement(".new.task.container")
    functionFactory.removeElementHTML(elementToModify);
    functionFactory.appendChildToElement(elementToModify, newTaskForm);
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


export {eraseNewTaskContainer, modifyUInewTaskForm, defaultUITaskContainer}
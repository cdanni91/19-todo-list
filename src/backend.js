import { Checker } from "./shared";
import { FunctionFactory } from "./shared";


class Task {

    //private variables
    #isCompleted

    constructor(name, description, notes = "") {
        this.name = name;
        this.description = description;
        this.notes = notes;

        //you must use the #
        this.#isCompleted = false;
    }

    
    // methods for class, utiles cuando no depende de estados internos
    static printClass() {
        console.log(this);
    }

    // methods
    printTaskInfo() {
        console.log(this)
    }

    markAsComplete() {
        this.#isCompleted = true;
    }

    markAsPending() {
        this.#isCompleted = false;
    }

}


class Project {

    #tasks;

    checker = Checker(); 

    constructor(name) {
        this.name = name;
        this.#tasks = [];
    }


    printTasks() {
        console.log(this.#tasks);
    }

    
    addTask(task) {
        // revisa si la task es una instancia de la clase Task y la agrega
        if (!this.checker.checkIfInstanceOf(task,Task)) return;
        this.#tasks.push(task);
    }

    getTasks() {
        return this.#tasks
    }

}


class ProjectManager {

    #projects;

    checker = Checker(); 

    constructor() {
        this.#projects = [];
    }

    addProject(project) {
        if (!this.checker.checkIfInstanceOf(project,Project)) return;
        this.#projects.push(project);
    }

    printProjects() {
        console.log(this.#projects);
    }

    getProjects() {
        return this.#projects
    }

}




export {Task, Project, ProjectManager}







class Task {

    //private variables
    #isCompleted

    constructor(name, description) {
        this.name = name;
        this.description = description;

        //you must use the #
        this.#isCompleted = false;
    }

    printTask() {
        console.log(`${this.name} , ${this.description} , ${this.#isCompleted}`)
    }

    markAsComplete() {
        this.#isCompleted = true;
    }
}


const newTask = new Task("comprar carne", "necesito comprar pal coco");

newTask.printTask();

newTask.markAsComplete();

newTask.printTask();
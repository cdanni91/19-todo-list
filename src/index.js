import "./styles.css";
import { FunctionFactory } from "./shared";
import { Task, Project, ProjectManager } from "./backend";
import { modifyUInewTaskForm, eraseNewTaskContainer, defaultUITaskContainer } from "./frontend";


const functionFactory = FunctionFactory();

// el usuario hace click en agregar tarea
    // se ejecuta una funcion que crea el formulario (OK)
    // se ejecuta una funcion que modifica la UI (OK)
    // al hacer submit se ejecuta una funcion para obtener la informacion 


function createTaskForm () {

    //const newTaskFormAttr = {
        //action : "executeSomeScript.js",
        //method : "post",
        //onsubmit : "{submitFunction}"
    //}

    const newTaskFormLabelElements = [
        //type  //class  //attributes   //text
        ["label", "", {for : "taskname"}, "Task Name"],
        ["label", "", {for : "taskdescription"}, "Task Description"],
        ["label", "", {for : "tasknotes"}, "Task Notes"]
    ];

    const newTaskFormInputElements = [
        //type  //class  //attributes
        ["input", "", { type : "text",
                        id : "taskname",
                        name : "task_name",
                        placeholder : "Put the name of the task",
                        required : ""}
                    ],
        ["input", "", { type : "text",
                        id : "taskdescription",
                        name : "task_description",
                        placeholder : "Put the description of the task",
                        required : ""}
        ],
        ["input", "", { type : "text",
                        id : "tasknotes",
                        name : "task_notes",
                        placeholder : "Put some notes for the task (if you need to)",
                        }
        ]
    ]

    const newTaskSubmit = {
        type : "submit"
    }



    // create form
    const newTaskForm = functionFactory.createNewElement("form","newTaskForm");
    // create all rows, labels and inputs
    for (let i=0; i < newTaskFormLabelElements.length; i++) {
        const taskFormRow = functionFactory.createNewElement("div","task-form-row");
        const newLabelElement = functionFactory.createLabelOrInput(i, newTaskFormLabelElements);
        const newInputElement = functionFactory.createLabelOrInput(i, newTaskFormInputElements)
        functionFactory.appendChildToElement(taskFormRow, newLabelElement);
        functionFactory.appendChildToElement(taskFormRow, newInputElement);
        functionFactory.appendChildToElement(newTaskForm, taskFormRow);
    }

    //create submit button
    const formSubmitButton = functionFactory.createNewElement("button","",newTaskSubmit,"Submit");
    functionFactory.appendChildToElement(newTaskForm, formSubmitButton);
    //create cancel button
    const formCancelButton = functionFactory.createNewElement("button","cancel","","Cancel");
    //append buttons
    functionFactory.appendChildToElement(newTaskForm, formCancelButton);

    //change the behaviour on submit and cancel buttons
    modifyFormBehaviour(newTaskForm, formSubmitButton, formCancelButton, Task);

    return newTaskForm
}



function modifyFormBehaviour(newTaskForm, formSubmitButton, formCancelButton, Task) {

    function modifyFormSubmit() {
        // prevent default
        newTaskForm.addEventListener("submit", function(e) {
            e.preventDefault();
        // creates an object with the form data
            const formData = new FormData(newTaskForm, formSubmitButton);
            const dataObject = Object.fromEntries(formData.entries())                    
            const newTask = new Task (  dataObject.task_name, 
                                        dataObject.task_description, 
                                        dataObject.task_notes);
            console.log(newTask);

        });
        }
    
    

    function modifyFormCancel() {
        formCancelButton.addEventListener("click", () => {
            eraseNewTaskContainer();
            defaultUITaskContainer();
        })

    }

    modifyFormSubmit();
    modifyFormCancel();
    
}


     
function newTaskAction() {

    const newTaskForm = createTaskForm();
    console.log(newTaskForm); //
    modifyUInewTaskForm(newTaskForm);

}






// test

//render default page
    //  add default project
// add page functionality
    //  add task
        // create form (rows,labels,inputs and buttons)
            // on submit get an object with the task data


    //  delete task

    //  new project
    //  delete project



defaultUITaskContainer();
const addTaskButton = functionFactory.getElement(".add-task");

addTaskButton.addEventListener("click", () => {
    newTaskAction();
})
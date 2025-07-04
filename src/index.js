import "./styles.css";
import { FunctionFactory } from "./shared";
import { Task, Project, ProjectManager } from "./backend";



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
    // create all labels and inputs
    for (let i=0; i < newTaskFormLabelElements.length; i++) {
        const newLabelElement = functionFactory.createLabelOrInput(i, newTaskFormLabelElements);
        const newInputElement = functionFactory.createLabelOrInput(i, newTaskFormInputElements)
        functionFactory.appendChildToElement(newTaskForm, newLabelElement);
        functionFactory.appendChildToElement(newTaskForm, newInputElement);
    }
    //create submit button
    const formSubmitButton = functionFactory.createNewElement("button","",newTaskSubmit,"Submit");
    functionFactory.appendChildToElement(newTaskForm, formSubmitButton);
    //create cancel button
    const formCancelButton = functionFactory.createNewElement("button","cancel","","Cancel");
    //append buttons
    functionFactory.appendChildToElement(newTaskForm, formCancelButton);

    //change the behaviour on submit and cancel buttons
    modifyFormBehaviour(newTaskForm, formCancelButton);

    return newTaskForm
}



function eraseNewTaskContainer () {

    const container = functionFactory.getElement(".new.task.container");
    functionFactory.removeElementHTML(container);

}


function modifyFormBehaviour(newTaskForm, formCancelButton) {

    function modifyFormSubmit() {

        newTaskForm.addEventListener("submit", function(e) {
            e.preventDefault();
    
            const submitButton = functionFactory.getElement("button[type=submit");
            const formData = new FormData(newTaskForm, submitButton);
            const formDataObject = Object.fromEntries(formData.entries());
    
            console.log(formDataObject);
            eraseNewTaskContainer();
        })

    }

    function modifyFormCancel() {

        formCancelButton.addEventListener("click", () => {
            eraseNewTaskContainer();
        })

    }

    modifyFormSubmit();
    modifyFormCancel();
    
}



function modifyUInewTaskForm(newTaskForm) {

    const elementToModify = functionFactory.getElement(".new.task.container")
    functionFactory.removeElementHTML(elementToModify);
    functionFactory.appendChildToElement(elementToModify, newTaskForm);

}




function newTaskAction() {

    const newTaskForm = createTaskForm();
    modifyUInewTaskForm(newTaskForm);

}






// test
const addTaskButton = functionFactory.getElement(".add-task");

addTaskButton.addEventListener("click", () => {
    newTaskAction();
})
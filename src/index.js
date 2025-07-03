import "./styles.css";
import { FunctionFactory } from "./shared";
import { Task, Project, ProjectManager } from "./backend";


const notATask = {
    name:"cris",
    blabla:"hola"
}


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

const newTaskFormAttr = {
    action : "executeSomeScript.js",
    method : "post"
}

const newTaskSubmit = {
    type : "submit"
}




const functionFactory = FunctionFactory();



function createLabelOrInput(i,labelOrInputArray) {

    const labelOrInputElementType = labelOrInputArray[i][0];
    const labelOrInputElementClass = labelOrInputArray[i][1];
    const labelOrInputElementAttributes = labelOrInputArray[i][2];

    if (!labelOrInputArray[i][3]){
        const labelOrInputElement = functionFactory.createNewElement(labelOrInputElementType,labelOrInputElementClass,labelOrInputElementAttributes);
        return labelOrInputElement;
    } else {
        const labelOrInputText = labelOrInputArray[i][3];
        const labelOrInputElement = functionFactory.createNewElement(labelOrInputElementType,labelOrInputElementClass,labelOrInputElementAttributes,labelOrInputText);
        return labelOrInputElement;
    }

}




function createTaskForm () {

    // create form
    const newTaskForm = functionFactory.createNewElement("form","newTaskForm", newTaskFormAttr);
    // create all labels and inputs
    for (let i=0; i < newTaskFormLabelElements.length; i++) {
        const newLabelElement = createLabelOrInput(i, newTaskFormLabelElements);
        const newInputElement = createLabelOrInput(i, newTaskFormInputElements)
        functionFactory.appendChildToElement(newTaskForm, newLabelElement);
        functionFactory.appendChildToElement(newTaskForm, newInputElement);
    }
    //create submit button
    const formSubmitButton = functionFactory.createNewElement("button","",newTaskSubmit,"submit");
    functionFactory.appendChildToElement(newTaskForm, formSubmitButton);
    //create cancel button
    const formCancelButton = functionFactory.createNewElement("button","cancel","","cancel");
    functionFactory.appendChildToElement(newTaskForm, formCancelButton);
    console.log(newTaskForm);
}

createTaskForm();

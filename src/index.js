import "./styles.css";
import { FunctionFactory } from "./shared";
import { Task, Project, ProjectManager } from "./backend";


const notATask = {
    name:"cris",
    blabla:"hola"
}






const functionFactory = FunctionFactory();




function createTaskForm () {

    const newTaskFormLabelElements = [
        //type  //class  //attributes   //text
        ["label", "", {for : "taskname"}, "Task Name"],
        ["label", "", {for : "taskdescription"}, "Task Description"]
    ]
    
    const newTaskFormInputElements = [
        //type  //class  //attributes
        ["input", "", { type : "text",
                        id : "taskname",
                        name : "task_name",
                        placeholder : "Put the name of the task"}
                    ],
        ["input", "", { type : "text",
                        id : "taskdescription",
                        name : "task_description",
                        placeholder : "Put the description of the task"}
        ]
    ]

    const newTaskFormAttr = {
        action : "executeSomeScript.js",
        method : "post"
    }


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


    const newTaskForm = functionFactory.createNewElement("form","newTaskForm", newTaskFormAttr);

    for (let i=0; i < newTaskFormLabelElements.length; i++) {

        const newLabelElement = createLabelOrInput(i, newTaskFormLabelElements);
        const newInputElement = createLabelOrInput(i, newTaskFormInputElements)

        functionFactory.appendChildToElement(newTaskForm, newLabelElement);
        functionFactory.appendChildToElement(newTaskForm, newInputElement);
    }

    console.log(newTaskForm);
    
}

createTaskForm();

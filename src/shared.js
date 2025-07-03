function Checker () {


    function checkIfInstanceOf(object, Instance ) {
        return (object instanceof(Instance)) ? true : false;
    }


    return {checkIfInstanceOf}

}


function FunctionFactory() {

    function logContent(content) {
        console.log(content);
    }

    function getElement(querySelector) {
        const element = document.querySelector(querySelector);

        return element;
    }

    function createNewElement(elementType,className = '',attributes = {}, text = '') {
        const newElement = document.createElement(elementType);

        if (className) newElement.classList.add(className); //avoid error for no class

        let attrName;

        for (attrName in attributes) {
            const key = attrName;
            const value = attributes[key];

            newElement.setAttribute(key, value);
        }

        newElement.innerText = text;

        return newElement;
    }

    function appendChildToElement(element,child) {
        element.appendChild(child);
    }

    function removeElementHTML(element) {
        element.innerHTML = "";
    }

    

    return {
        logContent,
        getElement,
        createNewElement,
        appendChildToElement,
        removeElementHTML
    }

}

export {FunctionFactory, Checker};
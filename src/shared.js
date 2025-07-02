function FunctionFactory() {

    function logContent(content) {
        console.log(content);
    }

    function getElement(querySelector) {
        const element = document.querySelector(querySelector);

        return element;

    }

    function createElement(elementType,elementName) {
        const newElement = document.createElement(elementType);
        newElement.classList.add(elementName);

        return newElement;
    }

    function appendChildToElement(element,child) {
        element.appendChild(child);
    }

    function removeElementHTML(element) {
        element.innerHTML = "";
    }

    function createElementsFromArray(array,parentElement) {

        for (let i=0; i < array.length; i++) {

            const tagName = array[i][0];       // e.g., "div"
            const className = array[i][1];      // e.g., "title"
            let variableName = array[i][2];   // e.g., "titleElement"
            const innerText = array[i][3];    // e.g., "emanuelito0o0oo cocina para los pibes"
            
            const newElement = createElement(tagName, className);
            newElement.textContent = innerText;

            variableName = newElement;
            
            appendChildToElement(parentElement,variableName);
        }

    }

    return {
        logContent,
        getElement,
        createElement,
        appendChildToElement,
        removeElementHTML,
        createElementsFromArray
    }

}

export {FunctionFactory};
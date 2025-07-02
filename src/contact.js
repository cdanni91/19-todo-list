import { FunctionFactory } from "./shared";

function CreateContactModule() {

    const contactFactory = FunctionFactory();
    const contentElement = contactFactory.getElement(".content");
    const contactElement = contactFactory.createElement("div","contact");
    

    const contactElements = [   ["div","title","titleElement","Ponete en contacto con Emanuelito's"], 
                                ["div","description", "descriptionElement",'Información de Contacto:\nDirección: Calle de los Sabores 1234, Barrio La Masa, Rosario, Santa Fe.\nTeléfono: (341) 555-PIZZA (555-74992)\nEmail: info@emanuelitos.com\nHorarios: Martes a Domingo, de 19:00 a 23:00 hs. (Lunes cerrado por amasado intensivo).'],
                                ["div","hours","hoursElement","Lunes a Viernes: 09:00 a 18:00"]
                        ]
                        

    function executeContact() {
        // create the home element and append the home element
        contactFactory.removeElementHTML(contentElement);
        contactFactory.appendChildToElement(contentElement,contactElement);
        // home elements
        contactFactory.createElementsFromArray(contactElements, contactElement);
    }



    return {executeContact}
}

export {CreateContactModule}



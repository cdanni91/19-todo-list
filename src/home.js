import { FunctionFactory } from "./shared";

function CreateHomeModule() {

    const homeFactory = FunctionFactory();
    const contentElement = homeFactory.getElement(".content");
    const homeElement = homeFactory.createElement("div","home");
    

    const homeElements = [  ["div","title","titleElement","Bienvenido a la tienda EMANUELITO'S donde se sirve le mejor CHICKEN GUMBO"], 
                            ["div","description", "descriptionElement","Bienvenidos a Emanuelitos, no solo una pizzería, ¡sino el corazón palpitante de la verdadera pizza artesanal! En Emanuelitos, creemos que cada porción debe ser una celebración, un momento para compartir y una explosión de sabor que te transporte directamente a la cocina de la abuela. Nos enorgullecemos de nuestras masas hechas a mano diariamente, la salsa de tomate más fresca y secreta, y los ingredientes más selectos, todo horneado a la perfección en nuestro horno de leña que le da ese toque ahumado e irresistible. Desde la clásica Margherita que rinde homenaje a la tradición, hasta nuestras creaciones de autor que desafían lo convencional, en Emanuelitos cada pizza es una obra maestra. Vení a disfrutar de un ambiente cálido y familiar, donde cada sonrisa es tan genuina como nuestros sabores. ¡En Emanuelitos, cada bocado es un abrazo!"], 
                            ["div","hours","hoursElement","Lunes a Viernes: 09:00 a 18:00"]
                        ]

        

    function executeHome() {
        // create the home element and append the home element
        homeFactory.removeElementHTML(contentElement);
        homeFactory.appendChildToElement(contentElement,homeElement);
        // home elements
        homeFactory.createElementsFromArray(homeElements, homeElement);
    }



    return {executeHome}
}

export {CreateHomeModule}
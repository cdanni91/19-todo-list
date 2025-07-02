import { FunctionFactory } from "./shared";

function CreateAboutModule() {

    const aboutFactory = FunctionFactory();
    const contentElement = aboutFactory.getElement(".content");
    const aboutElement = aboutFactory.createElement("div","about");
    

    const aboutElements = [     ["div","title","titleElement","Acerca de Emanuelito's"], 
                                ["div","description", "descriptionElement",'La Historia de Emanuelitos: Un Sueño con Aroma a Albahaca La historia de Emanuelitos comenzó en un pequeño garaje en Rosario, mucho antes de que el aroma a orégano y mozzarella dominara el aire. Emanuel, un joven con un amor desmedido por la pizza y un talento innato para la cocina, soñaba con crear la pizza perfecta. No una pizza cualquiera, sino una que evocara recuerdos, que llenara el alma y el estómago con igual pasión. Durante años, Emanuel experimentó incansablemente con harinas, levaduras, tomates y quesos. Su cocina se convirtió en un laboratorio de sabores, y sus amigos y familiares en los afortunados catadores de sus experimentos. Hubo intentos fallidos, pizzas quemadas y masas rebeldes, pero Emanuel nunca se rindió. Su abuela, doña Rosa, una maestra en el arte de la cocina italiana tradicional, fue su gran inspiración y su más crítica mentora. De ella aprendió el secreto de la salsa de tomate, el arte de amasar con amor y la importancia de los ingredientes frescos.Una tarde de verano, después de incontables pruebas, Emanuel sacó del horno una pizza que lo dejó sin aliento. La masa era perfecta, crujiente por fuera y tierna por dentro; la salsa, vibrante y llena de sabor; el queso, derretido a la perfección. Sus amigos, al probarla, exclamaron al unísono: "¡Esto es Emanuelitos!"Y así, con el apoyo de su familia, un pequeño préstamo y una pasión inquebrantable, Emanuel transformó aquel garaje en la primera pizzería Emanuelitos. Al principio, solo con un horno modesto y unas pocas mesas, la voz corrió como reguero de pólvora. La gente hacía fila para probar "la pizza de Emanuel". Hoy, Emanuelitos es un referente en Rosario, un lugar donde cada pizza sigue llevando la esencia de aquel sueño original: sabor, calidad y, sobre todo, mucho amor. Porque en Emanuelitos, cada pizza es un pedacito de la historia de Emanuel, servido con una sonrisa.'], 
                                ["div","hours","hoursElement","No te olvides de volver"]
                        ]

        

    function executeAbout() {
        // create the home element and append the home element
        aboutFactory.removeElementHTML(contentElement);
        aboutFactory.appendChildToElement(contentElement,aboutElement);
        // home elements
        aboutFactory.createElementsFromArray(aboutElements, aboutElement);
    }



    return {executeAbout}
}

export {CreateAboutModule}




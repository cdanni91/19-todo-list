//import { create } from "domain"; // it breaks the serve no se pq aparecio
import "./styles.css";

import {CreateHomeModule} from "./home"
import {CreateContactModule} from "./contact"
import {CreateAboutModule} from "./about";



const homeButton = document.querySelector("#homeButton");
const contactButton = document.querySelector("#contactButton");
const aboutButton = document.querySelector("#aboutButton");


// landing render
const landing = CreateHomeModule();
landing.executeHome();



// buttons
homeButton.addEventListener("click", () => {

    const homeFactory = CreateHomeModule();
    homeFactory.executeHome();

})


contactButton.addEventListener("click",() => {
    const contactFactory = CreateContactModule();
    contactFactory.executeContact();
})



aboutButton.addEventListener("click",() => {
    const aboutFactory = CreateAboutModule();
    aboutFactory.executeAbout();
})

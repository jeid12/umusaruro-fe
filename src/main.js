import {Navbar} from "./components/Navbar.js";
import {Footer} from "./components/Footer.js";
import {SearchSection} from "./components/SearchSection.js";
import {SlidingPhotosSection} from "./components/SlidingPhotosSection.js";
const navbar = document.getElementById("navbar");
if(navbar){
    navbar.innerHTML = Navbar();
}


const footer = document.getElementById("footer");
if(footer){
    footer.innerHTML = Footer();
}

const searchSection = document.getElementById("search");
if(searchSection){
    searchSection.innerHTML = SearchSection();
}

const photo =document.getElementById("slider");
if(photo){
    photo.innerHTML = SlidingPhotosSection();
}
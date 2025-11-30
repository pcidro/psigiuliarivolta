import { initMenu } from "./modules/hamburguer.js";
import SlideNav from "./modules/depoimentos.js";

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addArrow(".prev", ".next");
slide.addControl();
initMenu();

import { initMenu } from "./modules/hamburguer.js";
import SlideNav from "./modules/depoimentos.js";
import { initTimelineObserver } from "./modules/timelineObserver.js";
import { animaScroll } from "./modules/scroll.js";

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addArrow(".prev", ".next");
slide.addControl();

initMenu();
initTimelineObserver();
animaScroll();

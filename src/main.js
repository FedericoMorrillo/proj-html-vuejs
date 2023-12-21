import { createApp } from "vue";
import "./scss/general.scss";
import "./scss/utils.scss";
import "./scss/variable.scss";
import "./scss/typography.scss";
import App from "./App.vue";

//fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faPlaneUp } from "@fortawesome/free-solid-svg-icons";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
library.add(
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faPhone,
  faEnvelope,
  faClock,
  faNetworkWired,
  faBriefcase,
  faChartSimple,
  faPlaneUp,
  faEarthEurope,
  faInbox,
  faArrowRight,
  faMedal,
  faLock,
  faPenToSquare,
  faGraduationCap,
  faQuoteRight,
  faLocationDot,
  faChevronRight,
  faArrowUp
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

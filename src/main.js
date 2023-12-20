import { createApp } from "vue";
import "./scss/general.scss";
import "./scss/utils.scss";
import "./scss/variable.scss";
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
library.add(faFacebookF, faTwitter, faLinkedinIn, faPhone, faEnvelope, faClock);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

import "./components/plays";
import "./components/text";
import "./components/result";
import "./components/button";
import "./components/count-down";
import { initRouter } from "./router";

(function () {
    const rootEl = document.querySelector(".root");
    initRouter(rootEl);
})();

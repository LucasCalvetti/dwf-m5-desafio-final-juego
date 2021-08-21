import { initGame } from "./pages/game";
import { initInstructions } from "./pages/instructions";
import { initWelcome } from "./pages/welcome/";
import { initResultWin } from "./pages/result/win";
import { initResultLose } from "./pages/result/lose";
const routes = [
    {
        path: /\/welcome/,
        handler: initWelcome,
    },
    {
        path: /\/instructions/,
        handler: initInstructions,
    },
    {
        path: /\/game/,
        handler: initGame,
    },
    {
        path: /\/result\/win/,
        handler: initResultWin,
    },
    {
        path: /\/result\/lose/,
        handler: initResultLose,
    },
];

export function initRouter(container: Element) {
    function goTo(path: string) {
        history.pushState({}, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        console.log("El handleRoute recibió una nueva ruta ", route);
        for (const r of routes) {
            if (r.path.test(route)) {
                const el = r.handler({ goTo: goTo });
                if (container.firstChild) {
                    container.firstChild.remove();
                }
                container.appendChild(el);
            } else if (route == "/") {
                goTo("/welcome");
            }
        }
    }
    handleRoute(location.pathname);
    window.onpopstate = function () {
        handleRoute(location.pathname);
    };
}

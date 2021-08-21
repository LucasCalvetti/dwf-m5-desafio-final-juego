import { state } from "../../state";

export function initGame(params) {
    const countDown: number = 3;
    const div = document.createElement("div");
    div.classList.add("game__game-container");
    div.innerHTML = `
        <div class="game__countdown-container">
            <countdown-timer class="test">${countDown}</countdown-timer>
        </div>
        <div class="game__player-plays-container">
        <my-play class="game__player-play" type="piedra"></my-play>
        <my-play class="game__player-play" type="papel"></my-play>
        <my-play class="game__player-play" type="tijera"></my-play>
        </div>
        `;

    // timesUp() modifica la div principal cuando termina el contador y el/la jugador/a no hizo ninguna jugada
    function timesUp() {
        div.innerHTML = `
                <div class="game__times-up-container">
                    <custom-text tag="h2">¡Se te terminó el tiempo!</custom-text>
                    <div class="game__times-up-buttons-container">
                        <custom-button class="go-to-game">Volver a intentar</custom-button>
                        <custom-button variant="exit" class="go-to-welcome">Salir</custom-button>
                    </div>
                </div>
            `;
        const goToGameButton = div.querySelector(".go-to-game");
        const goToWelcomeButton = div.querySelector(".go-to-welcome");

        goToGameButton.addEventListener("click", () => {
            params.goTo("/game");
        });
        goToWelcomeButton.addEventListener("click", () => {
            params.goTo("/welcome");
        });
    }
    // showBothPlays muestra ambas jugadas en la pantalla y analiza si se empató, perdió, o ganó.
    // guarda las jugadas en el state y el resultado si es ganador o perdedor, si se empata, reinicia el juego.
    function showBothPlays(playerPlay) {
        state.setGame(playerPlay);
        const currentState = state.getState();
        const computerPlay = currentState.currentGame.computerPlay;
        const myPlay = currentState.currentGame.myPlay;
        const game = {
            myPlay: currentState.currentGame.myPlay,
            computerPlay: currentState.currentGame.computerPlay,
        };
        div.innerHTML = `
        <div class="game__show-both-plays-container game__fade-in-down">
            <my-play type="${computerPlay}" opponent="true"></my-play>
        </div>
        <div class="game__show-both-plays-container game__fade-in-up">
            <my-play type="${myPlay}"></my-play>
        </div>
        `;

        const winner = state.whoWins(myPlay, computerPlay);
        const intervalUntilResult = setInterval(() => {
            if (winner == "empate") {
                params.goTo("/game");
            } else if (winner == "ganaste") {
                state.setHistory(game);
                params.goTo("/result/win");
            } else if (winner == "perdiste") {
                state.setHistory(game);
                params.goTo("/result/lose");
            }
            window.clearInterval(intervalUntilResult);
        }, 2000);
    }

    // Creo un style para indicarle visualmente el/la jugador/a cual es la jugada seleccionada
    const style = document.createElement("style");
    style.innerHTML = `
        .player-play.selected {
            animation: move-up 400ms forwards;
        }
        @keyframes move-up {
            0% {
                opacity: 0.5;
                transform: translateY(0);
            }
            100% {
                opacity: 1;
                transform: translateY(-40px);
            }
        }
        
        .player-play{
            position: relative;
            top: 20px;
            opacity: 0.5;
        }
    `;

    div.querySelector(".game__player-plays-container").appendChild(style);

    const playerPlaysArray = div.querySelector(".game__player-plays-container").children;
    // Agrego los event listeners a cada una de las jugadas de el/la jugador/a,
    // y agrega la clase "selected"
    for (let p of playerPlaysArray) {
        p.classList.add("player-play");
        p.addEventListener("click", (e) => {
            const thisPlayEl: any = e.target;
            if (thisPlayEl.classList.contains("selected")) {
                thisPlayEl.classList.remove("selected");
            } else {
                for (let i of playerPlaysArray) {
                    if (i.classList.contains("selected")) {
                        i.classList.remove("selected");
                        i.classList.add("not-selected");
                    }
                }
                thisPlayEl.classList.add("selected");
            }
        });
    }

    // Agrego + 1 al contador porque quiero que termine en "0" la cuenta regresiva, sino termina en 1
    let intervalCounter = countDown + 1;
    let playerPlayEl: any = div.querySelector(".selected") || "none";

    /* 
        Crea una cuenta regresiva simultanea al componente countdown, y acciona cuando termina el contador
    dependiendo si el jugador seleccionó o no una jugada, lo redirige a la pagina correspondiente y modifica el
    estado si la hizo
    */
    const countDownInterval = setInterval(() => {
        intervalCounter--;

        playerPlayEl = div.querySelector(".selected") || "none";
        if (intervalCounter == 0 && playerPlayEl == "none") {
            timesUp();
        } else if (intervalCounter == 0) {
            showBothPlays(playerPlayEl.type);
            window.clearInterval(countDownInterval);
        }
    }, 1000);

    return div;
}

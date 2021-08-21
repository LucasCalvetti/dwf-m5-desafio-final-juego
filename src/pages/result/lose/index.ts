import { state } from "../../../state";

export function initResultLose(params) {
    const score = state.returnScore();

    const div = document.createElement("div");
    div.classList.add("result-lose__main-container");
    div.innerHTML = `
    <div class="result-lose__result-img-container">
        <result-img result="lose">Perdiste</result-img>
    </div>
    <div class="result-lose__score-container">
        <custom-text tag="h2">Score</custom-text>
        <custom-text tag="span">Vos:${score.player}</custom-text>
        <custom-text tag="span">Máquina:${score.computer}</custom-text>
    </div>
    <custom-button class="result-lose__button go-to-game">Volver a Jugar</custom-button>
    `;
    const playAgainButton = div.querySelector(".go-to-game");

    playAgainButton.addEventListener("click", () => {
        params.goTo("/game");
    });
    return div;
}

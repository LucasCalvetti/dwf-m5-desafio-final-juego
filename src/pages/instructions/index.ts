export function initInstructions(params) {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="instructions__text-container">
            <custom-text tag="p">Presioná jugar
            y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</custom-text>
        </div>
        <div class="instructions__button-container">
            <custom-button class="go-to-game">¡Jugar!</custom-button>
        </div>
        <div class="instructions__plays-container">
        <my-play class="instructions__play" type="piedra"></my-play>
        <my-play class="instructions__play" type="papel"></my-play>
        <my-play class="instructions__play" type="tijera"></my-play>
        </div>
        </div>
    `;
    const button = div.querySelector(".go-to-game");
    div.classList.add("instructions__main-div-container");
    button.addEventListener("click", () => {
        params.goTo("/game");
    });
    return div;
}

export function initWelcome(params) {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="welcome__title-container">
            <custom-text tag="h1">Piedra, Papel ó Tijera</custom-text>
        </div>
        <div class="welcome__button-container">
            <custom-button class="go-to-instructions">Empezar</custom-button>
        </div>
        <div class="welcome__plays-container">
        <my-play class="welcome__play" type="piedra"></my-play>
        <my-play class="welcome__play" type="papel"></my-play>
        <my-play class="welcome__play" type="tijera"></my-play>
        </div>
    `;
    div.classList.add("welcome__main-div-container");
    const button = div.querySelector(".go-to-instructions");

    button.addEventListener("click", () => {
        params.goTo("/instructions");
    });
    return div;
}

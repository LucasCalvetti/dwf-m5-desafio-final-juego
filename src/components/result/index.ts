const loseImg = require("url:../../img/star-lose.png");
const winImg = require("url:../../img/star-win.png");

customElements.define(
    "result-img",
    class ResultImg extends HTMLElement {
        shadow: ShadowRoot;
        result: "win" | "lose";

        constructor() {
            super();
            this.shadow = this.attachShadow({ mode: "open" });
            this.result = this.getAttribute("result") as "win" | "lose";
        }
        connectedCallback() {
            this.render();
        }
        render() {
            const style = document.createElement("style");
            style.innerHTML = `
            *{
                box-sizing: border-box;
            }
            div{
                width: 254px;
                height: 259px;
            }
            .result{
                width: 100%;
                height: 100%;
            }
            .text{
                position: relative;
                text-align: center;
                top: -166px;
                right: -67px;
                font-weight: normal;
                font-family: Odibee Sans;
                font-size: 55px;
                color: #fff;
                display: inline;
                margin: 0;
            }
            `;
            const div = document.createElement("div");
            var imageURL: string = "";
            if (this.result == "win") {
                imageURL = winImg;
            } else {
                imageURL = loseImg;
            }
            div.innerHTML = `
                <img class="result" src="${imageURL}">
                <h1 class="text">${this.textContent}</h1>
            `;

            this.shadow.appendChild(div);
            this.shadow.appendChild(style);
        }
    }
);

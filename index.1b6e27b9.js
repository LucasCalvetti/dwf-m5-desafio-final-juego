function t(t,e,n,a){Object.defineProperty(t,e,{get:n,set:a,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=e.parcelRequire09ba;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){a[t]=e},e.parcelRequire09ba=o),o.register("7PhYn",(function(e,n){var a,o;t(e.exports,"register",(()=>a),(t=>a=t)),t(e.exports,"resolve",(()=>o),(t=>o=t));var s={};a=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)s[e[n]]=t[e[n]]},o=function(t){var e=s[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o("7PhYn").register(JSON.parse('{"di8mO":"index.1b6e27b9.js","cQkp1":"papel.5dad405c.png","gtmBI":"tijera.c1b7bbd5.png","407lu":"piedra.3e5be059.png","8uWUV":"star-lose.dac9bc02.png","99p6o":"star-win.6f650477.png"}'));var s;o.register("kVZsc",(function(e,n){var a;t(e.exports,"getBundleURL",(()=>a),(t=>a=t));var o={};function s(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return s(t[2])}return"/"}(),o[t]=e),e}})),s=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("cQkp1");var i;i=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("gtmBI");var r;r=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("407lu"),customElements.define("my-play",class extends HTMLElement{constructor(){super(),this.opponent=!1,this.shadow=this.attachShadow({mode:"open"}),this.type=this.getAttribute("type"),this.opponent=JSON.parse(this.getAttribute("opponent"))||!1}connectedCallback(){this.render()}render(){const t=document.createElement("style");t.innerHTML="\n            .rotate{\n                transform: scaleY(-1);\n            }\n            .play{\n                overflow: auto;\n                width: 100%;\n                height: 100%;\n            ";const e=document.createElement("img");"tijera"==this.type?e.src=i:"papel"==this.type?e.src=s:e.src=r,1==this.opponent&&e.classList.add("rotate"),e.classList.add("play"),this.shadow.appendChild(t),this.shadow.appendChild(e)}});class l extends HTMLElement{constructor(){super(),this.tags=["h1","h2","p","span"],this.tag="p",this.shadow=this.attachShadow({mode:"open"}),this.tags.includes(this.getAttribute("tag"))&&(this.tag=this.getAttribute("tag")||this.tag)}connectedCallback(){this.render()}render(){const t=document.createElement(this.tag);t.textContent=this.textContent;const e=document.createElement("style"),n=this.tag;e.innerHTML='\n        .main-title{\n            font-size: 90px;\n            font-family: "Barlow Semi Condensed";\n            margin: 0;\n            display: inherit;\n            color: inherit;\n            line-height: 88.1%;\n        }\n        .secondary-title{\n            text-align: center;\n            font-family: Odibee Sans;\n            font-size: 55px;\n            font-weight: normal;\n            margin: 0;\n            color: inherit;\n        }\n        .paragraph{\n            font-family: "Barlow Semi Condensed";\n            font-style: normal;\n            font-weight: 600;\n            font-size: 45px;\n            text-align: center;\n            line-height: 95%;\n            margin: 0;\n        }\n        .body{\n            font-family: Odibee Sans;\n            font-style: normal;\n            font-weight: normal;\n            font-size: 45px;\n            line-height: 50px;\n            text-align: right;\n            display: block;\n        }\n        ',t.className={h1:"main-title",h2:"secondary-title",p:"paragraph",span:"body"}[n],this.shadow.appendChild(e),this.shadow.appendChild(t)}}customElements.define("custom-text",l);var c;c=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("8uWUV");var d;d=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("99p6o"),customElements.define("result-img",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.result=this.getAttribute("result")}connectedCallback(){this.render()}render(){const t=document.createElement("style");t.innerHTML="\n            *{\n                box-sizing: border-box;\n            }\n            div{\n                width: 254px;\n                height: 259px;\n            }\n            .result{\n                width: 100%;\n                height: 100%;\n            }\n            .text{\n                position: relative;\n                text-align: center;\n                top: -166px;\n                right: -67px;\n                font-weight: normal;\n                font-family: Odibee Sans;\n                font-size: 55px;\n                color: #fff;\n                display: inline;\n                margin: 0;\n            }\n            ";const e=document.createElement("div");var n="";n="win"==this.result?d:c,e.innerHTML=`\n                <img class="result" src="${n}">\n                <h1 class="text">${this.textContent}</h1>\n            `,this.shadow.appendChild(e),this.shadow.appendChild(t)}}),customElements.define("custom-button",class extends HTMLElement{constructor(){super(),this.variant="",this.shadow=this.attachShadow({mode:"open"}),this.variant=this.getAttribute("variant")||""}connectedCallback(){this.render()}render(){const t=document.createElement("button");t.textContent=this.textContent;const e=document.createElement("style");e.innerHTML="\n                .button{\n                    background-color: #006CFC;\n                    border: 10px solid #001997;\n                    box-sizing: border-box;\n                    border-radius: 10px;\n                    width: 100%;\n                    max-width: 500px;\n                    padding-top: 9px;\n                    padding-bottom: 9px;\n                    font-family: Odibee Sans;\n                    color: #fff;\n                    font-size: 45px;\n                    font-weight: 400;\n                    line-height: 50px;\n                }\n                .button.exit{\n                    background-color: #b40404;\n                    border: 10px solid #6b0000;\n                }\n            ",t.classList.add("button"),"exit"==this.variant&&t.classList.add("exit"),this.shadow.appendChild(t),this.shadow.appendChild(e)}}),customElements.define("countdown-timer",class extends HTMLElement{constructor(){super(),this.contador=3,this.shadow=this.attachShadow({mode:"open"}),this.contador=JSON.parse(this.textContent)}connectedCallback(){this.render()}render(){const t=document.createElement("style");t.innerHTML=`\n            .shrink-animation {\n                font-family: "Barlow Semi Condensed";\n                position: relative;\n                top: -195px;\n                font-size: 65px;\n                color: #000;\n                left: 17px;\n                -webkit-transition-property: -webkit-transform;\n                -webkit-transition-duration: 1s;\n                -moz-transition-property: -moz-transform;\n                -moz-transition-duration: 1s;\n                -webkit-animation-name: shrink;\n                -webkit-animation-duration: 2s;\n                -webkit-animation-iteration-count: infinite;\n                -webkit-animation-timing-function: linear;\n                -moz-animation-name: shrink;\n                -moz-animation-duration: 2s;\n                -moz-animation-iteration-count: infinite;\n                -moz-animation-timing-function: linear;\n            \n                transition-property: -moz-transform;\n                transition-duration: 1s;\n                animation-name: shrink;\n                animation-duration: 1s;\n                animation-iteration-count: ${(this.contador+1).toString()};\n                animation-timing-function: ease-in;\n            }\n            \n            @-webkit-keyframes shrink {\n                from {\n                    -webkit-transform: scale(1);\n                }\n            \n                to {\n                    -webkit-transform: scale(4.333);\n                }\n            }\n            \n            @-moz-keyframes shrink {\n                from {\n                    -moz-transform: scale(1);\n                }\n            \n                to {\n                    -moz-transform: scale(4.333);\n                }\n            }\n            \n            @keyframes shrink {\n                from {\n                    transform: scale(4.333);\n                }\n            \n                to {\n                    transform: scale(0.1);\n                }\n            }\n            \n            .spin {\n                display: inline-block;\n                width: 100%;\n                height: 100%;\n                border: 15px solid black;\n                border-radius: 50%;\n                border-top-color: #fff;\n                animation: spin 1s ease-in-out ${(this.contador+1).toString()};\n                -webkit-animation: spin 1s ease-in-out infinite;\n            }\n            @keyframes spin {\n                to {\n                    -webkit-transform: rotate(360deg);\n                }\n            }\n            @-webkit-keyframes spin {\n                to {\n                    -webkit-transform: rotate(360deg);\n                }\n            }\n            .time-end{\n                display: none;\n            }\n            \n            `;const e=document.createElement("div");e.style.display="block",e.style.right="50%",e.style.height="243px",e.style.width="243px",e.style.textAlign="center";const n=document.createElement("div");n.classList.add("spin");const a=document.createElement("div");a.classList.add("shrink-animation"),a.textContent=this.textContent,a.addEventListener("animationiteration",(()=>{this.contador--,a.textContent=this.contador.toString()})),a.addEventListener("animationend",(()=>{e.style.display="none",a.className="time-end"})),e.appendChild(n),e.appendChild(a),this.shadow.appendChild(t),this.shadow.appendChild(e)}});const m={data:{currentGame:{myPlay:"",computerPlay:""},history:[]},getState(){return this.data},setState(t){this.data=t,localStorage.setItem("state",JSON.stringify(t))},setGame(t){const e=this.getState();e.currentGame.myPlay=t;const n=Math.floor(3*Math.random());e.currentGame.computerPlay=["tijera","papel","piedra"][n],this.setState(e)},whoWins(t,e){const n=[{myPlay:"tijera",computerPlay:"papel"},{myPlay:"piedra",computerPlay:"tijera"},{myPlay:"papel",computerPlay:"piedra"}];let a="perdiste";for(const o of n)o.myPlay==t&&o.computerPlay==e?a="ganaste":t==e&&(a="empate");return a},setHistory(t){const e=this.getState();e.history.push(t),this.setState(e)},returnScore(){const t=this.getState(),e={player:0,computer:0};for(const n of t.history)"ganaste"==m.whoWins(n.myPlay,n.computerPlay)?e.player++:"perdiste"==m.whoWins(n.myPlay,n.computerPlay)&&e.computer++;return e}};!function(){const t=localStorage.getItem("state");t&&m.setState(JSON.parse(t))}();const p=[{path:/\/welcome/,handler:function(t){const e=document.createElement("div");return e.innerHTML='\n        <div class="welcome__title-container">\n            <custom-text tag="h1">Piedra, Papel ó Tijera</custom-text>\n        </div>\n        <div class="welcome__button-container">\n            <custom-button class="go-to-instructions">Empezar</custom-button>\n        </div>\n        <div class="welcome__plays-container">\n        <my-play class="welcome__play" type="piedra"></my-play>\n        <my-play class="welcome__play" type="papel"></my-play>\n        <my-play class="welcome__play" type="tijera"></my-play>\n        </div>\n    ',e.classList.add("welcome__main-div-container"),e.querySelector(".go-to-instructions").addEventListener("click",(()=>{t.goTo("/instructions")})),e}},{path:/\/instructions/,handler:function(t){const e=document.createElement("div");e.innerHTML='\n        <div class="instructions__text-container">\n            <custom-text tag="p">Presioná jugar\n            y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</custom-text>\n        </div>\n        <div class="instructions__button-container">\n            <custom-button class="go-to-game">¡Jugar!</custom-button>\n        </div>\n        <div class="instructions__plays-container">\n        <my-play class="instructions__play" type="piedra"></my-play>\n        <my-play class="instructions__play" type="papel"></my-play>\n        <my-play class="instructions__play" type="tijera"></my-play>\n        </div>\n        </div>\n    ';const n=e.querySelector(".go-to-game");return e.classList.add("instructions__main-div-container"),n.addEventListener("click",(()=>{t.goTo("/game")})),e}},{path:/\/game/,handler:function(t){const e=document.createElement("div");e.classList.add("game__game-container"),e.innerHTML='\n        <div class="game__countdown-container">\n            <countdown-timer class="test">3</countdown-timer>\n        </div>\n        <div class="game__player-plays-container">\n        <my-play class="game__player-play" type="piedra"></my-play>\n        <my-play class="game__player-play" type="papel"></my-play>\n        <my-play class="game__player-play" type="tijera"></my-play>\n        </div>\n        ';const n=document.createElement("style");n.innerHTML="\n        .player-play.selected {\n            animation: move-up 400ms forwards;\n        }\n        @keyframes move-up {\n            0% {\n                opacity: 0.5;\n                transform: translateY(0);\n            }\n            100% {\n                opacity: 1;\n                transform: translateY(-40px);\n            }\n        }\n        \n        .player-play{\n            position: relative;\n            top: 20px;\n            opacity: 0.5;\n        }\n    ",e.querySelector(".game__player-plays-container").appendChild(n);const a=e.querySelector(".game__player-plays-container").children;for(let t of a)t.classList.add("player-play"),t.addEventListener("click",(t=>{const e=t.target;if(e.classList.contains("selected"))e.classList.remove("selected");else{for(let t of a)t.classList.contains("selected")&&(t.classList.remove("selected"),t.classList.add("not-selected"));e.classList.add("selected")}}));let o=4,s=e.querySelector(".selected")||"none";const i=setInterval((()=>{o--,s=e.querySelector(".selected")||"none",0==o&&"none"==s?function(){e.innerHTML='\n                <div class="game__times-up-container">\n                    <custom-text tag="h2">¡Se te terminó el tiempo!</custom-text>\n                    <div class="game__times-up-buttons-container">\n                        <custom-button class="go-to-game">Volver a intentar</custom-button>\n                        <custom-button variant="exit" class="go-to-welcome">Salir</custom-button>\n                    </div>\n                </div>\n            ';const n=e.querySelector(".go-to-game"),a=e.querySelector(".go-to-welcome");n.addEventListener("click",(()=>{t.goTo("/game")})),a.addEventListener("click",(()=>{t.goTo("/welcome")}))}():0==o&&(!function(n){m.setGame(n);const a=m.getState(),o=a.currentGame.computerPlay,s=a.currentGame.myPlay,i={myPlay:a.currentGame.myPlay,computerPlay:a.currentGame.computerPlay};e.innerHTML=`\n        <div class="game__show-both-plays-container game__fade-in-down">\n            <my-play type="${o}" opponent="true"></my-play>\n        </div>\n        <div class="game__show-both-plays-container game__fade-in-up">\n            <my-play type="${s}"></my-play>\n        </div>\n        `;const r=m.whoWins(s,o),l=setInterval((()=>{"empate"==r?t.goTo("/game"):"ganaste"==r?(m.setHistory(i),t.goTo("/result/win")):"perdiste"==r&&(m.setHistory(i),t.goTo("/result/lose")),window.clearInterval(l)}),2e3)}(s.type),window.clearInterval(i))}),1e3);return e}},{path:/\/result\/win/,handler:function(t){const e=m.returnScore(),n=document.createElement("div");return n.classList.add("result-win__main-container"),n.innerHTML=`\n    <div class="result-win__result-img-container">\n        <result-img result="win">Ganaste</result-img>\n    </div>\n    <div class="result-win__score-container">\n        <custom-text tag="h2">Score</custom-text>\n        <custom-text tag="span">Vos:${e.player}</custom-text>\n        <custom-text tag="span">Máquina:${e.computer}</custom-text>\n    </div>\n    <custom-button class="result-win__button go-to-game">Volver a Jugar</custom-button>\n    `,n.querySelector(".go-to-game").addEventListener("click",(()=>{t.goTo("/game")})),n}},{path:/\/result\/lose/,handler:function(t){const e=m.returnScore(),n=document.createElement("div");return n.classList.add("result-lose__main-container"),n.innerHTML=`\n    <div class="result-lose__result-img-container">\n        <result-img result="lose">Perdiste</result-img>\n    </div>\n    <div class="result-lose__score-container">\n        <custom-text tag="h2">Score</custom-text>\n        <custom-text tag="span">Vos:${e.player}</custom-text>\n        <custom-text tag="span">Máquina:${e.computer}</custom-text>\n    </div>\n    <custom-button class="result-lose__button go-to-game">Volver a Jugar</custom-button>\n    `,n.querySelector(".go-to-game").addEventListener("click",(()=>{t.goTo("/game")})),n}}];!function(t){function e(t){history.pushState({},"",t),n(t)}function n(n){for(const a of p)if(a.path.test(n)){const n=a.handler({goTo:e});t.firstChild&&t.firstChild.remove(),t.appendChild(n)}}"/dwf-m5-desafio-final-juego/"==location.pathname?e("/welcome"):n(location.pathname.replace("/dwf-m5-desafio-final-juego","")),window.onpopstate=()=>{n(location.pathname.replace("/dwf-m5-desafio-final-juego",""))}}(document.querySelector(".root"));
//# sourceMappingURL=index.1b6e27b9.js.map
function t(t,n,e,a){Object.defineProperty(t,n,{get:e,set:a,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},a={},o=n.parcelRequire09ba;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in a){var n=a[t];delete a[t];var o={id:t,exports:{}};return e[t]=o,n.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,n){a[t]=n},n.parcelRequire09ba=o),o.register("7PhYn",(function(n,e){var a,o;t(n.exports,"register",(()=>a),(t=>a=t)),t(n.exports,"resolve",(()=>o),(t=>o=t));var s={};a=function(t){for(var n=Object.keys(t),e=0;e<n.length;e++)s[n[e]]=t[n[e]]},o=function(t){var n=s[t];if(null==n)throw new Error("Could not resolve bundle with id "+t);return n}})),o("7PhYn").register(JSON.parse('{"di8mO":"index.93396f25.js","cQkp1":"papel.5dad405c.png","gtmBI":"tijera.c1b7bbd5.png","407lu":"piedra.3e5be059.png","8uWUV":"star-lose.dac9bc02.png","99p6o":"star-win.6f650477.png"}'));var s;o.register("kVZsc",(function(n,e){var a;t(n.exports,"getBundleURL",(()=>a),(t=>a=t));var o={};function s(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(t){var n=o[t];return n||(n=function(){try{throw new Error}catch(n){var t=(""+n.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return s(t[2])}return"/"}(),o[t]=n),n}})),s=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("cQkp1");var i;i=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("gtmBI");var r;r=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("407lu"),customElements.define("my-play",class extends HTMLElement{constructor(){super(),this.opponent=!1,this.shadow=this.attachShadow({mode:"open"}),this.type=this.getAttribute("type"),this.opponent=JSON.parse(this.getAttribute("opponent"))||!1}connectedCallback(){this.render()}render(){const t=document.createElement("style");t.innerHTML="\n            .rotate{\n                transform: scaleY(-1);\n            }\n            .play{\n                overflow: auto;\n                width: 100%;\n                height: 100%;\n            ";const n=document.createElement("img");"tijera"==this.type?n.src=i:"papel"==this.type?n.src=s:n.src=r,1==this.opponent&&n.classList.add("rotate"),n.classList.add("play"),this.shadow.appendChild(t),this.shadow.appendChild(n)}});class l extends HTMLElement{constructor(){super(),this.tags=["h1","h2","p","span"],this.tag="p",this.shadow=this.attachShadow({mode:"open"}),this.tags.includes(this.getAttribute("tag"))&&(this.tag=this.getAttribute("tag")||this.tag)}connectedCallback(){this.render()}render(){const t=document.createElement(this.tag);t.textContent=this.textContent;const n=document.createElement("style"),e=this.tag;n.innerHTML='\n        .main-title{\n            font-size: 90px;\n            font-family: "Barlow Semi Condensed";\n            margin: 0;\n            display: inherit;\n            color: inherit;\n            line-height: 88.1%;\n        }\n        .secondary-title{\n            text-align: center;\n            font-family: Odibee Sans;\n            font-size: 55px;\n            font-weight: normal;\n            margin: 0;\n            color: inherit;\n        }\n        .paragraph{\n            font-family: "Barlow Semi Condensed";\n            font-style: normal;\n            font-weight: 600;\n            font-size: 45px;\n            text-align: center;\n            line-height: 95%;\n            margin: 0;\n        }\n        .body{\n            font-family: Odibee Sans;\n            font-style: normal;\n            font-weight: normal;\n            font-size: 45px;\n            line-height: 50px;\n            text-align: right;\n            display: block;\n        }\n        ',t.className={h1:"main-title",h2:"secondary-title",p:"paragraph",span:"body"}[e],this.shadow.appendChild(n),this.shadow.appendChild(t)}}customElements.define("custom-text",l);var c;c=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("8uWUV");var d;d=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("99p6o"),customElements.define("result-img",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.result=this.getAttribute("result")}connectedCallback(){this.render()}render(){const t=document.createElement("style");t.innerHTML="\n            *{\n                box-sizing: border-box;\n            }\n            div{\n                width: 254px;\n                height: 259px;\n            }\n            .result{\n                width: 100%;\n                height: 100%;\n            }\n            .text{\n                position: relative;\n                text-align: center;\n                top: -166px;\n                right: -67px;\n                font-weight: normal;\n                font-family: Odibee Sans;\n                font-size: 55px;\n                color: #fff;\n                display: inline;\n                margin: 0;\n            }\n            ";const n=document.createElement("div");var e="";e="win"==this.result?d:c,n.innerHTML=`\n                <img class="result" src="${e}">\n                <h1 class="text">${this.textContent}</h1>\n            `,this.shadow.appendChild(n),this.shadow.appendChild(t)}}),customElements.define("custom-button",class extends HTMLElement{constructor(){super(),this.variant="",this.shadow=this.attachShadow({mode:"open"}),this.variant=this.getAttribute("variant")||""}connectedCallback(){this.render()}render(){const t=document.createElement("button");t.textContent=this.textContent;const n=document.createElement("style");n.innerHTML="\n                .button{\n                    background-color: #006CFC;\n                    border: 10px solid #001997;\n                    box-sizing: border-box;\n                    border-radius: 10px;\n                    width: 100%;\n                    max-width: 500px;\n                    padding-top: 9px;\n                    padding-bottom: 9px;\n                    font-family: Odibee Sans;\n                    color: #fff;\n                    font-size: 45px;\n                    font-weight: 400;\n                    line-height: 50px;\n                }\n                .button.exit{\n                    background-color: #b40404;\n                    border: 10px solid #6b0000;\n                }\n            ",t.classList.add("button"),"exit"==this.variant&&t.classList.add("exit"),this.shadow.appendChild(t),this.shadow.appendChild(n)}}),customElements.define("countdown-timer",class extends HTMLElement{constructor(){super(),this.contador=3,this.shadow=this.attachShadow({mode:"open"}),this.contador=JSON.parse(this.textContent)}connectedCallback(){this.render()}render(){const t=document.createElement("style");t.innerHTML=`\n            .shrink-animation {\n                font-family: "Barlow Semi Condensed";\n                position: relative;\n                top: -195px;\n                font-size: 65px;\n                color: #000;\n                left: 17px;\n                -webkit-transition-property: -webkit-transform;\n                -webkit-transition-duration: 1s;\n                -moz-transition-property: -moz-transform;\n                -moz-transition-duration: 1s;\n                -webkit-animation-name: shrink;\n                -webkit-animation-duration: 2s;\n                -webkit-animation-iteration-count: infinite;\n                -webkit-animation-timing-function: linear;\n                -moz-animation-name: shrink;\n                -moz-animation-duration: 2s;\n                -moz-animation-iteration-count: infinite;\n                -moz-animation-timing-function: linear;\n            \n                transition-property: -moz-transform;\n                transition-duration: 1s;\n                animation-name: shrink;\n                animation-duration: 1s;\n                animation-iteration-count: ${(this.contador+1).toString()};\n                animation-timing-function: ease-in;\n            }\n            \n            @-webkit-keyframes shrink {\n                from {\n                    -webkit-transform: scale(1);\n                }\n            \n                to {\n                    -webkit-transform: scale(4.333);\n                }\n            }\n            \n            @-moz-keyframes shrink {\n                from {\n                    -moz-transform: scale(1);\n                }\n            \n                to {\n                    -moz-transform: scale(4.333);\n                }\n            }\n            \n            @keyframes shrink {\n                from {\n                    transform: scale(4.333);\n                }\n            \n                to {\n                    transform: scale(0.1);\n                }\n            }\n            \n            .spin {\n                display: inline-block;\n                width: 100%;\n                height: 100%;\n                border: 15px solid black;\n                border-radius: 50%;\n                border-top-color: #fff;\n                animation: spin 1s ease-in-out ${(this.contador+1).toString()};\n                -webkit-animation: spin 1s ease-in-out infinite;\n            }\n            @keyframes spin {\n                to {\n                    -webkit-transform: rotate(360deg);\n                }\n            }\n            @-webkit-keyframes spin {\n                to {\n                    -webkit-transform: rotate(360deg);\n                }\n            }\n            .time-end{\n                display: none;\n            }\n            \n            `;const n=document.createElement("div");n.style.display="block",n.style.right="50%",n.style.height="243px",n.style.width="243px",n.style.textAlign="center";const e=document.createElement("div");e.classList.add("spin");const a=document.createElement("div");a.classList.add("shrink-animation"),a.textContent=this.textContent,a.addEventListener("animationiteration",(()=>{this.contador--,a.textContent=this.contador.toString()})),a.addEventListener("animationend",(()=>{n.style.display="none",a.className="time-end"})),n.appendChild(e),n.appendChild(a),this.shadow.appendChild(t),this.shadow.appendChild(n)}});const m={data:{currentGame:{myPlay:"",computerPlay:""},history:[]},getState(){return this.data},setState(t){this.data=t,localStorage.setItem("state",JSON.stringify(t))},setGame(t){const n=this.getState();n.currentGame.myPlay=t;const e=Math.floor(3*Math.random());n.currentGame.computerPlay=["tijera","papel","piedra"][e],this.setState(n)},whoWins(t,n){const e=[{myPlay:"tijera",computerPlay:"papel"},{myPlay:"piedra",computerPlay:"tijera"},{myPlay:"papel",computerPlay:"piedra"}];let a="perdiste";for(const o of e)o.myPlay==t&&o.computerPlay==n?a="ganaste":t==n&&(a="empate");return a},setHistory(t){const n=this.getState();n.history.push(t),this.setState(n)},returnScore(){const t=this.getState(),n={player:0,computer:0};for(const e of t.history)"ganaste"==m.whoWins(e.myPlay,e.computerPlay)?n.player++:"perdiste"==m.whoWins(e.myPlay,e.computerPlay)&&n.computer++;return n}};!function(){const t=localStorage.getItem("state");t&&m.setState(JSON.parse(t))}();const p=[{path:/\/welcome/,handler:function(t){const n=document.createElement("div");return n.innerHTML='\n        <div class="welcome__title-container">\n            <custom-text tag="h1">Piedra, Papel ó Tijera</custom-text>\n        </div>\n        <div class="welcome__button-container">\n            <custom-button class="go-to-instructions">Empezar</custom-button>\n        </div>\n        <div class="welcome__plays-container">\n        <my-play class="welcome__play" type="piedra"></my-play>\n        <my-play class="welcome__play" type="papel"></my-play>\n        <my-play class="welcome__play" type="tijera"></my-play>\n        </div>\n    ',n.classList.add("welcome__main-div-container"),n.querySelector(".go-to-instructions").addEventListener("click",(()=>{t.goTo("/instructions")})),n}},{path:/\/instructions/,handler:function(t){const n=document.createElement("div");n.innerHTML='\n        <div class="instructions__text-container">\n            <custom-text tag="p">Presioná jugar\n            y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</custom-text>\n        </div>\n        <div class="instructions__button-container">\n            <custom-button class="go-to-game">¡Jugar!</custom-button>\n        </div>\n        <div class="instructions__plays-container">\n        <my-play class="instructions__play" type="piedra"></my-play>\n        <my-play class="instructions__play" type="papel"></my-play>\n        <my-play class="instructions__play" type="tijera"></my-play>\n        </div>\n        </div>\n    ';const e=n.querySelector(".go-to-game");return n.classList.add("instructions__main-div-container"),e.addEventListener("click",(()=>{t.goTo("/game")})),n}},{path:/\/game/,handler:function(t){const n=document.createElement("div");n.classList.add("game__game-container"),n.innerHTML='\n        <div class="game__countdown-container">\n            <countdown-timer class="test">3</countdown-timer>\n        </div>\n        <div class="game__player-plays-container">\n        <my-play class="game__player-play" type="piedra"></my-play>\n        <my-play class="game__player-play" type="papel"></my-play>\n        <my-play class="game__player-play" type="tijera"></my-play>\n        </div>\n        ';const e=document.createElement("style");e.innerHTML="\n        .player-play.selected {\n            animation: move-up 400ms forwards;\n        }\n        @keyframes move-up {\n            0% {\n                opacity: 0.5;\n                transform: translateY(0);\n            }\n            100% {\n                opacity: 1;\n                transform: translateY(-40px);\n            }\n        }\n        \n        .player-play{\n            position: relative;\n            top: 20px;\n            opacity: 0.5;\n        }\n    ",n.querySelector(".game__player-plays-container").appendChild(e);const a=n.querySelector(".game__player-plays-container").children;for(let t of a)t.classList.add("player-play"),t.addEventListener("click",(t=>{const n=t.target;if(n.classList.contains("selected"))n.classList.remove("selected");else{for(let t of a)t.classList.contains("selected")&&(t.classList.remove("selected"),t.classList.add("not-selected"));n.classList.add("selected")}}));let o=4,s=n.querySelector(".selected")||"none";const i=setInterval((()=>{o--,s=n.querySelector(".selected")||"none",0==o&&"none"==s?function(){n.innerHTML='\n                <div class="game__times-up-container">\n                    <custom-text tag="h2">¡Se te terminó el tiempo!</custom-text>\n                    <div class="game__times-up-buttons-container">\n                        <custom-button class="go-to-game">Volver a intentar</custom-button>\n                        <custom-button variant="exit" class="go-to-welcome">Salir</custom-button>\n                    </div>\n                </div>\n            ';const e=n.querySelector(".go-to-game"),a=n.querySelector(".go-to-welcome");e.addEventListener("click",(()=>{t.goTo("/game")})),a.addEventListener("click",(()=>{t.goTo("/welcome")}))}():0==o&&(!function(e){m.setGame(e);const a=m.getState(),o=a.currentGame.computerPlay,s=a.currentGame.myPlay,i={myPlay:a.currentGame.myPlay,computerPlay:a.currentGame.computerPlay};n.innerHTML=`\n        <div class="game__show-both-plays-container game__fade-in-down">\n            <my-play type="${o}" opponent="true"></my-play>\n        </div>\n        <div class="game__show-both-plays-container game__fade-in-up">\n            <my-play type="${s}"></my-play>\n        </div>\n        `;const r=m.whoWins(s,o),l=setInterval((()=>{"empate"==r?t.goTo("/game"):"ganaste"==r?(m.setHistory(i),t.goTo("/result/win")):"perdiste"==r&&(m.setHistory(i),t.goTo("/result/lose")),window.clearInterval(l)}),2e3)}(s.type),window.clearInterval(i))}),1e3);return n}},{path:/\/result\/win/,handler:function(t){const n=m.returnScore(),e=document.createElement("div");return e.classList.add("result-win__main-container"),e.innerHTML=`\n    <div class="result-win__result-img-container">\n        <result-img result="win">Ganaste</result-img>\n    </div>\n    <div class="result-win__score-container">\n        <custom-text tag="h2">Score</custom-text>\n        <custom-text tag="span">Vos:${n.player}</custom-text>\n        <custom-text tag="span">Máquina:${n.computer}</custom-text>\n    </div>\n    <custom-button class="result-win__button go-to-game">Volver a Jugar</custom-button>\n    `,e.querySelector(".go-to-game").addEventListener("click",(()=>{t.goTo("/game")})),e}},{path:/\/result\/lose/,handler:function(t){const n=m.returnScore(),e=document.createElement("div");return e.classList.add("result-lose__main-container"),e.innerHTML=`\n    <div class="result-lose__result-img-container">\n        <result-img result="lose">Ganaste</result-img>\n    </div>\n    <div class="result-lose__score-container">\n        <custom-text tag="h2">Score</custom-text>\n        <custom-text tag="span">Vos:${n.player}</custom-text>\n        <custom-text tag="span">Máquina:${n.computer}</custom-text>\n    </div>\n    <custom-button class="result-lose__button go-to-game">Volver a Jugar</custom-button>\n    `,e.querySelector(".go-to-game").addEventListener("click",(()=>{t.goTo("/game")})),e}}];!function(t){function n(t){history.pushState({},"",t),e(t)}function e(e){for(const a of p)if(a.path.test(e)){const e=a.handler({goTo:n});t.firstChild&&t.firstChild.remove(),t.appendChild(e)}}"/dwf-m5-desafio-final-juego/"==location.pathname?n("/welcome"):e(location.pathname.replace("/dwf-m5-desafio-final-juego","")),window.onpopstate=()=>{e(location.pathname.replace("/dwf-m5-desafio-final-juego",""))}}(document.querySelector(".root"));
//# sourceMappingURL=index.93396f25.js.map

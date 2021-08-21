// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"eSrN1":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "5a9365aceb114a45";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4aleK":[function(require,module,exports) {
var _plays = require("./components/plays");
var _text = require("./components/text");
var _result = require("./components/result");
var _button = require("./components/button");
var _countDown = require("./components/count-down");
var _router = require("./router");
(function() {
    const rootEl = document.querySelector(".root");
    _router.initRouter(rootEl);
})();

},{"./components/plays":"lkPYp","./components/text":"8YEyP","./components/result":"cv4iU","./components/button":"3uBrB","./components/count-down":"aLvvz","./router":"b2iia"}],"lkPYp":[function(require,module,exports) {
const imgPapel = require("url:../../img/papel.svg");
const imgTijera = require("url:../../img/tijera.svg");
const imgPiedra = require("url:../../img/piedra.svg");
customElements.define("my-play", class MyPlay extends HTMLElement {
    constructor(){
        super();
        this.opponent = false;
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.type = this.getAttribute("type");
        this.opponent = JSON.parse(this.getAttribute("opponent")) || false;
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const style = document.createElement("style");
        style.innerHTML = `\n            .rotate{\n                transform: scaleY(-1);\n            }\n            `;
        const play = document.createElement("img");
        if (this.type == "tijera") play.src = imgTijera;
        else if (this.type == "papel") play.src = imgPapel;
        else play.src = imgPiedra;
        if (this.opponent == true) play.classList.add("rotate");
        this.shadow.appendChild(style);
        this.shadow.appendChild(play);
    }
});

},{"url:../../img/papel.svg":"d2hyL","url:../../img/tijera.svg":"DniJv","url:../../img/piedra.svg":"luOYI"}],"d2hyL":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7M8e5') + "papel.ed2ad0ee.svg";

},{"./helpers/bundle-url":"8YnfL"}],"8YnfL":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"DniJv":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7M8e5') + "tijera.e69d7d7d.svg";

},{"./helpers/bundle-url":"8YnfL"}],"luOYI":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7M8e5') + "piedra.b3596ffa.svg";

},{"./helpers/bundle-url":"8YnfL"}],"8YEyP":[function(require,module,exports) {
class CustomText extends HTMLElement {
    constructor(){
        super();
        this.tags = [
            "h1",
            "h2",
            "p",
            "span"
        ];
        this.tag = "p";
        this.shadow = this.attachShadow({
            mode: "open"
        });
        if (this.tags.includes(this.getAttribute("tag"))) this.tag = this.getAttribute("tag") || this.tag;
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const rootEl = document.createElement(this.tag);
        rootEl.textContent = this.textContent;
        const style = document.createElement("style");
        const tagSelected = this.tag;
        const styleSelector = {
            h1: "main-title",
            h2: "secondary-title",
            p: "paragraph",
            span: "body"
        };
        /* 
        main-title = texto de titulo de welcome
        paragraph = textos largos como por ej, instructions
        secondary-title = texto de result, y titulo de score
        body = texto base de score
        */ style.innerHTML = `\n        .main-title{\n            font-size: 90px;\n            font-family: "Barlow Semi Condensed";\n            margin: 0;\n            display: inherit;\n            color: inherit;\n        }\n        .secondary-title{\n            text-align: center;\n            font-family: Odibee Sans;\n            font-size: 55px;\n            font-weight: normal;\n            margin: 0;\n            color: inherit;\n        }\n        .paragraph{\n            font-family: "Barlow Semi Condensed";\n            font-style: normal;\n            font-weight: 600;\n            font-size: 40px;\n            text-align: center;\n        }\n        .body{\n            font-family: Odibee Sans;\n            font-style: normal;\n            font-weight: normal;\n        }\n        `;
        rootEl.className = styleSelector[tagSelected];
        this.shadow.appendChild(style);
        this.shadow.appendChild(rootEl);
    }
}
customElements.define("custom-text", CustomText);

},{}],"cv4iU":[function(require,module,exports) {
const winImg = require("url:../../img/star-lose.png");
const loseImg = require("url:../../img/star-win.png");
customElements.define("result-img", class ResultImg extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.result = this.getAttribute("result");
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const style = document.createElement("style");
        style.innerHTML = `\n            *{\n                box-sizing: border-box;\n            }\n            .result{\n                width:254px;\n                height:259px;\n                color:white;\n                display: inline;\n            }\n            .result.win{\n                background-image:url(${loseImg});\n            }\n            .result.lose{\n                background-image:url(${winImg});\n            }\n            .text{\n                position: relative;\n                text-align: center;\n                top: -120px;\n                right: 180px;\n                font-weight: normal;\n                font-family: Odibee Sans;\n                font-size: 55px;\n                color: #fff;\n                display: inline;\n                margin: 0;\n            }\n            `;
        const img = document.createElement("img");
        const h1 = document.createElement("h1");
        h1.className = "text";
        h1.textContent = this.textContent;
        img.classList.add("result");
        if (this.result == "win") img.classList.add("win");
        else img.classList.add("lose");
        this.shadow.appendChild(style);
        this.shadow.appendChild(img);
        this.shadow.appendChild(h1);
    }
});

},{"url:../../img/star-lose.png":"7ao3P","url:../../img/star-win.png":"hs3Rs"}],"7ao3P":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7M8e5') + "star-lose.c772cb6e.png";

},{"./helpers/bundle-url":"8YnfL"}],"hs3Rs":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7M8e5') + "star-win.8c600855.png";

},{"./helpers/bundle-url":"8YnfL"}],"3uBrB":[function(require,module,exports) {
customElements.define("custom-button", class Button extends HTMLElement {
    constructor(){
        super();
        this.variant = "";
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.variant = this.getAttribute("variant") || "";
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const button = document.createElement("button");
        button.textContent = this.textContent;
        const style = document.createElement("style");
        style.innerHTML = `\n                .button{\n                    background-color: #006CFC;\n                    border: 10px solid #001997;\n                    box-sizing: border-box;\n                    border-radius: 10px;\n                    width: 100%;\n                    max-width: 500px;\n                    padding-top: 8px;\n                    padding-bottom: 8px;\n                    font-family: Odibee Sans;\n                    color: #fff;\n                    font-size: 45px;\n                    font-weight: 400;\n                    line-height: 50px;\n                }\n                .button.exit{\n                    background-color: #b40404;\n                    border: 10px solid #6b0000;\n                }\n            `;
        button.classList.add("button");
        if (this.variant == "exit") button.classList.add("exit");
        this.shadow.appendChild(button);
        this.shadow.appendChild(style);
    }
});

},{}],"aLvvz":[function(require,module,exports) {
customElements.define("countdown-timer", class CountdownTimer extends HTMLElement {
    constructor(){
        super();
        this.contador = 3;
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.contador = JSON.parse(this.textContent);
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const style = document.createElement("style");
        style.innerHTML = `\n            .shrink-animation {\n                font-family: "Barlow Semi Condensed";\n                position: relative;\n                top: -195px;\n                font-size: 70px;\n                color: #000;\n                left: 17px;\n                -webkit-transition-property: -webkit-transform;\n                -webkit-transition-duration: 1s;\n                -moz-transition-property: -moz-transform;\n                -moz-transition-duration: 1s;\n                -webkit-animation-name: shrink;\n                -webkit-animation-duration: 2s;\n                -webkit-animation-iteration-count: infinite;\n                -webkit-animation-timing-function: linear;\n                -moz-animation-name: shrink;\n                -moz-animation-duration: 2s;\n                -moz-animation-iteration-count: infinite;\n                -moz-animation-timing-function: linear;\n            \n                transition-property: -moz-transform;\n                transition-duration: 1s;\n                animation-name: shrink;\n                animation-duration: 1s;\n                animation-iteration-count: ${(this.contador + 1).toString()};\n                animation-timing-function: ease-in;\n            }\n            \n            @-webkit-keyframes shrink {\n                from {\n                    -webkit-transform: scale(1);\n                }\n            \n                to {\n                    -webkit-transform: scale(4.333);\n                }\n            }\n            \n            @-moz-keyframes shrink {\n                from {\n                    -moz-transform: scale(1);\n                }\n            \n                to {\n                    -moz-transform: scale(4.333);\n                }\n            }\n            \n            @keyframes shrink {\n                from {\n                    transform: scale(4.333);\n                }\n            \n                to {\n                    transform: scale(0.1);\n                }\n            }\n            \n            .spin {\n                display: inline-block;\n                width: 100%;\n                height: 100%;\n                border: 15px solid black;\n                border-radius: 50%;\n                border-top-color: #fff;\n                animation: spin 1s ease-in-out ${(this.contador + 1).toString()};\n                -webkit-animation: spin 1s ease-in-out infinite;\n            }\n            @keyframes spin {\n                to {\n                    -webkit-transform: rotate(360deg);\n                }\n            }\n            @-webkit-keyframes spin {\n                to {\n                    -webkit-transform: rotate(360deg);\n                }\n            }\n            .time-end{\n                display: none;\n            }\n            \n            `;
        const divContainerEl = document.createElement("div");
        divContainerEl.style.display = "block";
        divContainerEl.style.right = "50%";
        divContainerEl.style.height = "243px";
        divContainerEl.style.width = "243px";
        divContainerEl.style.textAlign = "center";
        const divSpinAnimationEl = document.createElement("div");
        divSpinAnimationEl.classList.add("spin");
        const divTimerEl = document.createElement("div");
        divTimerEl.classList.add("shrink-animation");
        divTimerEl.textContent = this.textContent;
        divTimerEl.addEventListener("animationiteration", ()=>{
            this.contador--;
            divTimerEl.textContent = this.contador.toString();
        });
        divTimerEl.addEventListener("animationend", ()=>{
            divContainerEl.style.display = "none";
            divTimerEl.className = "time-end";
        });
        divContainerEl.appendChild(divSpinAnimationEl);
        divContainerEl.appendChild(divTimerEl);
        this.shadow.appendChild(style);
        this.shadow.appendChild(divContainerEl);
    }
});

},{}],"b2iia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter
);
var _game = require("./pages/game");
var _instructions = require("./pages/instructions");
var _ = require("./pages/welcome/");
var _win = require("./pages/result/win");
var _lose = require("./pages/result/lose");
const routes = [
    {
        path: /\/welcome/,
        handler: _.initWelcome
    },
    {
        path: /\/instructions/,
        handler: _instructions.initInstructions
    },
    {
        path: /\/game/,
        handler: _game.initGame
    },
    {
        path: /\/result\/win/,
        handler: _win.initResultWin
    },
    {
        path: /\/result\/lose/,
        handler: _lose.initResultLose
    }, 
];
function initRouter(container) {
    function goTo(path) {
        history.pushState({
        }, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        console.log("El handleRoute recibió una nueva ruta ", route);
        for (const r of routes){
            if (r.path.test(route)) {
                const el = r.handler({
                    goTo: goTo
                });
                if (container.firstChild) container.firstChild.remove();
                container.appendChild(el);
            } else if (route == "/") goTo("/welcome");
        }
    }
    handleRoute(location.pathname);
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}

},{"./pages/instructions":"iaM8p","./pages/welcome/":"bFh5y","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./pages/game":"d7f6n","./pages/result/win":"fFiSL","./pages/result/lose":"hR4eD"}],"iaM8p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initInstructions", ()=>initInstructions
);
function initInstructions(params) {
    const div = document.createElement("div");
    div.innerHTML = `\n        <div class="instructions__text-container">\n            <custom-text tag="p">Presioná jugar\n            y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</custom-text>\n        </div>\n        <div class="instructions__button-container">\n            <custom-button class="go-to-game">¡Jugar!</custom-button>\n        </div>\n        <div class="instructions__container-plays">\n            <div>\n                <my-play type="tijera"></myplay>\n            </div>\n            <div>\n                <my-play type="piedra"></myplay>\n            </div>\n            <div>\n                <my-play type="papel"></myplay>\n            </div>\n        </div>\n    `;
    const button = div.querySelector(".go-to-game");
    button.addEventListener("click", ()=>{
        params.goTo("/game");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bFh5y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWelcome", ()=>initWelcome
);
function initWelcome(params) {
    const div = document.createElement("div");
    div.innerHTML = `\n        <div class="welcome__title-container">\n            <custom-text tag="h1">Piedra, Papel ó Tijera</custom-text>\n        </div>\n        <div class="welcome__button-container">\n            <custom-button class="go-to-instructions">Empezar</custom-button>\n        </div>\n        <div class="welcome__plays-container">\n        <my-play class="welcome__play" type="piedra"></my-play>\n        <my-play class="welcome__play" type="papel"></my-play>\n        <my-play class="welcome__play" type="tijera"></my-play>\n        </div>\n    `;
    div.classList.add("welcome__main-div-container");
    const button = div.querySelector(".go-to-instructions");
    button.addEventListener("click", ()=>{
        params.goTo("/instructions");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"d7f6n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initGame", ()=>initGame
);
var _state = require("../../state");
function initGame(params) {
    const countDown = 3;
    const div = document.createElement("div");
    div.innerHTML = `\n        <div class="game__countdown-container">\n            <countdown-timer class="test">${countDown}</countdown-timer>\n        </div>\n        <div class="game__player-plays-container">\n        <my-play type="piedra"></my-play>\n        <my-play type="papel"></my-play>\n        <my-play type="tijera"></my-play>\n        </div>\n        `;
    // timesUp() modifica la div principal cuando termina el contador y el/la jugador/a no hizo ninguna jugada
    function showTimesUp() {
        div.innerHTML = `\n                <div game__times-up-container>\n                    <custom-text tag="h2">¡Se terminó el tiempo!</custom-text>\n                    <custom-button class="go-to-game">Intentar de nuevo</custom-button>\n                    <custom-button variant="exit" class="go-to-instructions">Salir a las instrucciones</custom-button>\n                </div>\n            `;
        const goToGameButton = div.querySelector(".go-to-game");
        const goToInstructionsButton = div.querySelector(".go-to-instructions");
        goToGameButton.addEventListener("click", ()=>{
            params.goTo("/game");
        });
        goToInstructionsButton.addEventListener("click", ()=>{
            params.goTo("/instructions");
        });
    }
    // showBothPlays muestra ambas jugadas en la pantalla y analiza si se empató, perdió, o ganó.
    // guarda las jugadas en el state y el resultado si es ganador o perdedor, si se empata, reinicia el juego.
    function showBothPlays(playerPlay) {
        _state.state.setGame(playerPlay);
        const currentState = _state.state.getState();
        const computerPlay = currentState.currentGame.computerPlay;
        const myPlay = currentState.currentGame.myPlay;
        const game = {
            myPlay: currentState.currentGame.myPlay,
            computerPlay: currentState.currentGame.computerPlay
        };
        console.log(_state.state.data.history);
        div.innerHTML = `\n        <div class="game__opponent-play-container">\n            <my-play type="${computerPlay}" opponent="true"></my-play>\n        </div>\n        <div class="game__player-play-container">\n            <my-play type="${myPlay}"></my-play>\n        </div>\n        `;
        const winner = _state.state.whoWins(myPlay, computerPlay);
        const intervalUntilResult = setInterval(()=>{
            if (winner == "empate") params.goTo("/game");
            else if (winner == "ganaste") {
                _state.state.setHistory(game);
                params.goTo("/result/win");
            } else if (winner == "perdiste") {
                _state.state.setHistory(game);
                params.goTo("/result/lose");
            }
            window.clearInterval(intervalUntilResult);
        }, 2000);
    }
    // Creo un style para indicarle visualmente el/la jugador/a cual es la jugada seleccionada
    const style = document.createElement("style");
    style.innerHTML = `\n        .selected{\n            position: relative;\n            top: -30px;\n        }\n    `;
    div.querySelector(".game__player-plays-container").appendChild(style);
    const playerPlaysArray = div.querySelector(".game__player-plays-container").children;
    // Agrego los event listeners a cada una de las jugadas de el/la jugador/a, y agrega la clase "selected"
    for (let p of playerPlaysArray)p.addEventListener("click", (e)=>{
        const thisPlayEl = e.target;
        if (thisPlayEl.classList.contains("selected")) thisPlayEl.classList.remove("selected");
        else {
            for (let i of playerPlaysArray)if (i.classList.contains("selected")) i.classList.remove("selected");
            thisPlayEl.classList.add("selected");
        }
    });
    // Agrego + 1 al contador porque quiero que termine en "0" la cuenta regresiva, sino termina en 1
    let intervalCounter = countDown + 1;
    let playerPlayEl = div.querySelector(".selected") || "none";
    /* 
        Crea una cuenta regresiva simultanea al componente countdown, y acciona cuando termina el contador
    dependiendo si el jugador seleccionó o no una jugada, lo redirige a la pagina correspondiente y modifica el
    estado si la hizo
    */ const countDownInterval = setInterval(()=>{
        intervalCounter--;
        playerPlayEl = div.querySelector(".selected") || "none";
        if (intervalCounter == 0 && playerPlayEl == "none") showTimesUp();
        else if (intervalCounter == 0) {
            showBothPlays(playerPlayEl.type);
            window.clearInterval(countDownInterval);
        }
    }, 1000);
    return div;
}

},{"../../state":"28XHA","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"28XHA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
const state = {
    data: {
        currentGame: {
            myPlay: "",
            computerPlay: ""
        },
        history: []
    },
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
    },
    //Guarda ambas jugadas en el state
    setGame (playerPlay) {
        // Guardo la jugada del jugador (parametro) en el state (myPlay)
        const lastState = this.getState();
        lastState.currentGame.myPlay = playerPlay;
        // Genera una jugada random de la pc y la guardar en el state (computerPlay)
        const randomResult = Math.floor(Math.random() * 3);
        const posibleMoves = [
            "tijera",
            "papel",
            "piedra"
        ];
        lastState.currentGame.computerPlay = posibleMoves[randomResult];
        this.setState(lastState);
    },
    // Declara la lógica para saber quién ganó, y lo devuelve
    whoWins (myPlay, computerPlay) {
        const winningOutcomes = [
            {
                myPlay: "tijera",
                computerPlay: "papel"
            },
            {
                myPlay: "piedra",
                computerPlay: "tijera"
            },
            {
                myPlay: "papel",
                computerPlay: "piedra"
            }, 
        ];
        let result = "perdiste";
        for (const o of winningOutcomes){
            if (o.myPlay == myPlay && o.computerPlay == computerPlay) result = "ganaste";
            else if (myPlay == computerPlay) result = "empate";
        }
        return result;
    },
    // Guarda el juego en el historial del state
    setHistory (game) {
        const lastState = this.getState();
        lastState.history.push(game);
        this.setState(lastState);
    },
    // Recorre el historial de jugadas y devuelve cuantas veces ganó la pc y el jugador
    returnScore () {
        const lastState = this.getState();
        const score = {
            player: 0,
            computer: 0
        };
        for (const i of lastState.history){
            if (state.whoWins(i.myPlay, i.computerPlay) == "ganaste") score.player++;
            else if (state.whoWins(i.myPlay, i.computerPlay) == "perdiste") score.computer++;
        }
        return score;
    },
    subscribe (callback) {
        this.listeners.push(callback);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"fFiSL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResultWin", ()=>initResultWin
);
var _state = require("../../../state");
function initResultWin(params) {
    const score = _state.state.returnScore();
    const div = document.createElement("div");
    div.innerHTML = `\n    <div class="result-win__result-img-container">\n        <result-img result="win">Ganaste</result-img>\n    </div>\n    <div class="result-win__score-container">\n        <custom-text tag="h2">Score</custom-text>\n        <custom-text tag="body">Vos:${score.player}</custom-text>\n        <custom-text tag="body">Máquina:${score.computer}</custom-text>\n    </div>\n    <custom-button class="go-to-game">Volver a Jugar</custom-button>\n    `;
    const playAgainButton = div.querySelector(".go-to-game");
    playAgainButton.addEventListener("click", ()=>{
        params.goTo("/game");
    });
    return div;
}

},{"../../../state":"28XHA","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"hR4eD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResultLose", ()=>initResultLose
);
var _state = require("../../../state");
function initResultLose(params) {
    const score = _state.state.returnScore();
    const div = document.createElement("div");
    div.innerHTML = `\n    <div class="result-lose__result-img-container">\n        <result-img result="lose">Perdiste</result-img>\n    </div>\n    <div class="result-lose__score-container">\n        <custom-text tag="h2">Score</custom-text>\n        <custom-text tag="body">Vos:${score.player}</custom-text>\n        <custom-text tag="body">Máquina:${score.computer}</custom-text>\n    </div>\n    <custom-button class="go-to-game">Volver a Jugar</custom-button>\n    `;
    const playAgainButton = div.querySelector(".go-to-game");
    playAgainButton.addEventListener("click", ()=>{
        params.goTo("/game");
    });
    return div;
}

},{"../../../state":"28XHA","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["eSrN1","4aleK"], "4aleK", "parcelRequire09ba")

//# sourceMappingURL=index.eb114a45.js.map

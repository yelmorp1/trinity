(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<app-header [options]=\"menuOpts\"></app-header>\r\n<app-content>\r\n  <router-outlet></router-outlet>\r\n</app-content>\r\n<trinity-footer></trinity-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/content/content.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/content/content.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n    <ng-content></ng-content>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer-bottom\">\n        <ul class=\"text-list container row\">\n            <li class=\"col-md-4\">\n                <ul class=\"text-padd\">\n                    <li class=\"tittle\">TRINITY INDUSTRY & COMMERCE S.A.C</li>\n                </ul>\n            </li>\n            <li class=\"col-md-3\">\n                <ul class=\"text-padd\">\n                    <li>\n                    </li>\n                </ul>\n            </li>\n            <li class=\"col-md-5\">\n                <!--\n                <ul class=\"text-right text-padd\">\n                    <li><h4>Contactanos</h4></li>\n                </ul>\n                <ul class=\"text-right text-padd\">\n                    <li><span>+51 959 704 935</span><i class=\"material-icons\"> phone</i></li>\n                    <li><span>trinityindustrycommerce@gmail.com</span><i class=\"material-icons\">email</i></li>\n                    <li><span>Urb Los Lirios MZ Q Lt 2</span><i class=\"material-icons\"> home_work</i></li>\n                    <li><span>San Marin de Porres, Lima, Perú</span><i class=\"material-icons\"> where_to_vote</i></li>\n                </ul>\n                -->\n                <ul class=\"text-right text-padd\">\n                    <li><h4>Contactanos</h4></li>\n                    <li><i class=\"material-icons\"> phone</i> <span>+51 959 704 935</span></li>\n                    <li><i class=\"material-icons\"> email</i> <span>trinityindustrycommerce@gmail.com</span></li>\n                    <li><i class=\"material-icons\"> home_work</i> <span>Urb Los Lirios MZ Q Lt 2</span></li>\n                    <li><i class=\"material-icons\"> where_to_vote</i> <span>San Marin de Porres, Lima, Perú</span></li>\n                </ul>\n            </li>\n        </ul>\n        <ul class=\"copy\">\n            <li class=\"text-copy container\">\n                <p>© 2019 Trinity.ic Todos los derechos reservados.</p>\n            </li>\n        </ul>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header id=\"head-nav\">\r\n  <a class=\"image-logo\">\r\n    <p>Trinity.ic</p>\r\n   <!--  <img class=\"img-logo\" src=\"./assets/images/dota2-logo.png\" alt=\"\"> -->\r\n  </a>\r\n\r\n  <div class=\"box-routes\">\r\n    <ul class=\"routes-links\">\r\n      <li class=\"links breadcrumb-item\" *ngFor=\"let option of options\"\r\n      [routerLink]=\"['/',option.url]\"\r\n      routerLinkActive=\"active\">\r\n        <p class=\"routes\">{{ option.title }}</p>\r\n      <!--  <i class=\"material-icons\">keyboard_arrow_down</i>-->\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n</header>\r\n<div class=\"pos-f-t\">\r\n  <nav class=\"navbar navbar-dark nav-color\">\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggleExternalContent\" aria-controls=\"navbarToggleExternalContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  </nav>\r\n  <div class=\"collapse\" id=\"navbarToggleExternalContent\">\r\n    <div class=\"nav-color p-4\">\r\n      <h5 class=\"text-white h4\">Trinity.ic</h5>\r\n      <ul class=\"routes-links\">\r\n        <li class=\"links text-white\" *ngFor=\"let option of options\"\r\n        [routerLink]=\"['/',option.url]\"\r\n        routerLinkActive=\"active\">\r\n          <p class=\"routes\">{{ option.title }}</p>\r\n        <!--  <i class=\"material-icons\">keyboard_arrow_down</i>-->\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"carouselExampleInterval\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\" data-interval=\"10000\">\n            <div class=\"container\">\n                <div class=\"box-info\">\n                    <h2>COSECHAS TRINITY</h2>\n                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt suscipit\n                        necessitatibus omnis quae.\n                        Voluptatem eaque quis tempore facere omnis sed minima vero eos provident laudantium</p>\n                    <strong>Negrita de prueba</strong>\n                </div>\n            </div>\n            <img src=\"..\\assets\\images\\places\\durazno.jpg\" class=\"d-block w-100\" alt=\"...\">\n        </div>\n        <div class=\"carousel-item\" data-interval=\"2000\">\n            <img src=\"..\\assets\\images\\places\\plantas.jpg\" class=\"d-block w-100\" alt=\"...\">\n        </div>\n        <div class=\"carousel-item\">\n            <img src=\"..\\assets\\images\\places\\alimer-melocoton.jpg\" class=\"d-block w-100\" alt=\"...\">\n        </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleInterval\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleInterval\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n    </a>\n</div>\n<div class=\"container\">\n    <div class=\"nosotros\">\n        <h3>¿Quienes Somos?</h3>\n        <p>Somos una propuesta diferente ofreciendo una nueva alternativa para el mercado pensando en los momentos\n            extraordinarios y la satisfaccion de nuestros clientes</p>\n        <div class=\"nosotros-images\">\n            <div>\n                <img src=\"..\\assets\\images\\places\\cosechando.jpg\" alt=\"\">\n            </div>\n            <div>\n                <img src=\"..\\assets\\images\\places\\caja.jpg\" alt=\"\">\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nosotros/nosotros.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nosotros/nosotros.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container col-md-8\">\n  <div class=\"row\">\n    <h2> ¿Quiénes Somos? </h2>\n    <p>TRINITY INDUSTRY & COMMERCE SAC, pertenecemos a un grupo familiar de productores peruanos de fruta fresca donde\n      el durazno Huayco Rojo es nuestro principal\n      cultivo y materia prima a la vez abarcamos la actividad de producción industrial o valor agregado obteniendo\n      productos de calidad y\n      accesible al mercado peeruano\n    </p>\n  </div>\n  <div class=\"box-all\">\n    <div class=\"box-content\">\n      <div class=\"col-md-6 content-image\">\n        <img class=\"img-content\" src=\"..\\assets\\images\\imagen-home\\mar.jpg\" alt=\"\">\n      </div>\n      <div class=\"col-md-6 content-text\">\n        <h3>Visión</h3>\n        <p>Lograr la integración del mercado abastecer.</p>\n      </div>\n    </div>\n    <div class=\"box-content\">\n      <div class=\"col-md-6 content-text\">\n        <h3>Mision</h3>\n        <p>Buscamos la transformación en el mercado produccion una nueva alternativa en frutas fresca y productos\n          con la presencia de nuestra nueva marca.</p>\n      </div>\n      <div class=\"col-md-6 content-image\">\n        <img class=\"img-content\" src=\"..\\assets\\images\\imagen-home\\mar.jpg\" alt=\"\">\n      </div>\n    </div>\n    <div class=\"box-content\">\n      <div class=\"col-md-6 content-image\">\n        <img class=\"img-content\" src=\"..\\assets\\images\\imagen-home\\mar.jpg\" alt=\"\">\n      </div>\n      <div class=\"col-md-6 content-text\">\n        <h3>Valores</h3>\n        <ul>\n          <li>COMPROMISO</li>\n          <li>CALIDAD</li>\n          <li>EFICIENCIA</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"boxes-information\">\n    <div class=\"boxes-style col-md-4\">\n      <div class=\"imagen-opa\"><img src=\"..\\assets\\images\\imagen-home\\melocoton.jpg\" alt=\"\"></div>\n      <div class=\"text-opa\">\n        <h3>MISION</h3>\n        <p>Buscamos la transformación en el mercado produccion una nueva alternativa en \n          frutas fresca y productos con la presencia de nuestra nueva marca.</p>\n      </div>\n    </div>\n    <div class=\"boxes-style col-md-4\">\n      <div class=\"imagen-opa\"><img src=\"..\\assets\\images\\imagen-home\\melocoton.jpg\" alt=\"\"></div>\n      <div class=\"text-opa\">\n        <h3>VISION</h3>\n        <p>Lograr la integración del mercado abastecer.</p>\n      </div>\n    </div>\n    <div class=\"boxes-style col-md-4\">\n      <div class=\"imagen-opa\"><img src=\"..\\assets\\images\\imagen-home\\melocoton.jpg\" alt=\"\"></div>\n      <div class=\"text-opa\">\n        <h3>VALORES</h3>\n        <p>COMPROMISO</p>\n        <p>EFICIENCIA</p>\n        <p>CALIDAD</p>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/producto-industrial/producto-industrial.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/producto-industrial/producto-industrial.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <mat-grid-list id=\"product-industrial\" cols=\"2\" rowHeight=\"2:1\">\n    <mat-grid-tile class=\"product-box\">\n      <h3>Nectar</h3>\n      <img class=\"product-img\" src=\"..\\assets\\images\\imagen-home\\melocoton.jpg\" alt=\"\">\n    </mat-grid-tile>\n    <mat-grid-tile class=\"product-box\">\n        <h3>Nectar</h3>\n        <img class=\"product-img\" src=\"..\\assets\\images\\imagen-home\\melocoton.jpg\" alt=\"\">\n      </mat-grid-tile>\n      <mat-grid-tile class=\"product-box\">\n          <h3>Nectar</h3>\n          <img class=\"product-img\" src=\"..\\assets\\images\\imagen-home\\melocoton.jpg\" alt=\"\">\n        </mat-grid-tile>\n        <mat-grid-tile class=\"product-box\">\n            <h3>Nectar</h3>\n            <img class=\"product-img\" src=\"..\\assets\\images\\imagen-home\\melocoton.jpg\" alt=\"\">\n          </mat-grid-tile>\n  </mat-grid-list>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/producto/producto.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/producto/producto.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"carouselExampleInterval\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\" data-interval=\"10000\">\n            <div class=\"container\">\n                <div class=\"box-info\">\n                    <h2>COSECHAS TRINITY</h2>\n                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt suscipit\n                        necessitatibus omnis quae.\n                        Voluptatem eaque quis tempore facere omnis sed minima vero eos provident laudantium</p>\n                    <strong>Negrita de prueba</strong>\n                </div>\n            </div>\n            <img src=\"..\\assets\\images\\places\\durazno.jpg\" class=\"d-block w-100\" alt=\"...\">\n        </div>\n        <div class=\"carousel-item\" data-interval=\"2000\">\n            <img src=\"..\\assets\\images\\places\\plantas.jpg\" class=\"d-block w-100\" alt=\"...\">\n        </div>\n        <div class=\"carousel-item\">\n            <img src=\"..\\assets\\images\\places\\alimer-melocoton.jpg\" class=\"d-block w-100\" alt=\"...\">\n        </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleInterval\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleInterval\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n    </a>\n</div>\n<div class=\"container\">\n  <p>Nuestro centro de producción y acopio se encuentra dentro una zona de influencia productiva\n      agricola a rededor 4'000,000 m2de cultivo de Huayco Rojo \n      Teniendo presente el adecuado manejo productivo, considerando las indicaciones\n      legales y sanitarias mediante el correcto uso del BPa</p>\n</div>\n<div class=\"product-description\">\n    <div class=\"container sub-box\">\n        <div class=\"product-text col-md-5\">\n            <h4>HUAYCO ROJO</h4>\n            <p>Nos encontramos entre las 6 principales regiones Productoras de melocotón Huayco Rojo, con una capacidad de cosecha de 300 Toneladas mensuales.\n            \"El fortalecimiento de las capacidades productivas, organizacionales y comerciales ha sido nuestro enfoque como productores de melocotón.\"\n            </p>\n        </div>\n        <div class=\"product-img col-md-5\">\n            <img src=\"..\\assets\\images\\places\\fruta-arbol.jpg\" alt=\"\">\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/inicio/inicio.component */ "./src/app/pages/inicio/inicio.component.ts");
/* harmony import */ var _pages_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/nosotros/nosotros.component */ "./src/app/pages/nosotros/nosotros.component.ts");
/* harmony import */ var _pages_producto_producto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/producto/producto.component */ "./src/app/pages/producto/producto.component.ts");
/* harmony import */ var _pages_producto_industrial_producto_industrial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/producto-industrial/producto-industrial.component */ "./src/app/pages/producto-industrial/producto-industrial.component.ts");







const routes = [
    { path: '',
        redirectTo: 'inicio',
        pathMatch: 'full' },
    {
        path: 'inicio',
        component: _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"]
    },
    {
        path: 'nosotros',
        component: _pages_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_4__["NosotrosComponent"]
    },
    {
        path: 'produccionAgricola',
        component: _pages_producto_producto_component__WEBPACK_IMPORTED_MODULE_5__["ProductoComponent"]
    },
    {
        path: 'produccionIndustrial',
        component: _pages_producto_industrial_producto_industrial_component__WEBPACK_IMPORTED_MODULE_6__["ProductoIndustrialComponent"]
    },
    { path: '**',
        redirectTo: 'inicio'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-icon {\n  padding: 0 14px; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHRyYWJham9zTU1cXHRyaW5pdHkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1pY29uIHtcclxuICAgIHBhZGRpbmc6IDAgMTRweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mock_db_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-db/menu */ "./src/app/mock-db/menu.ts");



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Trinity.ic';
        this.menuOpts = _mock_db_menu__WEBPACK_IMPORTED_MODULE_2__["menu"];
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material-angular */ "./src/app/material-angular.ts");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/content/content.component */ "./src/app/components/content/content.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/inicio/inicio.component */ "./src/app/pages/inicio/inicio.component.ts");
/* harmony import */ var _pages_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/nosotros/nosotros.component */ "./src/app/pages/nosotros/nosotros.component.ts");
/* harmony import */ var _pages_producto_producto_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/producto/producto.component */ "./src/app/pages/producto/producto.component.ts");
/* harmony import */ var _pages_producto_industrial_producto_industrial_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/producto-industrial/producto-industrial.component */ "./src/app/pages/producto-industrial/producto-industrial.component.ts");






//Animations

//Material







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _components_content_content_component__WEBPACK_IMPORTED_MODULE_8__["ContentComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_10__["InicioComponent"],
            _pages_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_11__["NosotrosComponent"],
            _pages_producto_producto_component__WEBPACK_IMPORTED_MODULE_12__["ProductoComponent"],
            _pages_producto_industrial_producto_industrial_component__WEBPACK_IMPORTED_MODULE_13__["ProductoIndustrialComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _material_angular__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/content/content.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/content/content.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/content/content.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/content/content.component.ts ***!
  \*********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContentComponent = class ContentComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/content/content.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content.component.scss */ "./src/app/components/content/content.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ContentComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer-bottom {\n  margin-top: 30px;\n  width: 100%;\n  bottom: 0;\n  background-color: #a1887f;\n  text-align: center; }\n  .footer-bottom .text-list {\n    padding: 40px 0px 30px;\n    justify-content: space-between;\n    display: flex; }\n  .footer-bottom .text-list li {\n      color: white;\n      font-weight: 400;\n      list-style: none; }\n  .footer-bottom .text-list .tittle {\n      font-size: 15px;\n      font-weight: 500; }\n  .footer-bottom .text-list .text-right {\n      text-align: left !important; }\n  .footer-bottom .text-list .text-right li {\n        align-items: center;\n        display: flex; }\n  .footer-bottom .text-list .text-right li i {\n          font-size: 18px;\n          margin-right: 8px; }\n  .footer-bottom .text-list .text-padd {\n      padding: 10px 30px; }\n  .footer-bottom .copy {\n    background-color: #8d6e63;\n    margin: 0px; }\n  .footer-bottom .copy .text-copy {\n      list-style: none; }\n  .footer-bottom .copy .text-copy p {\n        color: white;\n        font-size: 13px;\n        margin: 0px;\n        padding: 20px 0px; }\n  @media screen and (max-width: 870px) {\n  .copy {\n    padding: 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvRDpcXHRyYWJham9zTU1cXHRyaW5pdHkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBO0VBTHRCO0lBT1Esc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixhQUFhLEVBQUE7RUFUckI7TUFXWSxZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLGdCQUFnQixFQUFBO0VBYjVCO01BZ0JZLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTtFQWpCNUI7TUFvQlksMkJBQTJCLEVBQUE7RUFwQnZDO1FBc0JnQixtQkFBbUI7UUFDbkIsYUFBYSxFQUFBO0VBdkI3QjtVQXlCb0IsZUFBZTtVQUNmLGlCQUFpQixFQUFBO0VBMUJyQztNQStCWSxrQkFBa0IsRUFBQTtFQS9COUI7SUFtQ1EseUJBQXlCO0lBQ3pCLFdBQVcsRUFBQTtFQXBDbkI7TUFzQ1ksZ0JBQWdCLEVBQUE7RUF0QzVCO1FBd0NnQixZQUFZO1FBQ1osZUFBZTtRQUNmLFdBQVc7UUFDWCxpQkFBaUIsRUFBQTtFQU1qQztFQUNJO0lBQ0ksWUFBWSxFQUFBLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWJvdHRvbXtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMTg4N2Y7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAudGV4dC1saXN0e1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMHB4IDMwcHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdHRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1yaWdodHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtcGFkZHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb3B5e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZDZlNjM7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgLnRleHQtY29weXtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg3MHB4KXtcclxuICAgIC5jb3B5e1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'trinity-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#head-nav {\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  min-height: 60px;\n  background-color: #ffca28;\n  width: 100%;\n  justify-content: space-between; }\n  #head-nav p {\n    margin: 0px;\n    color: #807A6B;\n    font-weight: 500; }\n  #head-nav .image-logo {\n    border-radius: 1px;\n    padding: 15px; }\n  #head-nav .image-logo p {\n      font-size: 30px;\n      font-weight: 500;\n      margin: 0px; }\n  #head-nav .img-logo {\n    max-width: 150px; }\n  #head-nav .box-routes .routes-links {\n    margin: 0; }\n  #head-nav .box-routes .routes-links .links {\n      outline: none;\n      padding: 0px 16px;\n      display: inline-flex;\n      text-decoration: none; }\n  #head-nav .box-routes .routes-links .links .routes {\n        cursor: pointer;\n        padding: 0px;\n        color: #4f525f; }\n  .pos-f-t {\n  display: none; }\n  @media screen and (max-width: 870px) {\n  #head-nav {\n    display: none; }\n  .pos-f-t {\n    position: relative;\n    display: block; }\n    .pos-f-t .nav-color {\n      background-color: #ffca28; }\n      .pos-f-t .nav-color .routes-links {\n        padding: 0px; }\n        .pos-f-t .nav-color .routes-links .links {\n          outline: none;\n          font-weight: 500;\n          list-style: none;\n          font-size: 14px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRDpcXHRyYWJham9zTU1cXHRyaW5pdHkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsOEJBQThCLEVBQUE7RUFQaEM7SUFTSSxXQUFXO0lBQ1gsY0FBYTtJQUNiLGdCQUFnQixFQUFBO0VBWHBCO0lBY0ksa0JBQWtCO0lBQ2xCLGFBQWEsRUFBQTtFQWZqQjtNQWlCTSxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLFdBQVcsRUFBQTtFQW5CakI7SUFzQmEsZ0JBQWdCLEVBQUE7RUF0QjdCO0lBMEJNLFNBQVMsRUFBQTtFQTFCZjtNQTRCUSxhQUFhO01BQ2IsaUJBQWlCO01BQ3BCLG9CQUFvQjtNQUNwQixxQkFBcUIsRUFBQTtFQS9CMUI7UUFpQ1UsZUFBZTtRQUNuQixZQUFZO1FBQ1osY0FBYyxFQUFBO0VBTXBCO0VBQVMsYUFBYSxFQUFBO0VBRXRCO0VBQ0U7SUFBVSxhQUFhLEVBQUE7RUFDdkI7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYyxFQUFBO0lBRmhCO01BSUkseUJBQXlCLEVBQUE7TUFKN0I7UUFNTSxZQUFZLEVBQUE7UUFObEI7VUFRUSxhQUFhO1VBQ2IsZ0JBQWdCO1VBQ2hCLGdCQUFnQjtVQUNoQixlQUFlLEVBQUEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZC1uYXZ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNhMjg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGNvbG9yOiM4MDdBNkI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICAuaW1hZ2UtbG9nb3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwe1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuaW1nLWxvZ297IG1heC13aWR0aDogMTUwcHg7IH1cclxuICAgIFxyXG4gIC5ib3gtcm91dGVze1xyXG5cdFx0LnJvdXRlcy1saW5rc3tcclxuICAgICAgbWFyZ2luOiAwO1xyXG5cdFx0ICAubGlua3N7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTZweDtcclxuXHRcdFx0ICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuXHRcdFx0ICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdCAgLnJvdXRlc3tcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdFx0XHQgIHBhZGRpbmc6IDBweDtcclxuXHRcdFx0XHQgIGNvbG9yOiAjNGY1MjVmO1xyXG5cdFx0XHQgIH1cclxuXHRcdCAgfVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4ucG9zLWYtdHtkaXNwbGF5OiBub25lO31cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg3MHB4KXtcclxuICAjaGVhZC1uYXZ7ZGlzcGxheTogbm9uZTt9XHJcbiAgLnBvcy1mLXR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC5uYXYtY29sb3J7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNhMjg7XHJcbiAgICAgIC5yb3V0ZXMtbGlua3N7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIC5saW5rc3tcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    // @Input() tittle: string;
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], HeaderComponent.prototype, "options", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/material-angular.ts":
/*!*************************************!*\
  !*** ./src/app/material-angular.ts ***!
  \*************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");








let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"]],
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"]],
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/mock-db/menu.ts":
/*!*********************************!*\
  !*** ./src/app/mock-db/menu.ts ***!
  \*********************************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const menu = [
    {
        title: 'Inicio',
        url: 'inicio'
    },
    {
        title: 'Nuestra Empresa',
        url: 'nosotros'
    },
    {
        title: 'Producción Agricola',
        url: 'produccionAgricola'
    },
    {
        title: 'Producción Industrial',
        url: 'produccionIndustrial'
    }
];


/***/ }),

/***/ "./src/app/pages/inicio/inicio.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/inicio/inicio.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carousel-inner {\n  height: 500px;\n  margin-bottom: 40px; }\n  .carousel-inner .carousel-item .box-info {\n    width: 500px;\n    height: 300px;\n    background: white;\n    border-radius: 4px;\n    margin-top: 100px;\n    position: absolute;\n    padding: 35px;\n    opacity: 0.8; }\n  .nosotros {\n  background: #ededed;\n  padding: 30px 70px;\n  text-align: center; }\n  .nosotros h3 {\n    text-align: center;\n    margin: 15px 0px 30px; }\n  .nosotros .nosotros-images {\n    display: flex; }\n  .nosotros .nosotros-images div {\n      padding: 10px 20px;\n      width: 50%; }\n  .nosotros .nosotros-images div img {\n        width: 100%; }\n  @media screen and (max-width: 870px) {\n  .carousel-inner {\n    height: 400px; }\n  .nosotros {\n    padding: 20px; }\n    .nosotros .nosotros-images {\n      display: block; }\n      .nosotros .nosotros-images div {\n        width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5pY2lvL0Q6XFx0cmFiYWpvc01NXFx0cmluaXR5L3NyY1xcYXBwXFxwYWdlc1xcaW5pY2lvXFxpbmljaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7RUFGdkI7SUFLWSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWSxFQUFBO0VBTXhCO0VBQ0ksbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtFQUh0QjtJQUtRLGtCQUFrQjtJQUNsQixxQkFBcUIsRUFBQTtFQU43QjtJQVNRLGFBQWEsRUFBQTtFQVRyQjtNQVdZLGtCQUFrQjtNQUNsQixVQUFVLEVBQUE7RUFadEI7UUFhaUIsV0FBVyxFQUFBO0VBTTVCO0VBQ0k7SUFDSSxhQUFhLEVBQUE7RUFFakI7SUFDSSxhQUFhLEVBQUE7SUFEakI7TUFHUSxjQUFjLEVBQUE7TUFIdEI7UUFLWSxXQUFXLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luaWNpby9pbmljaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNhcm91c2VsLWlubmVye1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAuY2Fyb3VzZWwtaXRlbXtcclxuICAgICAgICAuYm94LWluZm97XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMzVweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubm9zb3Ryb3N7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xyXG4gICAgcGFkZGluZzogMzBweCA3MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaDN7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwcHggMzBweDtcclxuICAgIH1cclxuICAgIC5ub3NvdHJvcy1pbWFnZXN7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgaW1neyB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg3MHB4KXtcclxuICAgIC5jYXJvdXNlbC1pbm5lcntcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgfVxyXG4gICAgLm5vc290cm9ze1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgLm5vc290cm9zLWltYWdlc3tcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGRpdntcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/inicio/inicio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/inicio/inicio.component.ts ***!
  \**************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InicioComponent = class InicioComponent {
    constructor() { }
    ngOnInit() {
    }
};
InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'trinity-inicio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inicio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inicio.component.scss */ "./src/app/pages/inicio/inicio.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InicioComponent);



/***/ }),

/***/ "./src/app/pages/nosotros/nosotros.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/nosotros/nosotros.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding: 50px 0px; }\n  .container .box-all {\n    margin: 30px 0px;\n    background-color: #F9DB49; }\n  .container .box-all .box-content {\n      color: white;\n      display: flex; }\n  .container .box-all .box-content .content-text {\n        padding: 20px 50px; }\n  .container .box-all .box-content .content-image {\n        padding: 0px; }\n  .container .box-all .box-content .content-image .img-content {\n          width: 100%; }\n  .container .boxes-information {\n    display: flex; }\n  .container .boxes-information .boxes-style {\n      border-top: 4px solid #FFFF55;\n      border-radius: 4px;\n      padding: 20px 10px;\n      margin: 0px 6px; }\n  .container .boxes-information .boxes-style .imagen-opa {\n        width: 100%; }\n  .container .boxes-information .boxes-style .imagen-opa img {\n          width: 100%; }\n  .container .boxes-information .boxes-style .text-opa {\n        display: none; }\n  .container .boxes-information .boxes-style h3 {\n        color: #F5BD42; }\n  .container .boxes-information .boxes-style:hover {\n      position: relative;\n      opacity: 1;\n      color: black;\n      width: 100%; }\n  .container .boxes-information .boxes-style:hover .text-opa {\n        width: 100%;\n        text-align: center;\n        padding: 20px 15px;\n        display: block;\n        height: 100%;\n        opacity: 0.6;\n        background-color: black;\n        position: absolute;\n        left: 0;\n        top: 0; }\n  .container .boxes-information .boxes-style:hover .text-opa p {\n          color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm9zb3Ryb3MvRDpcXHRyYWJham9zTU1cXHRyaW5pdHkvc3JjXFxhcHBcXHBhZ2VzXFxub3NvdHJvc1xcbm9zb3Ryb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUIsRUFBQTtFQURyQjtJQUdRLGdCQUFnQjtJQUNoQix5QkFBeUIsRUFBQTtFQUpqQztNQU1ZLFlBQVk7TUFDWixhQUFhLEVBQUE7RUFQekI7UUFTZ0Isa0JBQWtCLEVBQUE7RUFUbEM7UUFZZ0IsWUFBWSxFQUFBO0VBWjVCO1VBYTZCLFdBQVcsRUFBQTtFQWJ4QztJQWtCUSxhQUFhLEVBQUE7RUFsQnJCO01Bb0JZLDZCQUE2QjtNQUM3QixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLGVBQWUsRUFBQTtFQXZCM0I7UUF5QmdCLFdBQVcsRUFBQTtFQXpCM0I7VUEwQnFCLFdBQVcsRUFBQTtFQTFCaEM7UUE0QnNCLGFBQWEsRUFBQTtFQTVCbkM7UUE2QmdCLGNBQWMsRUFBQTtFQTdCOUI7TUFnQ1ksa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixZQUFZO01BQ1osV0FBVyxFQUFBO0VBbkN2QjtRQXNDZ0IsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLFlBQVk7UUFDWixZQUFZO1FBQ1osdUJBQXVCO1FBQ3ZCLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsTUFBTSxFQUFBO0VBL0N0QjtVQWdEa0IsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm9zb3Ryb3Mvbm9zb3Ryb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogNTBweCAwcHg7XHJcbiAgICAuYm94LWFsbHtcclxuICAgICAgICBtYXJnaW46IDMwcHggMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOURCNDk7XHJcbiAgICAgICAgLmJveC1jb250ZW50e1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC5jb250ZW50LXRleHR7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRlbnQtaW1hZ2V7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAuaW1nLWNvbnRlbnR7d2lkdGg6IDEwMCU7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJveGVzLWluZm9ybWF0aW9ue1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLmJveGVzLXN0eWxle1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgI0ZGRkY1NTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDZweDtcclxuICAgICAgICAgICAgLmltYWdlbi1vcGF7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGltZ3sgd2lkdGg6IDEwMCU7IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGV4dC1vcGF7ZGlzcGxheTogbm9uZTt9XHJcbiAgICAgICAgICAgIGgzeyBjb2xvcjogI0Y1QkQ0Mjt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3hlcy1zdHlsZTpob3ZlcntcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAvL2NvbG9yOiByZ2JhKDI1MiwgMjMyLCA1MywgMC42MjMpO1xyXG4gICAgICAgICAgICAudGV4dC1vcGF7IFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIHB7Y29sb3I6IHdoaXRlO31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/nosotros/nosotros.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/nosotros/nosotros.component.ts ***!
  \******************************************************/
/*! exports provided: NosotrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NosotrosComponent", function() { return NosotrosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NosotrosComponent = class NosotrosComponent {
    constructor() { }
    ngOnInit() {
    }
};
NosotrosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'trinity-nosotros',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nosotros.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nosotros/nosotros.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nosotros.component.scss */ "./src/app/pages/nosotros/nosotros.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NosotrosComponent);



/***/ }),

/***/ "./src/app/pages/producto-industrial/producto-industrial.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/producto-industrial/producto-industrial.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#product-industrial .product-box {\n  text-align: center; }\n  #product-industrial .product-box .product-img {\n    width: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdG8taW5kdXN0cmlhbC9EOlxcdHJhYmFqb3NNTVxcdHJpbml0eS9zcmNcXGFwcFxccGFnZXNcXHByb2R1Y3RvLWluZHVzdHJpYWxcXHByb2R1Y3RvLWluZHVzdHJpYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFTyxrQkFBa0IsRUFBQTtFQUZ6QjtJQUdtQixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0by1pbmR1c3RyaWFsL3Byb2R1Y3RvLWluZHVzdHJpYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvZHVjdC1pbmR1c3RyaWFse1xyXG4gICAucHJvZHVjdC1ib3h7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIC5wcm9kdWN0LWltZ3t3aWR0aDogNTAlO30gXHJcbiAgIH0gXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/producto-industrial/producto-industrial.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/producto-industrial/producto-industrial.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProductoIndustrialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoIndustrialComponent", function() { return ProductoIndustrialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductoIndustrialComponent = class ProductoIndustrialComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductoIndustrialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'trinity-producto-industrial',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./producto-industrial.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/producto-industrial/producto-industrial.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./producto-industrial.component.scss */ "./src/app/pages/producto-industrial/producto-industrial.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductoIndustrialComponent);



/***/ }),

/***/ "./src/app/pages/producto/producto.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/producto/producto.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carousel-inner {\n  height: 500px;\n  margin-bottom: 40px; }\n  .carousel-inner .box-info {\n    width: 500px;\n    height: 300px;\n    background: white;\n    border-radius: 4px;\n    margin-top: 100px;\n    position: absolute;\n    padding: 35px;\n    opacity: 0.8; }\n  .product-description {\n  background-color: #fff8e1;\n  padding: 20px 90px;\n  display: flex; }\n  .product-description .sub-box {\n    justify-content: center;\n    display: flex; }\n  .product-description .sub-box .product-img img {\n      width: 100%;\n      border-radius: 5px; }\n  @media screen and (max-width: 870px) {\n  .product-description {\n    padding: 20px 10px; }\n    .product-description .sub-box {\n      display: block; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdG8vRDpcXHRyYWJham9zTU1cXHRyaW5pdHkvc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0b1xccHJvZHVjdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7RUFGdkI7SUFJUSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWSxFQUFBO0VBSXBCO0VBQ0kseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7RUFIakI7SUFLUSx1QkFBdUI7SUFDdkIsYUFBYSxFQUFBO0VBTnJCO01BU2dCLFdBQVc7TUFDWCxrQkFBa0IsRUFBQTtFQU1sQztFQUNJO0lBQ0ksa0JBQWtCLEVBQUE7SUFEdEI7TUFHUSxjQUFjLEVBQUEsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0by9wcm9kdWN0by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2Fyb3VzZWwtaW5uZXJ7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIC5ib3gtaW5mb3tcclxuICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG5cclxuICAgIH1cclxufVxyXG4ucHJvZHVjdC1kZXNjcmlwdGlvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY4ZTE7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDkwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLnN1Yi1ib3h7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAucHJvZHVjdC1pbWd7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODcwcHgpe1xyXG4gICAgLnByb2R1Y3QtZGVzY3JpcHRpb257XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgICAgIC5zdWItYm94e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/producto/producto.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/producto/producto.component.ts ***!
  \******************************************************/
/*! exports provided: ProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoComponent", function() { return ProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductoComponent = class ProductoComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'trinity-producto',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./producto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/producto/producto.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./producto.component.scss */ "./src/app/pages/producto/producto.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductoComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\trabajosMM\trinity\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
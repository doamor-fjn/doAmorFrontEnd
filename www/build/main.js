webpackJsonp([6],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home-i/home-i.module": [
		274,
		5
	],
	"../pages/intro/intro.module": [
		275,
		4
	],
	"../pages/login/login.module": [
		279,
		3
	],
	"../pages/profile-i/profile-i.module": [
		276,
		2
	],
	"../pages/register-d/register-d.module": [
		277,
		1
	],
	"../pages/register-i/register-i.module": [
		278,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeIPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HomeIPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeIPage = /** @class */ (function () {
    function HomeIPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomeIPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeIPage');
    };
    HomeIPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-i',template:/*ion-inline-start:"C:\Users\Usuario\Documents\BRANDON\workspaces\ionic\doAmorTemplate\src\pages\home-i\home-i.html"*/'<!--\n  Generated template for the HomeIPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>homeI</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Documents\BRANDON\workspaces\ionic\doAmorTemplate\src\pages\home-i\home-i.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HomeIPage);
    return HomeIPage;
}());

//# sourceMappingURL=home-i.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
            {
                title: "Welcome to the Docs!",
                description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
                image: "../assets/imgs/background-login.png",
            },
            {
                title: "What is Ionic?",
                description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "../assets/imgs/background-login.png",
            },
        ];
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"C:\Users\Usuario\Documents\BRANDON\workspaces\ionic\doAmorTemplate\src\pages\intro\intro.html"*/'<!--\n  Generated template for the IntroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="tutorial-page">\n\n  <ion-slides pager>\n\n    <ion-slide class="slide1">\n      <ion-grid >\n        <ion-row>\n          <ion-col col-1></ion-col>\n          <ion-col col-10>\n            <img src="../../assets/imgs/logo2-branco.png"/>\n          </ion-col>\n          <ion-col col-1></ion-col>\n          <!--<ion-col col-1></ion-col>-->\n          <ion-col col-12>\n            <p style="color: #fff">O doAmor foi pensado para você fazer o bem com apenas alguns cliques.</p>\n          </ion-col>\n          <!--<ion-col col-1></ion-col>-->\n        </ion-row>\n      </ion-grid>\n        <ion-footer>\n        <ion-buttons end>\n          <button ion-button clear color="light">Pular</button>\n        </ion-buttons>\n      </ion-footer>\n    </ion-slide>\n  \n    <ion-slide class="slide2">\n      <ion-grid >\n        <ion-row>\n          <ion-col col-1></ion-col>\n          <ion-col col-10>\n            <img src="../../assets/imgs/logo2-branco.png"/>\n          </ion-col>\n          <ion-col col-1></ion-col>\n          <ion-col col-12>\n            <p style="color: #fff">Você transforma uma ou mais vidas com um recurso disponível na palma da sua mão e de fácil acesso. Explore-nos.</p>\n          </ion-col>\n          <ion-col col-12>\n            <button ion-button large clear icon-end color="light">Entrar <ion-icon color="light" name="arrow-forward"></ion-icon></button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n  \n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Usuario\Documents\BRANDON\workspaces\ionic\doAmorTemplate\src\pages\intro\intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileIPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfileIPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfileIPage = /** @class */ (function () {
    function ProfileIPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfileIPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfileIPage');
    };
    ProfileIPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile-i',template:/*ion-inline-start:"C:\Users\Usuario\Documents\BRANDON\workspaces\ionic\doAmorTemplate\src\pages\profile-i\profile-i.html"*/'<!--\n  Generated template for the ProfileIPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Ediar perfil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid style="padding-top: 5em; padding-bottom: 2.5em;">\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col col-10>\n        <ion-item class="input-perfil">\n          <ion-input type="text" placeholder="Razão Social"></ion-input>\n\n        </ion-item>\n      </ion-col>\n      <ion-col col-1></ion-col>\n\n      <ion-col col-1></ion-col>\n      <ion-col col-10>\n        <ion-item class="input-perfil">\n          <ion-input type="text" placeholder="Descrição"></ion-input>\n\n        </ion-item>\n      </ion-col>\n      <ion-col col-1></ion-col>\n\n      <ion-col col-1></ion-col>\n      <ion-col col-10>\n        <ion-item class="input-perfil">\n          <ion-input type="text" placeholder="CNPJ"></ion-input>\n\n        </ion-item>\n      </ion-col>\n      <ion-col col-1></ion-col>\n\n      <ion-col col-1></ion-col>\n      <ion-col col-10>\n        <ion-item class="input-perfil">\n          <ion-input type="text" placeholder="Email"></ion-input>\n\n        </ion-item>\n      </ion-col>\n      <ion-col col-1></ion-col>\n\n      <ion-col col-1></ion-col>\n      <ion-col col-10>\n        <ion-item class="input-perfil">\n          <ion-input type="text" placeholder="Telefone"></ion-input>\n\n        </ion-item>\n      </ion-col>\n      <ion-col col-1></ion-col>\n\n      <ion-col col-1></ion-col>\n      <ion-col col-10>\n        <ion-item class="input-perfil">\n          <ion-input type="text" placeholder="Imagem"></ion-input>\n\n        </ion-item>\n      </ion-col>\n      <ion-col col-1></ion-col>\n\n      <ion-col col-1></ion-col>\n      <ion-col col-10>\n        <ion-item class="input-perfil">\n          <ion-input type="text" placeholder="Localização Geográfica - Mapa"></ion-input>\n\n        </ion-item>\n      </ion-col>\n      <ion-col col-1></ion-col>\n\n      <ion-col col-1></ion-col>\n      <ion-col col-5>\n        <button ion-button color="light" round full class="btn btn-sign-in">Cancelar</button>\n      </ion-col>\n      <ion-col col-5>\n        <button ion-button round full class="btn btn-gradient-secundary">Salvar</button>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Usuario\Documents\BRANDON\workspaces\ionic\doAmorTemplate\src\pages\profile-i\profile-i.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProfileIPage);
    return ProfileIPage;
}());

//# sourceMappingURL=profile-i.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterDPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegisterDPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterDPage = /** @class */ (function () {
    function RegisterDPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterDPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterDPage');
    };
    RegisterDPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register-d',template:/*ion-inline-start:"C:\Users\Usuario\Documents\BRANDON\workspaces\ionic\doAmorTemplate\src\pages\register-d\register-d.html"*/'<!--\n  Generated template for the RegisterDPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="bgLoginRegister" padding>\n    <ion-grid style="padding-top: 5em; padding-bottom: 2.5em;">\n      <ion-row>\n\n        <ion-col col-1></ion-col>\n        <ion-col col-10 style="padding-bottom: 2.5em;">\n          <img src="../../assets/imgs/logo2-branco.png"/>\n        </ion-col>\n        <ion-col col-1></ion-col>\n\n        <ion-col col-12 text-center>\n          <h4 style="color: #fff;" >Cadastro de Doador</h4>\n        </ion-col>\n\n        <ion-col col-1></ion-col>\n        <ion-col col-10 >\n          <ion-item class="input-login">\n            <ion-input type="text"  placeholder="nome"></ion-input>\n            <ion-icon name="ios-person" class="icon-login" item-left></ion-icon>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1></ion-col>\n\n        <ion-col col-1></ion-col>\n        <ion-col col-10 >\n          <ion-item class="input-login">\n            <ion-input type="email"  placeholder="email"></ion-input>\n            <ion-icon name="ios-mail" class="icon-login" item-left></ion-icon>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1></ion-col>\n\n        <ion-col col-1></ion-col>\n        <ion-col col-10>\n          <ion-item class="input-login">\n            <ion-input type="password"  placeholder="senha" ></ion-input>\n            <ion-icon name="ios-key" item-left class="icon-login"></ion-icon>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1></ion-col>\n\n        <ion-col col-1></ion-col>\n        <ion-col col-10>\n          <ion-item class="input-login">\n            <ion-input type="password"  placeholder="confirmar senha" ></ion-input>\n            <ion-icon name="ios-key" item-left class="icon-login"></ion-icon>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1></ion-col>\n\n        <ion-col col-1></ion-col>\n        <ion-col col-10>\n          <button ion-button class="btn btn-gradient-primary"  full round>Cadastrar</button>\n        </ion-col>\n        <ion-col col-1></ion-col>\n\n        <ion-col col-1></ion-col>\n        <ion-col col-10>\n          <button ion-button color="light" round full class="btn btn-sign-in" full round>Voltar</button>\n        </ion-col>\n        <ion-col col-1></ion-col>\n\n\n\n        \n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Documents\BRANDON\workspaces\ionic\doAmorTemplate\src\pages\register-d\register-d.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RegisterDPage);
    return RegisterDPage;
}());

//# sourceMappingURL=register-d.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterIPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegisterIPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterIPage = /** @class */ (function () {
    function RegisterIPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterIPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterIPage');
    };
    RegisterIPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register-i',template:/*ion-inline-start:"C:\Users\Usuario\Documents\BRANDON\workspaces\ionic\doAmorTemplate\src\pages\register-i\register-i.html"*/'<!--\n  Generated template for the RegisterIPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="bgLoginRegister" padding>\n    <ion-grid style="padding-top: 5em; padding-bottom: 2.5em;">\n      <ion-row>\n\n        <ion-col col-1></ion-col>\n        <ion-col col-10 style="padding-bottom: 2.5em;">\n          <img src="../../assets/imgs/logo2-branco.png"/>\n        </ion-col>\n        <ion-col col-1></ion-col>\n\n        <ion-col col-12 text-center>\n          <h4 style="color: #fff;" >Cadastro de Instituição</h4>\n        </ion-col>\n\n        <ion-col col-1></ion-col>\n        <ion-col col-10 >\n          <ion-item class="input-login">\n            <ion-input type="text"  placeholder="razão social"></ion-input>\n            <ion-icon name="ios-contacts" class="icon-login" item-left></ion-icon>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1></ion-col>\n\n        <ion-col col-1></ion-col>\n        <ion-col col-10 >\n          <ion-item class="input-login">\n            <ion-input type="text"  placeholder="cnpj"></ion-input>\n            <ion-icon name="ios-paper" class="icon-login" item-left></ion-icon>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1></ion-col>\n\n        <ion-col col-1></ion-col>\n        <ion-col col-10 >\n          <ion-item class="input-login">\n            <ion-input type="email"  placeholder="email"></ion-input>\n            <ion-icon name="ios-mail" class="icon-login" item-left></ion-icon>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1></ion-col>\n\n        <ion-col col-1></ion-col>\n        <ion-col col-10>\n          <ion-item class="input-login">\n            <ion-input type="password"  placeholder="senha" ></ion-input>\n            <ion-icon name="ios-key" item-left class="icon-login"></ion-icon>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1></ion-col>\n\n        <ion-col col-1></ion-col>\n        <ion-col col-10>\n          <ion-item class="input-login">\n            <ion-input type="password"  placeholder="confirmar senha" ></ion-input>\n            <ion-icon name="ios-key" item-left class="icon-login"></ion-icon>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1></ion-col>\n\n        <ion-col col-1></ion-col>\n        <ion-col col-10>\n          <button ion-button class="btn btn-gradient-primary"  full round>Cadastrar</button>\n        </ion-col>\n        <ion-col col-1></ion-col>\n\n        <ion-col col-1></ion-col>\n        <ion-col col-10>\n          <button ion-button color="light" round full class="btn btn-sign-in" full round>Voltar</button>\n        </ion-col>\n        <ion-col col-1></ion-col>\n\n\n\n        \n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Documents\BRANDON\workspaces\ionic\doAmorTemplate\src\pages\register-i\register-i.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RegisterIPage);
    return RegisterIPage;
}());

//# sourceMappingURL=register-i.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_d_register_d__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_i_register_i__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_i_home_i__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_i_profile_i__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_intro_intro__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_d_register_d__["a" /* RegisterDPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_i_register_i__["a" /* RegisterIPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_i_home_i__["a" /* HomeIPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_i_profile_i__["a" /* ProfileIPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_intro_intro__["a" /* IntroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home-i/home-i.module#HomeIPageModule', name: 'HomeIPage', segment: 'home-i', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-i/profile-i.module#ProfileIPageModule', name: 'ProfileIPage', segment: 'profile-i', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register-d/register-d.module#RegisterDPageModule', name: 'RegisterDPage', segment: 'register-d', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register-i/register-i.module#RegisterIPageModule', name: 'RegisterIPage', segment: 'register-i', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_d_register_d__["a" /* RegisterDPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_i_register_i__["a" /* RegisterIPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_i_home_i__["a" /* HomeIPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_i_profile_i__["a" /* ProfileIPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_intro_intro__["a" /* IntroPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_profile_i_profile_i__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
//import { LoginPage } from '../pages/login/login';
//import { RegisterDPage } from '../pages/register-d/register-d';
//import { RegisterIPage } from '../pages/register-i/register-i';
//import { HomeIPage } from '../pages/home-i/home-i';

//import { IntroPage } from '../pages/intro/intro';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_profile_i_profile_i__["a" /* ProfileIPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Usuario\Documents\BRANDON\workspaces\ionic\doAmorTemplate\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Usuario\Documents\BRANDON\workspaces\ionic\doAmorTemplate\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Usuario\Documents\BRANDON\workspaces\ionic\doAmorTemplate\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n \n  <button ion-button (click)="goLogin()">Go to contact</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Documents\BRANDON\workspaces\ionic\doAmorTemplate\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Usuario\Documents\BRANDON\workspaces\ionic\doAmorTemplate\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="bgLoginRegister" padding>\n    <ion-grid style="padding-top: 5em; padding-bottom: 2.5em;">\n      <ion-row>\n\n        <ion-col col-1></ion-col>\n        <ion-col col-10 style="padding-top: 5em; padding-bottom: 2.5em;">\n          <img src="../../assets/imgs/logo2-branco.png"/>\n        </ion-col>\n        <ion-col col-1></ion-col>\n\n        <ion-col col-1></ion-col>\n        <ion-col col-10 >\n          <ion-item class="input-login">\n            <ion-input type="text"  placeholder="email"></ion-input>\n            <ion-icon name="ios-mail" class="icon-login" item-left></ion-icon>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1></ion-col>\n\n        <ion-col col-1></ion-col>\n        <ion-col col-10>\n          <ion-item class="input-login">\n            <ion-input type="text"  placeholder="senha" ></ion-input>\n            <ion-icon name="ios-key" item-left class="icon-login"></ion-icon>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1></ion-col>\n\n        <ion-col col-1></ion-col>\n        <ion-col col-10>\n          <button ion-button class="btn btn-gradient-primary"  full round>Entrar</button>\n        </ion-col>\n        <ion-col col-1></ion-col>\n\n        <ion-col col-12 text-center>\n          <p style="color: #fff;" >Não tem uma conta? Crie aqui</p>\n        </ion-col>\n\n\n        <ion-col col-1></ion-col>\n        <ion-col col-5>\n          <button ion-button color="light" round full class="btn btn-sign-in">Doador</button>\n        </ion-col>\n        <ion-col col-5>\n          <button ion-button color="light" round full class="btn btn-sign-in">Instituição</button>\n        </ion-col>\n        <ion-col col-1></ion-col>\n\n        <ion-col col-12 text-center  >\n          <a style="color: #fff;" href="">Esqueceu a senha? Clique aqui.</a>\n        </ion-col>\n        \n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Documents\BRANDON\workspaces\ionic\doAmorTemplate\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map
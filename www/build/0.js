webpackJsonp([0],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoAlunoPageModule", function() { return NovoAlunoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__novo_aluno__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NovoAlunoPageModule = /** @class */ (function () {
    function NovoAlunoPageModule() {
    }
    NovoAlunoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__novo_aluno__["a" /* NovoAlunoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__novo_aluno__["a" /* NovoAlunoPage */]),
            ],
        })
    ], NovoAlunoPageModule);
    return NovoAlunoPageModule;
}());

//# sourceMappingURL=novo-aluno.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovoAlunoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
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
 * Generated class for the NovoAlunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NovoAlunoPage = /** @class */ (function () {
    function NovoAlunoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NovoAlunoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NovoAlunoPage');
    };
    NovoAlunoPage.prototype.salvar = function () {
        this.navCtrl.push("DashboardPage");
    };
    NovoAlunoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-novo-aluno',template:/*ion-inline-start:"C:\Users\Natan\Documents\GitHub\AppAluno-Front\src\pages\novo-aluno\novo-aluno.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title></ion-title>\n\n\n\n    <ion-buttons end>\n\n      <img (click)="inicio()" src="../../assets/imgs/logo-student35x35.png" />\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding >\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Login</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Senha</ion-label>\n\n      <ion-input type="password"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label fixed>Nome</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label fixed>RA</ion-label>\n\n      <ion-input type="number"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label fixed>Curso</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label fixed>Sexo</ion-label>\n\n      <ion-select>\n\n        <ion-option value="m">Masculino</ion-option>\n\n        <ion-option value="f">Feminino</ion-option>\n\n        <ion-option value="n">Não Informado</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button color="secondary" (click)="salvar()" full type="submit">Salvar</button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Natan\Documents\GitHub\AppAluno-Front\src\pages\novo-aluno\novo-aluno.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], NovoAlunoPage);
    return NovoAlunoPage;
}());

//# sourceMappingURL=novo-aluno.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
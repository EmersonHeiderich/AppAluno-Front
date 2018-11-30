webpackJsonp([1],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
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


var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.inicio = function () {
        this.navCtrl.push("DashboardPage");
    };
    DashboardPage.prototype.novoAluno = function () {
        this.navCtrl.push("NovoAlunoPage");
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\Natan\Documents\GitHub\AppAluno-Front\src\pages\dashboard\dashboard.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title></ion-title>\n\n\n\n    <ion-buttons end>\n\n      <img (click)="inicio()" src="../../assets/imgs/logo-student35x35.png" />\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="width: 100%">\n\n  <ion-list-header>\n\n    Horários\n\n  </ion-list-header>\n\n  <ion-grid>\n\n    <ion-row style="width: 100%; border-top-left-radius: 5px; border-top-right-radius: 5px; box-shadow: 1px 1px 1px 1px blue; color: black; font-weight: bold;">\n\n      <ion-col col-2>Seg</ion-col>\n\n      <ion-col col-2>Ter</ion-col>\n\n      <ion-col col-2>Qua</ion-col>\n\n      <ion-col col-2>Qui</ion-col>\n\n      <ion-col col-2>Sex</ion-col>\n\n      <ion-col col-2>Sab</ion-col>\n\n    </ion-row>\n\n    <ion-row style="border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; box-shadow: 1px 1px 1px 1px blue;">\n\n      <ion-col col-2 style="font-size: 10px">\n\n        Lab 8 <br />\n\n        Thiago\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-list-header>\n\n    Trabalhos\n\n  </ion-list-header>\n\n\n\n  <ion-row style="width: 100%; border-radius: 3px; box-shadow: 1px 1px 1px 1px orangered;">\n\n    <ion-row style="padding-top: 5px">\n\n      <h6 style="text-align: center;border-bottom: 1px solid orangered; border-radius: 6px">\n\n        Trabalho Semestral - Roberto Padilha\n\n      </h6>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        descricaodotrabalhod escricaodotrabalhodescricaodo trabalhodescricaodotrabalho descricaodotrabalhodescricao\n\n        dotrabalhodescricaodotrabalho descricaodotrabalho\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4>\n\n        <button ion-button icon-start clear small>\n\n          <ion-icon name="text"></ion-icon>\n\n          <div></div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <p>\n\n          Nota: 0/1.5\n\n        </p>\n\n      </ion-col>\n\n      <ion-col col-4 style="text-align: center">\n\n        <button ion-button icon-start clear small>\n\n          <ion-icon name="thumbs-up" color="secondary"></ion-icon>\n\n          <div style="color: #32db64">Enviado!</div>\n\n        </button>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-row>\n\n  <br />\n\n  <ion-row style="width: 100%; border-radius: 3px; box-shadow: 1px 1px 1px 1px orangered;">\n\n    <ion-row style="padding-top: 5px">\n\n      <h6 style="text-align: center;border-bottom: 1px solid orangered; border-radius: 6px">\n\n        UML - Thiago Casagrande\n\n      </h6>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        descricaodotrabalhod escricaodotrabalhodescricaodo trabalhodescricaodotrabalho descricaodotra \n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-2>\n\n        <button ion-button icon-start clear small>\n\n          <ion-icon name="text"></ion-icon>\n\n          <div></div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-5>\n\n          <p>\n\n            Nota: indefinida\n\n          </p>\n\n        </ion-col>\n\n      <ion-col col-5 style="text-align: center">\n\n        <button ion-button icon-start clear small>\n\n          <ion-icon name="thumbs-up" color="danger"></ion-icon>\n\n          <div style="color: red">Não Enviado!</div>\n\n        </button>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-row>\n\n\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button (click)="novoAluno()" full type="submit">Novo Aluno</button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Natan\Documents\GitHub\AppAluno-Front\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ })

});
//# sourceMappingURL=1.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\" [ngStyle]=\"{ 'background-image': 'url(' + backgroundImage + ')' }\">\n  <div class=\"child\"\n    *ngIf=\"displayMode === states.Awards\">\n\n    <app-awards\n      [awards]=\"awards\">\n    </app-awards>\n  </div>\n\n  <div class=\"child\"\n    *ngIf=\"displayMode === states.Points\">\n\n    <app-points\n      [points]=\"teams\">\n    </app-points>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent {\n  overflow: hidden;\n  width: 100vw;\n  height: 100vh;\n  background-size: cover;\n  background-position: center center; }\n\n.child {\n  height: 100%;\n  background-color: rgba(255, 192, 203, 0.5); }\n\n::ng-deep .child-component-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%; }\n\n::ng-deep .child-component-wrapper > h2 {\n    margin-top: -20px;\n    font-size: 80px;\n    line-height: 80px;\n    font-family: cursive;\n    text-align: center;\n    text-shadow: 0 4px 0 rgba(255, 255, 255, 0.5);\n    color: darkorange;\n    -webkit-transform: scale(1.25, 1);\n            transform: scale(1.25, 1); }\n\n::ng-deep aside {\n  position: fixed;\n  bottom: 10px;\n  left: 10px;\n  font-style: italic;\n  font-weight: bold;\n  text-shadow: 0 0 6px white; }\n\n::ng-deep aside ul {\n    display: flex; }\n\n::ng-deep aside ul > li > dl {\n      display: flex; }\n\n::ng-deep aside ul > li > dl > dt:after {\n        content: ':';\n        margin-right: 0.25em; }\n\n::ng-deep aside ul > li > dl > dd:after {\n        content: ',';\n        margin-right: 0.5em; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.backgroundImage = _app_constants__WEBPACK_IMPORTED_MODULE_1__["BackgroundImage"];
        this.teams = _app_constants__WEBPACK_IMPORTED_MODULE_1__["Teams"];
        this.awards = _app_constants__WEBPACK_IMPORTED_MODULE_1__["Awards"];
        this.states = {
            Awards: 'awards',
            Points: 'points'
        };
        this.isControlInformationVisible = true;
        this.displayMode = this.states.Awards;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.awards = this.awards.sort(function () { return Math.random() - 0.5; });
    };
    AppComponent.prototype.hotkeys = function (event) {
        var right = 68;
        var left = 65;
        switch (event.keyCode) {
            case right:
                if (this.displayMode === this.states.Awards) {
                    this.displayMode = this.states.Points;
                }
                break;
            case left:
                if (this.displayMode === this.states.Points) {
                    this.displayMode = this.states.Awards;
                }
                break;
            default: break;
        }
    };
    AppComponent.prototype.beforeUnload = function (event) {
        event.returnValue = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "hotkeys", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "beforeUnload", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: IsControlInformationVisible, BackgroundImage, JingleRequired, Teams, Awards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsControlInformationVisible", function() { return IsControlInformationVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundImage", function() { return BackgroundImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JingleRequired", function() { return JingleRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Teams", function() { return Teams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Awards", function() { return Awards; });
var IsControlInformationVisible = true;
var BackgroundImage = 'https://loremflickr.com/1980/1260';
var JingleRequired = true;
var DefaultTeamPoint = 0;
var Teams = [
    { name: 'α', point: DefaultTeamPoint, color: '#' + ((1 << 24) * Math.random() | 0).toString(16) },
    { name: 'β', point: DefaultTeamPoint, color: '#' + ((1 << 24) * Math.random() | 0).toString(16) },
    { name: 'γ', point: DefaultTeamPoint, color: '#' + ((1 << 24) * Math.random() | 0).toString(16) },
    { name: 'δ', point: DefaultTeamPoint, color: '#' + ((1 << 24) * Math.random() | 0).toString(16) },
    { name: 'ε', point: DefaultTeamPoint, color: '#' + ((1 << 24) * Math.random() | 0).toString(16) },
    { name: 'ζ', point: DefaultTeamPoint, color: '#' + ((1 << 24) * Math.random() | 0).toString(16) }
];
var Awards = [
    {
        title: 'AAA',
        imageUrl: 'https://loremflickr.com/160/160?lock=1',
        isOpened: false
    },
    {
        title: 'BBB',
        imageUrl: 'https://loremflickr.com/160/160?lock=2',
        isOpened: false
    },
    {
        title: 'CCC',
        imageUrl: 'https://loremflickr.com/160/160?lock=3',
        isOpened: false
    },
    {
        title: 'DDD',
        imageUrl: 'https://loremflickr.com/160/160?lock=4',
        isOpened: false
    },
    {
        title: 'EEE',
        imageUrl: 'https://loremflickr.com/160/160?lock=5',
        isOpened: false
    },
    {
        title: 'FFF',
        imageUrl: 'https://loremflickr.com/160/160?lock=6',
        isOpened: false
    },
    {
        title: 'GGG',
        imageUrl: 'https://loremflickr.com/160/160?lock=7',
        isOpened: false
    },
    {
        title: 'HHH',
        imageUrl: 'https://loremflickr.com/160/160?lock=8',
        isOpened: false
    },
    {
        title: 'III',
        imageUrl: 'https://loremflickr.com/160/160?lock=9',
        isOpened: false
    },
    {
        title: 'JJJ',
        imageUrl: 'https://loremflickr.com/160/160?lock=10',
        isOpened: false
    },
    {
        title: 'KKK',
        imageUrl: 'https://loremflickr.com/160/160?lock=11',
        isOpened: false
    },
    {
        title: 'LLL',
        imageUrl: 'https://loremflickr.com/160/160?lock=12',
        isOpened: false
    },
    {
        title: 'MMM',
        imageUrl: 'https://loremflickr.com/160/160?lock=13',
        isOpened: false
    },
    {
        title: 'NNN',
        imageUrl: 'https://loremflickr.com/160/160?lock=14',
        isOpened: false
    },
    {
        title: 'OOO',
        imageUrl: 'https://loremflickr.com/160/160?lock=15',
        isOpened: false
    },
    {
        title: 'PPP',
        imageUrl: 'https://loremflickr.com/160/160?lock=16',
        isOpened: false
    },
    {
        title: 'QQQ',
        imageUrl: 'https://loremflickr.com/160/160?lock=17',
        isOpened: false
    },
    {
        title: 'RRR',
        imageUrl: 'https://loremflickr.com/160/160?lock=18',
        isOpened: false
    }
];


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _awards_awards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./awards/awards.component */ "./src/app/awards/awards.component.ts");
/* harmony import */ var _points_points_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./points/points.component */ "./src/app/points/points.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _awards_awards_component__WEBPACK_IMPORTED_MODULE_3__["AwardsComponent"],
                _points_points_component__WEBPACK_IMPORTED_MODULE_4__["PointsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/awards/awards.component.html":
/*!**********************************************!*\
  !*** ./src/app/awards/awards.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"child-component-wrapper\">\n  <h2>Awards</h2>\n\n  <ol>\n    <li *ngFor=\"let a of awards; let i = index;\">\n      <div\n        class=\"card-container\"\n        [ngClass]=\"{ 'opened' : a.isOpened, 'current' : currentPosition === i }\">\n\n        <span class=\"card\">\n          <span class=\"front\">\n            <i>{{i + 1}}</i>\n            <span [ngStyle]=\"{ 'background-image': 'url(' + a.imageUrl + ')' }\">\n            </span>\n          </span>\n\n          <span\n            class=\"back\"\n            [ngStyle]=\"{ 'background-image': 'url(' + a.imageUrl + ')' }\">\n\n            <p>{{a.title}}</p>\n          </span>\n        </span>\n      </div>\n    </li>\n  </ol>\n\n  <aside *ngIf=\"isControlInformationVisible\">\n    <ng-container *ngIf=\"!isKeyPressed\">\n      <p>Press any key to activate cursor; Move to 'Points' by press D.</p>\n    </ng-container>\n\n    <ng-container *ngIf=\"isKeyPressed\">\n      <ul>\n        <li>\n          <dl>\n            <dt>Right Key</dt>\n            <dd>Move cursor to right</dd>\n          </dl>\n        </li>\n        <li>\n          <dl>\n            <dt>Left Key</dt>\n            <dd>Move cursor to left</dd>\n          </dl>\n        </li>\n        <li>\n          <dl>\n            <dt>Enter Key</dt>\n            <dd>Toggle current panel</dd>\n          </dl>\n        </li>\n      </ul>\n    </ng-container>\n  </aside>\n</div>\n"

/***/ }),

/***/ "./src/app/awards/awards.component.scss":
/*!**********************************************!*\
  !*** ./src/app/awards/awards.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ol {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 960px;\n  margin-top: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  border-bottom: 5px solid #444444; }\n\n.card-container {\n  position: relative;\n  width: 160px;\n  height: 160px;\n  margin: 0 auto;\n  border: solid #444444;\n  border-width: 5px 0 0 5px;\n  text-align: center;\n  -webkit-perspective: 1000;\n          perspective: 1000;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  transition: border-width 150ms ease-out; }\n\nli:nth-child(6n) > .card-container {\n    border-right-width: 5px; }\n\n.card-container:after {\n    content: '';\n    position: absolute;\n    top: -5px;\n    right: -5px;\n    bottom: -5px;\n    left: -5px;\n    display: block;\n    border: 7px solid transparent;\n    transition: border-color 50ms ease-out; }\n\n.card-container.current {\n    z-index: 9999; }\n\n.card-container.current:after {\n      border-color: red; }\n\n.card-container span {\n    display: block; }\n\n.card {\n  overflow: hidden;\n  position: relative;\n  height: 100%;\n  transition: 750ms;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d; }\n\n.card .front,\n  .card .back {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    transition: 750ms;\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d; }\n\n.card .front {\n    z-index: 2;\n    background-color: white;\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg); }\n\n.card-container.opened .front {\n      -webkit-transform: rotateX(-180deg);\n              transform: rotateX(-180deg); }\n\n.card .front > i {\n      z-index: 9999;\n      position: absolute;\n      top: 0;\n      right: 0;\n      left: 0;\n      line-height: 160px;\n      font-family: serif;\n      font-size: 120px;\n      letter-spacing: -0.125em;\n      color: orange;\n      text-shadow: 0 4px 0 rgba(255, 255, 255, 0.75);\n      -webkit-transform: translate(-20px, -5px);\n              transform: translate(-20px, -5px); }\n\n.card .front > span {\n      display: block;\n      width: 100%;\n      height: 100%;\n      background-size: cover;\n      background-position: center center;\n      -webkit-filter: blur(17.5px) sepia(0.25);\n              filter: blur(17.5px) sepia(0.25); }\n\n.card .back {\n    background-size: cover;\n    background-position: center center;\n    -webkit-transform: rotateX(180deg);\n            transform: rotateX(180deg); }\n\n.card-container.opened .back {\n      -webkit-transform: rotateX(0deg);\n              transform: rotateX(0deg); }\n\n.card .back > dl,\n    .card .back > p {\n      position: absolute;\n      right: 0;\n      left: 0; }\n\n.card .back > dl {\n      top: 0;\n      display: flex;\n      background-color: lightyellow;\n      line-height: 1.25;\n      color: lightgreen; }\n\n.card .back > dl > dt,\n      .card .back > dl > dd {\n        padding: 4px; }\n\n.card .back > dl > dt {\n        padding-right: 2px; }\n\n.card .back > dl > dd {\n        padding-left: 2px;\n        word-break: break-all; }\n\n.card .back > p {\n      bottom: 0;\n      background-color: rgba(255, 165, 0, 0.85);\n      white-space: nowrap;\n      font-size: 22px;\n      font-weight: bold;\n      color: white;\n      text-shadow: 0 3px 0 orange; }\n"

/***/ }),

/***/ "./src/app/awards/awards.component.ts":
/*!********************************************!*\
  !*** ./src/app/awards/awards.component.ts ***!
  \********************************************/
/*! exports provided: AwardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardsComponent", function() { return AwardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AwardsComponent = /** @class */ (function () {
    function AwardsComponent() {
        this.audio = new Audio();
        this.isControlInformationVisible = _app_constants__WEBPACK_IMPORTED_MODULE_1__["IsControlInformationVisible"];
        this.isKeyPressed = false;
        this.currentPosition = null;
    }
    AwardsComponent.prototype.ngOnInit = function () {
        if (_app_constants__WEBPACK_IMPORTED_MODULE_1__["JingleRequired"]) {
            this.audio.src = './../../assets/jingles/toggle.mp3';
            this.audio.load();
        }
    };
    AwardsComponent.prototype.hotkeys = function (event) {
        var _this = this;
        this.isKeyPressed = true;
        if (this.currentPosition === null) {
            this.currentPosition = 0;
            return;
        }
        var right = 39;
        var left = 37;
        var enter = 13;
        switch (event.keyCode) {
            case right:
                if (this.currentPosition !== this.awards.length - 1) {
                    this.currentPosition++;
                }
                break;
            case left:
                if (this.currentPosition !== 0) {
                    this.currentPosition--;
                }
                break;
            case enter:
                if (_app_constants__WEBPACK_IMPORTED_MODULE_1__["JingleRequired"]) {
                    this.audio.play();
                }
                setTimeout(function () {
                    _this.awards[_this.currentPosition].isOpened = !_this.awards[_this.currentPosition].isOpened;
                }, _app_constants__WEBPACK_IMPORTED_MODULE_1__["JingleRequired"] ? 500 : 0);
                break;
            default: break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AwardsComponent.prototype, "awards", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AwardsComponent.prototype, "hotkeys", null);
    AwardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-awards',
            template: __webpack_require__(/*! ./awards.component.html */ "./src/app/awards/awards.component.html"),
            styles: [__webpack_require__(/*! ./awards.component.scss */ "./src/app/awards/awards.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AwardsComponent);
    return AwardsComponent;
}());



/***/ }),

/***/ "./src/app/points/points.component.html":
/*!**********************************************!*\
  !*** ./src/app/points/points.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"child-component-wrapper\">\n  <h2>points</h2>\n\n  <ol>\n    <li *ngFor=\"let p of points; let i = index;\">\n      <dl>\n        <dt [ngClass]=\"currentPosition === i ? 'current' : ''\">\n          Team<span>{{p.name}}</span>\n        </dt>\n        <dd [ngStyle]=\"{ width: p.point * 50 + 'px', 'background-color': p.color }\">\n          <span>{{p.point}}</span>\n        </dd>\n      </dl>\n    </li>\n  </ol>\n\n  <aside *ngIf=\"isControlInformationVisible\">\n    <ng-container *ngIf=\"!isKeyPressed\">\n      <p>Press any key to activate cursor; Move to 'Awards' by press A.</p>\n    </ng-container>\n\n    <ng-container *ngIf=\"isKeyPressed\">\n      <ul>\n        <li>\n          <dl>\n            <dt>Top Key</dt>\n            <dd>Move cursor to top</dd>\n          </dl>\n        </li>\n        <li>\n          <dl>\n            <dt>Bottom Key</dt>\n            <dd>Move cursor to bottom</dd>\n          </dl>\n        </li>\n        <li>\n          <dl>\n            <dt>Enter / Shift Key</dt>\n            <dd>Increase / Decrease point of current team</dd>\n          </dl>\n        </li>\n      </ul>\n    </ng-container>\n  </aside>\n</div>\n"

/***/ }),

/***/ "./src/app/points/points.component.scss":
/*!**********************************************!*\
  !*** ./src/app/points/points.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ol {\n  width: 1160px;\n  margin-top: 40px;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 10px;\n  background-color: rgba(255, 255, 255, 0.5); }\n  ol > li {\n    padding: 10px 20px;\n    font-family: monospace; }\n  ol > li + li {\n      border-top: 4px solid darkgray; }\n  ol > li > dl {\n      display: flex; }\n  ol > li > dl > dt {\n        display: flex;\n        font-size: 50px; }\n  ol > li > dl > dt.current {\n          color: red; }\n  ol > li > dl > dt > span {\n          margin-left: 10px; }\n  ol > li > dl > dd {\n        position: relative;\n        min-width: 10px;\n        height: 50px;\n        margin-top: 4px;\n        margin-left: 10px;\n        transition: width 300ms ease-out; }\n  ol > li > dl > dd > span {\n          position: absolute;\n          top: 50%;\n          left: 100%;\n          margin-left: 0.5em;\n          font-style: italic;\n          font-size: 40px;\n          -webkit-transform: translate(0, -50%);\n                  transform: translate(0, -50%); }\n"

/***/ }),

/***/ "./src/app/points/points.component.ts":
/*!********************************************!*\
  !*** ./src/app/points/points.component.ts ***!
  \********************************************/
/*! exports provided: PointsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointsComponent", function() { return PointsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PointsComponent = /** @class */ (function () {
    function PointsComponent() {
        this.isControlInformationVisible = _app_constants__WEBPACK_IMPORTED_MODULE_1__["IsControlInformationVisible"];
        this.isKeyPressed = false;
        this.currentPosition = null;
    }
    PointsComponent.prototype.ngOnInit = function () { };
    PointsComponent.prototype.hotkeys = function (event) {
        this.isKeyPressed = true;
        if (this.currentPosition === null) {
            this.currentPosition = 0;
            return;
        }
        var up = 38;
        var down = 40;
        var enter = 13;
        switch (event.keyCode) {
            case up:
                if (this.currentPosition !== 0) {
                    this.currentPosition--;
                }
                break;
            case down:
                if (this.currentPosition !== this.points.length - 1) {
                    this.currentPosition++;
                }
                break;
            case enter:
                if (event.shiftKey && this.points[this.currentPosition].point > 0) {
                    this.points[this.currentPosition].point--;
                }
                else if (!event.shiftKey) {
                    this.points[this.currentPosition].point++;
                }
                break;
            default: break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PointsComponent.prototype, "points", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], PointsComponent.prototype, "hotkeys", null);
    PointsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-points',
            template: __webpack_require__(/*! ./points.component.html */ "./src/app/points/points.component.html"),
            styles: [__webpack_require__(/*! ./points.component.scss */ "./src/app/points/points.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PointsComponent);
    return PointsComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Apple/tabe-and-mari-wedding-app/app-for-wedding-after-party/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
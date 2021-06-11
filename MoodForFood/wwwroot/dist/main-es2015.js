(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Atu":
/*!*****************************************************!*\
  !*** ./src/app/statistics/statistics.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-stepper-vertical {\r\n  margin-top: 8px;\r\n}\r\n\r\n.mat-form-field {\r\n  margin-top: 16px;\r\n}\r\n\r\n.example-container .mat-form-field + .mat-form-field {\r\n  margin-left: 8px;\r\n}\r\n\r\n.example-right-align {\r\n  text-align: right;\r\n}\r\n\r\ninput.example-right-align::-webkit-outer-spin-button,\r\ninput.example-right-align::-webkit-inner-spin-button {\r\n  display: none;\r\n}\r\n\r\ninput.example-right-align {\r\n  -moz-appearance: textfield;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InN0YXRpc3RpY3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtc3RlcHBlci12ZXJ0aWNhbCB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXJpZ2h0LWFsaWduIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\FinalExams\Net\MoodWithFood\MoodForFood\MoodForFood\ClientApp\src\main.ts */"zUnb");


/***/ }),

/***/ "1XXE":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box-shadow {\r\n  box-shadow: .25rem 0 .25rem .15rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscURBQXFEO0FBQ3ZEIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IC4yNXJlbSAwIC4yNXJlbSAuMTVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "4QAB":
/*!****************************************************!*\
  !*** ./src/app/statistics/statistics.component.ts ***!
  \****************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _raw_loader_statistics_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./statistics.component.html */ "vIa7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _statistics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statistics.service */ "HcYF");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let StatisticsComponent = class StatisticsComponent {
    constructor(statisticsService) {
        this.statisticsService = statisticsService;
        this.statisticsService.loadStatistics().subscribe(result => {
            this.statistics = result;
        }, error => console.error(error));
    }
};
StatisticsComponent.ctorParameters = () => [
    { type: _statistics_service__WEBPACK_IMPORTED_MODULE_2__["StatisticsService"] }
];
StatisticsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-statistics.component',
        template: _raw_loader_statistics_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    }),
    __metadata("design:paramtypes", [_statistics_service__WEBPACK_IMPORTED_MODULE_2__["StatisticsService"]])
], StatisticsComponent);



/***/ }),

/***/ "4WDi":
/*!********************************************************!*\
  !*** ./src/app/personal-mood/personal-mood.service.ts ***!
  \********************************************************/
/*! exports provided: PersonalMoodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalMoodService", function() { return PersonalMoodService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let PersonalMoodService = class PersonalMoodService {
    constructor(http1, http2, baseUrl) {
        this.http1 = http1;
        this.http2 = http2;
        this.baseUrl = baseUrl;
    }
    loadPersonalMood() {
        return this.http1.get(this.baseUrl + 'api/personalmoods');
    }
    loadPersonalMoodByID(id) {
        return this.http1.get(this.baseUrl + 'api/personalmoods/' + id);
    }
    saveAddPersonalMood(personalMood) {
        return this.http1.post(this.baseUrl + 'api/personalmoods', personalMood);
    }
    saveEditedPersonalMood(id, personalMood) {
        return this.http1.put(this.baseUrl + 'api/personalmoods/' + id, personalMood);
    }
    deletePersonalMood(personalMood) {
        var ans = confirm("Do you want to delete your personal moods: " + personalMood.moodName);
        if (ans) {
            return this.http1.delete(this.baseUrl + 'api/personalmoods/' + personalMood.id);
        }
    }
    loadMood() {
        return this.http2.get(this.baseUrl + 'api/moods');
    }
};
PersonalMoodService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['BASE_URL',] }] }
];
PersonalMoodService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], String])
], PersonalMoodService);



/***/ }),

/***/ "6wX0":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/personal-mood/personal-mood-read.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"my-container-card\" style=\"padding-bottom:17px\">\r\n  <mat-card class=\"example-card\" style=\"width:100%\">\r\n\r\n    <h1 style=\"color: red; margin-left: 28%\">Read Mood</h1>\r\n\r\n    <div style=\"padding:7%\">\r\n\r\n      <mat-divider></mat-divider>\r\n      <mat-card-header style=\"margin-left:20%\">\r\n        <mat-card-title>Mood Name:</mat-card-title>\r\n        <mat-card-subtitle>{{ personalMood.moodName }}</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-divider></mat-divider>\r\n\r\n      <mat-card-header style=\"margin-left:20%\">\r\n        <mat-card-title>Date:</mat-card-title>\r\n        <mat-card-subtitle>{{ personalMood.currentDate }}</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-divider></mat-divider>\r\n\r\n      <mat-card-header style=\"margin-left:20%\">\r\n        <mat-card-title>Mood Reason:</mat-card-title>\r\n        <mat-card-subtitle>{{ personalMood.moodReason}}</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-divider></mat-divider>\r\n\r\n      <mat-card-content style=\"margin-left:25%; margin-top:10%; margin-bottom: -10px\">\r\n        <button mat-raised-button color=\"accent\" [routerLink]=\"['/personal-mood']\">Back to list</button>\r\n      </mat-card-content>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "8V3Q":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu-read.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"my-container-card\" style=\"padding-bottom:17px\">\r\n  <mat-card class=\"example-card\" style=\"width:100%\">\r\n\r\n    <h1 style=\"color: red; margin-left: 28%\">Read Menu</h1>\r\n\r\n    <div style=\"padding:7%\">\r\n\r\n      <mat-divider></mat-divider>\r\n      <mat-card-header style=\"margin-left:20%\">\r\n        <mat-card-title>Mood For Food:</mat-card-title>\r\n        <mat-card-subtitle>{{ food.foodForTheMood }}</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-divider></mat-divider>\r\n\r\n      <mat-card-header style=\"margin-left:20%\">\r\n        <mat-card-title>Morning:</mat-card-title>\r\n        <mat-card-subtitle>{{ food.morning }}</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-divider></mat-divider>\r\n\r\n      <mat-card-header style=\"margin-left:20%\">\r\n        <mat-card-title>Noon:</mat-card-title>\r\n        <mat-card-subtitle>{{ food.noon}}</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-divider></mat-divider>\r\n\r\n      <mat-card-header style=\"margin-left:20%\">\r\n        <mat-card-title>Evening:</mat-card-title>\r\n        <mat-card-subtitle>{{ food.evening}}</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-divider></mat-divider>\r\n\r\n      <mat-card-content style=\"margin-left:25%; margin-top:10%; margin-bottom: -10px\">\r\n        <button mat-raised-button color=\"accent\" [routerLink]=\"['/menu']\">Back to list</button>\r\n      </mat-card-content>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.service */ "QLoi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let HomeComponent = class HomeComponent {
    constructor(homeService) {
        this.homeService = homeService;
        this.listOfFoodID = [];
        this.personalMood = {};
        this.mood = {};
        this.food = {};
        this.viewTable = false;
        this.viewHoleHomePage = false;
        this.hasMapFoods = new Map();
        /*public listOfFoodID: string[];*/
        this.heroBanners = [
            { message: 'Choose you mood for today', pictureUrl: 'https://png.pngtree.com/thumb_back/fh260/20170803/pngtree-Food-Menu-Fare-Meal-background-photo-869492.jpg' },
            { message: 'Save you mood for today', pictureUrl: 'https://i.pinimg.com/originals/78/6e/22/786e226cd11511d3369aa3ffa9280594.png' },
            { message: 'Ready to cook ?', pictureUrl: 'https://png.pngtree.com/thumb_back/fh260/back_pic/03/53/33/45579720d58a73c.jpg' },
            { message: 'Learn about your moods', pictureUrl: 'https://t3.ftcdn.net/jpg/02/54/20/88/360_F_254208823_NXcV5RCcWJ1vgSuWjhPqIpPmqXIyBrDO.jpg' },
            { message: 'We will give you useful suggestions ', pictureUrl: 'https://t4.ftcdn.net/jpg/02/44/69/87/360_F_244698725_uWdUNY1oiaHthwcb1NK6IqtPuRNKHor2.jpg' },
        ];
        this.loads();
    }
    loads() {
        this.homeService.loadFood().subscribe(result => {
            this.foods = result;
        }, error => console.error(error));
        this.homeService.loadMood().subscribe(result => {
            this.moods = result;
        }, error => console.error(error));
        this.homeService.loadPersonalMood().subscribe(result => {
            this.personalMoods = result;
        }, error => console.error(error));
    }
    saveSelectedMoodID(selected) {
        this.selectedID = selected;
        this.viewTable = true;
        this.food.moodID = selected;
        this.foods.push(this.food);
        return this.selectedID;
    }
    generateRandomMenu() {
        this.listOfFoodID = [];
        let nullElements = 0;
        for (let i = 0; i < this.foods.length; i++) {
            if (this.foods[i].moodID == this.selectedID) {
                if (this.foods[i].id != null) {
                    this.listOfFoodID.push(this.foods[i].id);
                }
            }
        }
        for (let i = 0; i < this.listOfFoodID.length; i++) {
            if (this.listOfFoodID[i] != null) {
                this.hasMapFoods.set(i, this.listOfFoodID[i]);
            }
            else {
                nullElements = 0;
                nullElements++;
            }
        }
        let indexForMap = 0;
        if (this.hasMapFoods.size == 1) {
            indexForMap = 0;
        }
        else {
            indexForMap = Math.floor((Math.random() * (this.hasMapFoods.size - nullElements)));
        }
        this.randomFoodID = this.hasMapFoods.get(indexForMap);
        return this.randomFoodID;
    }
    completeCriteriaForRandomMenu(selected) {
        this.saveSelectedMoodID(selected);
        this.generateRandomMenu();
    }
    saveSelectedMoodName(selected) {
        this.selectedName = selected;
        this.personalMood.moodName = selected;
        this.personalMoods.push(this.personalMood);
        return this.selectedName;
    }
    viewHoleHomePageStatus() {
        this.viewHoleHomePage = true;
        return this.viewHoleHomePage;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"] }
];
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    }),
    __metadata("design:paramtypes", [_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]])
], HomeComponent);



/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "DF8N":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\nsection {\r\n  display: table;\r\n}\r\n\r\n.example-label {\r\n  display: table-cell;\r\n  font-size: 14px;\r\n  margin-left: 8px;\r\n  min-width: 120px;\r\n}\r\n\r\n.example-button-row .mat-button-base {\r\n  margin: 5px 5px 5px 0;\r\n}\r\n\r\n.example-flex-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.example-card {\r\n  max-width: 400px;\r\n}\r\n\r\n.example-header-image {\r\n  background-size: cover;\r\n}\r\n\r\n.example-button-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100px;\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.example-button-row {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  width: auto;\r\n}\r\n\r\n.example-full-width {\r\n  width: 75%;\r\n}\r\n\r\n.my-container-card {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekIiLCJmaWxlIjoibWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWxhYmVsIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIG1pbi13aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cgLm1hdC1idXR0b24tYmFzZSB7XHJcbiAgbWFyZ2luOiA1cHggNXB4IDVweCAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJ1dHRvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1idXR0b24tcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogNzUlO1xyXG59XHJcblxyXG4ubXktY29udGFpbmVyLWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "FgSU":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/personal-mood/personal-mood.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"example-button-row\">\r\n  <button mat-raised-button color=\"accent\" [routerLink]=\"['/personal-mood-add']\">Add extra mood for today</button>\r\n</div>\r\n\r\n<div style=\"padding-bottom:17px\">\r\n\r\n  <table mat-table [dataSource]=\"personalMoods\" class=\"mat-elevation-z8\">\r\n    <ng-container matColumnDef=\"moodName\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:25%\">Mood Name</th>\r\n      <td mat-cell *matCellDef=\"let personalMood\"> {{ personalMood.moodName }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"currentDate\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:25%\">Date</th>\r\n      <td mat-cell *matCellDef=\"let personalMood\"> {{ personalMood.currentDate }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"moodReason\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:35%\">Mood Reason</th>\r\n      <td mat-cell *matCellDef=\"let personalMood\"> {{ personalMood.moodReason }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"actions\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:15%\">Actions</th>\r\n      <td mat-cell *matCellDef=\"let personalMood\">\r\n        <section>\r\n          <div class=\"example-button-row\">\r\n            <button mat-icon-button color=\"accent\" aria-label=\"Example icon button with a home icon\" matTooltip=\"Edit\">\r\n              <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" [routerLink]=\"['/personal-mood-edit',personalMood.id]\" style=\"cursor:pointer\">edit</mat-icon>\r\n            </button>\r\n            <button mat-icon-button color=\"accent\" aria-label=\"Example icon button with a home icon\" matTooltip=\"Info\">\r\n              <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" [routerLink]=\"['/personal-mood-read',personalMood.id]\" style=\"cursor:pointer\">info</mat-icon>\r\n            </button>\r\n            <button mat-icon-button style=\"color:red\" aria-label=\"Example icon button with a home icon\" matTooltip=\"Delete\">\r\n              <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" (click)=\"deletePersonalMood(personalMood)\" style=\"cursor:pointer\">delete</mat-icon>\r\n            </button>\r\n          </div>\r\n        </section>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay \"></tr>\r\n    <tr mat-row *matRowDef=\"let myRowData; columns: columnsToDisplay ;\"></tr>\r\n  </table>\r\n\r\n\r\n</div>\r\n\r\n<!--<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"moods\">\r\n  <thead>\r\n    <tr>\r\n      <th>ID</th>\r\n      <th>PersonalMood</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let mood of moods\">\r\n      <td>{{ mood.id }}</td>\r\n      <td>{{ mood.personalMood }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>-->\r\n");

/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div *ngIf=\"viewHoleHomePage == false\">\r\n  <mat-card class=\"example-card\" style=\"margin: 7%; background-color:#69F0AE\">\r\n    <mat-card class=\"example-card\" style=\"margin: 3%; padding:7%\">\r\n      <div style=\"text-align:center; margin-bottom:5%\">\r\n        <div style=\"font-size: 2em\">Your opinion is really important for us !</div>\r\n        <div style=\"font-size: 1.5em\">Please take 2 minutes to complete a short form</div>\r\n      </div>\r\n      <div class=\"d-flex justify-content-around\">\r\n        <div class=\"example-button-row\">\r\n          <button mat-raised-button color=\"accent\"  (click)=\"viewHoleHomePageStatus()\" [routerLink]=\"['/statistics-add']\">Complete it now</button>\r\n        </div>\r\n        <div class=\"example-button-row\">\r\n          <button mat-raised-button style=\"background-color:red\" (click)=\"viewHoleHomePageStatus()\">Latter</button>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </mat-card>\r\n</div>\r\n\r\n<div *ngIf=\"viewHoleHomePage == true\">\r\n\r\n  <mat-card class=\"example-card\" >\r\n      <mdb-carousel class=\"carousel slide carousel-fade\" [animation]=\"'fade'\">\r\n        <mdb-carousel-item *ngFor=\"let heroBanner of heroBanners\">\r\n          <div class=\"view w-100\" style=\"max-height:400px\">\r\n            <img class=\"d-block w-100\" src=\"{{ heroBanner.pictureUrl }}\" style=\"opacity:80%\">\r\n            <div class=\"mask rgba-black-light waves-light\" mdbWavesEffect></div>\r\n          </div>\r\n          <div class=\"carousel-caption\" style=\"height:65%\">\r\n            <h1 class=\"h1-responsive\" style=\"\">Hey, dear !  How are you today?</h1>\r\n            <p>{{ heroBanner.message }}</p>\r\n          </div>\r\n        </mdb-carousel-item>\r\n      </mdb-carousel>\r\n  </mat-card>\r\n\r\n    <div class=\"content\" style=\"padding-bottom: 25px; padding-top:55px\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-lg-3\">\r\n            <mat-card class=\"example-card\" style=\"display:flex; justify-content:center\">\r\n              <mat-form-field appearance=\"fill\" color=\"accent\">\r\n                <mat-label>Select your mood</mat-label>\r\n                <mat-select disableRipple [(value)]=\"mood.id\">\r\n                  <mat-option *ngFor=\"let mood of moods\" [value]=\"mood.id\">{{ mood.personalMood }}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </mat-card>\r\n          </div>\r\n\r\n          <div class=\"col-lg-2\">\r\n            <div>\r\n              <div *ngFor=\"let mo of moods\">\r\n                <div *ngIf=\"mo.id == mood.id\">\r\n                  <button style=\"margin:5% 5%\" mat-raised-button color=\"accent\" (click)=\"completeCriteriaForRandomMenu(mood.id)\" matTooltip=\"what to eat?\" matTooltipPosition=\"above\">\r\n                    What to <span style=\"font-size:100%\" class=\"material-icons\">restaurant</span> ?\r\n                  </button>\r\n                  <button style=\"margin:5% 5%\" mat-raised-button color=\"accent\" (click)=\"saveSelectedMoodName(mo.personalMood)\">Save mood?</button>\r\n                  <div *ngIf=\"selectedName != null\" style=\"margin-left:20px\">\r\n                    <button mat-icon-button color=\"accent\" matTooltip=\"Yes, this mood\" matTooltipPosition=\"below\">\r\n                      <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" [routerLink]=\"['/personal-mood-add',  mo.personalMood]\" style=\"cursor:pointer\">thumb_up_alt</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button style=\"color:red\" matTooltip=\"Yes, but other mood\" matTooltipPosition=\"below\">\r\n                      <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" [routerLink]=\"['/personal-mood-add']\" style=\"cursor:pointer\">thumb_down_alt</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"col-lg-7\">\r\n            <mat-card class=\"example-card\" *ngIf=\"foods && viewTable == true\">\r\n              <div *ngFor=\"let fd of foods\">\r\n                <div *ngIf=\"fd.moodID == selectedID\">\r\n                  <div *ngIf=\"fd.id == randomFoodID\">\r\n                    <div *ngIf=\"fd.foodForTheMood != null && fd.morning != null && fd.noon != null && fd.evening != null\">\r\n                      <mat-card-header>\r\n                        <div mat-card-avatar class=\"example-header-image\"><mat-icon color=\"accent\"> fastfood</mat-icon></div>\r\n                        <mat-card-title>{{ fd.foodForTheMood }}</mat-card-title>\r\n                      </mat-card-header>\r\n\r\n                      <mat-card-content>\r\n                        <mat-list>\r\n                          <mat-divider></mat-divider>\r\n                          <mat-list-item><b style=\"color:#69F0AE; margin-right:5px\">Morning: </b> {{ fd.morning }}</mat-list-item>\r\n                          <mat-divider></mat-divider>\r\n                          <mat-list-item> <b style=\"color:#69F0AE; margin-right:5px\">Noon: </b> {{ fd.noon }}</mat-list-item>\r\n                          <mat-divider></mat-divider>\r\n                          <mat-list-item><b style=\"color:#69F0AE; margin-right:5px\">Evening: </b> {{ fd.evening }}</mat-list-item>\r\n                          <mat-divider></mat-divider>\r\n                        </mat-list>\r\n                      </mat-card-content>\r\n\r\n                      <mat-card-actions>\r\n                        <div class=\"example-button-row row\">\r\n                          <div class=\"col-lg-10\">\r\n                            <p style=\"font-size:85%; padding:10px; color:#69F0AE\">\r\n                              Would you like to create your own full menu for this mood?\r\n                              <a style=\"color:red; font-size:110%\" [routerLink]=\"['/home-add-menu', fd.moodID ]\">Click here</a> !\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n                      </mat-card-actions>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </mat-card>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "HTmu":
/*!**************************************!*\
  !*** ./src/app/mood/mood.service.ts ***!
  \**************************************/
/*! exports provided: MoodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoodService", function() { return MoodService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _personal_mood_personal_mood_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../personal-mood/personal-mood.service */ "4WDi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let MoodService = class MoodService {
    constructor(http, personalMoodService, baseUrl, router) {
        this.http = http;
        this.personalMoodService = personalMoodService;
        this.baseUrl = baseUrl;
        this.router = router;
    }
    loadMood() {
        return this.personalMoodService.loadMood();
    }
    loadQuote() {
        return this.http.get(this.baseUrl + 'api/quotes');
    }
};
MoodService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
    { type: _personal_mood_personal_mood_service__WEBPACK_IMPORTED_MODULE_3__["PersonalMoodService"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['BASE_URL',] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MoodService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _personal_mood_personal_mood_service__WEBPACK_IMPORTED_MODULE_3__["PersonalMoodService"], String, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MoodService);



/***/ }),

/***/ "HcYF":
/*!**************************************************!*\
  !*** ./src/app/statistics/statistics.service.ts ***!
  \**************************************************/
/*! exports provided: StatisticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsService", function() { return StatisticsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let StatisticsService = class StatisticsService {
    constructor(http, baseUrl, router) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.router = router;
    }
    loadStatistics() {
        return this.http.get(this.baseUrl + 'api/statistics');
    }
    saveAddStatistics(statistics) {
        return this.http.post(this.baseUrl + 'api/statistics', statistics);
    }
};
StatisticsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['BASE_URL',] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
StatisticsService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], String, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], StatisticsService);



/***/ }),

/***/ "HhuZ":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"navbar-light bg-white border-top box-shadow text-center text-lg-start\">\r\n\r\n  <!-- Grid container -->\r\n  <!--<div class=\"container p-4\">-->\r\n  <!-- Section: Images -->\r\n  <!--<section >\r\n      <div class=\"row\" >\r\n        <div class=\"col-lg-2 col-md-12 mb-4 mb-md-0\" *ngFor=\"let foodImage of foodImages\">\r\n          <div class=\"bg-image hover-overlay ripple shadow-1-strong rounded\" data-ripple-color=\"light\">\r\n            <img src=\"{{ foodImage.imageUrl }}\" class=\"w-75\" />\r\n            <a href=\"#!\">\r\n              <div class=\"mask\" style=\"background-color: rgba(251, 251, 251, 0.2);\">\r\n              </div>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </div>-->\r\n  <!-- Copyright -->\r\n\r\n  <div class=\"container pt-4\">\r\n    <section class=\"mb-4\">\r\n\r\n      <div *ngFor=\"let socialMedia of socialMedias\" class=\"btn\">\r\n        <button mat-icon-button color=\"accent\" matTooltip=\"{{ socialMedia.name }}\">\r\n          <i href=\"#\" class=\"{{ socialMedia.code }}\"></i>\r\n        </button>\r\n      </div>\r\n    </section>\r\n  </div>\r\n\r\n  <div class=\" text-center p-3\" style=\"background-color: rgb(221 211 211 / 0.17);\">\r\n    © 2021 Copyright:\r\n    <a class=\"text-dark\" href=\"#\">Made By FFA</a>\r\n  </div>\r\n</footer>\r\n");

/***/ }),

/***/ "MauR":
/*!********************************************************!*\
  !*** ./src/app/statistics/statistics-add.component.ts ***!
  \********************************************************/
/*! exports provided: StatisticsAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsAddComponent", function() { return StatisticsAddComponent; });
/* harmony import */ var _statistics_component_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statistics.component.css */ "+Atu");
/* harmony import */ var _raw_loader_statistics_add_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./statistics-add.component.html */ "pDwH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _statistics_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./statistics.service */ "HcYF");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let StatisticsAddComponent = class StatisticsAddComponent {
    constructor(_formBuilder, statisticsService, router) {
        this._formBuilder = _formBuilder;
        this.statisticsService = statisticsService;
        this.router = router;
        this.isLinear = true;
        this.hide = true;
        this.statistics = {};
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    saveStatistics() {
        this.statisticsService.saveAddStatistics(this.statistics).subscribe(result => {
            this.router.navigateByUrl("/");
        }, error => console.error(error));
    }
};
StatisticsAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _statistics_service__WEBPACK_IMPORTED_MODULE_5__["StatisticsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
StatisticsAddComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-statistics-add-component',
        template: _raw_loader_statistics_add_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_statistics_component_css__WEBPACK_IMPORTED_MODULE_0__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _statistics_service__WEBPACK_IMPORTED_MODULE_5__["StatisticsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], StatisticsAddComponent);



/***/ }),

/***/ "P/74":
/*!****************************************!*\
  !*** ./src/app/mood/mood.component.ts ***!
  \****************************************/
/*! exports provided: MoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoodComponent", function() { return MoodComponent; });
/* harmony import */ var _raw_loader_mood_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./mood.component.html */ "sqk0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mood_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mood.service */ "HTmu");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let MoodComponent = class MoodComponent {
    constructor(moodService) {
        this.moodService = moodService;
        this.mood = {};
        this.hasMapQuotes = new Map();
        this.viewQuote = false;
        this.moodService.loadMood().subscribe(result => {
            this.moods = result;
        }, error => console.error(error));
        this.moodService.loadQuote().subscribe(result => {
            this.quotes = result;
        }, error => console.error(error));
    }
    generateRandomQuote() {
        this.listOfQuotesID = this.quotes.map((quote) => quote.quoteID);
        for (let i = 0; i < this.listOfQuotesID.length; i++) {
            this.hasMapQuotes.set(i, this.listOfQuotesID[i]);
        }
        let indexForMap = Math.floor((Math.random() * this.listOfQuotesID.length));
        this.randomQuoteID = this.hasMapQuotes.get(indexForMap);
        this.viewQuote = true;
        return this.randomQuoteID;
    }
    saveSelectedMoodID(selected) {
        this.selectedMoodID = selected;
        return this.selectedMoodID;
    }
    showMoodDefinition(selected) {
        this.saveSelectedMoodID(selected);
        this.selectedMoodAtribute = "definition";
        console.log(this.selectedMoodID, this.selectedMoodAtribute);
        return this.selectedMoodAtribute;
    }
    showMoodCuriosity(selected) {
        this.saveSelectedMoodID(selected);
        this.selectedMoodAtribute = "curiosity";
        console.log(this.selectedMoodID, this.selectedMoodAtribute);
        return this.selectedMoodAtribute;
    }
};
MoodComponent.ctorParameters = () => [
    { type: _mood_service__WEBPACK_IMPORTED_MODULE_2__["MoodService"] }
];
MoodComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mood',
        template: _raw_loader_mood_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    }),
    __metadata("design:paramtypes", [_mood_service__WEBPACK_IMPORTED_MODULE_2__["MoodService"]])
], MoodComponent);



/***/ }),

/***/ "QLoi":
/*!**************************************!*\
  !*** ./src/app/home/home.service.ts ***!
  \**************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _personal_mood_personal_mood_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../personal-mood/personal-mood.service */ "4WDi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let HomeService = class HomeService {
    constructor(http, personalMoodService, baseUrl, router) {
        this.http = http;
        this.personalMoodService = personalMoodService;
        this.baseUrl = baseUrl;
        this.router = router;
    }
    loadFood() {
        return this.http.get(this.baseUrl + 'api/foods');
    }
    loadMood() {
        return this.personalMoodService.loadMood();
    }
    loadPersonalMood() {
        return this.personalMoodService.loadPersonalMood();
    }
    saveAddInPersonalMenu(food) {
        return this.http.post(this.baseUrl + 'api/foods', food);
    }
};
HomeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
    { type: _personal_mood_personal_mood_service__WEBPACK_IMPORTED_MODULE_3__["PersonalMoodService"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['BASE_URL',] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _personal_mood_personal_mood_service__WEBPACK_IMPORTED_MODULE_3__["PersonalMoodService"], String, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], HomeService);



/***/ }),

/***/ "Sqpg":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _raw_loader_nav_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./nav-menu.component.html */ "XXFw");
/* harmony import */ var _nav_menu_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-menu.component.css */ "a56m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-nav-menu',
        template: _raw_loader_nav_menu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_nav_menu_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], NavMenuComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    })
], AppComponent);



/***/ }),

/***/ "TGkX":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./menu.component.html */ "sxhZ");
/* harmony import */ var _menu_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.component.css */ "DF8N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mood_mood_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mood/mood.service */ "HTmu");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.service */ "dnud");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let MenuComponent = class MenuComponent {
    constructor(menuService, moodService) {
        this.menuService = menuService;
        this.moodService = moodService;
        this.columnsToDisplay = ['moodID', 'foodForTheMood', 'morning', 'noon', 'evening', 'action'];
        this.loadPersonalMood();
    }
    ngOnInit() {
    }
    loadPersonalMood() {
        this.menuService.loadFood().subscribe(result => {
            this.foods = result;
        }, error => console.error(error));
    }
    loadMood() {
        this.moodService.loadMood().subscribe(result => {
            this.moods = result;
        }, error => console.error(error));
    }
    deleteFood(food) {
        this.menuService.deleteFood(food).subscribe(result => {
            this.loadPersonalMood();
        }, error => console.error(error));
    }
};
MenuComponent.ctorParameters = () => [
    { type: _menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"] },
    { type: _mood_mood_service__WEBPACK_IMPORTED_MODULE_3__["MoodService"] }
];
MenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-menu',
        template: _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_menu_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"], _mood_mood_service__WEBPACK_IMPORTED_MODULE_3__["MoodService"]])
], MenuComponent);



/***/ }),

/***/ "U+pj":
/*!***********************************************************!*\
  !*** ./src/app/personal-mood/personal-mood.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\nsection {\r\n  display: table;\r\n}\r\n\r\n.example-label {\r\n  display: table-cell;\r\n  font-size: 14px;\r\n  margin-left: 8px;\r\n  min-width: 120px;\r\n}\r\n\r\n.example-button-row .mat-button-base {\r\n  margin: 5px 5px 5px 0;\r\n}\r\n\r\n.example-flex-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.example-card {\r\n  max-width: 400px;\r\n}\r\n\r\n.example-header-image {\r\n  background-size: cover;\r\n}\r\n\r\n.example-button-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100px;\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.example-button-row {\r\n  display: flex;\r\n /*justify-content: space-around;*/\r\n  width: auto;\r\n}\r\n\r\n.example-full-width {\r\n  width: 75%;\r\n}\r\n\r\n.my-container-card {\r\n    display:flex;\r\n    justify-content:center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsLW1vb2QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0NBQ2QsaUNBQWlDO0VBQ2hDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUIiLCJmaWxlIjoicGVyc29uYWwtbW9vZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWxhYmVsIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIG1pbi13aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cgLm1hdC1idXR0b24tYmFzZSB7XHJcbiAgbWFyZ2luOiA1cHggNXB4IDVweCAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJ1dHRvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1idXR0b24tcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gLypqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsqL1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogNzUlO1xyXG59XHJcblxyXG4ubXktY29udGFpbmVyLWNhcmQge1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n<!--  <div fxLayout=\"column\" fxFlexFill>\r\n-->    <app-nav-menu></app-nav-menu>\r\n    <div class=\"container\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <app-footer></app-footer>\r\n<!--  </div>\r\n--></body>\r\n\r\n");

/***/ }),

/***/ "WJ//":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-add-menu.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"my-container-card\">\r\n  <mat-card class=\"example-card\" style=\"margin-bottom:20px\">\r\n    <div style=\"padding:7%\">\r\n      <mat-card-header style=\"margin-left:15%\">\r\n        <mat-card-title style=\"color: red; margin-bottom: 20%\">Create your menu</mat-card-title>\r\n      </mat-card-header>\r\n\r\n      <mat-card-content style=\"margin-left:15%\">\r\n        <!--<mat-form-field appearance=\"fill\" >\r\n          <mat-label>Mood ID</mat-label>\r\n          <input matInput [(ngModel)]=\"food.moodID\" [readonly]=\"true\"/>\r\n        </mat-form-field>-->\r\n\r\n        <mat-form-field appearance=\"fill\" color=\"accent\">\r\n          <mat-label>What you need ?</mat-label>\r\n          <input matInput [(ngModel)]=\"food.foodForTheMood\" placeholder=\"ex. You need something...\"/>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"fill\" color=\"accent\">\r\n          <mat-label>Morning</mat-label>\r\n          <input matInput [(ngModel)]=\"food.morning\" />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"fill\" color=\"accent\">\r\n          <mat-label>Noon</mat-label>\r\n          <input matInput [(ngModel)]=\"food.noon\" />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"fill\" color=\"accent\">\r\n          <mat-label>Evening</mat-label>\r\n          <input matInput [(ngModel)]=\"food.evening\" />\r\n        </mat-form-field>\r\n\r\n        <div class=\"example-button-row\" style=\"margin-top:10%\">\r\n          <button mat-raised-button color=\"accent\" (click)=\"saveInPersonalMenu()\">Save menu</button>\r\n          <button mat-icon-button color=\"accent\" matTooltip=\"back home\">\r\n            <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" [routerLink]=\"['/']\" style=\"cursor:pointer\">home</mat-icon>\r\n          </button>\r\n          <button mat-icon-button color=\"accent\" matTooltip=\"see personal menu\">\r\n            <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" [routerLink]=\"['/menu']\" style=\"cursor:pointer\">menu_book</mat-icon>\r\n          </button>\r\n        </div>\r\n      </mat-card-content>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "XR8T":
/*!*********************************************!*\
  !*** ./src/app/menu/menu-read.component.ts ***!
  \*********************************************/
/*! exports provided: MenuReadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuReadComponent", function() { return MenuReadComponent; });
/* harmony import */ var _raw_loader_menu_read_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./menu-read.component.html */ "8V3Q");
/* harmony import */ var _menu_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.component.css */ "DF8N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.service */ "dnud");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let MenuReadComponent = class MenuReadComponent {
    constructor(menuService, router, activateRouter) {
        this.menuService = menuService;
        this.router = router;
        this.activateRouter = activateRouter;
        this.food = {};
    }
    ngOnInit() {
        this.activateRouter.params.subscribe(param => {
            this.id = param.id;
            this.loadFoodByID();
        });
    }
    loadFoodByID() {
        this.menuService.loadFoodByID(this.id).subscribe(result => {
            this.food = result;
        }, error => console.error(error));
    }
};
MenuReadComponent.ctorParameters = () => [
    { type: _menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
MenuReadComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-menu-read',
        template: _raw_loader_menu_read_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_menu_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], MenuReadComponent);



/***/ }),

/***/ "XXFw":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\"><img style=\"width:85px\" src=\"assets/logo.png\"></a>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n        (click)=\"toggle()\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div\r\n        class=\"navbar-collapse collapse d-sm-inline-flex justify-content-end\"\r\n        [ngClass]=\"{ show: isExpanded }\"\r\n      >\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li class=\"nav-item\"\r\n              [routerLinkActive]=\"['link-active']\"\r\n              [routerLinkActiveOptions]=\"{ exact: true }\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/mood']\">Mood</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/personal-mood']\">Personal Mood</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/menu']\">Menu</a>\r\n          </li>\r\n          <!--<li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n    <a class=\"nav-link text-dark\" [routerLink]=\"['/statistics']\">Statistics</a>\r\n  </li>-->\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "Sqpg");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./statistics/statistics.component */ "4QAB");
/* harmony import */ var _mood_mood_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mood/mood.component */ "P/74");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _personal_mood_personal_mood_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./personal-mood/personal-mood.component */ "sv2i");
/* harmony import */ var _personal_mood_personal_mood_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./personal-mood/personal-mood-add.component */ "mVEG");
/* harmony import */ var _personal_mood_personal_mood_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./personal-mood/personal-mood-edit.component */ "uzEs");
/* harmony import */ var _personal_mood_personal_mood_read_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./personal-mood/personal-mood-read.component */ "wjw+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _home_home_add_menu_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./home/home-add-menu.component */ "pPbC");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _statistics_statistics_add_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./statistics/statistics-add.component */ "MauR");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./menu/menu.component */ "TGkX");
/* harmony import */ var _menu_menu_read_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./menu/menu-read.component */ "XR8T");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_8__["StatisticsComponent"],
            _statistics_statistics_add_component__WEBPACK_IMPORTED_MODULE_29__["StatisticsAddComponent"],
            _mood_mood_component__WEBPACK_IMPORTED_MODULE_9__["MoodComponent"],
            _personal_mood_personal_mood_component__WEBPACK_IMPORTED_MODULE_11__["PersonalMoodComponent"],
            _personal_mood_personal_mood_add_component__WEBPACK_IMPORTED_MODULE_12__["PersonalMoodAddComponent"],
            _personal_mood_personal_mood_edit_component__WEBPACK_IMPORTED_MODULE_13__["PersonalMoodEditComponent"],
            _personal_mood_personal_mood_read_component__WEBPACK_IMPORTED_MODULE_14__["PersonalMoodReadComponent"],
            _home_home_add_menu_component__WEBPACK_IMPORTED_MODULE_27__["HomeAddMenuComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_28__["FooterComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_30__["MenuComponent"],
            _menu_menu_read_component__WEBPACK_IMPORTED_MODULE_31__["MenuReadComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__["MatDividerModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["CarouselModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["ButtonsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["CardsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], pathMatch: 'full' },
                { path: 'statistics', component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_8__["StatisticsComponent"] },
                { path: 'statistics-add', component: _statistics_statistics_add_component__WEBPACK_IMPORTED_MODULE_29__["StatisticsAddComponent"] },
                { path: 'mood', component: _mood_mood_component__WEBPACK_IMPORTED_MODULE_9__["MoodComponent"] },
                { path: 'personal-mood', component: _personal_mood_personal_mood_component__WEBPACK_IMPORTED_MODULE_11__["PersonalMoodComponent"] },
                { path: 'personal-mood-add', component: _personal_mood_personal_mood_add_component__WEBPACK_IMPORTED_MODULE_12__["PersonalMoodAddComponent"] },
                { path: 'personal-mood-edit/:id', component: _personal_mood_personal_mood_edit_component__WEBPACK_IMPORTED_MODULE_13__["PersonalMoodEditComponent"] },
                { path: 'personal-mood-read/:id', component: _personal_mood_personal_mood_read_component__WEBPACK_IMPORTED_MODULE_14__["PersonalMoodReadComponent"] },
                { path: 'home-add-menu/:id', component: _home_home_add_menu_component__WEBPACK_IMPORTED_MODULE_27__["HomeAddMenuComponent"] },
                { path: 'personal-mood-add/:id', component: _personal_mood_personal_mood_add_component__WEBPACK_IMPORTED_MODULE_12__["PersonalMoodAddComponent"] },
                { path: 'footer', component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_28__["FooterComponent"] },
                { path: 'menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_30__["MenuComponent"] },
                { path: 'menu-read/:id', component: _menu_menu_read_component__WEBPACK_IMPORTED_MODULE_31__["MenuReadComponent"] },
            ]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "ZOaX":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/personal-mood/personal-mood-edit.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"my-container-card\" style=\"padding-bottom:17px\">\r\n  <mat-card class=\"example-card\">\r\n    <div style=\"padding:7%\">\r\n      <mat-card-header style=\"margin-left:15%\">\r\n        <mat-card-title style=\"color: red; padding-bottom:20%\">Edit your mood</mat-card-title>\r\n      </mat-card-header>\r\n\r\n      <mat-card-content style=\"margin-left:15%\">\r\n        <mat-form-field appearance=\"fill\" color=\"accent\">\r\n          <mat-label>Select your mood</mat-label>\r\n          <mat-select disableRipple [(value)]=\"personalMood.moodName\">\r\n            <mat-option *ngFor=\"let mood of moods\" [value]=\"mood.personalMood\">{{ mood.personalMood }}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"fill\" color=\"accent\">\r\n          <mat-label>Mood Reason</mat-label>\r\n          <input matInput [(ngModel)]=\"personalMood.moodReason\" />\r\n        </mat-form-field>\r\n\r\n        <div class=\"example-button-row;\" style=\"margin-top:10%\">\r\n          <button mat-raised-button  style=\"margin-right:3%\" color=\"accent\" (click)=\"saveEditedPersonalMood()\">Edit your mood</button>\r\n          <button mat-raised-button  color=\"accent\" [routerLink]=\"['/personal-mood']\">Back to list</button>\r\n        </div>\r\n      </mat-card-content>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "a56m":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRCIsImZpbGUiOiJuYXYtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYS5uYXZiYXItYnJhbmQge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIGh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJveC1zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDAgLjI1cmVtIC43NXJlbSByZ2JhKDAsIDAsIDAsIC4wNSk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "dnud":
/*!**************************************!*\
  !*** ./src/app/menu/menu.service.ts ***!
  \**************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let MenuService = class MenuService {
    constructor(http, baseUrl, router) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.router = router;
    }
    loadFood() {
        return this.http.get(this.baseUrl + 'api/foods');
    }
    loadFoodByID(id) {
        return this.http.get(this.baseUrl + 'api/foods/' + id);
    }
    deleteFood(food) {
        var ans = confirm("Do you want to delete this menu?");
        if (ans) {
            return this.http.delete(this.baseUrl + 'api/foods/' + food.id);
        }
    }
};
MenuService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['BASE_URL',] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MenuService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], String, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MenuService);



/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "HhuZ");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.css */ "1XXE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let FooterComponent = class FooterComponent {
    constructor() {
        this.foodImages = [
            { name: 'curry', imageUrl: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/486cf7bf-5b42-4eb2-a683-5739d34456b8/Derivates/8f787124-9d92-4846-b054-a8ad20716766.jpg' },
            { name: 'lasagna', imageUrl: 'https://thumbor.unica.ro/unsafe/458x362/smart/filters:format(webp):contrast(8):quality(80)/https://retete.unica.ro/wp-content/uploads/2010/05/lasagna-cu-sos-de-roii-main.jpg' },
            { name: 'chocolate cake', imageUrl: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/vimdb/202685_0-803-5447-5447.jpg' },
            { name: 'baked asparagus', imageUrl: 'https://foolproofliving.com/wp-content/uploads/2020/10/Baked-Asparagus-Recipe-Image.jpg' },
            { name: 'linkedin', imageUrl: 'https://static.youmiam.com/images/recipe/1500x1000/sauce-pour-nachos-1715?placeholder=web_recipe&sig=89089c0a2eaac6ceef75d4e4e1e40fc30eabf803&v2' },
            { name: 'edamame food', imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/red-cabbage-with-carrot-edamame-beans-d11286a.jpg?quality=90&resize=556,505' }
        ];
        this.socialMedias = [
            { name: 'facebook', code: 'fa fa-facebook' },
            { name: 'instagram', code: 'fa fa-instagram' },
            { name: 'twitter', code: 'fa fa-twitter' },
            { name: 'linkedin', code: 'fa fa-linkedin' },
            { name: 'google', code: 'fa fa-google' },
            { name: 'youtube', code: 'fa fa-youtube' },
        ];
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
FooterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], FooterComponent);



/***/ }),

/***/ "gGbw":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/personal-mood/personal-mood-add.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"my-container-card\" style=\"padding-bottom:17px\">\r\n  <mat-card class=\"example-card\">\r\n    <div style=\"padding:7%\">\r\n      <mat-card-header style=\"margin-left:15%\">\r\n        <mat-card-title style=\"color: red; margin-bottom: 20%\">Select your mood</mat-card-title>\r\n      </mat-card-header>\r\n\r\n      <mat-card-content style=\"margin-left:15%\">\r\n        <mat-form-field appearance=\"fill\" color=\"accent\">\r\n          <mat-label>Select your mood</mat-label>\r\n          <div *ngIf=\"moodName != null\">\r\n            <input matInput readonly [(ngModel)]=\"personalMood.moodName\" />\r\n          </div>\r\n          <div *ngIf=\"moodName == null\">\r\n            <mat-select disableRipple [(value)]=\"personalMood.moodName\">\r\n              <mat-option *ngFor=\"let mood of moods\" [value]=\"mood.personalMood\">{{ mood.personalMood }}</mat-option>\r\n            </mat-select>\r\n          </div>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"fill\" color=\"accent\">\r\n          <mat-label>Mood Reason</mat-label>\r\n          <input matInput [(ngModel)]=\"personalMood.moodReason\" />\r\n        </mat-form-field>\r\n\r\n        <div class=\"example-button-row\" style=\"margin-top:10%\">\r\n          <button mat-raised-button color=\"accent\" (click)=\"savePersonalMood()\">Save your mood</button>\r\n          <button mat-raised-button color=\"accent\" [routerLink]=\"['/personal-mood']\">Back to list</button>\r\n        </div>\r\n      </mat-card-content>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "mVEG":
/*!**************************************************************!*\
  !*** ./src/app/personal-mood/personal-mood-add.component.ts ***!
  \**************************************************************/
/*! exports provided: PersonalMoodAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalMoodAddComponent", function() { return PersonalMoodAddComponent; });
/* harmony import */ var _personal_mood_component_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal-mood.component.css */ "U+pj");
/* harmony import */ var _raw_loader_personal_mood_add_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./personal-mood-add.component.html */ "gGbw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _personal_mood_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./personal-mood.service */ "4WDi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let PersonalMoodAddComponent = class PersonalMoodAddComponent {
    constructor(personalMoodService, router, activateRouter) {
        this.personalMoodService = personalMoodService;
        this.router = router;
        this.activateRouter = activateRouter;
        this.personalMood = {};
        this.personalMoodService.loadMood().subscribe(result => {
            this.moods = result;
        }, error => console.error(error));
    }
    ngOnInit() {
        this.activateRouter.params.subscribe(param => {
            this.moodName = param.id;
            this.personalMood.moodName = this.moodName;
        });
    }
    savePersonalMood() {
        this.personalMoodService.saveAddPersonalMood(this.personalMood).subscribe(result => {
            this.router.navigateByUrl("/personal-mood");
        }, error => console.error(error));
    }
};
PersonalMoodAddComponent.ctorParameters = () => [
    { type: _personal_mood_service__WEBPACK_IMPORTED_MODULE_4__["PersonalMoodService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
PersonalMoodAddComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-personal-mood-add',
        template: _raw_loader_personal_mood_add_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_personal_mood_component_css__WEBPACK_IMPORTED_MODULE_0__["default"]]
    }),
    __metadata("design:paramtypes", [_personal_mood_service__WEBPACK_IMPORTED_MODULE_4__["PersonalMoodService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], PersonalMoodAddComponent);



/***/ }),

/***/ "pDwH":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/statistics/statistics-add.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--class=\"d-flex justify-content-between\"-->\r\n\r\n\r\n<div style=\"margin-bottom:50px; margin-top:35px\">\r\n  <!--<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\r\n    {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\r\n  </button>-->\r\n  <div class=\"d-flex justify-content-center\">\r\n    <mat-vertical-stepper [linear]=\"isLinear\" #stepper style=\"padding:5%\">\r\n      <mat-step [stepControl]=\"firstFormGroup\">\r\n        <form [formGroup]=\"firstFormGroup\">\r\n          <ng-template matStepLabel>Fill out some information about you</ng-template>\r\n          <div>\r\n            <mat-form-field>\r\n              <mat-label>Your First Name</mat-label>\r\n              <input matInput [(ngModel)]=\"statistics.userFirstName\" placeholder=\"First name\" formControlName=\"firstCtrl\" required>\r\n            </mat-form-field>\r\n            <mat-form-field style=\"margin-left:10px\">\r\n              <mat-label>Your Last Name</mat-label>\r\n              <input matInput [(ngModel)]=\"statistics.userLastName\" placeholder=\"Last name\" formControlName=\"firstCtrl\" required>\r\n            </mat-form-field>\r\n            <mat-form-field style=\"margin-left:10px\">\r\n              <mat-form-field>\r\n                <mat-label>Your Age</mat-label>\r\n                <input matInput [type]=\"hide ? 'number' : 'number'\" [(ngModel)]=\"statistics.userAge\" formControlName=\"firstCtrl\" required>\r\n                <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                  <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                </button>\r\n              </mat-form-field>\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <button mat-raised-button matStepperNext color=\"accent\">Next</button>\r\n          </div>\r\n        </form>\r\n\r\n      </mat-step>\r\n      <mat-step [stepControl]=\"secondFormGroup\">\r\n        <form [formGroup]=\"secondFormGroup\">\r\n          <ng-template matStepLabel>Raiting section</ng-template>\r\n          <mat-form-field>\r\n            <mat-label>Rating</mat-label>\r\n            <mat-select disableRipple [(value)]=\"statistics.rating\" formControlName=\"secondCtrl\" required>\r\n              <mat-option [value]=\"1\">1</mat-option>\r\n              <mat-option [value]=\"2\">2</mat-option>\r\n              <mat-option [value]=\"3\">3</mat-option>\r\n              <mat-option [value]=\"4\">4</mat-option>\r\n              <mat-option [value]=\"5\">5</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div>\r\n            <button mat-raised-button matStepperPrevious color=\"accent\">Previous</button>\r\n            <button mat-raised-button matStepperNext color=\"accent\" style=\"margin-left:10px\">Next</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n\r\n      <mat-step [stepControl]=\"thirdFormGroup\">\r\n        <form [formGroup]=\"thirdFormGroup\">\r\n          <ng-template matStepLabel>Like & Dislike</ng-template>\r\n          <mat-form-field>\r\n            <mat-label>Like</mat-label>\r\n            <textarea matInput [(ngModel)]=\"statistics.whatLike\" formControlName=\"thirdCtrl\" placeholder=\"I liked ...\" required></textarea>\r\n          </mat-form-field>\r\n          <mat-form-field style=\"margin-left:10px\">\r\n            <mat-label>Dislike</mat-label>\r\n            <textarea matInput [(ngModel)]=\"statistics.whatDoNotLike\" formControlName=\"thirdCtrl\" placeholder=\"I didn't like ...\" required></textarea>\r\n          </mat-form-field>\r\n          <div>\r\n            <button mat-raised-button matStepperPrevious color=\"accent\">Previous</button>\r\n            <button mat-raised-button matStepperNext color=\"accent\" style=\"margin-left:10px\">Next</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n\r\n      <mat-step>\r\n        <ng-template matStepLabel>Done</ng-template>\r\n        <div>\r\n          <button mat-raised-button matStepperPrevious color=\"accent\">Previous</button>\r\n          <button mat-raised-button color=\"accent\" (click)=\"saveStatistics()\" style=\"margin-left:10px\">Save</button>\r\n          <button mat-raised-button color=\"accent\" (click)=\"stepper.reset()\" style=\"margin-left:10px\">Reset</button>\r\n        </div>\r\n      </mat-step>\r\n    </mat-vertical-stepper>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<!--\r\n\r\n<div class=\"my-container-card\" style=\"padding-bottom:17px\">\r\n  <mat-card class=\"example-card\">\r\n    <div style=\"padding:7%\">\r\n      <mat-card-header style=\"margin-left:15%\">\r\n        <mat-card-title style=\"color: red; margin-bottom: 20%\">Form for Statistics</mat-card-title>\r\n      </mat-card-header>\r\n\r\n      <mat-card-content style=\"margin-left:15%\">\r\n        <mat-form-field appearance=\"fill\" color=\"accent\">\r\n          <mat-label>Your First Name</mat-label>\r\n          <input matInput [(ngModel)]=\"statistics.userFirstName\" />\r\n        </mat-form-field>\r\n        <mat-form-field appearance=\"fill\" color=\"accent\">\r\n          <mat-label>Your First Last</mat-label>\r\n          <input matInput [(ngModel)]=\"statistics.userLastName\" />\r\n        </mat-form-field>\r\n        <mat-form-field appearance=\"fill\" color=\"accent\">\r\n          <mat-label>Rating</mat-label>\r\n          <input matInput [(ngModel)]=\"statistics.rating\" />\r\n        </mat-form-field>\r\n        <mat-form-field appearance=\"fill\" color=\"accent\">\r\n          <mat-label>What you loved the most ?</mat-label>\r\n          <input matInput [(ngModel)]=\"statistics.whatLike\" />\r\n        </mat-form-field>\r\n        <mat-form-field appearance=\"fill\" color=\"accent\">\r\n          <mat-label>What you liked the least ?</mat-label>\r\n          <input matInput [(ngModel)]=\"statistics.whatDoNotLike\" />\r\n        </mat-form-field>\r\n\r\n        <div class=\"example-button-row\" style=\"margin-top:10%\">\r\n          <button mat-raised-button color=\"accent\" (click)=\"saveStatistics()\">Save</button>\r\n          <button mat-raised-button color=\"accent\" [routerLink]=\"['/home']\">Cancel</button>\r\n        </div>\r\n      </mat-card-content>\r\n    </div>\r\n  </mat-card>\r\n</div>-->\r\n<!--<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n\r\n\r\n<mdb-card cascade=\"true\" wider=\"true\" reverse=\"true\" class=\"my-4\">-->\r\n<!--Card image-->\r\n<!--<div class=\"view view-cascade overlay waves-light\" mdbWavesEffect>\r\n  <mdb-card-img src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg\"></mdb-card-img>\r\n  <a>\r\n    <div class=\"mask rgba-white-slight\"></div>\r\n  </a>\r\n</div>-->\r\n<!--/Card image-->\r\n<!-- Card content -->\r\n<!--<mdb-card-body cascade=\"true\" class=\"text-center\">-->\r\n<!--Title-->\r\n<!--<mdb-card-title>\r\n  <h4>\r\n    <strong>My adventure</strong>\r\n  </h4>\r\n</mdb-card-title>\r\n\r\n<h5 class=\"indigo-text\">\r\n  <strong>Photography</strong>\r\n</h5>\r\n\r\n<mdb-card-text>\r\n  Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem\r\n  aperiam.\r\n</mdb-card-text>-->\r\n<!--Linkedin-->\r\n<!--<a class=\"px-2 icons-sm li-ic\">\r\n  <mdb-icon fab icon=\"linkedin-in\"> </mdb-icon>\r\n</a>-->\r\n<!--Twitter-->\r\n<!--<a class=\"px-2 icons-sm tw-ic\">\r\n  <mdb-icon fab icon=\"twitter\"> </mdb-icon>\r\n</a>-->\r\n<!--Dribbble-->\r\n<!--<a class=\"px-2 icons-sm fb-ic\">\r\n      <mdb-icon fab icon=\"facebook-f\"> </mdb-icon>\r\n    </a>\r\n  </mdb-card-body>\r\n\r\n</mdb-card>-->\r\n");

/***/ }),

/***/ "pPbC":
/*!*************************************************!*\
  !*** ./src/app/home/home-add-menu.component.ts ***!
  \*************************************************/
/*! exports provided: HomeAddMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAddMenuComponent", function() { return HomeAddMenuComponent; });
/* harmony import */ var _personal_mood_personal_mood_component_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../personal-mood/personal-mood.component.css */ "U+pj");
/* harmony import */ var _raw_loader_home_add_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home-add-menu.component.html */ "WJ//");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.service */ "QLoi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let HomeAddMenuComponent = class HomeAddMenuComponent {
    constructor(homeService, activateRouter, router) {
        this.homeService = homeService;
        this.activateRouter = activateRouter;
        this.router = router;
        this.food = {};
    }
    ngOnInit() {
        this.activateRouter.params.subscribe(param => {
            this.moodID = param.id;
            this.food.moodID = this.moodID;
        });
    }
    saveInPersonalMenu() {
        this.homeService.saveAddInPersonalMenu(this.food).subscribe(result => {
            return this.router.navigateByUrl("/menu");
        }, error => console.error(error));
    }
};
HomeAddMenuComponent.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HomeAddMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home-add-menu',
        template: _raw_loader_home_add_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_personal_mood_personal_mood_component_css__WEBPACK_IMPORTED_MODULE_0__["default"]]
    }),
    __metadata("design:paramtypes", [_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HomeAddMenuComponent);



/***/ }),

/***/ "sqk0":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mood/mood.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"d-flex justify-content-around\">\r\n\r\n  <div>\r\n    <mdb-carousel class=\"carousel slide carousel-fade\" [animation]=\"'fade'\">\r\n      <mdb-carousel-item >\r\n        <div style=\"width:290px; height:290px\">\r\n          <img class=\"d-block w-100\" src=\"assets/bg-for-mood.png\" style=\"opacity:90%\">\r\n          <div class=\"mask rgba-black-light waves-light\" mdbWavesEffect></div>\r\n        </div>\r\n        <div class=\"carousel-caption\" style=\"height:57%; text-align:left\">\r\n          <div class=\"example-button-row\" style=\"margin-left:17%; margin-bottom:10%\">\r\n            <button mat-raised-button color=\"warm\" (click)=\"generateRandomQuote()\">Random quote</button>\r\n          </div>\r\n        </div>\r\n      </mdb-carousel-item>\r\n    </mdb-carousel>\r\n  </div>\r\n\r\n  <div *ngIf=\"viewQuote == true\" style=\"margin-top:5%\">\r\n    <mat-card class=\"example-card\">\r\n      <div *ngFor=\"let quote of quotes\">\r\n        <div *ngIf=\"quote.quoteID == randomQuoteID\">\r\n          <mat-card-title class=\"d-flex justify-content-around\">Daily quote</mat-card-title>\r\n          <mat-card-content>\r\n            <mat-list>\r\n              <mat-list-item class=\"d-flex justify-content-around\" style=\"margin-left: 3%\">\r\n                <i style=\"margin-right:5px; margin-right: 5%; margin-top:5%; margin-bottom:5%\">{{ quote.quoteText }}</i>\r\n              </mat-list-item>\r\n              <mat-list-item class=\"d-flex justify-content-end\">\r\n                <p style=\"color:#69F0AE; margin-right:5px\">-> By {{ quote.writer }}</p> \r\n              </mat-list-item>\r\n            </mat-list>\r\n          </mat-card-content>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div style=\"padding-top:55px;padding-bottom:50px\">\r\n  <div class=\"d-flex justify-content-center\">\r\n    <h1 style=\"font-size:3em\">Lear more about your mood</h1>\r\n  </div>\r\n  <div class=\"d-flex justify-content-center\" style=\"padding-top:30px\">\r\n    <mat-card class=\"example-card\">\r\n      <div>\r\n        <mat-form-field appearance=\"fill\" color=\"accent\">\r\n          <mat-label>Choose the mood</mat-label>\r\n          <mat-select disableRipple [(value)]=\"mood.id\">\r\n            <mat-option *ngFor=\"let mood of moods\" [value]=\"mood.id\">{{ mood.personalMood }}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      \r\n      <div class=\"d-flex justify-content-around\">\r\n        <div class=\"example-button-row\">\r\n          <button mat-raised-button color=\"accent\" (click)=\"showMoodDefinition(mood.id)\">Definition</button>\r\n        </div>\r\n        <div class=\"example-button-row\">\r\n          <button mat-raised-button color=\"accent\" (click)=\"showMoodCuriosity(mood.id)\">Curiosity</button>\r\n        </div>\r\n      </div>\r\n\r\n    </mat-card>\r\n  </div>\r\n  \r\n</div>\r\n\r\n<div *ngFor=\"let mo of moods\"  style=\"margin-bottom: 50px\">\r\n  <mat-card class=\"example-card\" style=\"background-color:#69F0AE;\" *ngIf=\"mo.id == selectedMoodID\">\r\n      <mat-card class=\"example-card\" >\r\n        <div >\r\n          <div *ngIf=\"selectedMoodAtribute == 'definition'\" class=\"d-flex justify-content-around\">\r\n            Definition for {{ mo.personalMood }} mood is: <i>{{ mo.moodDescription }}</i> \r\n          </div>\r\n          <div *ngIf=\"selectedMoodAtribute == 'curiosity'\" class=\"d-flex justify-content-around\">\r\n            Did you know that: <i>{{ mo.curiosity }}</i>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n</mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "sv2i":
/*!**********************************************************!*\
  !*** ./src/app/personal-mood/personal-mood.component.ts ***!
  \**********************************************************/
/*! exports provided: PersonalMoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalMoodComponent", function() { return PersonalMoodComponent; });
/* harmony import */ var _personal_mood_component_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal-mood.component.css */ "U+pj");
/* harmony import */ var _raw_loader_personal_mood_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./personal-mood.component.html */ "FgSU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _personal_mood_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal-mood.service */ "4WDi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let PersonalMoodComponent = class PersonalMoodComponent {
    constructor(personalMoodService) {
        this.personalMoodService = personalMoodService;
        this.columnsToDisplay = ['moodName', 'currentDate', 'moodReason', 'actions'];
        this.loads();
    }
    loads() {
        this.personalMoodService.loadPersonalMood().subscribe(result => {
            this.personalMoods = result;
        }, error => console.error(error));
        this.personalMoodService.loadMood().subscribe(result => {
            this.moods = result;
        }, error => console.error(error));
    }
    deletePersonalMood(personalMood) {
        this.personalMoodService.deletePersonalMood(personalMood).subscribe(result => {
            this.loads();
        }, error => console.error(error));
    }
};
PersonalMoodComponent.ctorParameters = () => [
    { type: _personal_mood_service__WEBPACK_IMPORTED_MODULE_3__["PersonalMoodService"] }
];
PersonalMoodComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-personal-mood',
        template: _raw_loader_personal_mood_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_personal_mood_component_css__WEBPACK_IMPORTED_MODULE_0__["default"]]
    }),
    __metadata("design:paramtypes", [_personal_mood_service__WEBPACK_IMPORTED_MODULE_3__["PersonalMoodService"]])
], PersonalMoodComponent);



/***/ }),

/***/ "sxhZ":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div class=\"example-button-row\">\r\n  <button mat-raised-button color=\"accent\" [routerLink]=\"['/personal-mood-add']\">Add extra mood for today</button>\r\n</div>-->\r\n\r\n<div style=\"margin-bottom:30px\">\r\n  <table mat-table [dataSource]=\"foods\" class=\"mat-elevation-z8\">\r\n    <ng-container matColumnDef=\"moodID\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:5%\">Mood ID</th>\r\n      <td mat-cell *matCellDef=\"let food\">{{ food.moodID }}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"foodForTheMood\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:20%\">What Need</th>\r\n      <td mat-cell *matCellDef=\"let food\"> {{ food.foodForTheMood }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"morning\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:20%\">Morning</th>\r\n      <td mat-cell *matCellDef=\"let food\"> {{ food.morning }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"noon\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:20%\">Noon</th>\r\n      <td mat-cell *matCellDef=\"let food\"> {{ food.noon }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"evening\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:20%\">Evening</th>\r\n      <td mat-cell *matCellDef=\"let food\"> {{ food.evening }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"action\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:15%\">Actions</th>\r\n      <td mat-cell *matCellDef=\"let food\">\r\n        <section style=\"display:flex; justify-content:space-between\">\r\n          <button mat-icon-button color=\"accent\" aria-label=\"Example icon button with a home icon\" matTooltip=\"Read\">\r\n            <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" [routerLink]=\"['/menu-read', food.id]\" style=\"cursor:pointer\">info</mat-icon>\r\n          </button>\r\n          <div *ngIf=\"food.personalOrDefault == 1\">\r\n            <button mat-icon-button color=\"accent\" aria-label=\"Example icon button with a home icon\" matTooltip=\"Delete\">\r\n              <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" (click)=\"deleteFood(food)\" style=\"cursor:pointer\">delete</mat-icon>\r\n            </button>\r\n          </div>\r\n        </section>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!--<ng-container matColumnDef=\"actions\">\r\n    <th mat-header-cell *matHeaderCellDef style=\"width:15%\">Actions</th>\r\n    <td mat-cell *matCellDef=\"let personalMood\">\r\n      <section>\r\n        <div class=\"example-button-row\">\r\n          <button mat-icon-button color=\"accent\" aria-label=\"Example icon button with a home icon\" matTooltip=\"Edit\">\r\n            <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" [routerLink]=\"['/personal-mood-edit',personalMood.id]\" style=\"cursor:pointer\">edit</mat-icon>\r\n          </button>\r\n          <button mat-icon-button color=\"accent\" aria-label=\"Example icon button with a home icon\" matTooltip=\"Info\">\r\n            <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" [routerLink]=\"['/personal-mood-read',personalMood.id]\" style=\"cursor:pointer\">info</mat-icon>\r\n          </button>\r\n          <button mat-icon-button color=\"accent\" aria-label=\"Example icon button with a home icon\" matTooltip=\"Delete\">\r\n            <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" (click)=\"deletePersonalMood(personalMood)\" style=\"cursor:pointer\">delete</mat-icon>\r\n          </button>\r\n        </div>\r\n      </section>\r\n    </td>\r\n  </ng-container>-->\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay \"></tr>\r\n    <tr mat-row *matRowDef=\"let myRowData; columns: columnsToDisplay ;\"></tr>\r\n  </table>\r\n\r\n</div>\r\n\r\n");

/***/ }),

/***/ "uzEs":
/*!***************************************************************!*\
  !*** ./src/app/personal-mood/personal-mood-edit.component.ts ***!
  \***************************************************************/
/*! exports provided: PersonalMoodEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalMoodEditComponent", function() { return PersonalMoodEditComponent; });
/* harmony import */ var _personal_mood_component_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal-mood.component.css */ "U+pj");
/* harmony import */ var _raw_loader_personal_mood_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./personal-mood-edit.component.html */ "ZOaX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _personal_mood_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./personal-mood.service */ "4WDi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let PersonalMoodEditComponent = class PersonalMoodEditComponent {
    constructor(personalMoodService, router, activateRouter) {
        this.personalMoodService = personalMoodService;
        this.router = router;
        this.activateRouter = activateRouter;
        this.personalMood = {};
        this.personalMoodService.loadMood().subscribe(result => {
            this.moods = result;
        }, error => console.error(error));
    }
    ngOnInit() {
        this.activateRouter.params.subscribe(param => {
            this.id = param.id;
            this.loadPersonalMood();
        });
    }
    loadPersonalMood() {
        this.personalMoodService.loadPersonalMoodByID(this.id).subscribe(result => {
            this.personalMood = result;
        }, error => console.error(error));
    }
    saveEditedPersonalMood() {
        this.personalMoodService.saveEditedPersonalMood(this.id, this.personalMood).subscribe(result => {
            this.router.navigateByUrl("/personal-mood");
        }, error => console.error(error));
    }
};
PersonalMoodEditComponent.ctorParameters = () => [
    { type: _personal_mood_service__WEBPACK_IMPORTED_MODULE_4__["PersonalMoodService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
PersonalMoodEditComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-personal-mood-edit',
        template: _raw_loader_personal_mood_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_personal_mood_component_css__WEBPACK_IMPORTED_MODULE_0__["default"]]
    }),
    __metadata("design:paramtypes", [_personal_mood_service__WEBPACK_IMPORTED_MODULE_4__["PersonalMoodService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], PersonalMoodEditComponent);



/***/ }),

/***/ "vIa7":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/statistics/statistics.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div *ngFor=\"let st of statistics\">{{ st.usedMoodNumber }}, {{ st.numberOfPersonalMenus }}, {{ st.quotesClasifications }}</div>\r\n\r\n<!--<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n\r\n\r\n<mdb-card cascade=\"true\" wider=\"true\" reverse=\"true\" class=\"my-4\">-->\r\n  <!--Card image-->\r\n  <!--<div class=\"view view-cascade overlay waves-light\" mdbWavesEffect>\r\n    <mdb-card-img src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg\"></mdb-card-img>\r\n    <a>\r\n      <div class=\"mask rgba-white-slight\"></div>\r\n    </a>\r\n  </div>-->\r\n  <!--/Card image-->\r\n  <!-- Card content -->\r\n  <!--<mdb-card-body cascade=\"true\" class=\"text-center\">-->\r\n\r\n    <!--Title-->\r\n    <!--<mdb-card-title>\r\n      <h4>\r\n        <strong>My adventure</strong>\r\n      </h4>\r\n    </mdb-card-title>\r\n\r\n    <h5 class=\"indigo-text\">\r\n      <strong>Photography</strong>\r\n    </h5>\r\n\r\n    <mdb-card-text>\r\n      Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem\r\n      aperiam.\r\n    </mdb-card-text>-->\r\n\r\n    <!--Linkedin-->\r\n    <!--<a class=\"px-2 icons-sm li-ic\">\r\n      <mdb-icon fab icon=\"linkedin-in\"> </mdb-icon>\r\n    </a>-->\r\n    <!--Twitter-->\r\n    <!--<a class=\"px-2 icons-sm tw-ic\">\r\n      <mdb-icon fab icon=\"twitter\"> </mdb-icon>\r\n    </a>-->\r\n    <!--Dribbble-->\r\n    <!--<a class=\"px-2 icons-sm fb-ic\">\r\n      <mdb-icon fab icon=\"facebook-f\"> </mdb-icon>\r\n    </a>\r\n  </mdb-card-body>\r\n\r\n</mdb-card>-->\r\n");

/***/ }),

/***/ "wjw+":
/*!***************************************************************!*\
  !*** ./src/app/personal-mood/personal-mood-read.component.ts ***!
  \***************************************************************/
/*! exports provided: PersonalMoodReadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalMoodReadComponent", function() { return PersonalMoodReadComponent; });
/* harmony import */ var _personal_mood_component_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal-mood.component.css */ "U+pj");
/* harmony import */ var _raw_loader_personal_mood_read_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./personal-mood-read.component.html */ "6wX0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _personal_mood_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./personal-mood.service */ "4WDi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let PersonalMoodReadComponent = class PersonalMoodReadComponent {
    constructor(personalMoodService, router, activateRouter) {
        this.personalMoodService = personalMoodService;
        this.router = router;
        this.activateRouter = activateRouter;
        this.personalMood = {};
    }
    ngOnInit() {
        this.activateRouter.params.subscribe(param => {
            this.id = param.id;
            this.loadSong();
        });
    }
    loadSong() {
        this.personalMoodService.loadPersonalMoodByID(this.id).subscribe(result => {
            this.personalMood = result;
        }, error => console.error(error));
    }
};
PersonalMoodReadComponent.ctorParameters = () => [
    { type: _personal_mood_service__WEBPACK_IMPORTED_MODULE_4__["PersonalMoodService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
PersonalMoodReadComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-personal-mood-read',
        template: _raw_loader_personal_mood_read_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_personal_mood_component_css__WEBPACK_IMPORTED_MODULE_0__["default"]]
    }),
    __metadata("design:paramtypes", [_personal_mood_service__WEBPACK_IMPORTED_MODULE_4__["PersonalMoodService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], PersonalMoodReadComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
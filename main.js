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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Navbar -->\n <app-nav></app-nav>\n\n <!-- Router Outlet - '/' = HomeComp -->\n <router-outlet></router-outlet>\n \n "

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Assignment';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _prototype_prototype_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prototype/prototype.component */ "./src/app/prototype/prototype.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _prototype_prototype_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./prototype/prototype.service */ "./src/app/prototype/prototype.service.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _prototype_prototype_component__WEBPACK_IMPORTED_MODULE_5__["PrototypeComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"]
            ],
            providers: [_prototype_prototype_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _prototype_prototype_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prototype/prototype.component */ "./src/app/prototype/prototype.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    { path: '', component: _prototype_prototype_component__WEBPACK_IMPORTED_MODULE_2__["PrototypeComponent"] },
                    { path: '**', redirectTo: '', pathMatch: 'full' }
                ], { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Navbar */\n.nav .navbar-nav {\n    font-size: 15px;\n  }\n \n "

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"/\">{{ appName }}</a>\n      </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
        this.appName = "Assignment";
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/prototype/prototype-data.ts":
/*!*********************************************!*\
  !*** ./src/app/prototype/prototype-data.ts ***!
  \*********************************************/
/*! exports provided: PRODUCT_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_ITEMS", function() { return PRODUCT_ITEMS; });
var PRODUCT_ITEMS = [{
        id: 'Researching',
        name: 'BMW',
        description: 'Rohan',
        price: 4.99
    }, {
        id: 'Pending Approval',
        name: 'AUDI',
        description: 'Rahul',
        price: 10.99
    }, {
        id: 'Declined',
        name: 'Mercedes',
        description: 'Aman',
        price: 5.99
    }];


/***/ }),

/***/ "./src/app/prototype/prototype.component.css":
/*!***************************************************!*\
  !*** ./src/app/prototype/prototype.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Navbar */\n.nav .navbar-nav {\n    font-size: 15px;\n  }\ntd{\n    text-align: center;\n  }\n  \n\n  "

/***/ }),

/***/ "./src/app/prototype/prototype.component.html":
/*!****************************************************!*\
  !*** ./src/app/prototype/prototype.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-md-12\">\n    <h1>Prototype</h1>\n      <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th class=\"text-center\">Status</th>\n        <th class=\"text-center\">Company Info</th>\n        <th class=\"text-center\">Key Contacts</th>\n        <th class=\"text-center\">Financial Performance</th>\n        <th class=\"text-center\">&nbsp;</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let product of products;let i = index ; let last = last; let first = first\">\n        <td>{{ product.id }}</td>\n        <td>{{ product.name }}</td>\n        <td>{{ product.description }}</td>\n        <td>{{ product.price | currency}}</td>\n        <td>\n          <button class=\"btn btn-info\" \n                        (click)=\"showEditProductForm(i,product)\">\n                       <i class=\"fa fa-edit\"></i>\n              </button>\n          <button class=\"btn btn-danger\"\n                       (click)=\"removeProduct(product)\">\n                       <i class=\"fa fa-minus\"></i>\n            </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <button class=\"btn btn-success\"\n               (click)=\"showAddProductForm()\"><i class=\"fa fa-plus\"></i></button>\n  <br />\n  <br />\n\n  <form *ngIf=\"productForm\">\n    <h2>Add New Field</h2>\n    <p>Status: <select name=\"id\" \n      [(ngModel)]=\"newProduct.id\" required>\n        <option value=\"Researching\">Researching</option>\n        <option value=\"Pending Approval\">Pending Approval</option>\n        <option value=\"Approved\">Approved</option>\n        <option value=\"Declined\">Declined</option>\n      </select>\n    </p>\n    <p>Company Info: <input type=\"text\"\n                                 name=\"name\"\n                                 [(ngModel)]=\"newProduct.name\" required/></p>\n    <p>Key Contacts: <input type=\"text\"\n                                          name=\"description\"\n                                          [(ngModel)]=\"newProduct.description\" required/></p>\n    <p>Financial Performance: <input type=\"number\"\n                                name=\"price\"\n                                [(ngModel)]=\"newProduct.price\" required/></p>\n    <p>\n      <button type=\"button\"\n                   class=\"btn btn-primary\"\n                   (click)=\"saveProduct(newProduct)\">Submit</button>\n      <button type=\"button\"\n                   class=\"btn btn-warning\"\n                   (click)=\"cancelNewProduct()\">Cancel</button>\n    </p>\n   </form>\n\n    <form *ngIf=\"editProductForm\">\n    <h2>Edit Details</h2>\n    <p>Status: <select name=\"id\"\n      [(ngModel)]=\"editedProduct.id\" >\n        <option value=\"Researching\">Researching</option>\n        <option value=\"Pending Approval\">Pending Approval</option>\n        <option value=\"Approved\">Approved</option>\n        <option value=\"Declined\">Declined</option>\n      </select></p>\n    <p>Company Info: <input type=\"text\"\n                                 name=\"name\"\n                                 [(ngModel)]=\"editedProduct.name\" /></p>\n    <p>Key Contacts: <input type=\"text\"\n                                          name=\"description\"\n                                          [(ngModel)]=\"editedProduct.description\" /></p>\n    <p>Financial Performance: <input type=\"number\"\n                                name=\"price\"\n                                [(ngModel)]=\"editedProduct.price\" /></p>\n    <p>\n      <button  type=\"button\"\n                   class=\"btn btn-primary\"\n                   (click)=\"updateProduct(editedProduct)\">Submit</button>\n      <button type=\"button\"\n                   class=\"btn btn-warning\"\n                   (click)=\"cancelEdits()\">Cancel</button>\n    </p>\n   </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/prototype/prototype.component.ts":
/*!**************************************************!*\
  !*** ./src/app/prototype/prototype.component.ts ***!
  \**************************************************/
/*! exports provided: PrototypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrototypeComponent", function() { return PrototypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _prototype_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prototype.service */ "./src/app/prototype/prototype.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrototypeComponent = /** @class */ (function () {
    function PrototypeComponent(_productService) {
        this._productService = _productService;
        this.productForm = false;
        this.editProductForm = false;
        this.newProduct = {};
        this.editedProduct = {};
    }
    PrototypeComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    PrototypeComponent.prototype.getProducts = function () {
        this.products = this._productService.getProductsFromData();
    };
    PrototypeComponent.prototype.showEditProductForm = function (index, product) {
        this.productForm = false;
        if (!product) {
            this.productForm = false;
            return;
        }
        console.log(index, "index");
        this.editProductForm = true;
        console.log(product, "product");
        this.index = index;
        this.editedProduct = Object.assign({}, product);
        console.log(this.editedProduct, "product");
    };
    PrototypeComponent.prototype.showAddProductForm = function () {
        this.editProductForm = false;
        // resets form if edited product
        if (this.products.length) {
            this.newProduct = {};
        }
        this.productForm = true;
        this.isNewForm = true;
    };
    PrototypeComponent.prototype.saveProduct = function (product) {
        if (this.isNewForm) {
            // add a new product
            this._productService.addProduct(product);
        }
        this.productForm = false;
    };
    PrototypeComponent.prototype.removeProduct = function (product) {
        this._productService.deleteProduct(product);
    };
    PrototypeComponent.prototype.updateProduct = function () {
        this._productService.updateProduct(this.index, this.editedProduct);
        this.editProductForm = false;
        this.editedProduct = {};
    };
    PrototypeComponent.prototype.cancelNewProduct = function () {
        this.newProduct = {};
        this.productForm = false;
    };
    PrototypeComponent.prototype.cancelEdits = function () {
        this.editedProduct = {};
        this.editProductForm = false;
    };
    PrototypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prototype',
            template: __webpack_require__(/*! ./prototype.component.html */ "./src/app/prototype/prototype.component.html"),
            styles: [__webpack_require__(/*! ./prototype.component.css */ "./src/app/prototype/prototype.component.css")]
        }),
        __metadata("design:paramtypes", [_prototype_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], PrototypeComponent);
    return PrototypeComponent;
}());



/***/ }),

/***/ "./src/app/prototype/prototype.service.ts":
/*!************************************************!*\
  !*** ./src/app/prototype/prototype.service.ts ***!
  \************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _prototype_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prototype-data */ "./src/app/prototype/prototype-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ProductService = /** @class */ (function () {
    function ProductService() {
        this.pItems = _prototype_data__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_ITEMS"];
    }
    ProductService.prototype.getProductsFromData = function () {
        console.log(this.pItems);
        return this.pItems;
    };
    ProductService.prototype.addProduct = function (product) {
        this.pItems.push(product);
        console.log(this.pItems);
    };
    ProductService.prototype.updateProduct = function (index, product) {
        console.log(product, "string");
        this.pItems[index] = product;
    };
    ProductService.prototype.deleteProduct = function (product) {
        this.pItems.splice(this.pItems.indexOf(product), 1);
        console.log(this.pItems);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ProductService);
    return ProductService;
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

module.exports = __webpack_require__(/*! /Users/manan.chawla/Documents/Assignment_EY/manan_chawla_assignment/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
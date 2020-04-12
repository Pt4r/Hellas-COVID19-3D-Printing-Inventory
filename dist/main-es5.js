function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_helpers/list-view/list-view.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_helpers/list-view/list-view.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_helpersListViewListViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-sm-12 col-md-4 m-auto\"\r\n     [hidden]=\"!canFilter\">\r\n    <input class=\"search mt-0\"\r\n           type=\"text\"\r\n           [placeholder]=\"'Type at least ' + minimumSearchCharacters + ' characters to filter results...'\"\r\n           [(ngModel)]=\"searchTerm\"\r\n           #filterInput />\r\n</div>\r\n<ngx-datatable class=\"material expandable\"\r\n               trackByProp=\"id\"\r\n               [rows]=\"rows\"\r\n               [columns]=\"columns\"\r\n               [columnMode]=\"'force'\"\r\n               [count]=\"count\"\r\n               [rowHeight]=\"50\"\r\n               [headerHeight]=\"50\"\r\n               [footerHeight]=\"showFooter\"\r\n               [limit]=\"rowsPerPage\"\r\n               reorderable=\"false\"\r\n               [externalPaging]=\"!clientSide\"\r\n               [externalSorting]=\"!clientSide\"\r\n               [messages]=\"{emptyMessage: emptyMessage}\"\r\n               [loadingIndicator]=\"isLoading\"\r\n               (page)=\"setPage($event)\"\r\n               (sort)=\"setSort($event)\"\r\n               #dataTable>\r\n</ngx-datatable>\r\n<ng-template let-row=\"row\"\r\n             let-value=\"value\"\r\n             #usernameTemplate>\r\n    <span *ngIf=\"value\"\r\n          style=\"padding-right: 16px; position: relative;\">\r\n        <i *ngIf=\"row.blocked\"\r\n           class=\"material-icons font-14 checkmark\"\r\n           style=\"color: rgba(255, 81, 81, 0.61) !important;\"\r\n           title=\"Account is blocked\">\r\n            block\r\n        </i>\r\n        <i *ngIf=\"row.accessFailedCount > 0 && row.lockoutEnd && !row.blocked\"\r\n           class=\"material-icons font-14 checkmark\"\r\n           style=\"color: rgba(255, 81, 81, 0.61) !important;\"\r\n           title=\"Account is locked\">\r\n            vpn_key\r\n        </i>\r\n        {{ value }}\r\n    </span>\r\n    <span *ngIf=\"!value\"> - </span>\r\n</ng-template>\r\n<ng-template let-row=\"row\"\r\n             let-value=\"value\"\r\n             #emailTemplate>\r\n    <a *ngIf=\"value\"\r\n       [href]=\"'mailto:' + value\"\r\n       style=\"padding-right: 16px; position: relative;\">\r\n        <i *ngIf=\"row.emailConfirmed\"\r\n           class=\"material-icons font-14 checkmark\"\r\n           style=\"color: #32CD32 !important;\"\r\n           title=\"Email is confirmed\">\r\n            check\r\n        </i>\r\n        {{ value }}\r\n    </a>\r\n    <span *ngIf=\"!value\"> - </span>\r\n</ng-template>\r\n<ng-template let-row=\"row\"\r\n             let-value=\"value\"\r\n             #phoneNumberTemplate>\r\n    <a *ngIf=\"value\"\r\n       [href]=\"'tel:' + value\"\r\n       style=\"padding-right: 16px; position: relative;\">\r\n        <i *ngIf=\"row.phoneNumberConfirmed\"\r\n           class=\"material-icons font-14 checkmark\"\r\n           style=\"color: #32CD32 !important;\"\r\n           title=\"Phone number is confirmed\">\r\n            check\r\n        </i>\r\n        {{ value }}\r\n    </a>\r\n    <span *ngIf=\"!value\"> - </span>\r\n</ng-template>\r\n<ng-template let-row=\"row\"\r\n             let-value=\"value\"\r\n             #dateTimeTemplate>\r\n    <span *ngIf=\"value\">{{ value | date:'medium' }}</span>\r\n    <span *ngIf=\"!value\"> - </span>\r\n</ng-template>\r\n<ng-template let-row=\"row\"\r\n             let-value=\"value\"\r\n             #booleanTemplate>\r\n    <i *ngIf=\"value === true\"\r\n       class=\"material-icons\"\r\n       style=\"color: #32CD32 !important;\">\r\n        check\r\n    </i>\r\n    <i *ngIf=\"value === false\"\r\n       class=\"material-icons\"\r\n       style=\"color: #CC0000 !important;\">\r\n        remove\r\n    </i>\r\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mt-4\">\n    <h4 class=\"card-header\">Admin</h4>\n    <div class=\"card-body\">\n        <div *ngIf=\"loading\"\n             class=\"spinner-border spinner-border-sm\"></div>\n        <div class=\"row\">\n            <div class=\"col-12 d-flex\">\n                <div class=\"flex-grow-1\">\n                    <button class=\"btn btn-success ml-3\"\n                            [routerLink]=\"['/admin/users']\">\n                        Όλοι οι Χρήστες\n                    </button>\n                    <button class=\"btn btn-success ml-3\"\n                            [routerLink]=\"['/admin/shipments']\">\n                        Όλες οι Αποστολές\n                    </button>\n                </div>\n                <button class=\"btn btn-danger\"\n                        [routerLink]=\"['/admin/filament']\">\n                    Αποστολή Υλικού\n                </button>\n            </div>\n        </div>\n        <hr />\n        <div class=\"row text-center\">\n            <div class=\"col-4\">\n                Χρήστες\n            </div>\n            <div class=\"col-4\">\n                Εκτυπώσεις\n            </div>\n            <div class=\"col-4\">\n                Απεσταλμένα\n            </div>\n        </div>\n        <hr />\n        <div class=\"col-12 mt-3\">\n            <app-list-view [clientSide]=\"true\"\n                           [columns]=\"columns\"\n                           [rows]=\"pendingUsers\"\n                           [rowsPerPage]=\"2147483647\"\n                           [defaultSortField]=\"'dateShipped'\"\n                           [defaultSortDirection]=\"'Desc'\"\n                           [showFooter]=\"'false'\"\n                           (search)=\"getUsersWithShipments($event)\"\n                           [canFilter]=\"true\"\n                           #shipmentsList>\n            </app-list-view>\n            <ng-template let-row=\"row\"\n                         let-value=\"value\"\n                         #dateTemplate>\n                {{ value | date }}\n            </ng-template>\n            <ng-template let-row=\"row\"\n                         let-value=\"value\"\n                         #deliveryTemplate>\n                <div *ngIf=\"deliveryLoading else deliveryBtn\"\n                     class=\"spinner-border spinner-border-sm\"></div>\n                <ng-template #deliveryBtn>\n                    <button class=\"btn btn-primary px-4 py-0 my-0\"\n                            (click)=\"onRecieved(row)\"\n                            *ngIf=\"!row.recieved else notRecieved\">\n                        <span class=\"material-icons align-text-top text-light\">\n                            done\n                        </span>\n                    </button>\n                    <ng-template #notRecieved>\n                        <span class=\"material-icons text-muted\">\n                            local_shipping\n                        </span>\n                    </ng-template>\n                </ng-template>\n            </ng-template>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/filament/filament.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/filament/filament.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminFilamentFilamentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mt-4\">\n    <h4 class=\"card-header\">Αποστολή Υλικού</h4>\n    <div class=\"card-body\">\n        <div *ngIf=\"loading\"\n             class=\"spinner-border spinner-border-sm\"></div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <button class=\"btn btn-primary\"\n                        [routerLink]=\"['/admin']\">\n                    Αρχική\n                </button>\n                <button class=\"btn btn-success ml-3\"\n                        [routerLink]=\"['/admin/shipments']\">\n                    Όλες οι Αποστολές\n                </button>\n            </div>\n        </div>\n        <hr />\n        <div class=\"col-12 mt-3\">\n            <h5 class=\"mt-2\"><span class=\"fa fa-clock-o ion-clock float-right\"></span>Χρήστες με ανάγκη για υλικό</h5>\n            <app-list-view [clientSide]=\"true\"\n                           [columns]=\"columns\"\n                           [rows]=\"users\"\n                           [rowsPerPage]=\"2147483647\"\n                           [defaultSortField]=\"'lastName'\"\n                           [defaultSortDirection]=\"'Desc'\"\n                           [showFooter]=\"'false'\"\n                           (search)=\"getUsers($event)\"\n                           [canFilter]=\"true\"\n                           #usersList>\n            </app-list-view>\n            <ng-template let-row=\"row\"\n                         let-value=\"value\"\n                         #dateTemplate>\n                {{ value | date }}\n            </ng-template>\n            <ng-template let-row=\"row\"\n                         let-value=\"value\"\n                         #actionsTemplate>\n                <div *ngIf=\"deliveryLoading else deliveryBtn\"\n                     class=\"spinner-border spinner-border-sm\"></div>\n                <ng-template #deliveryBtn>\n                    <button class=\"btn btn-danger px-4 py-0 my-0\"\n                            *ngIf=\"value\"\n                            (click)=\"sendFilament(row)\">\n                        <i class=\"material-icons material-action align-text-top text-light\">\n                            send\n                        </i>\n                    </button>\n                </ng-template>\n            </ng-template>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/shipments/shipments.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/shipments/shipments.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminShipmentsShipmentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mt-4\">\n    <h4 class=\"card-header\">Αποστολές</h4>\n    <div class=\"card-body\">\n        <div *ngIf=\"loading\"\n             class=\"spinner-border spinner-border-sm\"></div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <button class=\"btn btn-primary\"\n                        [routerLink]=\"['/admin']\">\n                    Αρχική\n                </button>\n                <button class=\"btn btn-success ml-3\"\n                        [routerLink]=\"['/admin/users']\">\n                    Όλοι οι Χρήστες\n                </button>\n            </div>\n        </div>\n        <hr />\n        <div class=\"row text-center\">\n            <div class=\"col-4\">\n                Αποστολές\n            </div>\n        </div>\n        <hr />\n        <div class=\"col-12 mt-3\">\n            <app-list-view [clientSide]=\"true\"\n                           [columns]=\"columns\"\n                           [rows]=\"pendingShipments\"\n                           [rowsPerPage]=\"2147483647\"\n                           [defaultSortField]=\"'dateShipped'\"\n                           [defaultSortDirection]=\"'Desc'\"\n                           [showFooter]=\"'false'\"\n                           (search)=\"getUsersWithShipments($event)\"\n                           [canFilter]=\"true\"\n                           #shipmentsList>\n            </app-list-view>\n            <ng-template let-row=\"row\"\n                         let-value=\"value\"\n                         #dateTemplate>\n                {{ value | date }}\n            </ng-template>\n            <ng-template let-row=\"row\"\n                         let-value=\"value\"\n                         #deliveryTemplate>\n                <div *ngIf=\"deliveryLoading else deliveryBtn\"\n                     class=\"spinner-border spinner-border-sm\"></div>\n                <ng-template #deliveryBtn>\n                    <div class=\"px-4 py-0 my-0\"\n                         *ngIf=\"row.recieved else notRecieved\">\n                        <span class=\"material-icons align-text-top\">\n                            done\n                        </span>\n                    </div>\n                    <ng-template #notRecieved>\n                        <div class=\"px-4 py-0 my-0\">\n                            <span class=\"material-icons text-muted\">\n                                local_shipping\n                            </span>\n                        </div>\n                    </ng-template>\n                </ng-template>\n            </ng-template>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/users/users.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/users/users.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminUsersUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mt-4\">\n    <h4 class=\"card-header\">Χρήστες</h4>\n    <div class=\"card-body\">\n        <div *ngIf=\"loading\"\n             class=\"spinner-border spinner-border-sm\"></div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <button class=\"btn btn-primary\"\n                        [routerLink]=\"['/admin']\">\n                    Αρχική\n                </button>\n                <button class=\"btn btn-success ml-3\"\n                        [routerLink]=\"['/admin/shipments']\">\n                    Όλες οι Αποστολές\n                </button>\n            </div>\n        </div>\n        <hr />\n        <div class=\"col-12 mt-3\">\n            <app-list-view [clientSide]=\"true\"\n                           [columns]=\"columns\"\n                           [rows]=\"users\"\n                           [rowsPerPage]=\"2147483647\"\n                           [defaultSortField]=\"'lastName'\"\n                           [defaultSortDirection]=\"'Desc'\"\n                           [showFooter]=\"'false'\"\n                           (search)=\"getUsers($event)\"\n                           [canFilter]=\"true\"\n                           #usersList>\n            </app-list-view>\n            <ng-template let-row=\"row\"\n                         let-value=\"value\"\n                         #actionsTemplate>\n                <button class=\"btn btn-primary px-4 py-0 my-0\"\n                        *ngIf=\"value\"\n                        [routerLink]=\"value + '/view'\">\n                    <i class=\"material-icons material-action align-text-top text-light\">\n                        search\n                    </i>\n                </button>\n            </ng-template>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/users/view/view.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/users/view/view.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminUsersViewViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mt-4\">\n    <h4 class=\"card-header\">{{user.firstName}} {{user.lastName}}</h4>\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <button class=\"btn btn-primary\"\n                        [routerLink]=\"['/admin/users']\">\n                    Πίσω\n                </button>\n            </div>\n        </div>\n        <hr />\n        <form>\n            <div class=\"form-row col-12\">\n                <div class=\"form-group col-md-6\">\n                    <label for=\"firstName\">Όνομα*</label>\n                    <input type=\"text\"\n                           disabled\n                           value='{{user.firstName}}'\n                           class=\"form-control\" />\n                </div>\n                <div class=\"form-group col-md-6\">\n                    <label for=\"lastName\">Επίθετο*</label>\n                    <input type=\"text\"\n                           disabled\n                           value='{{user.lastName}}'\n                           class=\"form-control\">\n                </div>\n            </div>\n            <div class=\"form-row col-12\">\n                <div class=\"form-group col-md-2\">\n                    <label for=\"lastName\">Ρόλος*</label>\n                    <input type=\"text\"\n                           disabled\n                           value='{{user.role}}'\n                           class=\"form-control\">\n                </div>\n                <div class=\"form-group col-md-5\">\n                    <label for=\"email\">Email*</label>\n                    <input type=\"email\"\n                           disabled\n                           value='{{user.email}}'\n                           class=\"form-control\"\n                           required />\n                </div>\n                <div class=\"form-group col-md-5\">\n                    <label for=\"phoneNumber\">Τηλέφωνο*</label>\n                    <input type=\"tel\"\n                           disabled\n                           value='{{user.phoneNumber}}'\n                           placeholder=\"6934567891\"\n                           class=\"form-control\" />\n                </div>\n            </div>\n            <div class=\"form-row col-12\">\n                <div class=\"form-group col-md-12\">\n                    <label for=\"address\">Διεύθυνση Αποστολής*</label>\n                    <textarea disabled\n                              rows=\"4\"\n                              value='{{user.address}}'\n                              class=\"form-control\">\n                        </textarea>\n                </div>\n            </div>\n            <hr />\n            <div class=\"form-row col-12 align-items-center pt-4\">\n                <div class=\"form-check col-md-6\">\n                    <label for=\"printerActive\"\n                           class=\"form-check-label pr-5\">Λειτουργικός εκτυπωτής*</label>\n                    <bSwitch name=\"printerActive\"\n                             [switch-animate]=\"'animate'\"\n                             [switch-size]=\"'small'\"\n                             [switch-on-text]=\"'ΝΑΙ'\"\n                             [switch-off-text]=\"'ΟΧΙ'\"\n                             [switch-disabled]=\"'disabled'\"\n                             [ngModel]=\"user.printerActive\"\n                             class=\"form-check-input\"\n                             id=\"printerActive\"></bSwitch>\n                </div>\n                <div class=\"form-check col-md-6 mt-sm-3 mt-md-0\">\n                    <label for=\"needsFilament\"\n                           class=\"form-check-label pr-5\">Χρειάζεται Filament*</label>\n                    <bSwitch name=\"needsFilament\"\n                             [switch-animate]=\"'animate'\"\n                             [switch-size]=\"'small'\"\n                             [switch-on-text]=\"'ΝΑΙ'\"\n                             [switch-off-text]=\"'ΟΧΙ'\"\n                             [switch-disabled]=\"'disabled'\"\n                             [ngModel]=\"user.needsFilament\"\n                             class=\"form-check-input\"\n                             id=\"needsFilament\"></bSwitch>\n                </div>\n            </div>\n            <div class=\"form-row col-12 align-items-center pt-4\">\n                <div class=\"col\"></div>\n                <div class=\"form-group col-md-6\">\n                    <label for=\"printerModel\">Μάρκα 3D Printer*</label>\n                    <input type=\"text\"\n                           disabled\n                           value='{{user.printerModel}}'\n                           class=\"form-control\" />\n                </div>\n            </div>\n            <hr />\n            <div class=\"form-row col-12 align-items-center pt-4\">\n                <div class=\"form-group col-md-4\">\n                    <label for=\"batchRequiredTime\">Εκτεινόμενος Χρόνος Εκτύπωσης*</label>\n                    <input type=\"text\"\n                           disabled\n                           value='{{user.batchRequiredTime}}'\n                           class=\"form-control\" />\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <label for=\"printerModel\">Συνολικά Απεσταλμένα*</label>\n                    <input type=\"text\"\n                           disabled\n                           value='{{user.shippedQuantity}}'\n                           class=\"form-control\" />\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <label for=\"printerModel\">Τελευταία Αποστολή*</label>\n                    <input type=\"text\"\n                           disabled\n                           value='{{user.latestShippedDate.toDateString()}}'\n                           class=\"form-control\" />\n                </div>\n            </div>\n            <hr />\n            <div class=\"form-row col-12\">\n                <div class=\"form-group col-md-6\">\n                    <label for=\"username\">Username*</label>\n                    <input type=\"text\"\n                           disabled\n                           value='{{user.username}}'\n                           class=\"form-control\" />\n                </div>\n                <div class=\"form-group col-md-6 mb-0\">\n                    <label for=\"password\">Password*</label>\n                    <input type=\"password\"\n                           disabled\n                           value='{{user.firstName}}'\n                           class=\"form-control\"\n                           aria-describedby=\"passwordHelpBlock\" />\n                </div>\n            </div>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- nav -->\n<nav class=\"navbar navbar-expand navbar-dark bg-dark d-flex justify-content-between\"\n     *ngIf=\"currentUser\">\n   <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\"\n         routerLink=\"/\"\n         *ngIf=\"!isAdmin\">Home</a>\n      <a class=\"nav-item nav-link\"\n         routerLink=\"/admin\"\n         *ngIf=\"isAdmin\">Home</a>\n      <a class=\"nav-item nav-link\"\n         (click)=\"logout()\">Logout</a>\n   </div>\n   <a class=\"mr-3\"\n      href=\"https://www.3dhub.gr/shop/consumables/covid19-1kg-pla/\"\n      target=\"_blank\">\n      <button type=\"button\"\n              class=\"btn btn-warning px-4\">\n         Δώρησε\n      </button>\n   </a>\n</nav>\n\n<!-- main app container -->\n<div class=\"container\">\n   <router-outlet></router-outlet>\n</div>\n\n<!-- credits -->\n<footer class=\"footer mt-5\">\n   <div class=\"container d-flex justify-content-between\">\n      <a href=\"#\"\n         target=\"_top\">Hellas COVID19 3D Printing Inventory</a>\n      <a href=\"https://visitagiasos.gr\"\n         target=\"_blank\">A donation by VisitAgiasos.gr</a>\n   </div>\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mt-4\">\n    <div class=\"card-header d-flex flex-row justify-content-between align-items-center\">\n        <div>\n            <h4>Το προφίλ μου</h4>\n        </div>\n        <div>\n            <a class=\"btn btn-secondary btn-sm text-light\"\n               role=\"button\"\n               [routerLink]=\"['/profile']\">\n                <span class=\"material-icons\">\n                    edit\n                </span>\n            </a>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <div *ngIf=\"loading\"\n             class=\"spinner-border spinner-border-sm\"></div>\n        <p *ngIf=\"currentUser\">\n            Γεία σου {{currentUser.firstName}}!\n        </p>\n        <p *ngIf=\"currentUser.needsFilament\"\n           class=\"text-success\">\n            Έχουμε ενημερωθεί για την έλλειψη σου σε filament και θα σου στείλουμε σύντομα!\n        </p>\n        <div class=\"col-12 mt-3\">\n            <hr />\n            <div>\n                <form>\n                    <div class=\"form-row col-6\">\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"activePrinter\">Σε λειτουργία: </label>\n                            <bSwitch name=\"activePrinter\"\n                                     class=\"pl-3\"\n                                     [switch-size]=\"'small'\"\n                                     [switch-readonly]=\"'readonly'\"\n                                     [(ngModel)]=\"currentUser.printerActive\"></bSwitch>\n                        </div>\n                    </div>\n                    <div class=\"form-row col-12 text-center\">\n                        <div class=\"form-group col-md-3\">\n                            <label for=\"lastName\">Μοντέλο:</label>\n                            <div class=\"form-group col-md-12\">\n                                {{currentUser.printerModel}}\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-3\">\n                            <label for=\"address\">Εκτεινόμενος χρόνος:</label>\n                            <div class=\"form-group col-md-12\">\n                                {{currentUser.batchRequiredTime}}\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-3\">\n                            <label for=\"address\">Συνολική προσφορά:</label>\n                            <div class=\"form-group col-md-12\">\n                                {{currentUser.shippedQuantity}}\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-3\">\n                            <label for=\"address\">Τελευταία αποστολή:</label>\n                            <div class=\"form-group col-md-12\">\n                                {{currentUser.latestShippedDate.toDateString()}}\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <hr />\n            <button class=\"btn btn-primary mb-3\"\n                    routerLink=\"/shipments\">\n                Καταγραφή Μετακίνησης Υλικών\n            </button>\n            <div class=\"col-md-12\">\n                <h5 class=\"mt-2\"><span class=\"fa fa-clock-o ion-clock float-right\"></span>Πρόσφατη Δραστηριότητα</h5>\n                <app-list-view [clientSide]=\"true\"\n                               [columns]=\"columns\"\n                               [rows]=\"shipments\"\n                               [rowsPerPage]=\"2147483647\"\n                               [defaultSortField]=\"'dateShipped'\"\n                               [defaultSortDirection]=\"'Desc'\"\n                               [showFooter]=\"'false'\"\n                               [emptyMessage]=\"'Στείλε μας την κούτα σου με (30) μάσκες για 2kg PLA filament!'\"\n                               (search)=\"getShipments()\"\n                               #shipmentsList>\n                </app-list-view>\n                <ng-template let-row=\"row\"\n                             let-value=\"value\"\n                             #dateTemplate>\n                    {{ value | date }}\n                </ng-template>\n                <ng-template let-row=\"row\"\n                             let-value=\"value\"\n                             #deliveryTemplate>\n                    <span class=\"material-icons text-success\"\n                          *ngIf=\"row.recieved else notRecieved\">\n                        done\n                    </span>\n                    <ng-template #notRecieved>\n                        <span class=\"material-icons text-muted\">\n                            local_shipping\n                        </span>\n                    </ng-template>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/profile.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/profile.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mt-4\">\n    <h4 class=\"card-header\">Επεξεργασία Προφίλ</h4>\n    <div class=\"card-body\">\n        <form [formGroup]=\"updateForm\"\n              (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-row col-12\">\n                <div class=\"form-group col-md-6\">\n                    <label for=\"firstName\">Όνομα*</label>\n                    <input type=\"text\"\n                           formControlName=\"firstName\"\n                           class=\"form-control\"\n                           [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n                    <div *ngIf=\"submitted && f.firstName.errors\"\n                         class=\"invalid-feedback\">\n                        <div *ngIf=\"f.firstName.errors.required\">Το Όνομα είναι απαραίτητο</div>\n                    </div>\n                </div>\n                <div class=\"form-group col-md-6\">\n                    <label for=\"lastName\">Επίθετο*</label>\n                    <input type=\"text\"\n                           formControlName=\"lastName\"\n                           [(ngModel)]=\"user.lastName\"\n                           class=\"form-control\"\n                           [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n                    <div *ngIf=\"submitted && f.lastName.errors\"\n                         class=\"invalid-feedback\">\n                        <div *ngIf=\"f.lastName.errors.required\">Το Επίθετο είναι απαραίτητο</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-row col-12\">\n                <div class=\"form-group col-md-6\">\n                    <label for=\"email\">Email*</label>\n                    <input type=\"email\"\n                           formControlName=\"email\"\n                           class=\"form-control\"\n                           [(ngModel)]=\"user.email\"\n                           required\n                           [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                    <div *ngIf=\"submitted && f.email.errors\"\n                         class=\"invalid-feedback\">\n                        <div *ngIf=\"f.email.errors.required\">Το Email είναι απαραίτητο</div>\n                    </div>\n                </div>\n                <div class=\"form-group col-md-6\">\n                    <label for=\"phoneNumber\">Τηλέφωνο*</label>\n                    <input type=\"tel\"\n                           placeholder=\"6934567891\"\n                           formControlName=\"phoneNumber\"\n                           [(ngModel)]=\"user.phoneNumber\"\n                           class=\"form-control\"\n                           [ngClass]=\"{ 'is-invalid': submitted && f.phoneNumber.errors }\" />\n                    <div *ngIf=\"submitted && f.phoneNumber.errors\"\n                         class=\"invalid-feedback\">\n                        <div *ngIf=\"f.phoneNumber.errors.required\">Το τηλέφωνο είναι απαραίτητο</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-row col-12\">\n                <div class=\"form-group col-md-12\">\n                    <label for=\"address\">Διεύθυνση αποστολής νέου χορηγούμενου υλικού*</label>\n                    <textarea formControlName=\"address\"\n                              name=\"address\"\n                              rows=\"4\"\n                              [(ngModel)]=\"user.address\"\n                              class=\"form-control\"\n                              [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\">\n                </textarea>\n                    <div *ngIf=\"submitted && f.address.errors\"\n                         class=\"invalid-feedback\">\n                        <div *ngIf=\"f.address.errors.required\">Η Περιοχή είναι απαραίτητη</div>\n                    </div>\n                </div>\n            </div>\n            <hr />\n            <div class=\"form-row col-12 mb-4\">\n                <div class=\"form-check-inline col-md-12\">\n                    <label for=\"printerActive\"\n                           class=\"form-check-label pr-5\">Είναι ο εκτυπωτής λειτουργικός?*</label>\n                    <bSwitch name=\"printerActive\"\n                             [switch-animate]=\"'animate'\"\n                             [switch-size]=\"'small'\"\n                             [switch-on-text]=\"'ΝΑΙ'\"\n                             [switch-off-text]=\"'ΟΧΙ'\"\n                             [(ngModel)]=\"user.printerActive\"\n                             class=\"form-check-input\"\n                             id=\"printerActive\"\n                             formControlName=\"printerActive\"></bSwitch>\n                </div>\n            </div>\n            <div class=\"form-row col-12 align-items-baseline\">\n                <div class=\"form-group col-md-6\">\n                    <label for=\"printerModel\">Μάρκα 3D Printer*</label>\n                    <input type=\"text\"\n                           formControlName=\"printerModel\"\n                           [(ngModel)]=\"user.printerModel\"\n                           class=\"form-control\"\n                           [ngClass]=\"{ 'is-invalid': submitted && f.printerModel.errors }\" />\n                    <div *ngIf=\"submitted && f.printerModel.errors\"\n                         class=\"invalid-feedback\">\n                        <div *ngIf=\"f.printerModel.errors.required\">Η Μάρκα 3D Printer είναι απαραίτητη</div>\n                    </div>\n                </div>\n                <div class=\"form-group col-md-6\">\n                    <label for=\"batchRequiredTime\">Εκτεινόμενος χρόνος εκτύπωσης 1 μάσκας (λεπτά)</label>\n                    <input type=\"number\"\n                           min=0\n                           [(ngModel)]=\"user.batchRequiredTime\"\n                           name=\"batchRequiredTime\"\n                           id=\"batchRequiredTime\"\n                           formControlName=\"batchRequiredTime\"\n                           class=\"form-control without\" />\n                </div>\n            </div>\n            <hr />\n            <div class=\"form-row col-12\">\n                <div class=\"form-group col-md-6 mb-0\">\n                    <label for=\"newPassword\">Νέος κωδικός</label>\n                    <input type=\"password\"\n                           formControlName=\"newPassword\"\n                           [(ngModel)]=\"updatedUser.newPassword\"\n                           class=\"form-control\"\n                           [ngClass]=\"{ 'is-invalid': submitted && f.newPassword.errors }\"\n                           aria-describedby=\"newPasswordHelpBlock\" />\n                </div>\n                <small id=\"newPasswordHelpBlock\"\n                       class=\"form-text text-muted pb-4 mt-2\">\n                    Αφίστε το κενό αν δεν θέλετε να αλλάξετε τον κωδικό σας. Ο κωδικός σας πρέπει να έχει τουλάχιστον 4 χαρακτήρες, ένα κεφαλαίο, ένα μικρό γράμμα και έναν αριθμό.\n                </small>\n            </div>\n            <hr />\n            <div class=\"form-row col-12 mb-3\">\n                <div class=\"form-group col-md-6\">\n                    <label for=\"username\">Username*</label>\n                    <input type=\"text\"\n                           formControlName=\"username\"\n                           [(ngModel)]=\"user.username\"\n                           class=\"form-control\"\n                           [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                    <div *ngIf=\"submitted && f.username.errors\"\n                         class=\"invalid-feedback\">\n                        <div *ngIf=\"f.username.errors.required\">To Username είναι απαραίτητο</div>\n                    </div>\n                </div>\n                <div class=\"form-group col-md-6\">\n                    <label for=\"password\">Παλιός κωδικός*</label>\n                    <input type=\"password\"\n                           formControlName=\"password\"\n                           [(ngModel)]=\"updatedUser.password\"\n                           class=\"form-control\"\n                           [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\n                           aria-describedby=\"passwordHelpBlock\" />\n                    <div *ngIf=\"submitted && f.password.errors\"\n                         class=\"invalid-feedback\">\n                        <div *ngIf=\"f.password.errors.required\">Ο Παλιός κωδικός είναι απαραίτητος</div>\n                    </div>\n                </div>\n            </div>\n            <button [disabled]=\"loading\"\n                    class=\"btn btn-info ml-3\"\n                    type=\"submit\">\n                <span *ngIf=\"loading\"\n                      class=\"spinner-border spinner-border-sm mr-1\"></span>\n                Ανανέωση\n            </button>\n            <button type=\"button\"\n                    (click)=\"goBack()\"\n                    class=\"btn btn-danger ml-3\">Πίσω\n            </button>\n            <div *ngIf=\"error || formError\"\n                 class=\"alert alert-danger mt-3 mb-0\">\n                <p>{{error}}</p>\n                <p>{{formError}}</p>\n            </div>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"col-md-6 offset-md-3 py-5\">\n        <div class=\"card\">\n            <h4 class=\"card-header text-center\">Hellas COVID19 3D Printing Inventory</h4>\n            <div class=\"card-body\">\n                <form [formGroup]=\"loginForm\"\n                      (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group\">\n                        <label for=\"username\">Username</label>\n                        <input type=\"text\"\n                               formControlName=\"username\"\n                               class=\"form-control\"\n                               [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                        <div *ngIf=\"submitted && f.username.errors\"\n                             class=\"invalid-feedback\">\n                            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"password\">Password</label>\n                        <input type=\"password\"\n                               formControlName=\"password\"\n                               class=\"form-control\"\n                               [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                        <div *ngIf=\"submitted && f.password.errors\"\n                             class=\"invalid-feedback\">\n                            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                        </div>\n                    </div>\n                    <button [disabled]=\"loading\"\n                            class=\"btn btn-primary\"\n                            type=\"submit\">\n                        <span *ngIf=\"loading\"\n                              class=\"spinner-border spinner-border-sm mr-1\"></span>\n                        Login\n                    </button>\n                    <button class=\"btn btn-info ml-3\"\n                            (click)=\"onRegister()\"\n                            type=\"button\">\n                        Register\n                    </button>\n                    <div *ngIf=\"error\"\n                         class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-10 offset-md-1 text-center pt-4\">\n        <div>\n            <p>\n                Στήριξε και εσύ την προσπάθεια του 3DHUB και της ομάδας εθελοντών που σε συνεργασία με το υπουργείου Υγείας ανέλαβαν την παραγωγή χιλιάδων ασπίδων προστασίας για το νοσηλευτικό προσωπικό όλης της χώρας!\n            </p>\n        </div>\n        <a href=\"https://www.3dhub.gr/shop/consumables/covid19-1kg-pla/\"\n           target=\"_blank\">\n            <button type=\"button\"\n                    class=\"btn btn-warning\">Δώρησε\n            </button>\n        </a>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"col-md-6 offset-md-3 py-5\">\n        <div class=\"card\">\n            <h4 class=\"card-header text-center\">Εγγραφή</h4>\n            <div class=\"card-body\">\n                <form [formGroup]=\"registerForm\"\n                      (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-row col-12\">\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"firstName\">Όνομα*</label>\n                            <input type=\"text\"\n                                   formControlName=\"firstName\"\n                                   class=\"form-control\"\n                                   [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n                            <div *ngIf=\"submitted && f.firstName.errors\"\n                                 class=\"invalid-feedback\">\n                                <div *ngIf=\"f.firstName.errors.required\">Το Όνομα είναι απαραίτητο</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"lastName\">Επίθετο*</label>\n                            <input type=\"text\"\n                                   formControlName=\"lastName\"\n                                   class=\"form-control\"\n                                   [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n                            <div *ngIf=\"submitted && f.lastName.errors\"\n                                 class=\"invalid-feedback\">\n                                <div *ngIf=\"f.lastName.errors.required\">Το Επίθετο είναι απαραίτητο</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-row col-12\">\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"email\">Email*</label>\n                            <input type=\"email\"\n                                   formControlName=\"email\"\n                                   class=\"form-control\"\n                                   required\n                                   [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                            <div *ngIf=\"submitted && f.email.errors\"\n                                 class=\"invalid-feedback\">\n                                <div *ngIf=\"f.email.errors.required\">Το Email είναι απαραίτητο</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"phoneNumber\">Τηλέφωνο*</label>\n                            <input type=\"tel\"\n                                   placeholder=\"6934567891\"\n                                   formControlName=\"phoneNumber\"\n                                   class=\"form-control\"\n                                   [ngClass]=\"{ 'is-invalid': submitted && f.phoneNumber.errors }\" />\n                            <div *ngIf=\"submitted && f.phoneNumber.errors\"\n                                 class=\"invalid-feedback\">\n                                <div *ngIf=\"f.phoneNumber.errors.required\">Το τηλέφωνο είναι απαραίτητο</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-row col-12\">\n                        <div class=\"form-group col-md-12\">\n                            <label for=\"address\">Διεύθυνση αποστολής νέου χορηγούμενου υλικού*</label>\n                            <textarea formControlName=\"address\"\n                                      class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\">\n                        </textarea>\n                            <div *ngIf=\"submitted && f.address.errors\"\n                                 class=\"invalid-feedback\">\n                                <div *ngIf=\"f.address.errors.required\">Η Περιοχή είναι απαραίτητη</div>\n                            </div>\n                        </div>\n                    </div>\n                    <hr />\n                    <div class=\"form-row col-12 align-items-baseline\">\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"printerModel\">Μάρκα 3D Printer*</label>\n                            <input type=\"text\"\n                                   formControlName=\"printerModel\"\n                                   class=\"form-control\"\n                                   [ngClass]=\"{ 'is-invalid': submitted && f.printerModel.errors }\" />\n                            <div *ngIf=\"submitted && f.printerModel.errors\"\n                                 class=\"invalid-feedback\">\n                                <div *ngIf=\"f.printerModel.errors.required\">Η Μάρκα 3D Printer είναι απαραίτητη</div>\n                            </div>\n                        </div>\n                        <!-- <div class=\"form-group col-md-6\">\n                            <label for=\"batchRequiredTime\">Εκτεινόμενος χρόνος εκτύπωσης 1 μάσκας</label>\n                            <input type=\"time\"\n                                   step=\"1\"\n                                   type=\"time\"\n                                   name=\"batchRequiredTime\"\n                                   id=\"batchRequiredTime\"\n                                   formControlName=\"batchRequiredTime\"\n                                   class=\"form-control without\" />\n                        </div> -->\n                    </div>\n                    <div class=\"form-row col-12\">\n                        <div class=\"form-check-inline col-md-12\">\n\n                            <label for=\"printerActive\"\n                                   class=\"form-check-label pr-5\">Είναι ο εκτυπωτής λειτουργικός?*</label>\n                            <bSwitch name=\"printerActive\"\n                                     [switch-animate]=\"'animate'\"\n                                     [switch-size]=\"'small'\"\n                                     [switch-on-text]=\"'ΝΑΙ'\"\n                                     [switch-off-text]=\"'ΟΧΙ'\"\n                                     class=\"form-check-input\"\n                                     id=\"printerActive\"\n                                     formControlName=\"printerActive\"></bSwitch>\n                        </div>\n                    </div>\n                    <hr />\n                    <div class=\"form-row col-12\">\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"username\">Username*</label>\n                            <input type=\"text\"\n                                   formControlName=\"username\"\n                                   class=\"form-control\"\n                                   [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                            <div *ngIf=\"submitted && f.username.errors\"\n                                 class=\"invalid-feedback\">\n                                <div *ngIf=\"f.username.errors.required\">To Username είναι απαραίτητο</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-6 mb-0\">\n                            <label for=\"password\">Password*</label>\n                            <input type=\"password\"\n                                   formControlName=\"password\"\n                                   class=\"form-control\"\n                                   [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\n                                   aria-describedby=\"passwordHelpBlock\" />\n\n                            <div *ngIf=\"submitted && f.password.errors\"\n                                 class=\"invalid-feedback\">\n                                <div *ngIf=\"f.password.errors.required\">To Password είναι απαραίτητο</div>\n                            </div>\n                        </div>\n                        <small id=\"passwordHelpBlock\"\n                               class=\"form-text text-muted pb-4 mt-0\">\n                            Ο κωδικός σας πρέπει να έχει τουλάχιστον 4 χαρακτήρες, ένα κεφαλαίο, ένα μικρό γράμμα και έναν αριθμό.\n                        </small>\n                    </div>\n                    <button [disabled]=\"loading\"\n                            class=\"btn btn-info ml-3\"\n                            type=\"submit\">\n                        <span *ngIf=\"loading\"\n                              class=\"spinner-border spinner-border-sm mr-1\"></span>\n                        Register\n                    </button>\n                    <button type=\"button\"\n                            (click)=\"goBack()\"\n                            class=\"btn btn-danger ml-3\">Πίσω\n                    </button>\n                    <div *ngIf=\"error || formError\"\n                         class=\"alert alert-danger mt-3 mb-0\">\n                        <p>{{error}}</p>\n                        <p>{{formError}}</p>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-10 offset-md-1 text-center pt-4\">\n        <div>\n            <p>\n                Στήριξε και εσύ την προσπάθεια του 3DHUB και της ομάδας εθελοντών που σε συνεργασία με το υπουργείου Υγείας ανέλαβαν παραγωγή χιλιάδων ασπίδων προστασίας για το νοσηλευτικό προσωπικό όλης της χώρας!\n            </p>\n        </div>\n        <a href=\"https://www.3dhub.gr/shop/consumables/covid19-1kg-pla/\"\n           target=\"_blank\">\n            <button type=\"button\"\n                    class=\"btn btn-warning\">Δώρησε\n            </button>\n        </a>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shipment/shipment.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shipment/shipment.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShipmentShipmentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"col-md-7 offset-md-2 py-5\">\n        <div class=\"card\">\n            <h4 class=\"card-header text-center\"> Καταγραφή Μετακίνησης Υλικών </h4>\n            <div class=\"card-body\">\n                <div class=\"alert alert-primary\"\n                     role=\"alert\">\n                    <div>\n                        <small>\n                            Μετά την ολοκλήρωση της εκτύπωσης των συνολικών τεμαχίων, η αποστολή γίνεται με <strong>Γενική Ταχυδρομική και με χρέωση παραλήπτη</strong> στην διεύθυνση:\n                        </small>\n                    </div>\n                    <div class=\"col text-center py-3\">\n                        <h6>3D HUB</h6>\n                        <h6>Ψαρών 20, Πειραιάς, Αθήνα, 18546</h6>\n                    </div>\n                </div>\n                <form [formGroup]=\"shipmentForm\"\n                      (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-row col-12 align-items-baseline my-4\">\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"quantity\">Ποσότητα (ελάχιστο 30)*</label>\n                            <input type=\"number\"\n                                   value=\"30\"\n                                   min=\"30\"\n                                   formControlName=\"quantity\"\n                                   class=\"form-control\"\n                                   [ngClass]=\"{ 'is-invalid': submitted && f.quantity.errors }\" />\n                            <div *ngIf=\"submitted && f.quantity.errors\"\n                                 class=\"invalid-feedback\">\n                                <div *ngIf=\"f.quantity.errors.required\">Η ποσότητα είναι απαραίτητη</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"fileName\">Όνομα αρχείου*</label>\n                            <input type=\"text\"\n                                   formControlName=\"fileName\"\n                                   class=\"form-control\"\n                                   required\n                                   [ngClass]=\"{ 'is-invalid': submitted && f.fileName.errors }\" />\n                            <div *ngIf=\"submitted && f.fileName.errors\"\n                                 class=\"invalid-feedback\">\n                                <div *ngIf=\"f.fileName.errors.required\">Το όνομα αρχείου εκτύπωσης είναι απαραίτητο</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-row col-12\">\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"shippingCompany\">Εταιρία Αποστολής*</label>\n                            <input type=\"text\"\n                                   formControlName=\"shippingCompany\"\n                                   class=\"form-control\"\n                                   [ngClass]=\"{ 'is-invalid': submitted && f.shippingCompany.errors }\" />\n                            <div *ngIf=\"submitted && f.shippingCompany.errors\"\n                                 class=\"invalid-feedback\">\n                                <div *ngIf=\"f.shippingCompany.errors.required\">Η Εταιρία Αποστολής είναι απαραίτητη</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"dateShipped\">Ημερομηνία Αποστολής*</label>\n                            <input type=\"date\"\n                                   formControlName=\"dateShipped\"\n                                   class=\"form-control\"\n                                   required\n                                   [ngClass]=\"{ 'is-invalid': submitted && f.dateShipped.errors }\" />\n                            <div *ngIf=\"submitted && f.dateShipped.errors\"\n                                 class=\"invalid-feedback\">\n                                <div *ngIf=\"f.dateShipped.errors.required\">Η Ημερομηνία Αποστολής είναι απαραίτητη</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-row col-12 my-4\">\n                        <div class=\"form-group col-md-12\">\n                            <label for=\"trackingNumber\">\n                                Αριθμός φορτωτικής αποστολής εκτυπώσεων. Σε περίπτωση παράδοσης με άλλο τρόπο παρακαλώ κάντε περιγραφή*\n                            </label>\n                            <textarea formControlName=\"trackingNumber\"\n                                      rows=\"1\"\n                                      class=\"form-control\"\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.trackingNumber.errors }\">\n                        </textarea>\n                            <div *ngIf=\"submitted && f.trackingNumber.errors\"\n                                 class=\"invalid-feedback\">\n                                <div *ngIf=\"f.trackingNumber.errors.required\">Το Tracking Number είναι απαραίτητο</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-row col-12 mb-5\">\n                        <div class=\"form-check-inline col-md-12\">\n                            <label for=\"needsFilament\"\n                                   class=\"form-check-label pr-5\">Θέλεις να σου στείλουμε filament?</label>\n                            <bSwitch name=\"needsFilament\"\n                                     [switch-animate]=\"'animate'\"\n                                     [switch-size]=\"'small'\"\n                                     [switch-on-text]=\"'ΝΑΙ'\"\n                                     [switch-off-text]=\"'ΟΧΙ'\"\n                                     class=\"form-check-input\"\n                                     id=\"needsFilament\"\n                                     formControlName=\"needsFilament\"></bSwitch>\n                        </div>\n                    </div>\n                    <button [disabled]=\"loading\"\n                            class=\"btn btn-info ml-3\"\n                            type=\"submit\">\n                        <span *ngIf=\"loading\"\n                              class=\"spinner-border spinner-border-sm mr-1\"></span>\n                        Επιβεβαίωση\n                    </button>\n                    <button type=\"button\"\n                            (click)=\"goBack()\"\n                            class=\"btn btn-danger ml-3\">Πίσω\n                    </button>\n                    <div *ngIf=\"error || formError\"\n                         class=\"alert alert-danger mt-3 mb-0\">\n                        <p>{{error}}</p>\n                        <p>{{formError}}</p>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/_helpers/auth.guard.ts":
  /*!****************************************!*\
    !*** ./src/app/_helpers/auth.guard.ts ***!
    \****************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcApp_helpersAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, authenticationService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.authenticationService = authenticationService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var currentUser = this.authenticationService.currentUserValue;

          if (currentUser) {
            // check if route is restricted by role
            if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
              // role not authorised so redirect to home page
              this.router.navigate(['/']);
              return false;
            } // authorised so return true


            return true;
          } // not logged in so redirect to login page with the return url


          this.authenticationService.logout();
          this.router.navigate(['/login'], {
            queryParams: {
              returnUrl: state.url
            }
          });
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/_helpers/backend.ts":
  /*!*************************************!*\
    !*** ./src/app/_helpers/backend.ts ***!
    \*************************************/

  /*! exports provided: BACKOFFICE_API_BASE_URL, BackofficeApiService, Exception, AppException, ShipmentModel, ProblemDetails, Shipment, User, CreateShipmentModel, AdminShipmentsModel, UserModel, AuthenticateModel, RegisterModel, UpdateModel, UserFilamentModel, SwaggerException */

  /***/
  function srcApp_helpersBackendTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BACKOFFICE_API_BASE_URL", function () {
      return BACKOFFICE_API_BASE_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackofficeApiService", function () {
      return BackofficeApiService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Exception", function () {
      return Exception;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppException", function () {
      return AppException;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShipmentModel", function () {
      return ShipmentModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProblemDetails", function () {
      return ProblemDetails;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Shipment", function () {
      return Shipment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateShipmentModel", function () {
      return CreateShipmentModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminShipmentsModel", function () {
      return AdminShipmentsModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModel", function () {
      return UserModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticateModel", function () {
      return AuthenticateModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterModel", function () {
      return RegisterModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateModel", function () {
      return UpdateModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFilamentModel", function () {
      return UserFilamentModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwaggerException", function () {
      return SwaggerException;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* tslint:disable */

    /* eslint-disable */
    //----------------------
    // <auto-generated>
    //     Generated using the NSwag toolchain v13.3.0.0 (NJsonSchema v10.1.11.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
    // </auto-generated>
    //----------------------
    // ReSharper disable InconsistentNaming


    var BACKOFFICE_API_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('BACKOFFICE_API_BASE_URL');

    var BackofficeApiService = /*#__PURE__*/function () {
      function BackofficeApiService(http, baseUrl) {
        _classCallCheck(this, BackofficeApiService);

        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "http://hellas3dprintinginventorybackoffice.azurewebsites.net";
      }

      _createClass(BackofficeApiService, [{
        key: "shipments_GetAll",
        value: function shipments_GetAll(page, size, sort, search) {
          var _this = this;

          var url_ = this.baseUrl + "/Shipments?";
          if (page === null) throw new Error("The parameter 'page' cannot be null.");else if (page !== undefined) url_ += "Page=" + encodeURIComponent("" + page) + "&";
          if (size === null) throw new Error("The parameter 'size' cannot be null.");else if (size !== undefined) url_ += "Size=" + encodeURIComponent("" + size) + "&";
          if (sort !== undefined) url_ += "Sort=" + encodeURIComponent("" + sort) + "&";
          if (search !== undefined) url_ += "Search=" + encodeURIComponent("" + search) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processShipments_GetAll(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
              try {
                return _this.processShipments_GetAll(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
          }));
        }
      }, {
        key: "processShipments_GetAll",
        value: function processShipments_GetAll(response) {
          var _this2 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator = _createForOfIteratorHelper(response.headers.keys()),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var key = _step.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          ;

          if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this2.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this2.jsonParseReviver);
              result403 = AppException.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this2.jsonParseReviver);

              if (Array.isArray(resultData200)) {
                result200 = [];

                var _iterator2 = _createForOfIteratorHelper(resultData200),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var item = _step2.value;
                    result200.push(ShipmentModel.fromJS(item));
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
      }, {
        key: "shipments_Create",
        value: function shipments_Create(model) {
          var _this3 = this;

          var url_ = this.baseUrl + "/Shipments";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(model);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              "Content-Type": "application/json",
              "Accept": "application/json"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this3.processShipments_Create(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
              try {
                return _this3.processShipments_Create(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
          }));
        }
      }, {
        key: "processShipments_Create",
        value: function processShipments_Create(response) {
          var _this4 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator3 = _createForOfIteratorHelper(response.headers.keys()),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var key = _step3.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }

          ;

          if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this4.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this4.jsonParseReviver);
              result403 = AppException.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this4.jsonParseReviver);
              result200 = Shipment.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
          } else if (status === 404) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result404 = null;
              var resultData404 = _responseText === "" ? null : JSON.parse(_responseText, _this4.jsonParseReviver);
              result404 = ProblemDetails.fromJS(resultData404);
              return throwException("A server side error occurred.", status, _responseText, _headers, result404);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
      }, {
        key: "shipments_GetShipmentsByUser",
        value: function shipments_GetShipmentsByUser(id) {
          var _this5 = this;

          var url_ = this.baseUrl + "/Shipments/user/{id}";
          if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
          url_ = url_.replace("{id}", encodeURIComponent("" + id));
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this5.processShipments_GetShipmentsByUser(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
              try {
                return _this5.processShipments_GetShipmentsByUser(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
          }));
        }
      }, {
        key: "processShipments_GetShipmentsByUser",
        value: function processShipments_GetShipmentsByUser(response) {
          var _this6 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator4 = _createForOfIteratorHelper(response.headers.keys()),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var key = _step4.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }

          ;

          if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this6.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this6.jsonParseReviver);
              result403 = AppException.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this6.jsonParseReviver);
              result400 = ProblemDetails.fromJS(resultData400);
              return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this6.jsonParseReviver);

              if (Array.isArray(resultData200)) {
                result200 = [];

                var _iterator5 = _createForOfIteratorHelper(resultData200),
                    _step5;

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var item = _step5.value;
                    result200.push(Shipment.fromJS(item));
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
      }, {
        key: "shipments_GetById",
        value: function shipments_GetById(id) {
          var _this7 = this;

          var url_ = this.baseUrl + "/Shipments/{id}";
          if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
          url_ = url_.replace("{id}", encodeURIComponent("" + id));
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this7.processShipments_GetById(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
              try {
                return _this7.processShipments_GetById(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
          }));
        }
      }, {
        key: "processShipments_GetById",
        value: function processShipments_GetById(response) {
          var _this8 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator6 = _createForOfIteratorHelper(response.headers.keys()),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var key = _step6.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }

          ;

          if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this8.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this8.jsonParseReviver);
              result403 = ProblemDetails.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 404) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result404 = null;
              var resultData404 = _responseText === "" ? null : JSON.parse(_responseText, _this8.jsonParseReviver);
              result404 = ProblemDetails.fromJS(resultData404);
              return throwException("A server side error occurred.", status, _responseText, _headers, result404);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this8.jsonParseReviver);
              result200 = Shipment.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
      }, {
        key: "shipments_Update",
        value: function shipments_Update(id, shipment) {
          var _this9 = this;

          var url_ = this.baseUrl + "/Shipments/{id}";
          if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
          url_ = url_.replace("{id}", encodeURIComponent("" + id));
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(shipment);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this9.processShipments_Update(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
              try {
                return _this9.processShipments_Update(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
          }));
        }
      }, {
        key: "processShipments_Update",
        value: function processShipments_Update(response) {
          var _this10 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator7 = _createForOfIteratorHelper(response.headers.keys()),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var key = _step7.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }

          ;

          if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this10.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this10.jsonParseReviver);
              result403 = ProblemDetails.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this10.jsonParseReviver);
              result400 = ProblemDetails.fromJS(resultData400);
              return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
          } else if (status === 404) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result404 = null;
              var resultData404 = _responseText === "" ? null : JSON.parse(_responseText, _this10.jsonParseReviver);
              result404 = ProblemDetails.fromJS(resultData404);
              return throwException("A server side error occurred.", status, _responseText, _headers, result404);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
      }, {
        key: "shipments_Delete",
        value: function shipments_Delete(id) {
          var _this11 = this;

          var url_ = this.baseUrl + "/Shipments/{id}";
          if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
          url_ = url_.replace("{id}", encodeURIComponent("" + id));
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({})
          };
          return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this11.processShipments_Delete(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
              try {
                return _this11.processShipments_Delete(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
          }));
        }
      }, {
        key: "processShipments_Delete",
        value: function processShipments_Delete(response) {
          var _this12 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator8 = _createForOfIteratorHelper(response.headers.keys()),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var key = _step8.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }

          ;

          if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this12.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this12.jsonParseReviver);
              result403 = ProblemDetails.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
      }, {
        key: "shipments_GetShipmentsWithUsers",
        value: function shipments_GetShipmentsWithUsers(page, size, sort, search) {
          var _this13 = this;

          var url_ = this.baseUrl + "/Shipments/pendingShipments?";
          if (page === null) throw new Error("The parameter 'page' cannot be null.");else if (page !== undefined) url_ += "Page=" + encodeURIComponent("" + page) + "&";
          if (size === null) throw new Error("The parameter 'size' cannot be null.");else if (size !== undefined) url_ += "Size=" + encodeURIComponent("" + size) + "&";
          if (sort !== undefined) url_ += "Sort=" + encodeURIComponent("" + sort) + "&";
          if (search !== undefined) url_ += "Search=" + encodeURIComponent("" + search) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this13.processShipments_GetShipmentsWithUsers(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
              try {
                return _this13.processShipments_GetShipmentsWithUsers(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
          }));
        }
      }, {
        key: "processShipments_GetShipmentsWithUsers",
        value: function processShipments_GetShipmentsWithUsers(response) {
          var _this14 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator9 = _createForOfIteratorHelper(response.headers.keys()),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var key = _step9.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }

          ;

          if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this14.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this14.jsonParseReviver);
              result403 = AppException.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this14.jsonParseReviver);

              if (Array.isArray(resultData200)) {
                result200 = [];

                var _iterator10 = _createForOfIteratorHelper(resultData200),
                    _step10;

                try {
                  for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                    var item = _step10.value;
                    result200.push(AdminShipmentsModel.fromJS(item));
                  }
                } catch (err) {
                  _iterator10.e(err);
                } finally {
                  _iterator10.f();
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
      }, {
        key: "shipments_packageRecieved",
        value: function shipments_packageRecieved(shipmentId, recieved) {
          var _this15 = this;

          var url_ = this.baseUrl + "/Shipments/delivered?";
          if (shipmentId === null) throw new Error("The parameter 'shipmentId' cannot be null.");else if (shipmentId !== undefined) url_ += "shipmentId=" + encodeURIComponent("" + shipmentId) + "&";
          if (recieved === null) throw new Error("The parameter 'recieved' cannot be null.");else if (recieved !== undefined) url_ += "recieved=" + encodeURIComponent("" + recieved) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({})
          };
          return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this15.processShipments_packageRecieved(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
              try {
                return _this15.processShipments_packageRecieved(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
          }));
        }
      }, {
        key: "processShipments_packageRecieved",
        value: function processShipments_packageRecieved(response) {
          var _this16 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator11 = _createForOfIteratorHelper(response.headers.keys()),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var key = _step11.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }
          }

          ;

          if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this16.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this16.jsonParseReviver);
              result403 = ProblemDetails.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this16.jsonParseReviver);
              result400 = ProblemDetails.fromJS(resultData400);
              return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
      }, {
        key: "users_Authenticate",
        value: function users_Authenticate(model) {
          var _this17 = this;

          var url_ = this.baseUrl + "/Users/authenticate";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(model);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              "Content-Type": "application/json",
              "Accept": "application/json"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this17.processUsers_Authenticate(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
              try {
                return _this17.processUsers_Authenticate(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
          }));
        }
      }, {
        key: "processUsers_Authenticate",
        value: function processUsers_Authenticate(response) {
          var _this18 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator12 = _createForOfIteratorHelper(response.headers.keys()),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var key = _step12.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }
          }

          ;

          if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this18.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this18.jsonParseReviver);
              result403 = AppException.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this18.jsonParseReviver);
              result200 = UserModel.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this18.jsonParseReviver);
              result400 = AppException.fromJS(resultData400);
              return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
      }, {
        key: "users_Register",
        value: function users_Register(model) {
          var _this19 = this;

          var url_ = this.baseUrl + "/Users/register";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(model);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this19.processUsers_Register(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
              try {
                return _this19.processUsers_Register(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
          }));
        }
      }, {
        key: "processUsers_Register",
        value: function processUsers_Register(response) {
          var _this20 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator13 = _createForOfIteratorHelper(response.headers.keys()),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var key = _step13.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
          }

          ;

          if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this20.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this20.jsonParseReviver);
              result403 = AppException.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this20.jsonParseReviver);
              result400 = AppException.fromJS(resultData400);
              return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
      }, {
        key: "users_GetAll",
        value: function users_GetAll(page, size, sort, search) {
          var _this21 = this;

          var url_ = this.baseUrl + "/Users?";
          if (page === null) throw new Error("The parameter 'page' cannot be null.");else if (page !== undefined) url_ += "Page=" + encodeURIComponent("" + page) + "&";
          if (size === null) throw new Error("The parameter 'size' cannot be null.");else if (size !== undefined) url_ += "Size=" + encodeURIComponent("" + size) + "&";
          if (sort !== undefined) url_ += "Sort=" + encodeURIComponent("" + sort) + "&";
          if (search !== undefined) url_ += "Search=" + encodeURIComponent("" + search) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this21.processUsers_GetAll(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
              try {
                return _this21.processUsers_GetAll(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
          }));
        }
      }, {
        key: "processUsers_GetAll",
        value: function processUsers_GetAll(response) {
          var _this22 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator14 = _createForOfIteratorHelper(response.headers.keys()),
                _step14;

            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var key = _step14.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }
          }

          ;

          if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this22.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this22.jsonParseReviver);
              result403 = AppException.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this22.jsonParseReviver);

              if (Array.isArray(resultData200)) {
                result200 = [];

                var _iterator15 = _createForOfIteratorHelper(resultData200),
                    _step15;

                try {
                  for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                    var item = _step15.value;
                    result200.push(UserModel.fromJS(item));
                  }
                } catch (err) {
                  _iterator15.e(err);
                } finally {
                  _iterator15.f();
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
      }, {
        key: "users_GetUsersWithoutFilament",
        value: function users_GetUsersWithoutFilament(page, size, sort, search) {
          var _this23 = this;

          var url_ = this.baseUrl + "/Users/filament?";
          if (page === null) throw new Error("The parameter 'page' cannot be null.");else if (page !== undefined) url_ += "Page=" + encodeURIComponent("" + page) + "&";
          if (size === null) throw new Error("The parameter 'size' cannot be null.");else if (size !== undefined) url_ += "Size=" + encodeURIComponent("" + size) + "&";
          if (sort !== undefined) url_ += "Sort=" + encodeURIComponent("" + sort) + "&";
          if (search !== undefined) url_ += "Search=" + encodeURIComponent("" + search) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this23.processUsers_GetUsersWithoutFilament(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
              try {
                return _this23.processUsers_GetUsersWithoutFilament(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
          }));
        }
      }, {
        key: "processUsers_GetUsersWithoutFilament",
        value: function processUsers_GetUsersWithoutFilament(response) {
          var _this24 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator16 = _createForOfIteratorHelper(response.headers.keys()),
                _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var key = _step16.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }
          }

          ;

          if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this24.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this24.jsonParseReviver);
              result403 = AppException.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this24.jsonParseReviver);

              if (Array.isArray(resultData200)) {
                result200 = [];

                var _iterator17 = _createForOfIteratorHelper(resultData200),
                    _step17;

                try {
                  for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                    var item = _step17.value;
                    result200.push(UserModel.fromJS(item));
                  }
                } catch (err) {
                  _iterator17.e(err);
                } finally {
                  _iterator17.f();
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
      }, {
        key: "users_deliverFilament",
        value: function users_deliverFilament(model) {
          var _this25 = this;

          var url_ = this.baseUrl + "/Users/filament";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(model);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this25.processUsers_deliverFilament(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
              try {
                return _this25.processUsers_deliverFilament(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
          }));
        }
      }, {
        key: "processUsers_deliverFilament",
        value: function processUsers_deliverFilament(response) {
          var _this26 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator18 = _createForOfIteratorHelper(response.headers.keys()),
                _step18;

            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var key = _step18.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator18.e(err);
            } finally {
              _iterator18.f();
            }
          }

          ;

          if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this26.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this26.jsonParseReviver);
              result403 = ProblemDetails.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this26.jsonParseReviver);
              result400 = ProblemDetails.fromJS(resultData400);
              return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
      }, {
        key: "users_GetById",
        value: function users_GetById(id) {
          var _this27 = this;

          var url_ = this.baseUrl + "/Users/{id}";
          if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
          url_ = url_.replace("{id}", encodeURIComponent("" + id));
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this27.processUsers_GetById(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
              try {
                return _this27.processUsers_GetById(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
          }));
        }
      }, {
        key: "processUsers_GetById",
        value: function processUsers_GetById(response) {
          var _this28 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator19 = _createForOfIteratorHelper(response.headers.keys()),
                _step19;

            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                var key = _step19.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator19.e(err);
            } finally {
              _iterator19.f();
            }
          }

          ;

          if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this28.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this28.jsonParseReviver);
              result403 = ProblemDetails.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this28.jsonParseReviver);
              result200 = UserModel.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
      }, {
        key: "users_Update",
        value: function users_Update(id, model) {
          var _this29 = this;

          var url_ = this.baseUrl + "/Users/{id}";
          if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
          url_ = url_.replace("{id}", encodeURIComponent("" + id));
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(model);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this29.processUsers_Update(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
              try {
                return _this29.processUsers_Update(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
          }));
        }
      }, {
        key: "processUsers_Update",
        value: function processUsers_Update(response) {
          var _this30 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator20 = _createForOfIteratorHelper(response.headers.keys()),
                _step20;

            try {
              for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                var key = _step20.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator20.e(err);
            } finally {
              _iterator20.f();
            }
          }

          ;

          if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this30.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this30.jsonParseReviver);
              result403 = AppException.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this30.jsonParseReviver);
              result400 = AppException.fromJS(resultData400);
              return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
      }, {
        key: "users_Delete",
        value: function users_Delete(id) {
          var _this31 = this;

          var url_ = this.baseUrl + "/Users/{id}";
          if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
          url_ = url_.replace("{id}", encodeURIComponent("" + id));
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({})
          };
          return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this31.processUsers_Delete(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
              try {
                return _this31.processUsers_Delete(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
          }));
        }
      }, {
        key: "processUsers_Delete",
        value: function processUsers_Delete(response) {
          var _this32 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator21 = _createForOfIteratorHelper(response.headers.keys()),
                _step21;

            try {
              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                var key = _step21.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator21.e(err);
            } finally {
              _iterator21.f();
            }
          }

          ;

          if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this32.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this32.jsonParseReviver);
              result403 = ProblemDetails.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
      }]);

      return BackofficeApiService;
    }();

    BackofficeApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [BACKOFFICE_API_BASE_URL]
        }]
      }];
    };

    BackofficeApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(BACKOFFICE_API_BASE_URL)), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], String])], BackofficeApiService);

    var Exception = /*#__PURE__*/function () {
      function Exception(data) {
        _classCallCheck(this, Exception);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(Exception, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.stackTrace = _data["StackTrace"];
            this.message = _data["Message"];
            this.innerException = _data["InnerException"] ? Exception.fromJS(_data["InnerException"]) : undefined;
            this.source = _data["Source"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["StackTrace"] = this.stackTrace;
          data["Message"] = this.message;
          data["InnerException"] = this.innerException ? this.innerException.toJSON() : undefined;
          data["Source"] = this.source;
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new Exception();
          result.init(data);
          return result;
        }
      }]);

      return Exception;
    }();

    var AppException = /*#__PURE__*/function (_Exception) {
      _inherits(AppException, _Exception);

      var _super = _createSuper(AppException);

      function AppException(data) {
        _classCallCheck(this, AppException);

        return _super.call(this, data);
      }

      _createClass(AppException, [{
        key: "init",
        value: function init(_data) {
          _get(_getPrototypeOf(AppException.prototype), "init", this).call(this, _data);
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};

          _get(_getPrototypeOf(AppException.prototype), "toJSON", this).call(this, data);

          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new AppException();
          result.init(data);
          return result;
        }
      }]);

      return AppException;
    }(Exception);

    var ShipmentModel = /*#__PURE__*/function () {
      function ShipmentModel(data) {
        _classCallCheck(this, ShipmentModel);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(ShipmentModel, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.id = _data["id"];
            this.quantity = _data["quantity"];
            this.minQuantity = _data["minQuantity"];
            this.fileName = _data["fileName"];
            this.trackingNumber = _data["trackingNumber"];
            this.shippingCompany = _data["shippingCompany"];
            this.dateShipped = _data["dateShipped"] ? new Date(_data["dateShipped"].toString()) : undefined;
            this.recieved = _data["recieved"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["id"] = this.id;
          data["quantity"] = this.quantity;
          data["minQuantity"] = this.minQuantity;
          data["fileName"] = this.fileName;
          data["trackingNumber"] = this.trackingNumber;
          data["shippingCompany"] = this.shippingCompany;
          data["dateShipped"] = this.dateShipped ? this.dateShipped.toISOString() : undefined;
          data["recieved"] = this.recieved;
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new ShipmentModel();
          result.init(data);
          return result;
        }
      }]);

      return ShipmentModel;
    }();

    var ProblemDetails = /*#__PURE__*/function () {
      function ProblemDetails(data) {
        _classCallCheck(this, ProblemDetails);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(ProblemDetails, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.type = _data["type"];
            this.title = _data["title"];
            this.status = _data["status"];
            this.detail = _data["detail"];
            this.instance = _data["instance"];

            if (_data["extensions"]) {
              this.extensions = {};

              for (var key in _data["extensions"]) {
                if (_data["extensions"].hasOwnProperty(key)) this.extensions[key] = _data["extensions"][key];
              }
            }
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["type"] = this.type;
          data["title"] = this.title;
          data["status"] = this.status;
          data["detail"] = this.detail;
          data["instance"] = this.instance;

          if (this.extensions) {
            data["extensions"] = {};

            for (var key in this.extensions) {
              if (this.extensions.hasOwnProperty(key)) data["extensions"][key] = this.extensions[key];
            }
          }

          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new ProblemDetails();
          result.init(data);
          return result;
        }
      }]);

      return ProblemDetails;
    }();

    var Shipment = /*#__PURE__*/function () {
      function Shipment(data) {
        _classCallCheck(this, Shipment);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(Shipment, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.id = _data["id"];
            this.quantity = _data["quantity"];
            this.minQuantity = _data["minQuantity"];
            this.fileName = _data["fileName"];
            this.trackingNumber = _data["trackingNumber"];
            this.shippingCompany = _data["shippingCompany"];
            this.dateShipped = _data["dateShipped"] ? new Date(_data["dateShipped"].toString()) : undefined;
            this.recieved = _data["recieved"];
            this.userId = _data["userId"];
            this.user = _data["user"] ? User.fromJS(_data["user"]) : undefined;
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["id"] = this.id;
          data["quantity"] = this.quantity;
          data["minQuantity"] = this.minQuantity;
          data["fileName"] = this.fileName;
          data["trackingNumber"] = this.trackingNumber;
          data["shippingCompany"] = this.shippingCompany;
          data["dateShipped"] = this.dateShipped ? this.dateShipped.toISOString() : undefined;
          data["recieved"] = this.recieved;
          data["userId"] = this.userId;
          data["user"] = this.user ? this.user.toJSON() : undefined;
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new Shipment();
          result.init(data);
          return result;
        }
      }]);

      return Shipment;
    }();

    var User = /*#__PURE__*/function () {
      function User(data) {
        _classCallCheck(this, User);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(User, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.id = _data["id"];
            this.firstName = _data["firstName"];
            this.lastName = _data["lastName"];
            this.username = _data["username"];
            this.phoneNumber = _data["phoneNumber"];
            this.email = _data["email"];
            this.passwordHash = _data["passwordHash"];
            this.passwordSalt = _data["passwordSalt"];
            this.role = _data["role"];
            this.token = _data["token"];
            this.address = _data["address"];
            this.productionDate = _data["productionDate"] ? new Date(_data["productionDate"].toString()) : undefined;
            this.printerActive = _data["printerActive"];
            this.printerModel = _data["printerModel"];
            this.batchRequiredTime = _data["batchRequiredTime"];
            this.shippedQuantity = _data["shippedQuantity"];
            this.latestShippedDate = _data["latestShippedDate"] ? new Date(_data["latestShippedDate"].toString()) : undefined;
            this.needsFilament = _data["needsFilament"];

            if (Array.isArray(_data["shipments"])) {
              this.shipments = [];

              var _iterator22 = _createForOfIteratorHelper(_data["shipments"]),
                  _step22;

              try {
                for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                  var item = _step22.value;
                  this.shipments.push(Shipment.fromJS(item));
                }
              } catch (err) {
                _iterator22.e(err);
              } finally {
                _iterator22.f();
              }
            }
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["id"] = this.id;
          data["firstName"] = this.firstName;
          data["lastName"] = this.lastName;
          data["username"] = this.username;
          data["phoneNumber"] = this.phoneNumber;
          data["email"] = this.email;
          data["passwordHash"] = this.passwordHash;
          data["passwordSalt"] = this.passwordSalt;
          data["role"] = this.role;
          data["token"] = this.token;
          data["address"] = this.address;
          data["productionDate"] = this.productionDate ? this.productionDate.toISOString() : undefined;
          data["printerActive"] = this.printerActive;
          data["printerModel"] = this.printerModel;
          data["batchRequiredTime"] = this.batchRequiredTime;
          data["shippedQuantity"] = this.shippedQuantity;
          data["latestShippedDate"] = this.latestShippedDate ? this.latestShippedDate.toISOString() : undefined;
          data["needsFilament"] = this.needsFilament;

          if (Array.isArray(this.shipments)) {
            data["shipments"] = [];

            var _iterator23 = _createForOfIteratorHelper(this.shipments),
                _step23;

            try {
              for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                var item = _step23.value;
                data["shipments"].push(item.toJSON());
              }
            } catch (err) {
              _iterator23.e(err);
            } finally {
              _iterator23.f();
            }
          }

          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new User();
          result.init(data);
          return result;
        }
      }]);

      return User;
    }();

    var CreateShipmentModel = /*#__PURE__*/function () {
      function CreateShipmentModel(data) {
        _classCallCheck(this, CreateShipmentModel);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(CreateShipmentModel, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.id = _data["id"];
            this.quantity = _data["quantity"];
            this.fileName = _data["fileName"];
            this.minQuantity = _data["minQuantity"];
            this.trackingNumber = _data["trackingNumber"];
            this.shippingCompany = _data["shippingCompany"];
            this.dateShipped = _data["dateShipped"] ? new Date(_data["dateShipped"].toString()) : undefined;
            this.recieved = _data["recieved"];
            this.needsFilament = _data["needsFilament"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["id"] = this.id;
          data["quantity"] = this.quantity;
          data["fileName"] = this.fileName;
          data["minQuantity"] = this.minQuantity;
          data["trackingNumber"] = this.trackingNumber;
          data["shippingCompany"] = this.shippingCompany;
          data["dateShipped"] = this.dateShipped ? this.dateShipped.toISOString() : undefined;
          data["recieved"] = this.recieved;
          data["needsFilament"] = this.needsFilament;
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new CreateShipmentModel();
          result.init(data);
          return result;
        }
      }]);

      return CreateShipmentModel;
    }();

    var AdminShipmentsModel = /*#__PURE__*/function () {
      function AdminShipmentsModel(data) {
        _classCallCheck(this, AdminShipmentsModel);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(AdminShipmentsModel, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.shipmentId = _data["shipmentId"];
            this.userId = _data["userId"];
            this.firstName = _data["firstName"];
            this.lastName = _data["lastName"];
            this.shippingCompany = _data["shippingCompany"];
            this.trackingNumber = _data["trackingNumber"];
            this.printerActive = _data["printerActive"];
            this.shippedQuantity = _data["shippedQuantity"];
            this.latestShippedDate = _data["latestShippedDate"] ? new Date(_data["latestShippedDate"].toString()) : undefined;
            this.needsFilament = _data["needsFilament"];
            this.recieved = _data["recieved"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["shipmentId"] = this.shipmentId;
          data["userId"] = this.userId;
          data["firstName"] = this.firstName;
          data["lastName"] = this.lastName;
          data["shippingCompany"] = this.shippingCompany;
          data["trackingNumber"] = this.trackingNumber;
          data["printerActive"] = this.printerActive;
          data["shippedQuantity"] = this.shippedQuantity;
          data["latestShippedDate"] = this.latestShippedDate ? this.latestShippedDate.toISOString() : undefined;
          data["needsFilament"] = this.needsFilament;
          data["recieved"] = this.recieved;
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new AdminShipmentsModel();
          result.init(data);
          return result;
        }
      }]);

      return AdminShipmentsModel;
    }();

    var UserModel = /*#__PURE__*/function () {
      function UserModel(data) {
        _classCallCheck(this, UserModel);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(UserModel, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.id = _data["id"];
            this.firstName = _data["firstName"];
            this.lastName = _data["lastName"];
            this.username = _data["username"];
            this.address = _data["address"];
            this.email = _data["email"];
            this.phoneNumber = _data["phoneNumber"];
            this.role = _data["role"];
            this.token = _data["token"];
            this.productionDate = _data["productionDate"] ? new Date(_data["productionDate"].toString()) : undefined;
            this.printerActive = _data["printerActive"];
            this.printerModel = _data["printerModel"];
            this.shippedQuantity = _data["shippedQuantity"];
            this.latestShippedDate = _data["latestShippedDate"] ? new Date(_data["latestShippedDate"].toString()) : undefined;
            this.needsFilament = _data["needsFilament"];
            this.batchRequiredTime = _data["batchRequiredTime"];

            if (Array.isArray(_data["shipments"])) {
              this.shipments = [];

              var _iterator24 = _createForOfIteratorHelper(_data["shipments"]),
                  _step24;

              try {
                for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                  var item = _step24.value;
                  this.shipments.push(Shipment.fromJS(item));
                }
              } catch (err) {
                _iterator24.e(err);
              } finally {
                _iterator24.f();
              }
            }
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["id"] = this.id;
          data["firstName"] = this.firstName;
          data["lastName"] = this.lastName;
          data["username"] = this.username;
          data["address"] = this.address;
          data["email"] = this.email;
          data["phoneNumber"] = this.phoneNumber;
          data["role"] = this.role;
          data["token"] = this.token;
          data["productionDate"] = this.productionDate ? this.productionDate.toISOString() : undefined;
          data["printerActive"] = this.printerActive;
          data["printerModel"] = this.printerModel;
          data["shippedQuantity"] = this.shippedQuantity;
          data["latestShippedDate"] = this.latestShippedDate ? this.latestShippedDate.toISOString() : undefined;
          data["needsFilament"] = this.needsFilament;
          data["batchRequiredTime"] = this.batchRequiredTime;

          if (Array.isArray(this.shipments)) {
            data["shipments"] = [];

            var _iterator25 = _createForOfIteratorHelper(this.shipments),
                _step25;

            try {
              for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                var item = _step25.value;
                data["shipments"].push(item.toJSON());
              }
            } catch (err) {
              _iterator25.e(err);
            } finally {
              _iterator25.f();
            }
          }

          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new UserModel();
          result.init(data);
          return result;
        }
      }]);

      return UserModel;
    }();

    var AuthenticateModel = /*#__PURE__*/function () {
      function AuthenticateModel(data) {
        _classCallCheck(this, AuthenticateModel);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(AuthenticateModel, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.username = _data["username"];
            this.password = _data["password"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["username"] = this.username;
          data["password"] = this.password;
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new AuthenticateModel();
          result.init(data);
          return result;
        }
      }]);

      return AuthenticateModel;
    }();

    var RegisterModel = /*#__PURE__*/function () {
      function RegisterModel(data) {
        _classCallCheck(this, RegisterModel);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(RegisterModel, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.firstName = _data["firstName"];
            this.lastName = _data["lastName"];
            this.username = _data["username"];
            this.email = _data["email"];
            this.phoneNumber = _data["phoneNumber"];
            this.password = _data["password"];
            this.address = _data["address"];
            this.printerActive = _data["printerActive"];
            this.printerModel = _data["printerModel"];
            this.batchRequiredTime = _data["batchRequiredTime"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["firstName"] = this.firstName;
          data["lastName"] = this.lastName;
          data["username"] = this.username;
          data["email"] = this.email;
          data["phoneNumber"] = this.phoneNumber;
          data["password"] = this.password;
          data["address"] = this.address;
          data["printerActive"] = this.printerActive;
          data["printerModel"] = this.printerModel;
          data["batchRequiredTime"] = this.batchRequiredTime;
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new RegisterModel();
          result.init(data);
          return result;
        }
      }]);

      return RegisterModel;
    }();

    var UpdateModel = /*#__PURE__*/function () {
      function UpdateModel(data) {
        _classCallCheck(this, UpdateModel);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(UpdateModel, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.firstName = _data["firstName"];
            this.lastName = _data["lastName"];
            this.username = _data["username"];
            this.email = _data["email"];
            this.phoneNumber = _data["phoneNumber"];
            this.role = _data["role"];
            this.password = _data["password"];
            this.newPassword = _data["newPassword"];
            this.address = _data["address"];
            this.printerActive = _data["printerActive"];
            this.printerModel = _data["printerModel"];
            this.batchRequiredTime = _data["batchRequiredTime"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["firstName"] = this.firstName;
          data["lastName"] = this.lastName;
          data["username"] = this.username;
          data["email"] = this.email;
          data["phoneNumber"] = this.phoneNumber;
          data["role"] = this.role;
          data["password"] = this.password;
          data["newPassword"] = this.newPassword;
          data["address"] = this.address;
          data["printerActive"] = this.printerActive;
          data["printerModel"] = this.printerModel;
          data["batchRequiredTime"] = this.batchRequiredTime;
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new UpdateModel();
          result.init(data);
          return result;
        }
      }]);

      return UpdateModel;
    }();

    var UserFilamentModel = /*#__PURE__*/function () {
      function UserFilamentModel(data) {
        _classCallCheck(this, UserFilamentModel);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(UserFilamentModel, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.id = _data["id"];
            this.firstName = _data["firstName"];
            this.lastName = _data["lastName"];
            this.needsFilament = _data["needsFilament"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["id"] = this.id;
          data["firstName"] = this.firstName;
          data["lastName"] = this.lastName;
          data["needsFilament"] = this.needsFilament;
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new UserFilamentModel();
          result.init(data);
          return result;
        }
      }]);

      return UserFilamentModel;
    }();

    var SwaggerException = /*#__PURE__*/function (_Error) {
      _inherits(SwaggerException, _Error);

      var _super2 = _createSuper(SwaggerException);

      function SwaggerException(message, status, response, headers, result) {
        var _this33;

        _classCallCheck(this, SwaggerException);

        _this33 = _super2.call(this);
        _this33.isSwaggerException = true;
        _this33.message = message;
        _this33.status = status;
        _this33.response = response;
        _this33.headers = headers;
        _this33.result = result;
        return _this33;
      }

      _createClass(SwaggerException, null, [{
        key: "isSwaggerException",
        value: function isSwaggerException(obj) {
          return obj.isSwaggerException === true;
        }
      }]);

      return SwaggerException;
    }( /*#__PURE__*/_wrapNativeSuper(Error));

    function throwException(message, status, response, headers, result) {
      if (result !== null && result !== undefined) return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(result);else return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new SwaggerException(message, status, response, headers, null));
    }

    function blobToText(blob) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
        if (!blob) {
          observer.next("");
          observer.complete();
        } else {
          var reader = new FileReader();

          reader.onload = function (event) {
            observer.next(event.target.result);
            observer.complete();
          };

          reader.readAsText(blob);
        }
      });
    }
    /***/

  },

  /***/
  "./src/app/_helpers/error.interceptor.ts":
  /*!***********************************************!*\
    !*** ./src/app/_helpers/error.interceptor.ts ***!
    \***********************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcApp_helpersErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");

    var ErrorInterceptor = /*#__PURE__*/function () {
      function ErrorInterceptor(authenticationService) {
        _classCallCheck(this, ErrorInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this34 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if ([401, 403].indexOf(err.status) !== -1) {
              // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
              _this34.authenticationService.logout();

              location.reload(true);
            }

            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ctorParameters = function () {
      return [{
        type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }];
    };

    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/_helpers/index.ts":
  /*!***********************************!*\
    !*** ./src/app/_helpers/index.ts ***!
    \***********************************/

  /*! exports provided: AuthGuard, BACKOFFICE_API_BASE_URL, BackofficeApiService, Exception, AppException, ShipmentModel, ProblemDetails, Shipment, User, CreateShipmentModel, AdminShipmentsModel, UserModel, AuthenticateModel, RegisterModel, UpdateModel, UserFilamentModel, SwaggerException, ErrorInterceptor, JwtInterceptor */

  /***/
  function srcApp_helpersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/_helpers/auth.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"];
    });
    /* harmony import */


    var _backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./backend */
    "./src/app/_helpers/backend.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BACKOFFICE_API_BASE_URL", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_2__["BACKOFFICE_API_BASE_URL"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BackofficeApiService", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_2__["BackofficeApiService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Exception", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_2__["Exception"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppException", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_2__["AppException"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShipmentModel", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_2__["ShipmentModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProblemDetails", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_2__["ProblemDetails"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Shipment", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_2__["Shipment"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_2__["User"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CreateShipmentModel", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_2__["CreateShipmentModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AdminShipmentsModel", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_2__["AdminShipmentsModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserModel", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_2__["UserModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthenticateModel", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_2__["AuthenticateModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RegisterModel", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_2__["RegisterModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UpdateModel", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_2__["UpdateModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserFilamentModel", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_2__["UserFilamentModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SwaggerException", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_2__["SwaggerException"];
    });
    /* harmony import */


    var _error_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./error.interceptor */
    "./src/app/_helpers/error.interceptor.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return _error_interceptor__WEBPACK_IMPORTED_MODULE_3__["ErrorInterceptor"];
    });
    /* harmony import */


    var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./jwt.interceptor */
    "./src/app/_helpers/jwt.interceptor.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptor"];
    });
    /***/

  },

  /***/
  "./src/app/_helpers/jwt.interceptor.ts":
  /*!*********************************************!*\
    !*** ./src/app/_helpers/jwt.interceptor.ts ***!
    \*********************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcApp_helpersJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");

    var JwtInterceptor = /*#__PURE__*/function () {
      function JwtInterceptor(authenticationService) {
        _classCallCheck(this, JwtInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          // add auth header with jwt if user is logged in and request is to api url
          var currentUser = this.authenticationService.currentUserValue;
          var isLoggedIn = currentUser && currentUser.token;
          var isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);

          if (isLoggedIn && isApiUrl) {
            request = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(currentUser.token)
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor.ctorParameters = function () {
      return [{
        type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])], JwtInterceptor);
    /***/
  },

  /***/
  "./src/app/_helpers/list-view/list-view.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/_helpers/list-view/list-view.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcApp_helpersListViewListViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".search {\n  padding: 8px;\n  margin: 15px auto;\n  font-size: 14px;\n  display: block;\n  background: transparent;\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid #5985ee;\n}\n\n@media screen and (max-width: 800px) {\n  .desktop-hidden {\n    display: initial;\n  }\n\n  .mobile-hidden {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .desktop-hidden {\n    display: none;\n  }\n\n  .mobile-hidden {\n    display: initial;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvbGlzdC12aWV3L0M6XFxVc2Vyc1xcU3RyYXRvc1BhbGFpb2xvZ29zXFxzb3VyY2VcXHJlcG9zXFxQdDRyXFxIZWxsYXMtQ09WSUQxOS0zRC1QcmludGluZy1JbnZlbnRvcnkvc3JjXFxhcHBcXF9oZWxwZXJzXFxsaXN0LXZpZXdcXGxpc3Qtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvX2hlbHBlcnMvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNFLGdCQUFBO0VDQ0o7O0VEQ0U7SUFDRSxhQUFBO0VDRUo7QUFDRjs7QURBRTtFQUNFO0lBQ0UsYUFBQTtFQ0VKOztFREFFO0lBQ0UsZ0JBQUE7RUNHSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvX2hlbHBlcnMvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzU5ODVlZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5kZXNrdG9wLWhpZGRlbiB7XHJcbiAgICAgIGRpc3BsYXk6IGluaXRpYWw7XHJcbiAgICB9XHJcbiAgICAubW9iaWxlLWhpZGRlbiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuZGVza3RvcC1oaWRkZW4ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm1vYmlsZS1oaWRkZW4ge1xyXG4gICAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG4gICAgfVxyXG4gIH0iLCIuc2VhcmNoIHtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW46IDE1cHggYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTk4NWVlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuZGVza3RvcC1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gIH1cblxuICAubW9iaWxlLWhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLmRlc2t0b3AtaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1vYmlsZS1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/_helpers/list-view/list-view.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/_helpers/list-view/list-view.component.ts ***!
    \***********************************************************/

  /*! exports provided: ListViewComponent */

  /***/
  function srcApp_helpersListViewListViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListViewComponent", function () {
      return ListViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _models_list_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./models/list-view */
    "./src/app/_helpers/list-view/models/list-view.ts");
    /* harmony import */


    var _models_query_parameters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./models/query-parameters */
    "./src/app/_helpers/list-view/models/query-parameters.ts");
    /* harmony import */


    var _models_search_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./models/search-event */
    "./src/app/_helpers/list-view/models/search-event.ts");

    var ListViewComponent = /*#__PURE__*/function (_models_list_view__WE) {
      _inherits(ListViewComponent, _models_list_view__WE);

      var _super3 = _createSuper(ListViewComponent);

      function ListViewComponent(route, router) {
        var _this35;

        _classCallCheck(this, ListViewComponent);

        _this35 = _super3.call(this);
        _this35.route = route;
        _this35.router = router;
        return _this35;
      }

      _createClass(ListViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this36 = this;

          this.queryParamsSubscription = this.route.queryParams.subscribe(function (params) {
            _this36.parseQueryParams(params);

            _this36.doSearch();
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this._filterInput.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            return event.target.value; // Get input value.
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (inputValue) {
            return inputValue.length >= _this36.minimumSearchCharacters || inputValue.length === 0;
          }), // If character length greater than minimumSearchCharacters setting.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(1000), // Time in milliseconds between key events.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])() // If previous query is different from current.
          ).subscribe(function (_) {
            _this36.setFilter();
          });
          this.showFooter ? this.showFooter = 0 : this.showFooter = 50;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.queryParamsSubscription) {
            this.queryParamsSubscription.unsubscribe();
          }
        }
      }, {
        key: "setPage",
        value: function setPage(event) {
          this.page = event.offset + 1;
          this.changeSearchLocation();
        }
      }, {
        key: "setSort",
        value: function setSort(event) {
          var sort = event.sorts[event.sorts.length - 1];
          this.sortField = sort.prop;
          this.sortDirection = sort.dir === 'asc' ? _models_list_view__WEBPACK_IMPORTED_MODULE_5__["SortDirection"].Asc : _models_list_view__WEBPACK_IMPORTED_MODULE_5__["SortDirection"].Desc;
          this.changeSearchLocation();
        }
      }, {
        key: "setFilter",
        value: function setFilter() {
          if (this.searchTerm.length === 0) {
            this.searchTerm = undefined;
          }

          this.page = 1;
          this.changeSearchLocation();
        }
      }, {
        key: "parseQueryParams",
        value: function parseQueryParams(params) {
          this.page = +(params[_models_query_parameters__WEBPACK_IMPORTED_MODULE_6__["QueryParameters"].PAGE] || 1);
          this.dataTable.offset = this.page - 1;
          this.rowsPerPage = +(params[_models_query_parameters__WEBPACK_IMPORTED_MODULE_6__["QueryParameters"].PAGE_SIZE] || this.rowsPerPage || this.defaultRowsPerPage);
          this.sortField = params[_models_query_parameters__WEBPACK_IMPORTED_MODULE_6__["QueryParameters"].SORT_FIELD] || this.defaultSortField || undefined;
          this.sortDirection = params[_models_query_parameters__WEBPACK_IMPORTED_MODULE_6__["QueryParameters"].SORT_DIRECTION] || this.defaultSortDirection || undefined;

          if (this.sortField) {
            this.dataTable.sorts.splice(0, this.dataTable.sorts.length);
            this.dataTable.sorts.push({
              prop: this.sortField,
              dir: this.sortDirection.toLowerCase() || 'asc'
            });
          }

          this.searchTerm = params[_models_query_parameters__WEBPACK_IMPORTED_MODULE_6__["QueryParameters"].SEARCH_TERM] || undefined;
        }
      }, {
        key: "changeSearchLocation",
        value: function changeSearchLocation() {
          var params = {};
          params[_models_query_parameters__WEBPACK_IMPORTED_MODULE_6__["QueryParameters"].PAGE] = this.page;
          params[_models_query_parameters__WEBPACK_IMPORTED_MODULE_6__["QueryParameters"].PAGE_SIZE] = this.rowsPerPage || this.defaultRowsPerPage;
          params[_models_query_parameters__WEBPACK_IMPORTED_MODULE_6__["QueryParameters"].SORT_FIELD] = this.sortField || this.defaultSortField || undefined;
          params[_models_query_parameters__WEBPACK_IMPORTED_MODULE_6__["QueryParameters"].SORT_DIRECTION] = this.sortDirection;
          params[_models_query_parameters__WEBPACK_IMPORTED_MODULE_6__["QueryParameters"].SEARCH_TERM] = this.searchTerm;
          this.router.navigate([], {
            relativeTo: this.route,
            queryParams: params
          });
        }
      }, {
        key: "doSearch",
        value: function doSearch() {
          this.search.emit(new _models_search_event__WEBPACK_IMPORTED_MODULE_7__["SearchEvent"](this.page, this.rowsPerPage, this.sortField ? "".concat(this.sortField).concat(this.sortDirection === _models_list_view__WEBPACK_IMPORTED_MODULE_5__["SortDirection"].Asc ? '+' : '-') : undefined, this.searchTerm || undefined));
        }
      }, {
        key: "isEmptyObject",
        value: function isEmptyObject(object) {
          return Object.entries(object).length === 0 && object.constructor === Object;
        }
      }]);

      return ListViewComponent;
    }(_models_list_view__WEBPACK_IMPORTED_MODULE_5__["ListView"]);

    ListViewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filterInput', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], ListViewComponent.prototype, "_filterInput", void 0);
    ListViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_helpers/list-view/list-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-view.component.scss */
      "./src/app/_helpers/list-view/list-view.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ListViewComponent);
    /***/
  },

  /***/
  "./src/app/_helpers/list-view/models/list-view.ts":
  /*!********************************************************!*\
    !*** ./src/app/_helpers/list-view/models/list-view.ts ***!
    \********************************************************/

  /*! exports provided: ListView, SortDirection */

  /***/
  function srcApp_helpersListViewModelsListViewTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListView", function () {
      return ListView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortDirection", function () {
      return SortDirection;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");

    var ListView = function ListView() {
      _classCallCheck(this, ListView);

      this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.isLoading = false;
      this.clientSide = false;
      this.canFilter = false;
      this.minimumSearchCharacters = 3;
      this.page = 1;
      this.defaultRowsPerPage = 20;
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataTable', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"])], ListView.prototype, "dataTable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('emailTemplate', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], ListView.prototype, "emailTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('phoneNumberTemplate', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], ListView.prototype, "phoneNumberTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dateTimeTemplate', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], ListView.prototype, "dateTimeTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dateTemplate', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], ListView.prototype, "dateTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('booleanTemplate', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], ListView.prototype, "booleanTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('usernameTemplate', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], ListView.prototype, "usernameTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], ListView.prototype, "search", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], ListView.prototype, "rows", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], ListView.prototype, "rowsPerPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], ListView.prototype, "columns", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], ListView.prototype, "count", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ListView.prototype, "defaultSortField", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ListView.prototype, "defaultSortDirection", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ListView.prototype, "isLoading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ListView.prototype, "clientSide", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ListView.prototype, "canFilter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ListView.prototype, "emptyMessage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ListView.prototype, "showFooter", void 0);
    var SortDirection;

    (function (SortDirection) {
      SortDirection["Asc"] = "Asc";
      SortDirection["Desc"] = "Desc";
    })(SortDirection || (SortDirection = {}));
    /***/

  },

  /***/
  "./src/app/_helpers/list-view/models/query-parameters.ts":
  /*!***************************************************************!*\
    !*** ./src/app/_helpers/list-view/models/query-parameters.ts ***!
    \***************************************************************/

  /*! exports provided: QueryParameters */

  /***/
  function srcApp_helpersListViewModelsQueryParametersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QueryParameters", function () {
      return QueryParameters;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // tslint:disable-next-line: no-namespace


    var QueryParameters;

    (function (QueryParameters) {
      QueryParameters.PAGE_SIZE = 'size';
      QueryParameters.PAGE = 'page';
      QueryParameters.SEARCH_TERM = 'query';
      QueryParameters.SORT_FIELD = 'sort';
      QueryParameters.SORT_DIRECTION = 'dir';
    })(QueryParameters || (QueryParameters = {}));
    /***/

  },

  /***/
  "./src/app/_helpers/list-view/models/search-event.ts":
  /*!***********************************************************!*\
    !*** ./src/app/_helpers/list-view/models/search-event.ts ***!
    \***********************************************************/

  /*! exports provided: SearchEvent */

  /***/
  function srcApp_helpersListViewModelsSearchEventTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchEvent", function () {
      return SearchEvent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SearchEvent = function SearchEvent(page, pageSize, sortField, searchTerm) {
      _classCallCheck(this, SearchEvent);

      this.page = page;
      this.pageSize = pageSize;
      this.sortField = sortField;
      this.searchTerm = searchTerm;
    };
    /***/

  },

  /***/
  "./src/app/_models/index.ts":
  /*!**********************************!*\
    !*** ./src/app/_models/index.ts ***!
    \**********************************/

  /*! exports provided: User, Role, Shipment */

  /***/
  function srcApp_modelsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./role */
    "./src/app/_models/role.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Role", function () {
      return _role__WEBPACK_IMPORTED_MODULE_1__["Role"];
    });
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user */
    "./src/app/_models/user.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return _user__WEBPACK_IMPORTED_MODULE_2__["User"];
    });
    /* harmony import */


    var _shipment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shipment */
    "./src/app/_models/shipment.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Shipment", function () {
      return _shipment__WEBPACK_IMPORTED_MODULE_3__["Shipment"];
    });
    /***/

  },

  /***/
  "./src/app/_models/role.ts":
  /*!*********************************!*\
    !*** ./src/app/_models/role.ts ***!
    \*********************************/

  /*! exports provided: Role */

  /***/
  function srcApp_modelsRoleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Role", function () {
      return Role;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Role;

    (function (Role) {
      Role["User"] = "User";
      Role["Admin"] = "Admin";
    })(Role || (Role = {}));
    /***/

  },

  /***/
  "./src/app/_models/shipment.ts":
  /*!*************************************!*\
    !*** ./src/app/_models/shipment.ts ***!
    \*************************************/

  /*! exports provided: Shipment */

  /***/
  function srcApp_modelsShipmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Shipment", function () {
      return Shipment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Shipment = function Shipment() {
      _classCallCheck(this, Shipment);
    };
    /***/

  },

  /***/
  "./src/app/_models/user.ts":
  /*!*********************************!*\
    !*** ./src/app/_models/user.ts ***!
    \*********************************/

  /*! exports provided: User */

  /***/
  function srcApp_modelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/app/_services/authentication.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/_services/authentication.service.ts ***!
    \*****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcApp_servicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _helpers_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../_helpers/backend */
    "./src/app/_helpers/backend.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(backoffice) {
        _classCallCheck(this, AuthenticationService);

        this.backoffice = backoffice;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(AuthenticationService, [{
        key: "login",
        value: function login(model) {
          var _this37 = this;

          return this.backoffice.users_Authenticate(model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));

              _this37.currentUserSubject.next(user);
            }

            return user;
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          // remove user from local storage to log user out
          localStorage.removeItem('currentUser');
          this.currentUserSubject.next(null);
        }
      }, {
        key: "register",
        value: function register(model) {
          return this.backoffice.users_Register(model).pipe(function (error) {
            return error;
          });
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _helpers_backend__WEBPACK_IMPORTED_MODULE_1__["BackofficeApiService"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_helpers_backend__WEBPACK_IMPORTED_MODULE_1__["BackofficeApiService"]])], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/_services/index.ts":
  /*!************************************!*\
    !*** ./src/app/_services/index.ts ***!
    \************************************/

  /*! exports provided: AuthenticationService, UserService, ShipmentService */

  /***/
  function srcApp_servicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/_services/authentication.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"];
    });
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/_services/user.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"];
    });
    /* harmony import */


    var _shipment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shipment.service */
    "./src/app/_services/shipment.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShipmentService", function () {
      return _shipment_service__WEBPACK_IMPORTED_MODULE_3__["ShipmentService"];
    });
    /***/

  },

  /***/
  "./src/app/_services/shipment.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/_services/shipment.service.ts ***!
    \***********************************************/

  /*! exports provided: ShipmentService */

  /***/
  function srcApp_servicesShipmentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShipmentService", function () {
      return ShipmentService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_helpers */
    "./src/app/_helpers/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ShipmentService = /*#__PURE__*/function () {
      function ShipmentService(backoffice, _authenticationService, _shipmentervice) {
        _classCallCheck(this, ShipmentService);

        this.backoffice = backoffice;
        this._authenticationService = _authenticationService;
        this._shipmentervice = _shipmentervice;
      }

      _createClass(ShipmentService, [{
        key: "getAll",
        value: function getAll(event) {
          return this.backoffice.shipments_GetAll(event.page, event.pageSize, event.sortField, event.searchTerm);
        }
      }, {
        key: "getById",
        value: function getById(id) {
          var _this38 = this;

          if (!this._shipment || id !== null) {
            this._shipment = new rxjs__WEBPACK_IMPORTED_MODULE_4__["AsyncSubject"]();
            this.backoffice.shipments_GetById(id).subscribe(function (shipment) {
              _this38._shipment.next(shipment);

              _this38._shipment.complete();
            });
          }

          return this._shipment;
        }
      }, {
        key: "getShipmentsByUser",
        value: function getShipmentsByUser(id) {
          var _this39 = this;

          if (!this._shipments || id !== null) {
            this._shipments = new rxjs__WEBPACK_IMPORTED_MODULE_4__["AsyncSubject"]();
            this.backoffice.shipments_GetShipmentsByUser(id).subscribe(function (shipment) {
              _this39._shipments.next(shipment);

              _this39._shipments.complete();
            });
          }

          return this._shipments;
        }
      }, {
        key: "createShipment",
        value: function createShipment(shipment) {
          return this.backoffice.shipments_Create(shipment);
        }
      }, {
        key: "getUsersWithShipments",
        value: function getUsersWithShipments(event) {
          return this.backoffice.shipments_GetShipmentsWithUsers(event.page, event.pageSize, event.sortField, event.searchTerm);
        }
      }, {
        key: "packageRecieved",
        value: function packageRecieved(packageId, recieved) {
          return this.backoffice.shipments_packageRecieved(packageId, recieved);
        }
      }]);

      return ShipmentService;
    }();

    ShipmentService.ctorParameters = function () {
      return [{
        type: _app_helpers__WEBPACK_IMPORTED_MODULE_2__["BackofficeApiService"]
      }, {
        type: _app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
      }, {
        type: _app_services__WEBPACK_IMPORTED_MODULE_1__["UserService"]
      }];
    };

    ShipmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_helpers__WEBPACK_IMPORTED_MODULE_2__["BackofficeApiService"], _app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _app_services__WEBPACK_IMPORTED_MODULE_1__["UserService"]])], ShipmentService);
    /***/
  },

  /***/
  "./src/app/_services/user.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_services/user.service.ts ***!
    \*******************************************/

  /*! exports provided: UserService */

  /***/
  function srcApp_servicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _helpers_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../_helpers/backend */
    "./src/app/_helpers/backend.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(backoffice) {
        _classCallCheck(this, UserService);

        this.backoffice = backoffice;
      }

      _createClass(UserService, [{
        key: "getAll",
        value: function getAll(event) {
          return this.backoffice.users_GetAll(event.page, event.pageSize, event.sortField, event.searchTerm);
        }
      }, {
        key: "GetUsersWithoutFilament",
        value: function GetUsersWithoutFilament(event) {
          return this.backoffice.users_GetUsersWithoutFilament(event.page, event.pageSize, event.sortField, event.searchTerm);
        }
      }, {
        key: "getById",
        value: function getById(id) {
          var _this40 = this;

          if (!this._users || id !== null) {
            this._users = new rxjs__WEBPACK_IMPORTED_MODULE_3__["AsyncSubject"]();
            this.backoffice.users_GetById(id).subscribe(function (user) {
              _this40._users.next(user);

              _this40._users.complete();
            });
          }

          return this._users;
        }
      }, {
        key: "update",
        value: function update(userId, model) {
          return this.backoffice.users_Update(userId, model).pipe(function (error) {
            return error;
          });
        }
      }, {
        key: "deliverFilament",
        value: function deliverFilament(user) {
          return this.backoffice.users_deliverFilament(user);
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _helpers_backend__WEBPACK_IMPORTED_MODULE_1__["BackofficeApiService"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_helpers_backend__WEBPACK_IMPORTED_MODULE_1__["BackofficeApiService"]])], UserService);
    /***/
  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent(userService, shipmentService, authenticationService) {
        _classCallCheck(this, AdminComponent);

        this.userService = userService;
        this.shipmentService = shipmentService;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.deliveryLoading = false;
        this.pendingUsers = new Array();
        this.columns = [];
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loading = true;
          this.columns = [{
            prop: 'firstName',
            name: 'First Name',
            draggable: false,
            canAutoResize: false,
            sortable: true,
            resizeable: false
          }, {
            prop: 'lastName',
            name: 'Last Name',
            draggable: false,
            canAutoResize: true,
            sortable: true,
            resizeable: false
          }, {
            prop: 'shippedQuantity',
            name: 'Total Shipped',
            draggable: false,
            canAutoResize: true,
            sortable: true,
            resizeable: false
          }, {
            prop: 'shippingCompany',
            name: 'Company',
            draggable: false,
            canAutoResize: true,
            sortable: true,
            resizeable: false
          }, {
            prop: 'trackingNumber',
            name: 'Tracking Number',
            draggable: false,
            canAutoResize: true,
            sortable: true,
            resizeable: false
          }, {
            prop: 'latestShippedDate',
            name: 'Last Date Shipped',
            draggable: false,
            canAutoResize: true,
            sortable: true,
            resizeable: false,
            cellTemplate: this._dateTemplate
          }, {
            prop: 'recieved',
            name: 'Recieved',
            draggable: false,
            canAutoResize: false,
            sortable: true,
            resizeable: false,
            cellTemplate: this._deliveryTemplate
          }];
          this.pendingUsers.map(function (x) {
            return x.latestShippedDate = new Date();
          });
        }
      }, {
        key: "getUsersWithShipments",
        value: function getUsersWithShipments(event) {
          var _this41 = this;

          this.event = event;
          this.shipmentService.getUsersWithShipments(event).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (users) {
            _this41.loading = false;
            _this41.pendingUsers = users;
          });
        }
      }, {
        key: "onRecieved",
        value: function onRecieved(row) {
          var _this42 = this;

          this.deliveryLoading = true;
          this.shipmentService.packageRecieved(row.shipmentId, true).subscribe(function () {
            _this42.deliveryLoading = false;

            _this42.getUsersWithShipments(_this42.event);
          });
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ctorParameters = function () {
      return [{
        type: _app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _app_services__WEBPACK_IMPORTED_MODULE_3__["ShipmentService"]
      }, {
        type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deliveryTemplate', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], AdminComponent.prototype, "_deliveryTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dateTemplate', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], AdminComponent.prototype, "_dateTemplate", void 0);
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"], _app_services__WEBPACK_IMPORTED_MODULE_3__["ShipmentService"], _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])], AdminComponent);
    /***/
  },

  /***/
  "./src/app/admin/filament/filament.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/admin/filament/filament.component.ts ***!
    \******************************************************/

  /*! exports provided: FilamentComponent */

  /***/
  function srcAppAdminFilamentFilamentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilamentComponent", function () {
      return FilamentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _helpers_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../_helpers/backend */
    "./src/app/_helpers/backend.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var FilamentComponent = /*#__PURE__*/function () {
      function FilamentComponent(userService) {
        _classCallCheck(this, FilamentComponent);

        this.userService = userService;
        this.loading = false;
        this.deliveryLoading = false;
        this.users = new Array();
        this.columns = [];
        this._newUser = new _helpers_backend__WEBPACK_IMPORTED_MODULE_1__["UserFilamentModel"]();
      }

      _createClass(FilamentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loading = true;
          this.columns = [{
            prop: 'firstName',
            name: 'First Name',
            draggable: false,
            canAutoResize: true,
            sortable: true,
            resizeable: false
          }, {
            prop: 'lastName',
            name: 'Last Name',
            draggable: false,
            canAutoResize: true,
            sortable: true,
            resizeable: false
          }, {
            prop: 'printerModel',
            name: 'Printer Model',
            draggable: false,
            canAutoResize: true,
            sortable: true,
            resizeable: false
          }, {
            prop: 'latestShippedDate',
            name: 'Latest Shipped Date',
            draggable: false,
            canAutoResize: true,
            sortable: true,
            resizeable: false,
            cellTemplate: this._dateTemplate
          }, {
            prop: 'shippedQuantity',
            name: 'Shipped Quantity',
            draggable: false,
            canAutoResize: true,
            sortable: true,
            resizeable: false
          }, {
            prop: 'id',
            name: 'Actions',
            draggable: false,
            canAutoResize: false,
            sortable: true,
            resizeable: false,
            cellTemplate: this._actionsTemplate,
            cellClass: 'd-flex align-items-center'
          }];
        }
      }, {
        key: "getUsers",
        value: function getUsers(event) {
          var _this43 = this;

          this.event = event;
          this.userService.GetUsersWithoutFilament(event).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (users) {
            _this43.loading = false;
            _this43.users = users;
          });
        }
      }, {
        key: "sendFilament",
        value: function sendFilament(row) {
          var _this44 = this;

          this._newUser.id = row.id;
          this._newUser.firstName = row.firstName;
          this._newUser.lastName = row.lastName;
          this._newUser.needsFilament = row.needsFilament;
          this.userService.deliverFilament(this._newUser).subscribe(function () {
            _this44.deliveryLoading = false;

            _this44.getUsers(_this44.event);
          });
        }
      }]);

      return FilamentComponent;
    }();

    FilamentComponent.ctorParameters = function () {
      return [{
        type: _app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('actionsTemplate', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])], FilamentComponent.prototype, "_actionsTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('dateTemplate', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])], FilamentComponent.prototype, "_dateTemplate", void 0);
    FilamentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-filament',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./filament.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/filament/filament.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"]])], FilamentComponent);
    /***/
  },

  /***/
  "./src/app/admin/index.ts":
  /*!********************************!*\
    !*** ./src/app/admin/index.ts ***!
    \********************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return _admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"];
    });
    /***/

  },

  /***/
  "./src/app/admin/shipments/shipments.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/admin/shipments/shipments.component.ts ***!
    \********************************************************/

  /*! exports provided: ShipmentsComponent */

  /***/
  function srcAppAdminShipmentsShipmentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShipmentsComponent", function () {
      return ShipmentsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ShipmentsComponent = /*#__PURE__*/function () {
      function ShipmentsComponent(userService, shipmentService, authenticationService) {
        _classCallCheck(this, ShipmentsComponent);

        this.userService = userService;
        this.shipmentService = shipmentService;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.deliveryLoading = false;
        this.pendingShipments = new Array();
        this.columns = [];
      }

      _createClass(ShipmentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loading = true;
          this.columns = [{
            prop: 'quantity',
            name: 'First Name',
            draggable: false,
            canAutoResize: false,
            sortable: true,
            resizeable: false
          }, {
            prop: 'shippingCompany',
            name: 'Last Name',
            draggable: false,
            canAutoResize: true,
            sortable: true,
            resizeable: false
          }, {
            prop: 'trackingNumber',
            name: 'Total Shipped',
            draggable: false,
            canAutoResize: true,
            sortable: true,
            resizeable: false
          }, {
            prop: 'dateShipped',
            name: 'Company',
            draggable: false,
            canAutoResize: true,
            sortable: true,
            resizeable: false,
            cellTemplate: this._dateTemplate
          }, {
            prop: 'fileName',
            name: 'Tracking Number',
            draggable: false,
            canAutoResize: true,
            sortable: true,
            resizeable: false
          }, {
            prop: 'recieved',
            name: 'Recieved',
            draggable: false,
            canAutoResize: false,
            sortable: true,
            resizeable: false,
            cellTemplate: this._deliveryTemplate
          }];
          this.pendingShipments.map(function (x) {
            return x.dateShipped = new Date();
          });
        }
      }, {
        key: "getUsersWithShipments",
        value: function getUsersWithShipments(event) {
          var _this45 = this;

          this.event = event;
          this.shipmentService.getAll(event).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (users) {
            _this45.loading = false;
            _this45.pendingShipments = users;
          });
        }
      }, {
        key: "onRecieved",
        value: function onRecieved(row) {
          var _this46 = this;

          this.deliveryLoading = true;
          this.shipmentService.packageRecieved(row.shipmentId, true).subscribe(function () {
            _this46.deliveryLoading = false;

            _this46.getUsersWithShipments(_this46.event);
          });
        }
      }]);

      return ShipmentsComponent;
    }();

    ShipmentsComponent.ctorParameters = function () {
      return [{
        type: _app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _app_services__WEBPACK_IMPORTED_MODULE_2__["ShipmentService"]
      }, {
        type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deliveryTemplate', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], ShipmentsComponent.prototype, "_deliveryTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dateTemplate', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], ShipmentsComponent.prototype, "_dateTemplate", void 0);
    ShipmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shipments',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shipments.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/shipments/shipments.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"], _app_services__WEBPACK_IMPORTED_MODULE_2__["ShipmentService"], _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])], ShipmentsComponent);
    /***/
  },

  /***/
  "./src/app/admin/users/users.component.ts":
  /*!************************************************!*\
    !*** ./src/app/admin/users/users.component.ts ***!
    \************************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppAdminUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");

    var UsersComponent = /*#__PURE__*/function () {
      function UsersComponent(userService) {
        _classCallCheck(this, UsersComponent);

        this.userService = userService;
        this.loading = false;
        this.users = new Array();
        this.columns = [];
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loading = true;
          this.users.map(function (x) {
            return x.latestShippedDate = new Date();
          });
          this.users.map(function (x) {
            return x.productionDate = new Date();
          });
          this.columns = [{
            prop: 'firstName',
            name: 'First Name',
            draggable: false,
            canAutoResize: true,
            sortable: true,
            resizeable: false
          }, {
            prop: 'lastName',
            name: 'Last Name',
            draggable: false,
            canAutoResize: true,
            sortable: true,
            resizeable: false
          }, {
            prop: 'username',
            name: 'Username',
            draggable: false,
            canAutoResize: true,
            sortable: true,
            resizeable: false
          }, {
            prop: 'role',
            name: 'Role',
            draggable: false,
            canAutoResize: true,
            sortable: true,
            resizeable: false
          }, {
            prop: 'id',
            name: 'Actions',
            draggable: false,
            canAutoResize: false,
            sortable: true,
            resizeable: false,
            cellTemplate: this._actionsTemplate,
            cellClass: 'd-flex align-items-center'
          }];
        }
      }, {
        key: "getUsers",
        value: function getUsers(event) {
          var _this47 = this;

          this.userService.getAll(event).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
            _this47.loading = false;
            _this47.users = users;
          });
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ctorParameters = function () {
      return [{
        type: _app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('actionsTemplate', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])], UsersComponent.prototype, "_actionsTemplate", void 0);
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/users/users.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"]])], UsersComponent);
    /***/
  },

  /***/
  "./src/app/admin/users/view/view.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/admin/users/view/view.component.ts ***!
    \****************************************************/

  /*! exports provided: ViewComponent */

  /***/
  function srcAppAdminUsersViewViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewComponent", function () {
      return ViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _app_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/_models */
    "./src/app/_models/index.ts");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ViewComponent = /*#__PURE__*/function () {
      function ViewComponent(_route, _userService) {
        _classCallCheck(this, ViewComponent);

        this._route = _route;
        this._userService = _userService;
        this.user = new _app_models__WEBPACK_IMPORTED_MODULE_1__["User"]();
      }

      _createClass(ViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this48 = this;

          var userId = this._route.snapshot.params.id;
          this.user.productionDate = new Date();
          this.user.latestShippedDate = new Date();
          this.user.printerActive = true;
          this.user.needsFilament = true;

          this._userService.getById(userId).subscribe(function (user) {
            _this48.user = user;
          });
        }
      }]);

      return ViewComponent;
    }();

    ViewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/users/view/view.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])], ViewComponent);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./_models */
    "./src/app/_models/index.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router, authenticationService) {
        var _this49 = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.authenticationService = authenticationService;
        this.authenticationService.currentUser.subscribe(function (x) {
          return _this49.currentUser = x;
        });
      }

      _createClass(AppComponent, [{
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigate(['/login']);
        }
      }, {
        key: "isAdmin",
        get: function get() {
          return this.currentUser && this.currentUser.role === _models__WEBPACK_IMPORTED_MODULE_4__["Role"].Admin;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _helpers_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./_helpers/list-view/list-view.component */
    "./src/app/_helpers/list-view/list-view.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var _helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./_helpers */
    "./src/app/_helpers/index.ts");
    /* harmony import */


    var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! jw-bootstrap-switch-ng2 */
    "./node_modules/jw-bootstrap-switch-ng2/fesm2015/jw-bootstrap-switch-ng2.js");
    /* harmony import */


    var _home__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home */
    "./src/app/home/index.ts");
    /* harmony import */


    var _admin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./admin */
    "./src/app/admin/index.ts");
    /* harmony import */


    var _login__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./login */
    "./src/app/login/index.ts");
    /* harmony import */


    var _register__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./register */
    "./src/app/register/index.ts");
    /* harmony import */


    var _shipment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./shipment */
    "./src/app/shipment/index.ts");
    /* harmony import */


    var _admin_users_users_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./admin/users/users.component */
    "./src/app/admin/users/users.component.ts");
    /* harmony import */


    var _admin_users_view_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./admin/users/view/view.component */
    "./src/app/admin/users/view/view.component.ts");
    /* harmony import */


    var _admin_shipments_shipments_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./admin/shipments/shipments.component */
    "./src/app/admin/shipments/shipments.component.ts");
    /* harmony import */


    var _admin_filament_filament_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./admin/filament/filament.component */
    "./src/app/admin/filament/filament.component.ts");
    /* harmony import */


    var _home_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./home/profile/profile.component */
    "./src/app/home/profile/profile.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _app_routing__WEBPACK_IMPORTED_MODULE_8__["appRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_11__["JwBootstrapSwitchNg2Module"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["NgxDatatableModule"]],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _home__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _admin__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"], _login__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _register__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"], _shipment__WEBPACK_IMPORTED_MODULE_16__["ShipmentComponent"], _helpers_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_2__["ListViewComponent"], _admin_users_users_component__WEBPACK_IMPORTED_MODULE_17__["UsersComponent"], _admin_users_view_view_component__WEBPACK_IMPORTED_MODULE_18__["ViewComponent"], _admin_shipments_shipments_component__WEBPACK_IMPORTED_MODULE_19__["ShipmentsComponent"], _admin_filament_filament_component__WEBPACK_IMPORTED_MODULE_20__["FilamentComponent"], _home_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
        useClass: _helpers__WEBPACK_IMPORTED_MODULE_10__["JwtInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
        useClass: _helpers__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: appRoutingModule */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appRoutingModule", function () {
      return appRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _home_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home/profile/profile.component */
    "./src/app/home/profile/profile.component.ts");
    /* harmony import */


    var _admin_filament_filament_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin/filament/filament.component */
    "./src/app/admin/filament/filament.component.ts");
    /* harmony import */


    var _admin_shipments_shipments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin/shipments/shipments.component */
    "./src/app/admin/shipments/shipments.component.ts");
    /* harmony import */


    var _admin_users_view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin/users/view/view.component */
    "./src/app/admin/users/view/view.component.ts");
    /* harmony import */


    var _admin_users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin/users/users.component */
    "./src/app/admin/users/users.component.ts");
    /* harmony import */


    var _shipment_shipment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shipment/shipment.component */
    "./src/app/shipment/shipment.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home */
    "./src/app/home/index.ts");
    /* harmony import */


    var _admin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./admin */
    "./src/app/admin/index.ts");
    /* harmony import */


    var _login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./login */
    "./src/app/login/index.ts");
    /* harmony import */


    var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./_helpers/auth.guard */
    "./src/app/_helpers/auth.guard.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./_models */
    "./src/app/_models/index.ts");

    var routes = [{
      path: '',
      component: _home__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    }, {
      path: 'profile',
      component: _home_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
      data: {
        roles: [_models__WEBPACK_IMPORTED_MODULE_13__["Role"].User]
      }
    }, {
      path: 'admin',
      component: _admin__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
      data: {
        roles: [_models__WEBPACK_IMPORTED_MODULE_13__["Role"].Admin]
      }
    }, {
      path: 'admin/users',
      component: _admin_users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
      data: {
        roles: [_models__WEBPACK_IMPORTED_MODULE_13__["Role"].Admin]
      }
    }, {
      path: 'admin/filament',
      component: _admin_filament_filament_component__WEBPACK_IMPORTED_MODULE_2__["FilamentComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
      data: {
        roles: [_models__WEBPACK_IMPORTED_MODULE_13__["Role"].Admin]
      }
    }, {
      path: 'admin/shipments',
      component: _admin_shipments_shipments_component__WEBPACK_IMPORTED_MODULE_3__["ShipmentsComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
      data: {
        roles: [_models__WEBPACK_IMPORTED_MODULE_13__["Role"].Admin]
      }
    }, {
      path: 'admin/users/:id/view',
      component: _admin_users_view_view_component__WEBPACK_IMPORTED_MODULE_4__["ViewComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
      data: {
        roles: [_models__WEBPACK_IMPORTED_MODULE_13__["Role"].Admin]
      }
    }, {
      path: 'login',
      component: _login__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
    }, {
      path: 'shipments',
      component: _shipment_shipment_component__WEBPACK_IMPORTED_MODULE_6__["ShipmentComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
      data: {
        roles: [_models__WEBPACK_IMPORTED_MODULE_13__["Role"].User]
      }
    }, // otherwise redirect to home
    {
      path: '**',
      redirectTo: ''
    }];

    var appRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes);
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _helpers_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../_helpers/backend */
    "./src/app/_helpers/backend.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(userService, shipmentService, authenticationService) {
        _classCallCheck(this, HomeComponent);

        this.userService = userService;
        this.shipmentService = shipmentService;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.currentUser = new _helpers_backend__WEBPACK_IMPORTED_MODULE_1__["UserModel"]();
        this.shipments = new Array();
        this.columns = [];
        this.currentUser = this.authenticationService.currentUserValue;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loading = true;
          this.columns = [{
            prop: 'quantity',
            name: '#',
            draggable: false,
            canAutoResize: false,
            sortable: true,
            resizeable: false
          }, {
            prop: 'trackingNumber',
            name: 'Trancking Number',
            draggable: false,
            canAutoResize: true,
            sortable: true,
            resizeable: false
          }, {
            prop: 'shippingCompany',
            name: 'Company',
            draggable: false,
            canAutoResize: true,
            sortable: true,
            resizeable: false
          }, {
            prop: 'dateShipped',
            name: 'Date shipped',
            draggable: false,
            canAutoResize: true,
            sortable: true,
            resizeable: false,
            cellTemplate: this._dateTemplate
          }, {
            prop: 'recieved',
            name: 'Status',
            draggable: false,
            canAutoResize: false,
            sortable: true,
            resizeable: false,
            cellTemplate: this._deliveryTemplate
          }];
          this.shipments.map(function (x) {
            return x.dateShipped = new Date();
          });
          this.currentUser.latestShippedDate = new Date();
        }
      }, {
        key: "getShipments",
        value: function getShipments() {
          var _this50 = this;

          this.userService.getById(this.currentUser.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (user) {
            _this50.loading = false;
            _this50.currentUser = user;
          });
          this.shipmentService.getShipmentsByUser(this.currentUser.id).subscribe(function (shipments) {
            _this50.shipments = shipments;
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _app_services__WEBPACK_IMPORTED_MODULE_4__["ShipmentService"]
      }, {
        type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('deliveryTemplate', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])], HomeComponent.prototype, "_deliveryTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('dateTemplate', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])], HomeComponent.prototype, "_dateTemplate", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"], _app_services__WEBPACK_IMPORTED_MODULE_4__["ShipmentService"], _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/home/index.ts":
  /*!*******************************!*\
    !*** ./src/app/home/index.ts ***!
    \*******************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"];
    });
    /***/

  },

  /***/
  "./src/app/home/profile/profile.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/home/profile/profile.component.ts ***!
    \***************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppHomeProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../_models/user */
    "./src/app/_models/user.ts");
    /* harmony import */


    var _helpers_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../_helpers/backend */
    "./src/app/_helpers/backend.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(_formBuilder, _route, _router, _authenticationService, _userService) {
        _classCallCheck(this, ProfileComponent);

        this._formBuilder = _formBuilder;
        this._route = _route;
        this._router = _router;
        this._authenticationService = _authenticationService;
        this._userService = _userService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.formError = '';
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.updatedUser = new _helpers_backend__WEBPACK_IMPORTED_MODULE_2__["UpdateModel"]();
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this51 = this;

          this.updateForm = this._formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[0-9]{10,11}$/)]],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email])],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            printerModel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            batchRequiredTime: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            printerActive: [true],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{4,30}$/)]],
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{4,30}$/)]
          }); // get return url from route parameters or default to '/'

          this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/'; // get user details

          this._userService.getById(this._authenticationService.currentUserValue.id).subscribe(function (user) {
            _this51.user = user;

            _this51.f.firstName.setValue(user.firstName);

            _this51.f.lastName.setValue(user.lastName);

            _this51.f.phoneNumber.setValue(user.phoneNumber);

            _this51.f.email.setValue(user.email);

            _this51.f.address.setValue(user.address);

            _this51.f.printerModel.setValue(_this51.user.printerModel);

            _this51.f.batchRequiredTime.setValue(user.batchRequiredTime);

            _this51.f.printerActive.setValue(user.printerActive);

            _this51.f.username.setValue(user.username);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this52 = this;

          this.submitted = true;
          this.error = '';
          this.formError = '';
          this.updatedUser.firstName = this.f.firstName.value;
          this.updatedUser.lastName = this.f.lastName.value;
          this.updatedUser.phoneNumber = this.f.phoneNumber.value;
          this.updatedUser.email = this.f.email.value;
          this.updatedUser.address = this.f.address.value;
          this.updatedUser.printerModel = this.f.printerModel.value;
          this.updatedUser.batchRequiredTime = this.f.batchRequiredTime.value;
          this.updatedUser.printerActive = this.f.printerActive.value;
          this.updatedUser.password = this.f.password.value;
          this.updatedUser.newPassword = this.f.newPassword.value;
          this.updatedUser.username = this.f.username.value; // stop here if form is invalid

          if (this.updateForm.invalid) {
            Object.keys(this.updateForm.controls).forEach(function (key) {
              var controlErrors = _this52.updateForm.get(key).errors;

              if (controlErrors != null) {
                Object.keys(controlErrors).forEach(function (keyError) {
                  _this52.formError = key + ' is incorrect ( ' + keyError + ' )';
                });
              }
            });
            return;
          }

          this.loading = true;

          this._userService.update(this._authenticationService.currentUserValue.id, this.updatedUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (data) {
            _this52._router.navigate([_this52.returnUrl]);
          }, function (error) {
            if (error === 'Bad Request') {
              _this52.error = 'Incorrect password';
            } else {
              _this52.error = error;
            }

            _this52.loading = false;
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this._router.navigate([this.returnUrl]);
        }
      }, {
        key: "f",
        get: function get() {
          return this.updateForm.controls;
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }, {
        type: _app_services__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/profile.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _app_services__WEBPACK_IMPORTED_MODULE_6__["UserService"]])], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/login/index.ts":
  /*!********************************!*\
    !*** ./src/app/login/index.ts ***!
    \********************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/login/login.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"];
    });
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _helpers_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../_helpers/backend */
    "./src/app/_helpers/backend.ts");
    /* harmony import */


    var _app_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_models */
    "./src/app/_models/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuilder, route, router, authenticationService) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this._user = new _helpers_backend__WEBPACK_IMPORTED_MODULE_1__["AuthenticateModel"](); // redirect to home if already logged in

        if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
        }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          }); // get return url from route parameters or default to '/'

          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        } // convenience getter for easy access to form fields

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this53 = this;

          this.submitted = true;
          this._user.password = this.f.password.value;
          this._user.username = this.f.username.value; // stop here if form is invalid

          if (this.loginForm.invalid) {
            return;
          }

          this.loading = true;
          this.authenticationService.login(this._user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
            localStorage.getItem('role') === _app_models__WEBPACK_IMPORTED_MODULE_2__["Role"].Admin ? _this53.returnUrl = '/' : _this53.returnUrl = '/admin';

            _this53.router.navigate([_this53.returnUrl]);
          }, function (error) {
            if (error === 'Bad Request') {
              _this53.error = 'Username or password is incorrect';
            } else {
              _this53.error = error;
            }

            _this53.loading = false;
          });
        }
      }, {
        key: "onRegister",
        value: function onRegister() {
          this.router.navigate(['register']);
        }
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/register/index.ts":
  /*!***********************************!*\
    !*** ./src/app/register/index.ts ***!
    \***********************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./register.component */
    "./src/app/register/register.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return _register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"];
    });
    /***/

  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _helpers_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../_helpers/backend */
    "./src/app/_helpers/backend.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(_formBuilder, _route, _router, _authenticationService) {
        _classCallCheck(this, RegisterComponent);

        this._formBuilder = _formBuilder;
        this._route = _route;
        this._router = _router;
        this._authenticationService = _authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.formError = '';
        this._user = new _helpers_backend__WEBPACK_IMPORTED_MODULE_2__["RegisterModel"](); // redirect to home if already logged in

        if (this._authenticationService.currentUserValue) {
          this._router.navigate(['/']);
        }
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = this._formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[0-9]{10,11}$/)]],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email])],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            printerModel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            // batchRequiredTime: ['', Validators.required],
            printerActive: [true],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{4,30}$/)]]
          }); // get return url from route parameters or default to '/'

          this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this54 = this;

          this.submitted = true;
          this.error = '';
          this.formError = '';
          this._user.firstName = this.f.firstName.value;
          this._user.lastName = this.f.lastName.value;
          this._user.phoneNumber = this.f.phoneNumber.value;
          this._user.email = this.f.email.value;
          this._user.address = this.f.address.value;
          this._user.printerModel = this.f.printerModel.value; // this._user.batchRequiredTime = this.f.batchRequiredTime.value;

          this._user.printerActive = this.f.printerActive.value;
          this._user.password = this.f.password.value;
          this._user.username = this.f.username.value; // stop here if form is invalid

          if (this.registerForm.invalid) {
            Object.keys(this.registerForm.controls).forEach(function (key) {
              var controlErrors = _this54.registerForm.get(key).errors;

              if (controlErrors != null) {
                Object.keys(controlErrors).forEach(function (keyError) {
                  _this54.formError = key + ' is incorrect ( ' + keyError + ' )';
                });
              }
            });
            return;
          }

          this.loading = true;

          this._authenticationService.register(this._user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
            _this54._router.navigate([_this54.returnUrl]);
          }, function (error) {
            if (error === 'Bad Request') {
              _this54.error = 'Username is already taken';
            } else {
              _this54.error = error;
            }

            _this54.loading = false;
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this._router.navigate([this.returnUrl]);
        }
      }, {
        key: "f",
        get: function get() {
          return this.registerForm.controls;
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/shipment/index.ts":
  /*!***********************************!*\
    !*** ./src/app/shipment/index.ts ***!
    \***********************************/

  /*! exports provided: ShipmentComponent */

  /***/
  function srcAppShipmentIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shipment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shipment.component */
    "./src/app/shipment/shipment.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShipmentComponent", function () {
      return _shipment_component__WEBPACK_IMPORTED_MODULE_1__["ShipmentComponent"];
    });
    /***/

  },

  /***/
  "./src/app/shipment/shipment.component.ts":
  /*!************************************************!*\
    !*** ./src/app/shipment/shipment.component.ts ***!
    \************************************************/

  /*! exports provided: ShipmentComponent */

  /***/
  function srcAppShipmentShipmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShipmentComponent", function () {
      return ShipmentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _helpers_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../_helpers/backend */
    "./src/app/_helpers/backend.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ShipmentComponent = /*#__PURE__*/function () {
      function ShipmentComponent(_formBuilder, _route, _router, _shipmentService) {
        _classCallCheck(this, ShipmentComponent);

        this._formBuilder = _formBuilder;
        this._route = _route;
        this._router = _router;
        this._shipmentService = _shipmentService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.formError = '';
        this._shipment = new _helpers_backend__WEBPACK_IMPORTED_MODULE_1__["CreateShipmentModel"]();
      }

      _createClass(ShipmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._currentDate = new Date().toISOString().substring(0, 10);
          this.shipmentForm = this._formBuilder.group({
            quantity: [30, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(this._shipment.minQuantity)]],
            dateShipped: [this._currentDate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            trackingNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            shippingCompany: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            needsFilament: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fileName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }); // get return url from route parameters or default to '/'

          this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this55 = this;

          this.submitted = true;
          this.error = '';
          this.formError = '';
          this._shipment.quantity = this.f.quantity.value;
          this._shipment.dateShipped = new Date(this.f.dateShipped.value);
          this._shipment.trackingNumber = this.f.trackingNumber.value;
          this._shipment.shippingCompany = this.f.shippingCompany.value;
          this._shipment.needsFilament = this.f.needsFilament.value;
          this._shipment.fileName = this.f.fileName.value; // stop here if form is invalid

          if (this.shipmentForm.invalid) {
            Object.keys(this.shipmentForm.controls).forEach(function (key) {
              var controlErrors = _this55.shipmentForm.get(key).errors;

              if (controlErrors != null) {
                Object.keys(controlErrors).forEach(function (keyError) {
                  _this55.formError = key.charAt(0).toUpperCase() + key.slice(1) + ' is incorrect ( ' + keyError + ' )';
                });
              }
            });
            return;
          }

          this.loading = true;

          this._shipmentService.createShipment(this._shipment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
            _this55._router.navigate([_this55.returnUrl]);
          }, function (error) {
            _this55.error = error;
            _this55.loading = false;
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this._router.navigate([this.returnUrl]);
        }
      }, {
        key: "f",
        get: function get() {
          return this.shipmentForm.controls;
        }
      }]);

      return ShipmentComponent;
    }();

    ShipmentComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _app_services__WEBPACK_IMPORTED_MODULE_3__["ShipmentService"]
      }];
    };

    ShipmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-shipment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shipment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shipment/shipment.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _app_services__WEBPACK_IMPORTED_MODULE_3__["ShipmentService"]])], ShipmentComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'https://hellas3dprintinginventorybackoffice.azurewebsites.net',
      local: 'http://localhost:4000'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\StratosPalaiologos\source\repos\Pt4r\Hellas-COVID19-3D-Printing-Inventory\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
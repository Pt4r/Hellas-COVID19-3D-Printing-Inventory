function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }];
      }, null);
    })();
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* tslint:disable */

    /* eslint-disable */
    //----------------------
    // <auto-generated>
    //     Generated using the NSwag toolchain v13.3.0.0 (NJsonSchema v10.1.11.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
    // </auto-generated>
    //----------------------
    // ReSharper disable InconsistentNaming


    var BACKOFFICE_API_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('BACKOFFICE_API_BASE_URL');

    var BackofficeApiService = /*#__PURE__*/function () {
      function BackofficeApiService(http, baseUrl) {
        _classCallCheck(this, BackofficeApiService);

        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "http://hellas3dprintinginventory.azurewebsites.net";
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processShipments_GetAll(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this.processShipments_GetAll(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processShipments_GetAll",
        value: function processShipments_GetAll(response) {
          var _this2 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
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
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this2.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this2.jsonParseReviver);
              result403 = AppException.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
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

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json",
              "Accept": "application/json"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this3.processShipments_Create(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this3.processShipments_Create(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processShipments_Create",
        value: function processShipments_Create(response) {
          var _this4 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
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
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this4.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this4.jsonParseReviver);
              result403 = AppException.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this4.jsonParseReviver);
              result200 = Shipment.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status === 404) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result404 = null;
              var resultData404 = _responseText === "" ? null : JSON.parse(_responseText, _this4.jsonParseReviver);
              result404 = ProblemDetails.fromJS(resultData404);
              return throwException("A server side error occurred.", status, _responseText, _headers, result404);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this5.processShipments_GetShipmentsByUser(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this5.processShipments_GetShipmentsByUser(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processShipments_GetShipmentsByUser",
        value: function processShipments_GetShipmentsByUser(response) {
          var _this6 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
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
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this6.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this6.jsonParseReviver);
              result403 = AppException.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this6.jsonParseReviver);
              result400 = ProblemDetails.fromJS(resultData400);
              return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
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

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this7.processShipments_GetById(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this7.processShipments_GetById(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processShipments_GetById",
        value: function processShipments_GetById(response) {
          var _this8 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
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
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this8.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this8.jsonParseReviver);
              result403 = ProblemDetails.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 404) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result404 = null;
              var resultData404 = _responseText === "" ? null : JSON.parse(_responseText, _this8.jsonParseReviver);
              result404 = ProblemDetails.fromJS(resultData404);
              return throwException("A server side error occurred.", status, _responseText, _headers, result404);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this8.jsonParseReviver);
              result200 = Shipment.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this9.processShipments_Update(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this9.processShipments_Update(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processShipments_Update",
        value: function processShipments_Update(response) {
          var _this10 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
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
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this10.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this10.jsonParseReviver);
              result403 = ProblemDetails.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this10.jsonParseReviver);
              result400 = ProblemDetails.fromJS(resultData400);
              return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
          } else if (status === 404) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result404 = null;
              var resultData404 = _responseText === "" ? null : JSON.parse(_responseText, _this10.jsonParseReviver);
              result404 = ProblemDetails.fromJS(resultData404);
              return throwException("A server side error occurred.", status, _responseText, _headers, result404);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
          };
          return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this11.processShipments_Delete(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this11.processShipments_Delete(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processShipments_Delete",
        value: function processShipments_Delete(response) {
          var _this12 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
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
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this12.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this12.jsonParseReviver);
              result403 = ProblemDetails.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this13.processShipments_GetShipmentsWithUsers(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this13.processShipments_GetShipmentsWithUsers(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processShipments_GetShipmentsWithUsers",
        value: function processShipments_GetShipmentsWithUsers(response) {
          var _this14 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
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
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this14.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this14.jsonParseReviver);
              result403 = AppException.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
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

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
          };
          return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this15.processShipments_packageRecieved(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this15.processShipments_packageRecieved(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processShipments_packageRecieved",
        value: function processShipments_packageRecieved(response) {
          var _this16 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
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
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this16.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this16.jsonParseReviver);
              result403 = ProblemDetails.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this16.jsonParseReviver);
              result400 = ProblemDetails.fromJS(resultData400);
              return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json",
              "Accept": "application/json"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this17.processUsers_Authenticate(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this17.processUsers_Authenticate(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processUsers_Authenticate",
        value: function processUsers_Authenticate(response) {
          var _this18 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
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
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this18.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this18.jsonParseReviver);
              result403 = AppException.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this18.jsonParseReviver);
              result200 = UserModel.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this18.jsonParseReviver);
              result400 = AppException.fromJS(resultData400);
              return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this19.processUsers_Register(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this19.processUsers_Register(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processUsers_Register",
        value: function processUsers_Register(response) {
          var _this20 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
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
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this20.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this20.jsonParseReviver);
              result403 = AppException.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this20.jsonParseReviver);
              result400 = AppException.fromJS(resultData400);
              return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this21.processUsers_GetAll(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this21.processUsers_GetAll(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processUsers_GetAll",
        value: function processUsers_GetAll(response) {
          var _this22 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
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
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this22.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this22.jsonParseReviver);
              result403 = AppException.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
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

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this23.processUsers_GetUsersWithoutFilament(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this23.processUsers_GetUsersWithoutFilament(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processUsers_GetUsersWithoutFilament",
        value: function processUsers_GetUsersWithoutFilament(response) {
          var _this24 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
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
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this24.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this24.jsonParseReviver);
              result403 = AppException.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
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

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this25.processUsers_deliverFilament(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this25.processUsers_deliverFilament(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processUsers_deliverFilament",
        value: function processUsers_deliverFilament(response) {
          var _this26 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
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
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this26.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this26.jsonParseReviver);
              result403 = ProblemDetails.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this26.jsonParseReviver);
              result400 = ProblemDetails.fromJS(resultData400);
              return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this27.processUsers_GetById(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this27.processUsers_GetById(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processUsers_GetById",
        value: function processUsers_GetById(response) {
          var _this28 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
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
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this28.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this28.jsonParseReviver);
              result403 = ProblemDetails.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this28.jsonParseReviver);
              result200 = UserModel.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this29.processUsers_Update(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this29.processUsers_Update(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processUsers_Update",
        value: function processUsers_Update(response) {
          var _this30 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
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
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this30.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this30.jsonParseReviver);
              result403 = AppException.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this30.jsonParseReviver);
              result400 = AppException.fromJS(resultData400);
              return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
          };
          return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this31.processUsers_Delete(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this31.processUsers_Delete(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processUsers_Delete",
        value: function processUsers_Delete(response) {
          var _this32 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
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
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result401 = null;
              var resultData401 = _responseText === "" ? null : JSON.parse(_responseText, _this32.jsonParseReviver);
              result401 = AppException.fromJS(resultData401);
              return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result403 = null;
              var resultData403 = _responseText === "" ? null : JSON.parse(_responseText, _this32.jsonParseReviver);
              result403 = ProblemDetails.fromJS(resultData403);
              return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
          } else if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }]);

      return BackofficeApiService;
    }();

    BackofficeApiService.ɵfac = function BackofficeApiService_Factory(t) {
      return new (t || BackofficeApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](BACKOFFICE_API_BASE_URL, 8));
    };

    BackofficeApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: BackofficeApiService,
      factory: BackofficeApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BackofficeApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [BACKOFFICE_API_BASE_URL]
          }]
        }];
      }, null);
    })();

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
      if (result !== null && result !== undefined) return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(result);else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new SwaggerException(message, status, response, headers, null));
    }

    function blobToText(blob) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if ([401, 403].indexOf(err.status) !== -1) {
              // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
              _this34.authenticationService.logout();

              location.reload(true);
            }

            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
      return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
    };

    ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ErrorInterceptor,
      factory: ErrorInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }];
      }, null);
    })();
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


    var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/_helpers/auth.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"];
    });
    /* harmony import */


    var _backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./backend */
    "./src/app/_helpers/backend.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BACKOFFICE_API_BASE_URL", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_1__["BACKOFFICE_API_BASE_URL"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BackofficeApiService", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_1__["BackofficeApiService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Exception", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_1__["Exception"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppException", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_1__["AppException"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShipmentModel", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_1__["ShipmentModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProblemDetails", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_1__["ProblemDetails"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Shipment", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_1__["Shipment"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_1__["User"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CreateShipmentModel", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_1__["CreateShipmentModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AdminShipmentsModel", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_1__["AdminShipmentsModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserModel", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_1__["UserModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthenticateModel", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_1__["AuthenticateModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RegisterModel", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_1__["RegisterModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UpdateModel", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_1__["UpdateModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserFilamentModel", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_1__["UserFilamentModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SwaggerException", function () {
      return _backend__WEBPACK_IMPORTED_MODULE_1__["SwaggerException"];
    });
    /* harmony import */


    var _error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./error.interceptor */
    "./src/app/_helpers/error.interceptor.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return _error_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorInterceptor"];
    });
    /* harmony import */


    var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./jwt.interceptor */
    "./src/app/_helpers/jwt.interceptor.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_3__["JwtInterceptor"];
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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
          var isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl);

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

    JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
      return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
    };

    JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: JwtInterceptor,
      factory: JwtInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }];
      }, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _models_list_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./models/list-view */
    "./src/app/_helpers/list-view/models/list-view.ts");
    /* harmony import */


    var _models_query_parameters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./models/query-parameters */
    "./src/app/_helpers/list-view/models/query-parameters.ts");
    /* harmony import */


    var _models_search_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./models/search-event */
    "./src/app/_helpers/list-view/models/search-event.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["filterInput"];

    function ListViewComponent_ng_template_5_span_0_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " block ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ListViewComponent_ng_template_5_span_0_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " vpn_key ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ListViewComponent_ng_template_5_span_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListViewComponent_ng_template_5_span_0_i_1_Template, 2, 0, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListViewComponent_ng_template_5_span_0_i_2_Template, 2, 0, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var row_r12 = ctx_r18.row;
        var value_r13 = ctx_r18.value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r12.blocked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r12.accessFailedCount > 0 && row_r12.lockoutEnd && !row_r12.blocked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r13, " ");
      }
    }

    function ListViewComponent_ng_template_5_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " - ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ListViewComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListViewComponent_ng_template_5_span_0_Template, 4, 3, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListViewComponent_ng_template_5_span_1_Template, 2, 0, "span", 11);
      }

      if (rf & 2) {
        var value_r13 = ctx.value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !value_r13);
      }
    }

    function ListViewComponent_ng_template_7_a_0_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " check ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ListViewComponent_ng_template_7_a_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListViewComponent_ng_template_7_a_0_i_1_Template, 2, 0, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var value_r20 = ctx_r24.value;
        var row_r19 = ctx_r24.row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "mailto:" + value_r20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r19.emailConfirmed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r20, " ");
      }
    }

    function ListViewComponent_ng_template_7_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " - ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ListViewComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListViewComponent_ng_template_7_a_0_Template, 3, 3, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListViewComponent_ng_template_7_span_1_Template, 2, 0, "span", 11);
      }

      if (rf & 2) {
        var value_r20 = ctx.value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !value_r20);
      }
    }

    function ListViewComponent_ng_template_9_a_0_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " check ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ListViewComponent_ng_template_9_a_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListViewComponent_ng_template_9_a_0_i_1_Template, 2, 0, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var value_r26 = ctx_r30.value;
        var row_r25 = ctx_r30.row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "tel:" + value_r26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r25.phoneNumberConfirmed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r26, " ");
      }
    }

    function ListViewComponent_ng_template_9_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " - ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ListViewComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListViewComponent_ng_template_9_a_0_Template, 3, 3, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListViewComponent_ng_template_9_span_1_Template, 2, 0, "span", 11);
      }

      if (rf & 2) {
        var value_r26 = ctx.value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !value_r26);
      }
    }

    function ListViewComponent_ng_template_11_span_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, value_r32, "medium"));
      }
    }

    function ListViewComponent_ng_template_11_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " - ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ListViewComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListViewComponent_ng_template_11_span_0_Template, 3, 4, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListViewComponent_ng_template_11_span_1_Template, 2, 0, "span", 11);
      }

      if (rf & 2) {
        var value_r32 = ctx.value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !value_r32);
      }
    }

    function ListViewComponent_ng_template_13_i_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " check ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ListViewComponent_ng_template_13_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " remove ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ListViewComponent_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListViewComponent_ng_template_13_i_0_Template, 2, 0, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListViewComponent_ng_template_13_i_1_Template, 2, 0, "i", 24);
      }

      if (rf & 2) {
        var value_r37 = ctx.value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r37 === true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r37 === false);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        emptyMessage: a0
      };
    };

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
          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this._filterInput.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
            return event.target.value; // Get input value.
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (inputValue) {
            return inputValue.length >= _this36.minimumSearchCharacters || inputValue.length === 0;
          }), // If character length greater than minimumSearchCharacters setting.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000), // Time in milliseconds between key events.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])() // If previous query is different from current.
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
          this.sortDirection = sort.dir === 'asc' ? _models_list_view__WEBPACK_IMPORTED_MODULE_4__["SortDirection"].Asc : _models_list_view__WEBPACK_IMPORTED_MODULE_4__["SortDirection"].Desc;
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
          this.page = +(params[_models_query_parameters__WEBPACK_IMPORTED_MODULE_5__["QueryParameters"].PAGE] || 1);
          this.dataTable.offset = this.page - 1;
          this.rowsPerPage = +(params[_models_query_parameters__WEBPACK_IMPORTED_MODULE_5__["QueryParameters"].PAGE_SIZE] || this.rowsPerPage || this.defaultRowsPerPage);
          this.sortField = params[_models_query_parameters__WEBPACK_IMPORTED_MODULE_5__["QueryParameters"].SORT_FIELD] || this.defaultSortField || undefined;
          this.sortDirection = params[_models_query_parameters__WEBPACK_IMPORTED_MODULE_5__["QueryParameters"].SORT_DIRECTION] || this.defaultSortDirection || undefined;

          if (this.sortField) {
            this.dataTable.sorts.splice(0, this.dataTable.sorts.length);
            this.dataTable.sorts.push({
              prop: this.sortField,
              dir: this.sortDirection.toLowerCase() || 'asc'
            });
          }

          this.searchTerm = params[_models_query_parameters__WEBPACK_IMPORTED_MODULE_5__["QueryParameters"].SEARCH_TERM] || undefined;
        }
      }, {
        key: "changeSearchLocation",
        value: function changeSearchLocation() {
          var params = {};
          params[_models_query_parameters__WEBPACK_IMPORTED_MODULE_5__["QueryParameters"].PAGE] = this.page;
          params[_models_query_parameters__WEBPACK_IMPORTED_MODULE_5__["QueryParameters"].PAGE_SIZE] = this.rowsPerPage || this.defaultRowsPerPage;
          params[_models_query_parameters__WEBPACK_IMPORTED_MODULE_5__["QueryParameters"].SORT_FIELD] = this.sortField || this.defaultSortField || undefined;
          params[_models_query_parameters__WEBPACK_IMPORTED_MODULE_5__["QueryParameters"].SORT_DIRECTION] = this.sortDirection;
          params[_models_query_parameters__WEBPACK_IMPORTED_MODULE_5__["QueryParameters"].SEARCH_TERM] = this.searchTerm;
          this.router.navigate([], {
            relativeTo: this.route,
            queryParams: params
          });
        }
      }, {
        key: "doSearch",
        value: function doSearch() {
          this.search.emit(new _models_search_event__WEBPACK_IMPORTED_MODULE_6__["SearchEvent"](this.page, this.rowsPerPage, this.sortField ? "".concat(this.sortField).concat(this.sortDirection === _models_list_view__WEBPACK_IMPORTED_MODULE_4__["SortDirection"].Asc ? '+' : '-') : undefined, this.searchTerm || undefined));
        }
      }, {
        key: "isEmptyObject",
        value: function isEmptyObject(object) {
          return Object.entries(object).length === 0 && object.constructor === Object;
        }
      }]);

      return ListViewComponent;
    }(_models_list_view__WEBPACK_IMPORTED_MODULE_4__["ListView"]);

    ListViewComponent.ɵfac = function ListViewComponent_Factory(t) {
      return new (t || ListViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ListViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListViewComponent,
      selectors: [["app-list-view"]],
      viewQuery: function ListViewComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._filterInput = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 15,
      vars: 17,
      consts: [[1, "col-sm-12", "col-md-4", "m-auto", 3, "hidden"], ["type", "text", 1, "search", "mt-0", 3, "placeholder", "ngModel", "ngModelChange"], ["filterInput", ""], ["trackByProp", "id", "reorderable", "false", 1, "material", "expandable", 3, "rows", "columns", "columnMode", "count", "rowHeight", "headerHeight", "footerHeight", "limit", "externalPaging", "externalSorting", "messages", "loadingIndicator", "page", "sort"], ["dataTable", ""], ["usernameTemplate", ""], ["emailTemplate", ""], ["phoneNumberTemplate", ""], ["dateTimeTemplate", ""], ["booleanTemplate", ""], ["style", "padding-right: 16px; position: relative;", 4, "ngIf"], [4, "ngIf"], [2, "padding-right", "16px", "position", "relative"], ["class", "material-icons font-14 checkmark", "style", "color: rgba(255, 81, 81, 0.61) !important;", "title", "Account is blocked", 4, "ngIf"], ["class", "material-icons font-14 checkmark", "style", "color: rgba(255, 81, 81, 0.61) !important;", "title", "Account is locked", 4, "ngIf"], ["title", "Account is blocked", 1, "material-icons", "font-14", "checkmark", 2, "color", "rgba(255, 81, 81, 0.61) !important"], ["title", "Account is locked", 1, "material-icons", "font-14", "checkmark", 2, "color", "rgba(255, 81, 81, 0.61) !important"], ["style", "padding-right: 16px; position: relative;", 3, "href", 4, "ngIf"], [2, "padding-right", "16px", "position", "relative", 3, "href"], ["class", "material-icons font-14 checkmark", "style", "color: #32CD32 !important;", "title", "Email is confirmed", 4, "ngIf"], ["title", "Email is confirmed", 1, "material-icons", "font-14", "checkmark", 2, "color", "#32CD32 !important"], ["class", "material-icons font-14 checkmark", "style", "color: #32CD32 !important;", "title", "Phone number is confirmed", 4, "ngIf"], ["title", "Phone number is confirmed", 1, "material-icons", "font-14", "checkmark", 2, "color", "#32CD32 !important"], ["class", "material-icons", "style", "color: #32CD32 !important;", 4, "ngIf"], ["class", "material-icons", "style", "color: #CC0000 !important;", 4, "ngIf"], [1, "material-icons", 2, "color", "#32CD32 !important"], [1, "material-icons", 2, "color", "#CC0000 !important"]],
      template: function ListViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListViewComponent_Template_input_ngModelChange_1_listener($event) {
            return ctx.searchTerm = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngx-datatable", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ListViewComponent_Template_ngx_datatable_page_3_listener($event) {
            return ctx.setPage($event);
          })("sort", function ListViewComponent_Template_ngx_datatable_sort_3_listener($event) {
            return ctx.setSort($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListViewComponent_ng_template_5_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListViewComponent_ng_template_7_Template, 2, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListViewComponent_ng_template_9_Template, 2, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListViewComponent_ng_template_11_Template, 2, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListViewComponent_ng_template_13_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.canFilter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Type at least " + ctx.minimumSearchCharacters + " characters to filter results...")("ngModel", ctx.searchTerm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.rows)("columns", ctx.columns)("columnMode", "force")("count", ctx.count)("rowHeight", 50)("headerHeight", 50)("footerHeight", ctx.showFooter)("limit", ctx.rowsPerPage)("externalPaging", !ctx.clientSide)("externalSorting", !ctx.clientSide)("messages", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx.emptyMessage))("loadingIndicator", ctx.isLoading);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["DatatableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]],
      styles: [".search[_ngcontent-%COMP%] {\n  padding: 8px;\n  margin: 15px auto;\n  font-size: 14px;\n  display: block;\n  background: transparent;\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid #5985ee;\n}\n\n@media screen and (max-width: 800px) {\n  .desktop-hidden[_ngcontent-%COMP%] {\n    display: initial;\n  }\n\n  .mobile-hidden[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .desktop-hidden[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mobile-hidden[_ngcontent-%COMP%] {\n    display: initial;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvbGlzdC12aWV3L0M6XFxVc2Vyc1xcU3RyYXRvc1BhbGFpb2xvZ29zXFxzb3VyY2VcXHJlcG9zXFxOZXcgZm9sZGVyXFxDT1ZJRDE5LTNESW52ZW50b3J5XFxDT1ZJRDE5LTNESW52ZW50b3J5XFxXZWJBcHAvc3JjXFxhcHBcXF9oZWxwZXJzXFxsaXN0LXZpZXdcXGxpc3Qtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvX2hlbHBlcnMvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNFLGdCQUFBO0VDQ0o7O0VEQ0U7SUFDRSxhQUFBO0VDRUo7QUFDRjs7QURBRTtFQUNFO0lBQ0UsYUFBQTtFQ0VKOztFREFFO0lBQ0UsZ0JBQUE7RUNHSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvX2hlbHBlcnMvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzU5ODVlZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5kZXNrdG9wLWhpZGRlbiB7XHJcbiAgICAgIGRpc3BsYXk6IGluaXRpYWw7XHJcbiAgICB9XHJcbiAgICAubW9iaWxlLWhpZGRlbiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuZGVza3RvcC1oaWRkZW4ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm1vYmlsZS1oaWRkZW4ge1xyXG4gICAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG4gICAgfVxyXG4gIH0iLCIuc2VhcmNoIHtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW46IDE1cHggYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTk4NWVlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuZGVza3RvcC1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gIH1cblxuICAubW9iaWxlLWhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLmRlc2t0b3AtaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1vYmlsZS1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list-view',
          templateUrl: './list-view.component.html',
          styleUrls: ['./list-view.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        _filterInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['filterInput', {
            "static": true
          }]
        }]
      });
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");

    var _c0 = ["dataTable"];
    var _c1 = ["emailTemplate"];
    var _c2 = ["phoneNumberTemplate"];
    var _c3 = ["dateTimeTemplate"];
    var _c4 = ["dateTemplate"];
    var _c5 = ["booleanTemplate"];
    var _c6 = ["usernameTemplate"];

    var ListView = function ListView() {
      _classCallCheck(this, ListView);

      this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.isLoading = false;
      this.clientSide = false;
      this.canFilter = false;
      this.minimumSearchCharacters = 3;
      this.page = 1;
      this.defaultRowsPerPage = 20;
    };

    ListView.ɵfac = function ListView_Factory(t) {
      return new (t || ListView)();
    };

    ListView.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ListView,
      viewQuery: function ListView_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c3, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c4, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c5, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c6, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dataTable = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.emailTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.phoneNumberTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dateTimeTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dateTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.booleanTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.usernameTemplate = _t.first);
        }
      },
      inputs: {
        rows: "rows",
        rowsPerPage: "rowsPerPage",
        columns: "columns",
        count: "count",
        defaultSortField: "defaultSortField",
        defaultSortDirection: "defaultSortDirection",
        isLoading: "isLoading",
        clientSide: "clientSide",
        canFilter: "canFilter",
        emptyMessage: "emptyMessage",
        showFooter: "showFooter"
      },
      outputs: {
        search: "search"
      }
    });
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
    }); // tslint:disable-next-line: no-namespace


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

  /*! exports provided: Role, User, Shipment */

  /***/
  function srcApp_modelsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./role */
    "./src/app/_models/role.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Role", function () {
      return _role__WEBPACK_IMPORTED_MODULE_0__["Role"];
    });
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user */
    "./src/app/_models/user.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return _user__WEBPACK_IMPORTED_MODULE_1__["User"];
    });
    /* harmony import */


    var _shipment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shipment */
    "./src/app/_models/shipment.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Shipment", function () {
      return _shipment__WEBPACK_IMPORTED_MODULE_2__["Shipment"];
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


    var _helpers_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../_helpers/backend */
    "./src/app/_helpers/backend.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(backoffice) {
        _classCallCheck(this, AuthenticationService);

        this.backoffice = backoffice;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(AuthenticationService, [{
        key: "login",
        value: function login(model) {
          var _this37 = this;

          return this.backoffice.users_Authenticate(model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
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

    AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
      return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_helpers_backend__WEBPACK_IMPORTED_MODULE_0__["BackofficeApiService"]));
    };

    AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthenticationService,
      factory: AuthenticationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _helpers_backend__WEBPACK_IMPORTED_MODULE_0__["BackofficeApiService"]
        }];
      }, null);
    })();
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


    var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/_services/authentication.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"];
    });
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/_services/user.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"];
    });
    /* harmony import */


    var _shipment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shipment.service */
    "./src/app/_services/shipment.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShipmentService", function () {
      return _shipment_service__WEBPACK_IMPORTED_MODULE_2__["ShipmentService"];
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


    var _app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/_helpers */
    "./src/app/_helpers/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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
            this._shipment = new rxjs__WEBPACK_IMPORTED_MODULE_3__["AsyncSubject"]();
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
            this._shipments = new rxjs__WEBPACK_IMPORTED_MODULE_3__["AsyncSubject"]();
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

    ShipmentService.ɵfac = function ShipmentService_Factory(t) {
      return new (t || ShipmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_app_helpers__WEBPACK_IMPORTED_MODULE_1__["BackofficeApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_0__["UserService"]));
    };

    ShipmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ShipmentService,
      factory: ShipmentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ShipmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _app_helpers__WEBPACK_IMPORTED_MODULE_1__["BackofficeApiService"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_0__["UserService"]
        }];
      }, null);
    })();
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


    var _helpers_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../_helpers/backend */
    "./src/app/_helpers/backend.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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
            this._users = new rxjs__WEBPACK_IMPORTED_MODULE_2__["AsyncSubject"]();
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

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_helpers_backend__WEBPACK_IMPORTED_MODULE_0__["BackofficeApiService"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _helpers_backend__WEBPACK_IMPORTED_MODULE_0__["BackofficeApiService"]
        }];
      }, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _helpers_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_helpers/list-view/list-view.component */
    "./src/app/_helpers/list-view/list-view.component.ts");

    var _c0 = ["deliveryTemplate"];
    var _c1 = ["dateTemplate"];

    function AdminComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
      }
    }

    function AdminComponent_ng_template_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "date");
      }

      if (rf & 2) {
        var value_r158 = ctx.value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, value_r158), " ");
      }
    }

    function AdminComponent_ng_template_28_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
      }
    }

    function AdminComponent_ng_template_28_ng_template_1_button_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_ng_template_28_ng_template_1_button_0_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r169);

          var row_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).row;

          var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r167.onRecieved(row_r159);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " done ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdminComponent_ng_template_28_ng_template_1_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " local_shipping ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdminComponent_ng_template_28_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminComponent_ng_template_28_ng_template_1_button_0_Template, 3, 0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminComponent_ng_template_28_ng_template_1_ng_template_1_Template, 2, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        var _r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var row_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !row_r159.recieved)("ngIfElse", _r165);
      }
    }

    function AdminComponent_ng_template_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminComponent_ng_template_28_div_0_Template, 1, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminComponent_ng_template_28_ng_template_1_Template, 3, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        var _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r156.deliveryLoading)("ngIfElse", _r162);
      }
    }

    var _c2 = function _c2() {
      return ["/admin/users"];
    };

    var _c3 = function _c3() {
      return ["/admin/shipments"];
    };

    var _c4 = function _c4() {
      return ["/admin/filament"];
    };

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
          this.shipmentService.getUsersWithShipments(event).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
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

    AdminComponent.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["ShipmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
    };

    AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["ng-component"]],
      viewQuery: function AdminComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._deliveryTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._dateTemplate = _t.first);
        }
      },
      decls: 30,
      vars: 15,
      consts: [[1, "card", "mt-4"], [1, "card-header"], [1, "card-body"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], [1, "row"], [1, "col-12", "d-flex"], [1, "flex-grow-1"], [1, "btn", "btn-success", "ml-3", 3, "routerLink"], [1, "btn", "btn-danger", 3, "routerLink"], [1, "row", "text-center"], [1, "col-4"], [1, "col-12", "mt-3"], [3, "clientSide", "columns", "rows", "rowsPerPage", "defaultSortField", "defaultSortDirection", "showFooter", "canFilter", "search"], ["shipmentsList", ""], ["dateTemplate", ""], ["deliveryTemplate", ""], [1, "spinner-border", "spinner-border-sm"], ["class", "spinner-border spinner-border-sm", 4, "ngIf", "ngIfElse"], ["deliveryBtn", ""], ["class", "btn btn-primary px-4 py-0 my-0", 3, "click", 4, "ngIf", "ngIfElse"], ["notRecieved", ""], [1, "btn", "btn-primary", "px-4", "py-0", "my-0", 3, "click"], [1, "material-icons", "align-text-top", "text-light"], [1, "material-icons", "text-muted"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminComponent_div_4_Template, 1, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u038C\u03BB\u03BF\u03B9 \u03BF\u03B9 \u03A7\u03C1\u03AE\u03C3\u03C4\u03B5\u03C2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u038C\u03BB\u03B5\u03C2 \u03BF\u03B9 \u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AD\u03C2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE \u03A5\u03BB\u03B9\u03BA\u03BF\u03CD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u03A7\u03C1\u03AE\u03C3\u03C4\u03B5\u03C2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u0395\u03BA\u03C4\u03C5\u03C0\u03CE\u03C3\u03B5\u03B9\u03C2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u0391\u03C0\u03B5\u03C3\u03C4\u03B1\u03BB\u03BC\u03AD\u03BD\u03B1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "app-list-view", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function AdminComponent_Template_app_list_view_search_24_listener($event) {
            return ctx.getUsersWithShipments($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AdminComponent_ng_template_26_Template, 2, 3, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AdminComponent_ng_template_28_Template, 3, 2, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clientSide", true)("columns", ctx.columns)("rows", ctx.pendingUsers)("rowsPerPage", 2147483647)("defaultSortField", "dateShipped")("defaultSortDirection", "Desc")("showFooter", "false")("canFilter", true);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _helpers_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_5__["ListViewComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: 'admin.component.html'
        }]
      }], function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["ShipmentService"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }];
      }, {
        _deliveryTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['deliveryTemplate', {
            "static": true
          }]
        }],
        _dateTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['dateTemplate', {
            "static": true
          }]
        }]
      });
    })();
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


    var _helpers_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../_helpers/backend */
    "./src/app/_helpers/backend.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _helpers_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../_helpers/list-view/list-view.component */
    "./src/app/_helpers/list-view/list-view.component.ts");

    var _c0 = ["actionsTemplate"];
    var _c1 = ["dateTemplate"];

    function FilamentComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 15);
      }
    }

    function FilamentComponent_ng_template_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "date");
      }

      if (rf & 2) {
        var value_r70 = ctx.value;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, value_r70), " ");
      }
    }

    function FilamentComponent_ng_template_20_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 15);
      }
    }

    function FilamentComponent_ng_template_20_ng_template_1_button_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilamentComponent_ng_template_20_ng_template_1_button_0_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79);

          var row_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).row;

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r77.sendFilament(row_r71);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " send ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FilamentComponent_ng_template_20_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FilamentComponent_ng_template_20_ng_template_1_button_0_Template, 3, 0, "button", 18);
      }

      if (rf & 2) {
        var value_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().value;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", value_r72);
      }
    }

    function FilamentComponent_ng_template_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FilamentComponent_ng_template_20_div_0_Template, 1, 0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FilamentComponent_ng_template_20_ng_template_1_Template, 1, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

        var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r68.deliveryLoading)("ngIfElse", _r74);
      }
    }

    var _c2 = function _c2() {
      return ["/admin"];
    };

    var _c3 = function _c3() {
      return ["/admin/shipments"];
    };

    var FilamentComponent = /*#__PURE__*/function () {
      function FilamentComponent(userService) {
        _classCallCheck(this, FilamentComponent);

        this.userService = userService;
        this.loading = false;
        this.deliveryLoading = false;
        this.users = new Array();
        this.columns = [];
        this._newUser = new _helpers_backend__WEBPACK_IMPORTED_MODULE_0__["UserFilamentModel"]();
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
          this.userService.GetUsersWithoutFilament(event).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (users) {
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

    FilamentComponent.ɵfac = function FilamentComponent_Factory(t) {
      return new (t || FilamentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
    };

    FilamentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FilamentComponent,
      selectors: [["app-filament"]],
      viewQuery: function FilamentComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._actionsTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._dateTemplate = _t.first);
        }
      },
      decls: 22,
      vars: 14,
      consts: [[1, "card", "mt-4"], [1, "card-header"], [1, "card-body"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], [1, "row"], [1, "col-12"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "btn", "btn-success", "ml-3", 3, "routerLink"], [1, "col-12", "mt-3"], [1, "mt-2"], [1, "fa", "fa-clock-o", "ion-clock", "float-right"], [3, "clientSide", "columns", "rows", "rowsPerPage", "defaultSortField", "defaultSortDirection", "showFooter", "emptyMessage", "canFilter", "search"], ["usersList", ""], ["dateTemplate", ""], ["actionsTemplate", ""], [1, "spinner-border", "spinner-border-sm"], ["class", "spinner-border spinner-border-sm", 4, "ngIf", "ngIfElse"], ["deliveryBtn", ""], ["class", "btn btn-danger px-4 py-0 my-0", 3, "click", 4, "ngIf"], [1, "btn", "btn-danger", "px-4", "py-0", "my-0", 3, "click"], [1, "material-icons", "material-action", "align-text-top", "text-light"]],
      template: function FilamentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE \u03A5\u03BB\u03B9\u03BA\u03BF\u03CD");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FilamentComponent_div_4_Template, 1, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u0391\u03C1\u03C7\u03B9\u03BA\u03AE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " \u038C\u03BB\u03B5\u03C2 \u03BF\u03B9 \u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AD\u03C2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u03A7\u03C1\u03AE\u03C3\u03C4\u03B5\u03C2 \u03BC\u03B5 \u03B1\u03BD\u03AC\u03B3\u03BA\u03B7 \u03B3\u03B9\u03B1 \u03C5\u03BB\u03B9\u03BA\u03CC");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "app-list-view", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("search", function FilamentComponent_Template_app_list_view_search_16_listener($event) {
            return ctx.getUsers($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, FilamentComponent_ng_template_18_Template, 2, 3, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, FilamentComponent_ng_template_20_Template, 3, 2, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clientSide", true)("columns", ctx.columns)("rows", ctx.users)("rowsPerPage", 2147483647)("defaultSortField", "lastName")("defaultSortDirection", "Desc")("showFooter", "false")("emptyMessage", "\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03BA\u03AC\u03C0\u03BF\u03B9\u03BF\u03C2 \u03C7\u03C1\u03AE\u03C3\u03C4\u03B7\u03C2 \u03C0\u03BF\u03C5 \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 \u03B6\u03B7\u03C4\u03AE\u03C3\u03B5\u03B9 filament!")("canFilter", true);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _helpers_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_6__["ListViewComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FilamentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-filament',
          templateUrl: './filament.component.html'
        }]
      }], function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }];
      }, {
        _actionsTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['actionsTemplate', {
            "static": true
          }]
        }],
        _dateTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['dateTemplate', {
            "static": true
          }]
        }]
      });
    })();
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


    var _admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return _admin_component__WEBPACK_IMPORTED_MODULE_0__["AdminComponent"];
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _helpers_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../_helpers/list-view/list-view.component */
    "./src/app/_helpers/list-view/list-view.component.ts");

    var _c0 = ["deliveryTemplate"];
    var _c1 = ["dateTemplate"];

    function ShipmentsComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
      }
    }

    function ShipmentsComponent_ng_template_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "date");
      }

      if (rf & 2) {
        var value_r88 = ctx.value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, value_r88), " ");
      }
    }

    function ShipmentsComponent_ng_template_21_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
      }
    }

    function ShipmentsComponent_ng_template_21_ng_template_1_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " done ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ShipmentsComponent_ng_template_21_ng_template_1_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " local_shipping ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ShipmentsComponent_ng_template_21_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ShipmentsComponent_ng_template_21_ng_template_1_div_0_Template, 3, 0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShipmentsComponent_ng_template_21_ng_template_1_ng_template_1_Template, 3, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        var _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var row_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r89.recieved)("ngIfElse", _r95);
      }
    }

    function ShipmentsComponent_ng_template_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ShipmentsComponent_ng_template_21_div_0_Template, 1, 0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShipmentsComponent_ng_template_21_ng_template_1_Template, 3, 2, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r86.deliveryLoading)("ngIfElse", _r92);
      }
    }

    var _c2 = function _c2() {
      return ["/admin"];
    };

    var _c3 = function _c3() {
      return ["/admin/users"];
    };

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
            name: 'Total Shipped',
            draggable: false,
            canAutoResize: true,
            sortable: true,
            resizeable: false
          }, {
            prop: 'shippingCompany',
            name: 'Shipping Company',
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
            prop: 'fileName',
            name: 'File',
            draggable: false,
            canAutoResize: true,
            sortable: true,
            resizeable: false
          }, {
            prop: 'dateShipped',
            name: 'Date Shipped',
            draggable: false,
            canAutoResize: false,
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
          this.pendingShipments.map(function (x) {
            return x.dateShipped = new Date();
          });
        }
      }, {
        key: "getUsersWithShipments",
        value: function getUsersWithShipments(event) {
          var _this45 = this;

          this.event = event;
          this.shipmentService.getAll(event).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (users) {
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

    ShipmentsComponent.ɵfac = function ShipmentsComponent_Factory(t) {
      return new (t || ShipmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_1__["ShipmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
    };

    ShipmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShipmentsComponent,
      selectors: [["app-shipments"]],
      viewQuery: function ShipmentsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._deliveryTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._dateTemplate = _t.first);
        }
      },
      decls: 23,
      vars: 13,
      consts: [[1, "card", "mt-4"], [1, "card-header"], [1, "card-body"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], [1, "row"], [1, "col-12"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "btn", "btn-success", "ml-3", 3, "routerLink"], [1, "row", "text-center"], [1, "col-4"], [1, "col-12", "mt-3"], [3, "clientSide", "columns", "rows", "rowsPerPage", "defaultSortField", "defaultSortDirection", "showFooter", "canFilter", "search"], ["shipmentsList", ""], ["dateTemplate", ""], ["deliveryTemplate", ""], [1, "spinner-border", "spinner-border-sm"], ["class", "spinner-border spinner-border-sm", 4, "ngIf", "ngIfElse"], ["deliveryBtn", ""], ["class", "px-4 py-0 my-0", 4, "ngIf", "ngIfElse"], ["notRecieved", ""], [1, "px-4", "py-0", "my-0"], [1, "material-icons", "align-text-top"], [1, "material-icons", "text-muted"]],
      template: function ShipmentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AD\u03C2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShipmentsComponent_div_4_Template, 1, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0391\u03C1\u03C7\u03B9\u03BA\u03AE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u038C\u03BB\u03BF\u03B9 \u03BF\u03B9 \u03A7\u03C1\u03AE\u03C3\u03C4\u03B5\u03C2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AD\u03C2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-list-view", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function ShipmentsComponent_Template_app_list_view_search_17_listener($event) {
            return ctx.getUsersWithShipments($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ShipmentsComponent_ng_template_19_Template, 2, 3, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ShipmentsComponent_ng_template_21_Template, 3, 2, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clientSide", true)("columns", ctx.columns)("rows", ctx.pendingShipments)("rowsPerPage", 2147483647)("defaultSortField", "dateShipped")("defaultSortDirection", "Desc")("showFooter", "false")("canFilter", true);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _helpers_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_5__["ListViewComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShipmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-shipments',
          templateUrl: './shipments.component.html'
        }]
      }], function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_1__["ShipmentService"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }];
      }, {
        _deliveryTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['deliveryTemplate', {
            "static": true
          }]
        }],
        _dateTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['dateTemplate', {
            "static": true
          }]
        }]
      });
    })();
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _helpers_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../_helpers/list-view/list-view.component */
    "./src/app/_helpers/list-view/list-view.component.ts");

    var _c0 = ["actionsTemplate"];

    function UsersComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 12);
      }
    }

    function UsersComponent_ng_template_15_button_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " search ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().value;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", value_r103 + "/view");
      }
    }

    function UsersComponent_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UsersComponent_ng_template_15_button_0_Template, 3, 1, "button", 13);
      }

      if (rf & 2) {
        var value_r103 = ctx.value;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", value_r103);
      }
    }

    var _c1 = function _c1() {
      return ["/admin"];
    };

    var _c2 = function _c2() {
      return ["/admin/shipments"];
    };

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

          this.userService.getAll(event).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])()).subscribe(function (users) {
            _this47.loading = false;
            _this47.users = users;
          });
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
    };

    UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["app-users"]],
      viewQuery: function UsersComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._actionsTemplate = _t.first);
        }
      },
      decls: 17,
      vars: 13,
      consts: [[1, "card", "mt-4"], [1, "card-header"], [1, "card-body"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], [1, "row"], [1, "col-12"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "btn", "btn-success", "ml-3", 3, "routerLink"], [1, "col-12", "mt-3"], [3, "clientSide", "columns", "rows", "rowsPerPage", "defaultSortField", "defaultSortDirection", "showFooter", "canFilter", "search"], ["usersList", ""], ["actionsTemplate", ""], [1, "spinner-border", "spinner-border-sm"], ["class", "btn btn-primary px-4 py-0 my-0", 3, "routerLink", 4, "ngIf"], [1, "btn", "btn-primary", "px-4", "py-0", "my-0", 3, "routerLink"], [1, "material-icons", "material-action", "align-text-top", "text-light"]],
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u03A7\u03C1\u03AE\u03C3\u03C4\u03B5\u03C2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UsersComponent_div_4_Template, 1, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u0391\u03C1\u03C7\u03B9\u03BA\u03AE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " \u038C\u03BB\u03B5\u03C2 \u03BF\u03B9 \u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AD\u03C2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "app-list-view", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("search", function UsersComponent_Template_app_list_view_search_13_listener($event) {
            return ctx.getUsers($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, UsersComponent_ng_template_15_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clientSide", true)("columns", ctx.columns)("rows", ctx.users)("rowsPerPage", 2147483647)("defaultSortField", "lastName")("defaultSortDirection", "Desc")("showFooter", "false")("canFilter", true);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _helpers_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_5__["ListViewComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-users',
          templateUrl: './users.component.html'
        }]
      }], function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }];
      }, {
        _actionsTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['actionsTemplate', {
            "static": true
          }]
        }]
      });
    })();
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


    var _app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @app/_models */
    "./src/app/_models/index.ts");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! jw-bootstrap-switch-ng2 */
    "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm2015/jw-bootstrap-switch-ng2.js");

    var _c0 = function _c0() {
      return ["/admin/users"];
    };

    var ViewComponent = /*#__PURE__*/function () {
      function ViewComponent(_route, _userService) {
        _classCallCheck(this, ViewComponent);

        this._route = _route;
        this._userService = _userService;
        this.user = new _app_models__WEBPACK_IMPORTED_MODULE_0__["User"]();
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

    ViewComponent.ɵfac = function ViewComponent_Factory(t) {
      return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
    };

    ViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ViewComponent,
      selectors: [["app-view"]],
      decls: 78,
      vars: 28,
      consts: [[1, "card", "mt-4"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "col-12"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "form-row", "col-12"], [1, "form-group", "col-md-6"], ["for", "firstName"], ["type", "text", "disabled", "", 1, "form-control", 3, "value"], ["for", "lastName"], [1, "form-group", "col-md-2"], [1, "form-group", "col-md-5"], ["for", "email"], ["type", "email", "disabled", "", "required", "", 1, "form-control", 3, "value"], ["for", "phoneNumber"], ["type", "tel", "disabled", "", "placeholder", "6934567891", 1, "form-control", 3, "value"], [1, "form-group", "col-md-12"], ["for", "address"], ["disabled", "", "rows", "4", 1, "form-control", 3, "value"], [1, "form-row", "col-12", "align-items-center", "pt-4"], [1, "form-check", "col-md-6"], ["for", "printerActive", 1, "form-check-label", "pr-5"], ["name", "printerActive", "id", "printerActive", 1, "form-check-input", 3, "switch-animate", "switch-size", "switch-on-text", "switch-off-text", "switch-disabled", "ngModel"], [1, "form-check", "col-md-6", "mt-sm-3", "mt-md-0"], ["for", "needsFilament", 1, "form-check-label", "pr-5"], ["name", "needsFilament", "id", "needsFilament", 1, "form-check-input", 3, "switch-animate", "switch-size", "switch-on-text", "switch-off-text", "switch-disabled", "ngModel"], [1, "col"], ["for", "printerModel"], [1, "form-group", "col-md-4"], ["for", "batchRequiredTime"], ["for", "username"], [1, "form-group", "col-md-6", "mb-0"], ["for", "password"], ["type", "password", "disabled", "", "aria-describedby", "passwordHelpBlock", 1, "form-control", 3, "value"]],
      template: function ViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " \u03A0\u03AF\u03C3\u03C9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u038C\u03BD\u03BF\u03BC\u03B1*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\u0395\u03C0\u03AF\u03B8\u03B5\u03C4\u03BF*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\u03A1\u03CC\u03BB\u03BF\u03C2*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Email*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\u03A4\u03B7\u03BB\u03AD\u03C6\u03C9\u03BD\u03BF*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\u0394\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 \u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE\u03C2*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "textarea", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\u039B\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03B9\u03BA\u03CC\u03C2 \u03B5\u03BA\u03C4\u03C5\u03C0\u03C9\u03C4\u03AE\u03C2*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "bSwitch", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "\u03A7\u03C1\u03B5\u03B9\u03AC\u03B6\u03B5\u03C4\u03B1\u03B9 Filament*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "bSwitch", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "\u039C\u03AC\u03C1\u03BA\u03B1 3D Printer*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "\u0395\u03BA\u03C4\u03B5\u03B9\u03BD\u03CC\u03BC\u03B5\u03BD\u03BF\u03C2 \u03A7\u03C1\u03CC\u03BD\u03BF\u03C2 \u0395\u03BA\u03C4\u03CD\u03C0\u03C9\u03C3\u03B7\u03C2*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "\u03A3\u03C5\u03BD\u03BF\u03BB\u03B9\u03BA\u03AC \u0391\u03C0\u03B5\u03C3\u03C4\u03B1\u03BB\u03BC\u03AD\u03BD\u03B1*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03B1 \u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Username*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Password*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.user.firstName, " ", ctx.user.lastName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](27, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.user.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.user.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.user.role);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.user.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.user.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.user.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("switch-animate", "animate")("switch-size", "small")("switch-on-text", "\u039D\u0391\u0399")("switch-off-text", "\u039F\u03A7\u0399")("switch-disabled", "disabled")("ngModel", ctx.user.printerActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("switch-animate", "animate")("switch-size", "small")("switch-on-text", "\u039D\u0391\u0399")("switch-off-text", "\u039F\u03A7\u0399")("switch-disabled", "disabled")("ngModel", ctx.user.needsFilament);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.user.printerModel);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.user.batchRequiredTime);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.user.shippedQuantity);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.user.latestShippedDate.toDateString());

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.user.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.user.firstName);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'app-view',
          templateUrl: './view.component.html'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      }, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./_models */
    "./src/app/_models/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_nav_0_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_nav_0_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_nav_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_nav_0_a_2_Template, 2, 0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_nav_0_a_3_Template, 2, 0, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_nav_0_Template_a_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r43.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0394\u03CE\u03C1\u03B7\u03C3\u03B5 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r40.isAdmin);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.isAdmin);
      }
    }

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
          return this.currentUser && this.currentUser.role === _models__WEBPACK_IMPORTED_MODULE_3__["Role"].Admin;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app"]],
      decls: 9,
      vars: 1,
      consts: [["class", "navbar navbar-expand navbar-dark bg-dark d-flex justify-content-between", 4, "ngIf"], [1, "container"], [1, "footer", "mt-5"], [1, "container", "d-flex", "justify-content-between"], ["href", "#", "target", "_top"], ["href", "https://visitagiasos.gr", "target", "_blank"], [1, "navbar", "navbar-expand", "navbar-dark", "bg-dark", "d-flex", "justify-content-between"], [1, "navbar-nav"], ["class", "nav-item nav-link", "routerLink", "/", 4, "ngIf"], ["class", "nav-item nav-link", "routerLink", "/admin", 4, "ngIf"], [1, "nav-item", "nav-link", 3, "click"], ["href", "https://www.3dhub.gr/shop/consumables/covid19-1kg-pla/", "target", "_blank", 1, "mr-3"], ["type", "button", 1, "btn", "btn-warning", "px-4"], ["routerLink", "/", 1, "nav-item", "nav-link"], ["routerLink", "/admin", 1, "nav-item", "nav-link"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_nav_0_Template, 9, 2, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "footer", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hellas COVID19 3D Printing Inventory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A donation by VisitAgiasos.gr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app',
          templateUrl: 'app.component.html'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }];
      }, null);
    })();
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _helpers_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./_helpers/list-view/list-view.component */
    "./src/app/_helpers/list-view/list-view.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./_helpers */
    "./src/app/_helpers/index.ts");
    /* harmony import */


    var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! jw-bootstrap-switch-ng2 */
    "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm2015/jw-bootstrap-switch-ng2.js");
    /* harmony import */


    var _home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./home */
    "./src/app/home/index.ts");
    /* harmony import */


    var _admin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./admin */
    "./src/app/admin/index.ts");
    /* harmony import */


    var _login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./login */
    "./src/app/login/index.ts");
    /* harmony import */


    var _register__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./register */
    "./src/app/register/index.ts");
    /* harmony import */


    var _shipment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./shipment */
    "./src/app/shipment/index.ts");
    /* harmony import */


    var _admin_users_users_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./admin/users/users.component */
    "./src/app/admin/users/users.component.ts");
    /* harmony import */


    var _admin_users_view_view_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./admin/users/view/view.component */
    "./src/app/admin/users/view/view.component.ts");
    /* harmony import */


    var _admin_shipments_shipments_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./admin/shipments/shipments.component */
    "./src/app/admin/shipments/shipments.component.ts");
    /* harmony import */


    var _admin_filament_filament_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./admin/filament/filament.component */
    "./src/app/admin/filament/filament.component.ts");
    /* harmony import */


    var _home_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./home/profile/profile.component */
    "./src/app/home/profile/profile.component.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _helpers__WEBPACK_IMPORTED_MODULE_9__["JwtInterceptor"],
        multi: true
      }, {
        provide: _helpers__WEBPACK_IMPORTED_MODULE_9__["BACKOFFICE_API_BASE_URL"],
        useFactory: function useFactory() {
          return src_environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].apiUrl;
        }
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _helpers__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _app_routing__WEBPACK_IMPORTED_MODULE_7__["appRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_10__["JwBootstrapSwitchNg2Module"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _home__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _admin__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"], _login__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _register__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"], _shipment__WEBPACK_IMPORTED_MODULE_15__["ShipmentComponent"], _helpers_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_1__["ListViewComponent"], _admin_users_users_component__WEBPACK_IMPORTED_MODULE_16__["UsersComponent"], _admin_users_view_view_component__WEBPACK_IMPORTED_MODULE_17__["ViewComponent"], _admin_shipments_shipments_component__WEBPACK_IMPORTED_MODULE_18__["ShipmentsComponent"], _admin_filament_filament_component__WEBPACK_IMPORTED_MODULE_19__["FilamentComponent"], _home_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_10__["JwBootstrapSwitchNg2Module"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _app_routing__WEBPACK_IMPORTED_MODULE_7__["appRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_10__["JwBootstrapSwitchNg2Module"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"]],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _home__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _admin__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"], _login__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _register__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"], _shipment__WEBPACK_IMPORTED_MODULE_15__["ShipmentComponent"], _helpers_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_1__["ListViewComponent"], _admin_users_users_component__WEBPACK_IMPORTED_MODULE_16__["UsersComponent"], _admin_users_view_view_component__WEBPACK_IMPORTED_MODULE_17__["ViewComponent"], _admin_shipments_shipments_component__WEBPACK_IMPORTED_MODULE_18__["ShipmentsComponent"], _admin_filament_filament_component__WEBPACK_IMPORTED_MODULE_19__["FilamentComponent"], _home_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _helpers__WEBPACK_IMPORTED_MODULE_9__["JwtInterceptor"],
            multi: true
          }, {
            provide: _helpers__WEBPACK_IMPORTED_MODULE_9__["BACKOFFICE_API_BASE_URL"],
            useFactory: function useFactory() {
              return src_environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].apiUrl;
            }
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _helpers__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
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


    var _home_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./home/profile/profile.component */
    "./src/app/home/profile/profile.component.ts");
    /* harmony import */


    var _admin_filament_filament_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./admin/filament/filament.component */
    "./src/app/admin/filament/filament.component.ts");
    /* harmony import */


    var _admin_shipments_shipments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin/shipments/shipments.component */
    "./src/app/admin/shipments/shipments.component.ts");
    /* harmony import */


    var _admin_users_view_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin/users/view/view.component */
    "./src/app/admin/users/view/view.component.ts");
    /* harmony import */


    var _admin_users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin/users/users.component */
    "./src/app/admin/users/users.component.ts");
    /* harmony import */


    var _shipment_shipment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shipment/shipment.component */
    "./src/app/shipment/shipment.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home */
    "./src/app/home/index.ts");
    /* harmony import */


    var _admin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./admin */
    "./src/app/admin/index.ts");
    /* harmony import */


    var _login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./login */
    "./src/app/login/index.ts");
    /* harmony import */


    var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./_helpers/auth.guard */
    "./src/app/_helpers/auth.guard.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./_models */
    "./src/app/_models/index.ts");

    var routes = [{
      path: '',
      component: _home__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
      path: 'profile',
      component: _home_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
      data: {
        roles: [_models__WEBPACK_IMPORTED_MODULE_12__["Role"].User]
      }
    }, {
      path: 'admin',
      component: _admin__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
      data: {
        roles: [_models__WEBPACK_IMPORTED_MODULE_12__["Role"].Admin]
      }
    }, {
      path: 'admin/users',
      component: _admin_users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
      data: {
        roles: [_models__WEBPACK_IMPORTED_MODULE_12__["Role"].Admin]
      }
    }, {
      path: 'admin/filament',
      component: _admin_filament_filament_component__WEBPACK_IMPORTED_MODULE_1__["FilamentComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
      data: {
        roles: [_models__WEBPACK_IMPORTED_MODULE_12__["Role"].Admin]
      }
    }, {
      path: 'admin/shipments',
      component: _admin_shipments_shipments_component__WEBPACK_IMPORTED_MODULE_2__["ShipmentsComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
      data: {
        roles: [_models__WEBPACK_IMPORTED_MODULE_12__["Role"].Admin]
      }
    }, {
      path: 'admin/users/:id/view',
      component: _admin_users_view_view_component__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
      data: {
        roles: [_models__WEBPACK_IMPORTED_MODULE_12__["Role"].Admin]
      }
    }, {
      path: 'login',
      component: _login__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
    }, {
      path: 'shipments',
      component: _shipment_shipment_component__WEBPACK_IMPORTED_MODULE_5__["ShipmentComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
      data: {
        roles: [_models__WEBPACK_IMPORTED_MODULE_12__["Role"].User]
      }
    }, // otherwise redirect to home
    {
      path: '**',
      redirectTo: ''
    }];

    var appRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes);
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


    var _helpers_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../_helpers/backend */
    "./src/app/_helpers/backend.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! jw-bootstrap-switch-ng2 */
    "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm2015/jw-bootstrap-switch-ng2.js");
    /* harmony import */


    var _helpers_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../_helpers/list-view/list-view.component */
    "./src/app/_helpers/list-view/list-view.component.ts");

    var _c0 = ["deliveryTemplate"];
    var _c1 = ["dateTemplate"];

    function HomeComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 26);
      }
    }

    function HomeComponent_p_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u0393\u03B5\u03AF\u03B1 \u03C3\u03BF\u03C5 ", ctx_r137.currentUser.firstName, "! ");
      }
    }

    function HomeComponent_p_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u0388\u03C7\u03BF\u03C5\u03BC\u03B5 \u03B5\u03BD\u03B7\u03BC\u03B5\u03C1\u03C9\u03B8\u03B5\u03AF \u03B3\u03B9\u03B1 \u03C4\u03B7\u03BD \u03AD\u03BB\u03BB\u03B5\u03B9\u03C8\u03B7 \u03C3\u03BF\u03C5 \u03C3\u03B5 filament \u03BA\u03B1\u03B9 \u03B8\u03B1 \u03C3\u03BF\u03C5 \u03C3\u03C4\u03B5\u03AF\u03BB\u03BF\u03C5\u03BC\u03B5 \u03C3\u03CD\u03BD\u03C4\u03BF\u03BC\u03B1! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_ng_template_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "date");
      }

      if (rf & 2) {
        var value_r145 = ctx.value;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, value_r145), " ");
      }
    }

    function HomeComponent_ng_template_55_span_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " done ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_ng_template_55_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " local_shipping ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_ng_template_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomeComponent_ng_template_55_span_0_Template, 2, 0, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_ng_template_55_ng_template_1_Template, 2, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        var row_r146 = ctx.row;

        var _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", row_r146.recieved)("ngIfElse", _r149);
      }
    }

    var _c2 = function _c2() {
      return ["/profile"];
    };

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(userService, shipmentService, authenticationService) {
        _classCallCheck(this, HomeComponent);

        this.userService = userService;
        this.shipmentService = shipmentService;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.currentUser = new _helpers_backend__WEBPACK_IMPORTED_MODULE_0__["UserModel"]();
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

          this.userService.getById(this.currentUser.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (user) {
            _this50.loading = false;
            _this50.currentUser = user;

            if (user.shippedQuantity === null) {
              _this50.currentUser.shippedQuantity = 0;
            }
          });
          this.shipmentService.getShipmentsByUser(this.currentUser.id).subscribe(function (shipments) {
            _this50.shipments = shipments;
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["ShipmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["ng-component"]],
      viewQuery: function HomeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._deliveryTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._dateTemplate = _t.first);
        }
      },
      decls: 57,
      vars: 22,
      consts: [[1, "card", "mt-4"], [1, "card-header", "d-flex", "flex-row", "justify-content-between", "align-items-center"], ["role", "button", 1, "btn", "btn-secondary", "btn-sm", "text-light", 3, "routerLink"], [1, "material-icons"], [1, "card-body"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], [4, "ngIf"], ["class", "text-success", 4, "ngIf"], [1, "col-12", "mt-3"], [1, "form-row", "col-6"], [1, "form-group", "col-md-6"], ["for", "activePrinter"], ["name", "activePrinter", 1, "pl-3", 3, "switch-size", "switch-readonly", "ngModel", "ngModelChange"], [1, "form-row", "col-12", "text-center"], [1, "form-group", "col-md-3"], ["for", "lastName"], [1, "form-group", "col-md-12"], ["for", "address"], ["routerLink", "/shipments", 1, "btn", "btn-primary", "mb-3"], [1, "col-md-12"], [1, "mt-2"], [1, "fa", "fa-clock-o", "ion-clock", "float-right"], [3, "clientSide", "columns", "rows", "rowsPerPage", "defaultSortField", "defaultSortDirection", "showFooter", "emptyMessage", "search"], ["shipmentsList", ""], ["dateTemplate", ""], ["deliveryTemplate", ""], [1, "spinner-border", "spinner-border-sm"], [1, "text-success"], ["class", "material-icons text-success", 4, "ngIf", "ngIfElse"], ["notRecieved", ""], [1, "material-icons", "text-success"], [1, "material-icons", "text-muted"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u03A4\u03BF \u03C0\u03C1\u03BF\u03C6\u03AF\u03BB \u03BC\u03BF\u03C5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HomeComponent_div_10_Template, 1, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomeComponent_p_11_Template, 2, 1, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HomeComponent_p_12_Template, 2, 0, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u03A3\u03B5 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "bSwitch", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_bSwitch_ngModelChange_21_listener($event) {
            return ctx.currentUser.printerActive = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u039C\u03BF\u03BD\u03C4\u03AD\u03BB\u03BF:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u0395\u03BA\u03C4\u03B5\u03B9\u03BD\u03CC\u03BC\u03B5\u03BD\u03BF\u03C2 \u03C7\u03C1\u03CC\u03BD\u03BF\u03C2:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\u03A3\u03C5\u03BD\u03BF\u03BB\u03B9\u03BA\u03AE \u03C0\u03C1\u03BF\u03C3\u03C6\u03BF\u03C1\u03AC:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03B1 \u03B1\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " \u039A\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u039C\u03B5\u03C4\u03B1\u03BA\u03AF\u03BD\u03B7\u03C3\u03B7\u03C2 \u03A5\u03BB\u03B9\u03BA\u03CE\u03BD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\u03A0\u03C1\u03CC\u03C3\u03C6\u03B1\u03C4\u03B7 \u0394\u03C1\u03B1\u03C3\u03C4\u03B7\u03C1\u03B9\u03CC\u03C4\u03B7\u03C4\u03B1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "app-list-view", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("search", function HomeComponent_Template_app_list_view_search_51_listener() {
            return ctx.getShipments();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, HomeComponent_ng_template_53_Template, 2, 3, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, HomeComponent_ng_template_55_Template, 3, 2, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentUser.needsFilament);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("switch-size", "small")("switch-readonly", "readonly")("ngModel", ctx.currentUser.printerActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.currentUser.printerModel, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.currentUser.batchRequiredTime, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.currentUser.shippedQuantity, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 19, ctx.currentUser.latestShippedDate), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clientSide", true)("columns", ctx.columns)("rows", ctx.shipments)("rowsPerPage", 2147483647)("defaultSortField", "dateShipped")("defaultSortDirection", "Desc")("showFooter", "false")("emptyMessage", "\u03A3\u03C4\u03B5\u03AF\u03BB\u03B5 \u03BC\u03B1\u03C2 \u03C4\u03B7\u03BD \u03BA\u03BF\u03CD\u03C4\u03B1 \u03C3\u03BF\u03C5 \u03BC\u03B5 (30) \u03BC\u03AC\u03C3\u03BA\u03B5\u03C2 \u03B3\u03B9\u03B1 2kg PLA filament!");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_7__["JwBootstrapSwitchNg2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _helpers_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_8__["ListViewComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          templateUrl: 'home.component.html'
        }]
      }], function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["ShipmentService"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }];
      }, {
        _deliveryTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['deliveryTemplate', {
            "static": true
          }]
        }],
        _dateTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['dateTemplate', {
            "static": true
          }]
        }]
      });
    })();
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


    var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"];
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


    var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../_models/user */
    "./src/app/_models/user.ts");
    /* harmony import */


    var _helpers_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../_helpers/backend */
    "./src/app/_helpers/backend.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! jw-bootstrap-switch-ng2 */
    "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm2015/jw-bootstrap-switch-ng2.js");

    function ProfileComponent_div_10_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u03A4\u03BF \u038C\u03BD\u03BF\u03BC\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03B1\u03C1\u03B1\u03AF\u03C4\u03B7\u03C4\u03BF");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProfileComponent_div_10_div_1_Template, 2, 0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r45.f.firstName.errors.required);
      }
    }

    function ProfileComponent_div_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u03A4\u03BF \u0395\u03C0\u03AF\u03B8\u03B5\u03C4\u03BF \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03B1\u03C1\u03B1\u03AF\u03C4\u03B7\u03C4\u03BF");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProfileComponent_div_15_div_1_Template, 2, 0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r46.f.lastName.errors.required);
      }
    }

    function ProfileComponent_div_21_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u03A4\u03BF Email \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03B1\u03C1\u03B1\u03AF\u03C4\u03B7\u03C4\u03BF");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProfileComponent_div_21_div_1_Template, 2, 0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r47.f.email.errors.required);
      }
    }

    function ProfileComponent_div_26_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u03A4\u03BF \u03C4\u03B7\u03BB\u03AD\u03C6\u03C9\u03BD\u03BF \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03B1\u03C1\u03B1\u03AF\u03C4\u03B7\u03C4\u03BF");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProfileComponent_div_26_div_1_Template, 2, 0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r48.f.phoneNumber.errors.required);
      }
    }

    function ProfileComponent_div_33_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0397 \u03A0\u03B5\u03C1\u03B9\u03BF\u03C7\u03AE \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03B1\u03C1\u03B1\u03AF\u03C4\u03B7\u03C4\u03B7");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProfileComponent_div_33_div_1_Template, 2, 0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r49.f.address.errors.required);
      }
    }

    function ProfileComponent_div_45_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0397 \u039C\u03AC\u03C1\u03BA\u03B1 3D Printer \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03B1\u03C1\u03B1\u03AF\u03C4\u03B7\u03C4\u03B7");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_div_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProfileComponent_div_45_div_1_Template, 2, 0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r50.f.printerModel.errors.required);
      }
    }

    function ProfileComponent_div_64_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "To Username \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03B1\u03C1\u03B1\u03AF\u03C4\u03B7\u03C4\u03BF");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_div_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProfileComponent_div_64_div_1_Template, 2, 0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r51.f.username.errors.required);
      }
    }

    function ProfileComponent_div_69_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u039F \u03A0\u03B1\u03BB\u03B9\u03CC\u03C2 \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03B1\u03C1\u03B1\u03AF\u03C4\u03B7\u03C4\u03BF\u03C2");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_div_69_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProfileComponent_div_69_div_1_Template, 2, 0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r52.f.password.errors.required);
      }
    }

    function ProfileComponent_span_71_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 42);
      }
    }

    function ProfileComponent_div_75_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r54.error);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r54.formError);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

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
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_0__["User"]();
        this.updatedUser = new _helpers_backend__WEBPACK_IMPORTED_MODULE_1__["UpdateModel"]();
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this51 = this;

          this.updateForm = this._formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]{10,11}$/)]],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            printerModel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            batchRequiredTime: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            printerActive: [true],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{4,30}$/)]],
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{4,30}$/)]
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

          this._userService.update(this._authenticationService.currentUserValue.id, this.updatedUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
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

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_5__["UserService"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 76,
      vars: 53,
      consts: [[1, "card", "mt-4"], [1, "card-header"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-row", "col-12"], [1, "form-group", "col-md-6"], ["for", "firstName"], ["type", "text", "formControlName", "firstName", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "lastName"], ["type", "text", "formControlName", "lastName", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "email"], ["type", "email", "formControlName", "email", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "phoneNumber"], ["type", "tel", "placeholder", "6934567891", "formControlName", "phoneNumber", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], [1, "form-group", "col-md-12"], ["for", "address"], ["formControlName", "address", "name", "address", "rows", "4", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], [1, "form-row", "col-12", "mb-4"], [1, "form-check-inline", "col-md-12"], ["for", "printerActive", 1, "form-check-label", "pr-5"], ["name", "printerActive", "id", "printerActive", "formControlName", "printerActive", 1, "form-check-input", 3, "switch-animate", "switch-size", "switch-on-text", "switch-off-text", "ngModel", "ngModelChange"], [1, "form-row", "col-12", "align-items-baseline"], ["for", "printerModel"], ["type", "text", "formControlName", "printerModel", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "batchRequiredTime"], ["type", "number", "min", "0", "name", "batchRequiredTime", "id", "batchRequiredTime", "formControlName", "batchRequiredTime", 1, "form-control", "without", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-md-6", "mb-0"], ["for", "newPassword"], ["type", "password", "formControlName", "newPassword", "aria-describedby", "newPasswordHelpBlock", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["id", "newPasswordHelpBlock", 1, "form-text", "text-muted", "pb-4", "mt-2"], [1, "form-row", "col-12", "mb-3"], ["for", "username"], ["type", "text", "formControlName", "username", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "password"], ["type", "password", "formControlName", "password", "aria-describedby", "passwordHelpBlock", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["type", "submit", 1, "btn", "btn-info", "ml-3", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", "ml-3", 3, "click"], ["class", "alert alert-danger mt-3 mb-0", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"], [1, "alert", "alert-danger", "mt-3", "mb-0"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0395\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1 \u03A0\u03C1\u03BF\u03C6\u03AF\u03BB");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u038C\u03BD\u03BF\u03BC\u03B1*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProfileComponent_div_10_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u0395\u03C0\u03AF\u03B8\u03B5\u03C4\u03BF*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.user.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ProfileComponent_div_15_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Email*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.user.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ProfileComponent_div_21_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u03A4\u03B7\u03BB\u03AD\u03C6\u03C9\u03BD\u03BF*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_25_listener($event) {
            return ctx.user.phoneNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ProfileComponent_div_26_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\u0394\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 \u03B1\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE\u03C2 \u03BD\u03AD\u03BF\u03C5 \u03C7\u03BF\u03C1\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03BF\u03C5 \u03C5\u03BB\u03B9\u03BA\u03BF\u03CD*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "textarea", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_textarea_ngModelChange_31_listener($event) {
            return ctx.user.address = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, ProfileComponent_div_33_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "\u0395\u03AF\u03BD\u03B1\u03B9 \u03BF \u03B5\u03BA\u03C4\u03C5\u03C0\u03C9\u03C4\u03AE\u03C2 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03B9\u03BA\u03CC\u03C2?*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "bSwitch", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_bSwitch_ngModelChange_39_listener($event) {
            return ctx.user.printerActive = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\u039C\u03AC\u03C1\u03BA\u03B1 3D Printer*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_44_listener($event) {
            return ctx.user.printerModel = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, ProfileComponent_div_45_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "\u0395\u03BA\u03C4\u03B5\u03B9\u03BD\u03CC\u03BC\u03B5\u03BD\u03BF\u03C2 \u03C7\u03C1\u03CC\u03BD\u03BF\u03C2 \u03B5\u03BA\u03C4\u03CD\u03C0\u03C9\u03C3\u03B7\u03C2 1 \u03BC\u03AC\u03C3\u03BA\u03B1\u03C2 (\u03BB\u03B5\u03C0\u03C4\u03AC)");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_49_listener($event) {
            return ctx.user.batchRequiredTime = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "\u039D\u03AD\u03BF\u03C2 \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_55_listener($event) {
            return ctx.updatedUser.newPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "small", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " \u0391\u03C6\u03AF\u03C3\u03C4\u03B5 \u03C4\u03BF \u03BA\u03B5\u03BD\u03CC \u03B1\u03BD \u03B4\u03B5\u03BD \u03B8\u03AD\u03BB\u03B5\u03C4\u03B5 \u03BD\u03B1 \u03B1\u03BB\u03BB\u03AC\u03BE\u03B5\u03C4\u03B5 \u03C4\u03BF\u03BD \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC \u03C3\u03B1\u03C2. \u039F \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2 \u03C3\u03B1\u03C2 \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 \u03C4\u03BF\u03C5\u03BB\u03AC\u03C7\u03B9\u03C3\u03C4\u03BF\u03BD 4 \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03B5\u03C2, \u03AD\u03BD\u03B1 \u03BA\u03B5\u03C6\u03B1\u03BB\u03B1\u03AF\u03BF, \u03AD\u03BD\u03B1 \u03BC\u03B9\u03BA\u03C1\u03CC \u03B3\u03C1\u03AC\u03BC\u03BC\u03B1 \u03BA\u03B1\u03B9 \u03AD\u03BD\u03B1\u03BD \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Username*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_63_listener($event) {
            return ctx.user.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, ProfileComponent_div_64_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "\u03A0\u03B1\u03BB\u03B9\u03CC\u03C2 \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_68_listener($event) {
            return ctx.updatedUser.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, ProfileComponent_div_69_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, ProfileComponent_span_71_Template, 1, 0, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, " \u0391\u03BD\u03B1\u03BD\u03AD\u03C9\u03C3\u03B7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_73_listener() {
            return ctx.goBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "\u03A0\u03AF\u03C3\u03C9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](75, ProfileComponent_div_75_Template, 5, 2, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.updateForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](35, _c0, ctx.submitted && ctx.f.firstName.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.firstName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.lastName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](37, _c0, ctx.submitted && ctx.f.lastName.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.lastName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.email)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](39, _c0, ctx.submitted && ctx.f.email.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.phoneNumber)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](41, _c0, ctx.submitted && ctx.f.phoneNumber.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.phoneNumber.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.address)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](43, _c0, ctx.submitted && ctx.f.address.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.address.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("switch-animate", "animate")("switch-size", "small")("switch-on-text", "\u039D\u0391\u0399")("switch-off-text", "\u039F\u03A7\u0399")("ngModel", ctx.user.printerActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.printerModel)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](45, _c0, ctx.submitted && ctx.f.printerModel.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.printerModel.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.batchRequiredTime);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.updatedUser.newPassword)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](47, _c0, ctx.submitted && ctx.f.newPassword.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.username)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](49, _c0, ctx.submitted && ctx.f.username.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.username.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.updatedUser.password)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](51, _c0, ctx.submitted && ctx.f.password.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error || ctx.formError);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_8__["JwBootstrapSwitchNg2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html'
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }];
      }, null);
    })();
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


    var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/login/login.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"];
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


    var _helpers_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../_helpers/backend */
    "./src/app/_helpers/backend.ts");
    /* harmony import */


    var _app_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/_models */
    "./src/app/_models/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_div_11_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Username is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_11_div_1_Template, 2, 0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r171.f.username.errors.required);
      }
    }

    function LoginComponent_div_16_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_16_div_1_Template, 2, 0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r172.f.password.errors.required);
      }
    }

    function LoginComponent_span_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 21);
      }
    }

    function LoginComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r174.error);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

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
        this._user = new _helpers_backend__WEBPACK_IMPORTED_MODULE_0__["AuthenticateModel"](); // redirect to home if already logged in

        if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
        }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
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
          this.authenticationService.login(this._user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (data) {
            localStorage.getItem('role') === _app_models__WEBPACK_IMPORTED_MODULE_1__["Role"].Admin ? _this53.returnUrl = '/' : _this53.returnUrl = '/admin';

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

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["ng-component"]],
      decls: 30,
      vars: 12,
      consts: [[1, "container"], [1, "col-md-6", "offset-md-3", "py-5"], [1, "card"], [1, "card-header", "text-center"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "username"], ["type", "text", "formControlName", "username", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "password"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["type", "button", 1, "btn", "btn-info", "ml-3", 3, "click"], ["class", "alert alert-danger mt-3 mb-0", 4, "ngIf"], [1, "col-md-10", "offset-md-1", "text-center", "pt-4"], ["href", "https://www.3dhub.gr/shop/consumables/covid19-1kg-pla/", "target", "_blank"], ["type", "button", 1, "btn", "btn-warning"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"], [1, "alert", "alert-danger", "mt-3", "mb-0"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Hellas COVID19 3D Printing Inventory");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, LoginComponent_div_11_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, LoginComponent_div_16_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, LoginComponent_span_18_Template, 1, 0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_20_listener() {
            return ctx.onRegister();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, LoginComponent_div_22_Template, 2, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " \u03A3\u03C4\u03AE\u03C1\u03B9\u03BE\u03B5 \u03BA\u03B1\u03B9 \u03B5\u03C3\u03CD \u03C4\u03B7\u03BD \u03C0\u03C1\u03BF\u03C3\u03C0\u03AC\u03B8\u03B5\u03B9\u03B1 \u03C4\u03BF\u03C5 3DHUB \u03BA\u03B1\u03B9 \u03C4\u03B7\u03C2 \u03BF\u03BC\u03AC\u03B4\u03B1\u03C2 \u03B5\u03B8\u03B5\u03BB\u03BF\u03BD\u03C4\u03CE\u03BD \u03C0\u03BF\u03C5 \u03C3\u03B5 \u03C3\u03C5\u03BD\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1 \u03BC\u03B5 \u03C4\u03BF \u03C5\u03C0\u03BF\u03C5\u03C1\u03B3\u03B5\u03AF\u03BF\u03C5 \u03A5\u03B3\u03B5\u03AF\u03B1\u03C2 \u03B1\u03BD\u03AD\u03BB\u03B1\u03B2\u03B1\u03BD \u03C4\u03B7\u03BD \u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE \u03C7\u03B9\u03BB\u03B9\u03AC\u03B4\u03C9\u03BD \u03B1\u03C3\u03C0\u03AF\u03B4\u03C9\u03BD \u03C0\u03C1\u03BF\u03C3\u03C4\u03B1\u03C3\u03AF\u03B1\u03C2 \u03B3\u03B9\u03B1 \u03C4\u03BF \u03BD\u03BF\u03C3\u03B7\u03BB\u03B5\u03C5\u03C4\u03B9\u03BA\u03CC \u03C0\u03C1\u03BF\u03C3\u03C9\u03C0\u03B9\u03BA\u03CC \u03CC\u03BB\u03B7\u03C2 \u03C4\u03B7\u03C2 \u03C7\u03CE\u03C1\u03B1\u03C2! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u0394\u03CE\u03C1\u03B7\u03C3\u03B5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, ctx.submitted && ctx.f.username.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.username.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, ctx.submitted && ctx.f.password.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          templateUrl: 'login.component.html'
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }];
      }, null);
    })();
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


    var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./register.component */
    "./src/app/register/register.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"];
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _helpers_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../_helpers/backend */
    "./src/app/_helpers/backend.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! jw-bootstrap-switch-ng2 */
    "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm2015/jw-bootstrap-switch-ng2.js");

    function RegisterComponent_div_12_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u03A4\u03BF \u038C\u03BD\u03BF\u03BC\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03B1\u03C1\u03B1\u03AF\u03C4\u03B7\u03C4\u03BF");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_12_div_1_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r118.f.firstName.errors.required);
      }
    }

    function RegisterComponent_div_17_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u03A4\u03BF \u0395\u03C0\u03AF\u03B8\u03B5\u03C4\u03BF \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03B1\u03C1\u03B1\u03AF\u03C4\u03B7\u03C4\u03BF");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_17_div_1_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r119.f.lastName.errors.required);
      }
    }

    function RegisterComponent_div_23_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u03A4\u03BF Email \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03B1\u03C1\u03B1\u03AF\u03C4\u03B7\u03C4\u03BF");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_23_div_1_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r120.f.email.errors.required);
      }
    }

    function RegisterComponent_div_28_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u03A4\u03BF \u03C4\u03B7\u03BB\u03AD\u03C6\u03C9\u03BD\u03BF \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03B1\u03C1\u03B1\u03AF\u03C4\u03B7\u03C4\u03BF");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_28_div_1_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r121.f.phoneNumber.errors.required);
      }
    }

    function RegisterComponent_div_35_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0397 \u03A0\u03B5\u03C1\u03B9\u03BF\u03C7\u03AE \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03B1\u03C1\u03B1\u03AF\u03C4\u03B7\u03C4\u03B7");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_35_div_1_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r122.f.address.errors.required);
      }
    }

    function RegisterComponent_div_42_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0397 \u039C\u03AC\u03C1\u03BA\u03B1 3D Printer \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03B1\u03C1\u03B1\u03AF\u03C4\u03B7\u03C4\u03B7");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_42_div_1_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r123.f.printerModel.errors.required);
      }
    }

    function RegisterComponent_div_54_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "To Username \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03B1\u03C1\u03B1\u03AF\u03C4\u03B7\u03C4\u03BF");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_54_div_1_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r124.f.username.errors.required);
      }
    }

    function RegisterComponent_div_59_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "To Password \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03B1\u03C1\u03B1\u03AF\u03C4\u03B7\u03C4\u03BF");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_59_div_1_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r125.f.password.errors.required);
      }
    }

    function RegisterComponent_span_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 41);
      }
    }

    function RegisterComponent_div_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r127.error);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r127.formError);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

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
        this._user = new _helpers_backend__WEBPACK_IMPORTED_MODULE_1__["RegisterModel"](); // redirect to home if already logged in

        if (this._authenticationService.currentUserValue) {
          this._router.navigate(['/']);
        }
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = this._formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]{10,11}$/)]],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            printerModel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            // batchRequiredTime: ['', Validators.required],
            printerActive: [true],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{4,30}$/)]]
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

          this._authenticationService.register(this._user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (data) {
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

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 75,
      vars: 40,
      consts: [[1, "container"], [1, "col-md-6", "offset-md-3", "py-5"], [1, "card"], [1, "card-header", "text-center"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-row", "col-12"], [1, "form-group", "col-md-6"], ["for", "firstName"], ["type", "text", "formControlName", "firstName", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "lastName"], ["type", "text", "formControlName", "lastName", 1, "form-control", 3, "ngClass"], ["for", "email"], ["type", "email", "formControlName", "email", "required", "", 1, "form-control", 3, "ngClass"], ["for", "phoneNumber"], ["type", "tel", "placeholder", "6934567891", "formControlName", "phoneNumber", 1, "form-control", 3, "ngClass"], [1, "form-group", "col-md-12"], ["for", "address"], ["formControlName", "address", 1, "form-control", 3, "ngClass"], [1, "form-row", "col-12", "align-items-baseline"], ["for", "printerModel"], ["type", "text", "formControlName", "printerModel", 1, "form-control", 3, "ngClass"], [1, "form-check-inline", "col-md-12"], ["for", "printerActive", 1, "form-check-label", "pr-5"], ["name", "printerActive", "id", "printerActive", "formControlName", "printerActive", 1, "form-check-input", 3, "switch-animate", "switch-size", "switch-on-text", "switch-off-text"], ["for", "username"], ["type", "text", "formControlName", "username", 1, "form-control", 3, "ngClass"], [1, "form-group", "col-md-6", "mb-0"], ["for", "password"], ["type", "password", "formControlName", "password", "aria-describedby", "passwordHelpBlock", 1, "form-control", 3, "ngClass"], ["id", "passwordHelpBlock", 1, "form-text", "text-muted", "pb-4", "mt-0"], ["type", "submit", 1, "btn", "btn-info", "ml-3", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", "ml-3", 3, "click"], ["class", "alert alert-danger mt-3 mb-0", 4, "ngIf"], [1, "col-md-10", "offset-md-1", "text-center", "pt-4"], ["href", "https://www.3dhub.gr/shop/consumables/covid19-1kg-pla/", "target", "_blank"], ["type", "button", 1, "btn", "btn-warning"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"], [1, "alert", "alert-danger", "mt-3", "mb-0"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u0395\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_6_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u038C\u03BD\u03BF\u03BC\u03B1*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, RegisterComponent_div_12_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u0395\u03C0\u03AF\u03B8\u03B5\u03C4\u03BF*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, RegisterComponent_div_17_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Email*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, RegisterComponent_div_23_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\u03A4\u03B7\u03BB\u03AD\u03C6\u03C9\u03BD\u03BF*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, RegisterComponent_div_28_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "\u0394\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 \u03B1\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE\u03C2 \u03BD\u03AD\u03BF\u03C5 \u03C7\u03BF\u03C1\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03BF\u03C5 \u03C5\u03BB\u03B9\u03BA\u03BF\u03CD*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "textarea", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, RegisterComponent_div_35_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "\u039C\u03AC\u03C1\u03BA\u03B1 3D Printer*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, RegisterComponent_div_42_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "\u0395\u03AF\u03BD\u03B1\u03B9 \u03BF \u03B5\u03BA\u03C4\u03C5\u03C0\u03C9\u03C4\u03AE\u03C2 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03B9\u03BA\u03CC\u03C2?*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "bSwitch", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Username*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, RegisterComponent_div_54_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Password*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, RegisterComponent_div_59_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "small", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, " \u039F \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2 \u03C3\u03B1\u03C2 \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 \u03C4\u03BF\u03C5\u03BB\u03AC\u03C7\u03B9\u03C3\u03C4\u03BF\u03BD 4 \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03B5\u03C2, \u03AD\u03BD\u03B1 \u03BA\u03B5\u03C6\u03B1\u03BB\u03B1\u03AF\u03BF, \u03AD\u03BD\u03B1 \u03BC\u03B9\u03BA\u03C1\u03CC \u03B3\u03C1\u03AC\u03BC\u03BC\u03B1 \u03BA\u03B1\u03B9 \u03AD\u03BD\u03B1\u03BD \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, RegisterComponent_span_63_Template, 1, 0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_65_listener() {
            return ctx.goBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "\u03A0\u03AF\u03C3\u03C9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, RegisterComponent_div_67_Template, 5, 2, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, " \u03A3\u03C4\u03AE\u03C1\u03B9\u03BE\u03B5 \u03BA\u03B1\u03B9 \u03B5\u03C3\u03CD \u03C4\u03B7\u03BD \u03C0\u03C1\u03BF\u03C3\u03C0\u03AC\u03B8\u03B5\u03B9\u03B1 \u03C4\u03BF\u03C5 3DHUB \u03BA\u03B1\u03B9 \u03C4\u03B7\u03C2 \u03BF\u03BC\u03AC\u03B4\u03B1\u03C2 \u03B5\u03B8\u03B5\u03BB\u03BF\u03BD\u03C4\u03CE\u03BD \u03C0\u03BF\u03C5 \u03C3\u03B5 \u03C3\u03C5\u03BD\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1 \u03BC\u03B5 \u03C4\u03BF \u03C5\u03C0\u03BF\u03C5\u03C1\u03B3\u03B5\u03AF\u03BF\u03C5 \u03A5\u03B3\u03B5\u03AF\u03B1\u03C2 \u03B1\u03BD\u03AD\u03BB\u03B1\u03B2\u03B1\u03BD \u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE \u03C7\u03B9\u03BB\u03B9\u03AC\u03B4\u03C9\u03BD \u03B1\u03C3\u03C0\u03AF\u03B4\u03C9\u03BD \u03C0\u03C1\u03BF\u03C3\u03C4\u03B1\u03C3\u03AF\u03B1\u03C2 \u03B3\u03B9\u03B1 \u03C4\u03BF \u03BD\u03BF\u03C3\u03B7\u03BB\u03B5\u03C5\u03C4\u03B9\u03BA\u03CC \u03C0\u03C1\u03BF\u03C3\u03C9\u03C0\u03B9\u03BA\u03CC \u03CC\u03BB\u03B7\u03C2 \u03C4\u03B7\u03C2 \u03C7\u03CE\u03C1\u03B1\u03C2! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "\u0394\u03CE\u03C1\u03B7\u03C3\u03B5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](24, _c0, ctx.submitted && ctx.f.firstName.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.firstName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](26, _c0, ctx.submitted && ctx.f.lastName.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.lastName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](28, _c0, ctx.submitted && ctx.f.email.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](30, _c0, ctx.submitted && ctx.f.phoneNumber.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.phoneNumber.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](32, _c0, ctx.submitted && ctx.f.address.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.address.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](34, _c0, ctx.submitted && ctx.f.printerModel.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.printerModel.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("switch-animate", "animate")("switch-size", "small")("switch-on-text", "\u039D\u0391\u0399")("switch-off-text", "\u039F\u03A7\u0399");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](36, _c0, ctx.submitted && ctx.f.username.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.username.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](38, _c0, ctx.submitted && ctx.f.password.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error || ctx.formError);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_7__["JwBootstrapSwitchNg2Component"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html'
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
        }];
      }, null);
    })();
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


    var _shipment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./shipment.component */
    "./src/app/shipment/shipment.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShipmentComponent", function () {
      return _shipment_component__WEBPACK_IMPORTED_MODULE_0__["ShipmentComponent"];
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


    var _helpers_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../_helpers/backend */
    "./src/app/_helpers/backend.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! jw-bootstrap-switch-ng2 */
    "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm2015/jw-bootstrap-switch-ng2.js");

    function ShipmentComponent_div_24_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0397 \u03C0\u03BF\u03C3\u03CC\u03C4\u03B7\u03C4\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03B1\u03C1\u03B1\u03AF\u03C4\u03B7\u03C4\u03B7");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
    }

    function ShipmentComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShipmentComponent_div_24_div_1_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r106.f.quantity.errors.required);
      }
    }

    function ShipmentComponent_div_29_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u03A4\u03BF \u03CC\u03BD\u03BF\u03BC\u03B1 \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF\u03C5 \u03B5\u03BA\u03C4\u03CD\u03C0\u03C9\u03C3\u03B7\u03C2 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03B1\u03C1\u03B1\u03AF\u03C4\u03B7\u03C4\u03BF");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
    }

    function ShipmentComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShipmentComponent_div_29_div_1_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r107.f.fileName.errors.required);
      }
    }

    function ShipmentComponent_div_35_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0397 \u0395\u03C4\u03B1\u03B9\u03C1\u03AF\u03B1 \u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE\u03C2 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03B1\u03C1\u03B1\u03AF\u03C4\u03B7\u03C4\u03B7");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
    }

    function ShipmentComponent_div_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShipmentComponent_div_35_div_1_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r108.f.shippingCompany.errors.required);
      }
    }

    function ShipmentComponent_div_40_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0397 \u0397\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE\u03C2 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03B1\u03C1\u03B1\u03AF\u03C4\u03B7\u03C4\u03B7");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
    }

    function ShipmentComponent_div_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShipmentComponent_div_40_div_1_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r109.f.dateShipped.errors.required);
      }
    }

    function ShipmentComponent_div_47_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u03A4\u03BF Tracking Number \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03B1\u03C1\u03B1\u03AF\u03C4\u03B7\u03C4\u03BF");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
    }

    function ShipmentComponent_div_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShipmentComponent_div_47_div_1_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r110.f.trackingNumber.errors.required);
      }
    }

    function ShipmentComponent_span_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 34);
      }
    }

    function ShipmentComponent_div_58_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r112.error);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r112.formError);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

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
        this._shipment = new _helpers_backend__WEBPACK_IMPORTED_MODULE_0__["CreateShipmentModel"]();
      }

      _createClass(ShipmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._currentDate = new Date().toISOString().substring(0, 10);
          this.shipmentForm = this._formBuilder.group({
            quantity: [30, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(this._shipment.minQuantity)]],
            dateShipped: [this._currentDate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            trackingNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            shippingCompany: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            needsFilament: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fileName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
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

          this._shipmentService.createShipment(this._shipment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (data) {
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

    ShipmentComponent.ɵfac = function ShipmentComponent_Factory(t) {
      return new (t || ShipmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["ShipmentService"]));
    };

    ShipmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ShipmentComponent,
      selectors: [["app-shipment"]],
      decls: 59,
      vars: 28,
      consts: [[1, "container"], [1, "col-md-7", "offset-md-2", "py-5"], [1, "card"], [1, "card-header", "text-center"], [1, "card-body"], ["role", "alert", 1, "alert", "alert-primary"], [1, "col", "text-center", "py-3"], [3, "formGroup", "ngSubmit"], [1, "form-row", "col-12", "align-items-baseline", "my-4"], [1, "form-group", "col-md-6"], ["for", "quantity"], ["type", "number", "value", "30", "min", "30", "formControlName", "quantity", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "fileName"], ["type", "text", "formControlName", "fileName", "required", "", 1, "form-control", 3, "ngClass"], [1, "form-row", "col-12"], ["for", "shippingCompany"], ["type", "text", "formControlName", "shippingCompany", 1, "form-control", 3, "ngClass"], ["for", "dateShipped"], ["type", "date", "formControlName", "dateShipped", "required", "", 1, "form-control", 3, "ngClass"], [1, "form-row", "col-12", "my-4"], [1, "form-group", "col-md-12"], ["for", "trackingNumber"], ["formControlName", "trackingNumber", "rows", "1", 1, "form-control", 3, "ngClass"], [1, "form-row", "col-12", "mb-5"], [1, "form-check-inline", "col-md-12"], ["for", "needsFilament", 1, "form-check-label", "pr-5"], ["name", "needsFilament", "id", "needsFilament", "formControlName", "needsFilament", 1, "form-check-input", 3, "switch-animate", "switch-size", "switch-on-text", "switch-off-text"], ["type", "submit", 1, "btn", "btn-info", "ml-3", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", "ml-3", 3, "click"], ["class", "alert alert-danger mt-3 mb-0", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"], [1, "alert", "alert-danger", "mt-3", "mb-0"]],
      template: function ShipmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " \u039A\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u039C\u03B5\u03C4\u03B1\u03BA\u03AF\u03BD\u03B7\u03C3\u03B7\u03C2 \u03A5\u03BB\u03B9\u03BA\u03CE\u03BD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " \u039C\u03B5\u03C4\u03AC \u03C4\u03B7\u03BD \u03BF\u03BB\u03BF\u03BA\u03BB\u03AE\u03C1\u03C9\u03C3\u03B7 \u03C4\u03B7\u03C2 \u03B5\u03BA\u03C4\u03CD\u03C0\u03C9\u03C3\u03B7\u03C2 \u03C4\u03C9\u03BD \u03C3\u03C5\u03BD\u03BF\u03BB\u03B9\u03BA\u03CE\u03BD \u03C4\u03B5\u03BC\u03B1\u03C7\u03AF\u03C9\u03BD, \u03B7 \u03B1\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE \u03B3\u03AF\u03BD\u03B5\u03C4\u03B1\u03B9 \u03BC\u03B5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\u0393\u03B5\u03BD\u03B9\u03BA\u03AE \u03A4\u03B1\u03C7\u03C5\u03B4\u03C1\u03BF\u03BC\u03B9\u03BA\u03AE \u03BA\u03B1\u03B9 \u03BC\u03B5 \u03C7\u03C1\u03AD\u03C9\u03C3\u03B7 \u03C0\u03B1\u03C1\u03B1\u03BB\u03AE\u03C0\u03C4\u03B7");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " \u03C3\u03C4\u03B7\u03BD \u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "3D HUB");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\u03A8\u03B1\u03C1\u03CE\u03BD 20, \u03A0\u03B5\u03B9\u03C1\u03B1\u03B9\u03AC\u03C2, \u0391\u03B8\u03AE\u03BD\u03B1, 18546");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ShipmentComponent_Template_form_ngSubmit_18_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\u03A0\u03BF\u03C3\u03CC\u03C4\u03B7\u03C4\u03B1 (\u03B5\u03BB\u03AC\u03C7\u03B9\u03C3\u03C4\u03BF 30)*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, ShipmentComponent_div_24_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "\u038C\u03BD\u03BF\u03BC\u03B1 \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF\u03C5*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, ShipmentComponent_div_29_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "\u0395\u03C4\u03B1\u03B9\u03C1\u03AF\u03B1 \u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE\u03C2*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, ShipmentComponent_div_35_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "\u0397\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE\u03C2*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, ShipmentComponent_div_40_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, " \u0391\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 \u03C6\u03BF\u03C1\u03C4\u03C9\u03C4\u03B9\u03BA\u03AE\u03C2 \u03B1\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE\u03C2 \u03B5\u03BA\u03C4\u03C5\u03C0\u03CE\u03C3\u03B5\u03C9\u03BD. \u03A3\u03B5 \u03C0\u03B5\u03C1\u03AF\u03C0\u03C4\u03C9\u03C3\u03B7 \u03C0\u03B1\u03C1\u03AC\u03B4\u03BF\u03C3\u03B7\u03C2 \u03BC\u03B5 \u03AC\u03BB\u03BB\u03BF \u03C4\u03C1\u03CC\u03C0\u03BF \u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE \u03BA\u03AC\u03BD\u03C4\u03B5 \u03C0\u03B5\u03C1\u03B9\u03B3\u03C1\u03B1\u03C6\u03AE* ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "textarea", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, ShipmentComponent_div_47_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "\u0398\u03AD\u03BB\u03B5\u03B9\u03C2 \u03BD\u03B1 \u03C3\u03BF\u03C5 \u03C3\u03C4\u03B5\u03AF\u03BB\u03BF\u03C5\u03BC\u03B5 filament?");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "bSwitch", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, ShipmentComponent_span_54_Template, 1, 0, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, " \u0395\u03C0\u03B9\u03B2\u03B5\u03B2\u03B1\u03AF\u03C9\u03C3\u03B7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShipmentComponent_Template_button_click_56_listener() {
            return ctx.goBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "\u03A0\u03AF\u03C3\u03C9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, ShipmentComponent_div_58_Template, 5, 2, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.shipmentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c0, ctx.submitted && ctx.f.quantity.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.quantity.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](20, _c0, ctx.submitted && ctx.f.fileName.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.fileName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](22, _c0, ctx.submitted && ctx.f.shippingCompany.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.shippingCompany.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](24, _c0, ctx.submitted && ctx.f.dateShipped.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.dateShipped.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](26, _c0, ctx.submitted && ctx.f.trackingNumber.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.trackingNumber.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("switch-animate", "animate")("switch-size", "small")("switch-on-text", "\u039D\u0391\u0399")("switch-off-text", "\u039F\u03A7\u0399");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error || ctx.formError);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_7__["JwBootstrapSwitchNg2Component"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ShipmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'app-shipment',
          templateUrl: './shipment.component.html'
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["ShipmentService"]
        }];
      }, null);
    })();
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://localhost:4000'
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! C:\Users\StratosPalaiologos\source\repos\New folder\COVID19-3DInventory\COVID19-3DInventory\WebApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
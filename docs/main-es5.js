function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


    __webpack_exports__["default"] = "<!-- <div>AGORA POC</div>\n<div style=\"display: flex; flex-wrap: wrap; width: 100%;\">\n  <div id=\"agora_local_1\" style=\"width: 300px; height: 300px; border: 2px solid gray\"></div>\n  <div id=\"agora_local_2\" style=\"width: 300px; height: 300px; border: 2px solid gray\"></div>\n  <div id=\"agora_local_3\" style=\"width: 300px; height: 300px; border: 2px solid gray\"></div>\n</div>\n<button (click) = \"agoraService.joinClient('1')\">Join</button>\n<button (click) = \"agoraService.joinClient('2')\">Join</button>\n<button (click) = \"agoraService.joinClient('3')\">Join</button> -->\n\n<mat-toolbar style=\"width: 100%; height: 5vh; background-color: #1c1f3c; align-items: center;\">\n  <div style=\"display: flex; justify-content: space-between; width: 100%;\">\n    <div style=\"display: flex; color: white;\">\n      <img src=\"../assets/images/Hashtag Production_Logo.png\" width=40 height=40>\n      <div style=\"margin-top: 5px; margin-left: 5px;\">\n        Hashtag Productions\n      </div>\n    </div>\n    <div style=\"display: flex; align-items: center;\">\n      <mat-icon style=\"color: white; cursor: pointer;\"\n      (click)= \"agoraService.disableAudio();\">\n        {{agoraService.muteAudio?'mic_off':'mic'}}\n      </mat-icon>\n    </div>\n  </div>\n</mat-toolbar>\n<div style=\"width: 100%; height: 93vh\">\n  <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/compoents/login/login.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compoents/login/login.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCompoentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"main-container\">\n  <ng-container *ngIf=\"!loggedIn\">\n    <div class=\"header\">\n      <div class=\"heading\">Admin Panel</div>\n    </div>\n\n    <div id=\"login-form\">\n      <div>\n        <div style=\"margin-right: 10px\">\n          <mat-form-field appearance=\"outline\" class=\"cust-form-field\">\n            <mat-label>Username</mat-label>\n            <input matInput type=\"text\" placeholder=\"Enter Username ...\" [(ngModel)]=\"username\">\n            <button mat-button *ngIf=\"username\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"username=''\">\n              <mat-icon>close</mat-icon>\n            </button>\n          </mat-form-field>\n        </div>\n\n        <div class=\"example-container\">\n          <mat-form-field appearance=\"outline\" class=\"cust-form-field\">\n            <mat-label>Password</mat-label>\n            <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\"\n              [(ngModel)]=\"password\">\n            <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\n              [attr.aria-pressed]=\"hide\">\n              <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            </button>\n          </mat-form-field>\n        </div>\n      </div>\n\n      <div style=\"display: flex; align-items: center; margin-bottom: 10px;\">\n        <button class=\"cust-button\" mat-flat-button (click)=\"login()\">Sign In</button>\n      </div>\n\n    </div>\n  </ng-container>\n  <!--\n  <ng-container *ngIf=\"loggedIn\">\n    <div class=\"header\">\n      <div class=\"heading\">Add Players</div>\n    </div>\n\n    <div style=\"display: flex; justify-content: space-between;\">\n      <div>\n        <mat-form-field appearance=\"outline\" class=\"cust-form-field\">\n          <mat-label>Player Name</mat-label>\n          <input matInput type=\"text\" placeholder=\"Enter Username ...\" [(ngModel)]=\"playername\">\n          <button mat-button *ngIf=\"playername\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"playername=''\">\n            <mat-icon>close</mat-icon>\n          </button>\n        </mat-form-field>\n      </div>\n\n      <div style=\"display: flex; align-items: center;\">\n        <button class=\"cust-button\" mat-flat-button (click)=\"addPlayer()\">Add Player</button>\n      </div>\n\n    </div>\n  </ng-container>\n\n\n  <ng-container *ngIf=\"loggedIn\">\n    <div class=\"header\">\n      <div class=\"heading\">Player List</div>\n    </div>\n\n    <div>\n      <div *ngFor=\"let url of players; let i= index\">\n        <div style=\"display: flex; margin-bottom: 10px;\">\n          <div class=\"s-no\">{{i + 1}}</div>\n          <div class=\"player-name\">{{url}}</div>\n        </div>\n      </div>\n    </div>\n\n    <div style=\"display: flex; align-items: center; justify-content: flex-end; margin-bottom: 10px;\"\n      *ngIf= 'players.length > 0'>\n      <button class=\"cust-button\" mat-flat-button (click)=\"generateurls()\">Generate Urls</button>\n    </div>\n\n  </ng-container> -->\n\n  <ng-container *ngIf=\"loggedIn\">\n    <div class=\"header\">\n      <div class=\"heading\">Room: {{roomname}}</div>\n    </div>\n\n    <div id=\"login-form\">\n      <div style=\"display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;\">\n        <div style=\"margin-right: 10px\">\n          <mat-form-field appearance=\"outline\" class=\"cust-form-field\">\n            <mat-label>Room Name</mat-label>\n            <input matInput type=\"text\" placeholder=\"Enter Room Name ...\" [(ngModel)]=\"roomname\">\n            <button mat-button *ngIf=\"roomname\" matSuffix mat-icon-button aria-label=\"room\" (click)=\"roomname=''\">\n              <mat-icon>close</mat-icon>\n            </button>\n          </mat-form-field>\n        </div>\n\n        <div>\n          <button class=\"cust-button\" mat-flat-button (click)=\"generateurls()\">Generate Urls</button>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"loggedIn\">\n    <div class=\"header\">\n      <div class=\"heading\">URL List</div>\n    </div>\n\n    <div class=\"url-container\" >\n      <div class=\"url-row\">\n        <div style=\"display: flex;\">\n          <div class=\"s-no\">&nbsp;&nbsp;</div>\n          <div class=\"player-name\">\n            <a>Player URL</a>\n          </div>\n        </div>\n      </div>\n      <div *ngFor=\"let url of urls; let i= index\">\n        <div class=\"url-row\" [ngStyle]=\"{'border-bottom':i === urls.length - 1 ? '0px solid gainsboro' : '' }\">\n          <div style=\"display: flex;\">\n            <div class=\"s-no\">{{i + 1}}</div>\n            <div class=\"player-name\">\n              <!-- <a>{{url}}</a> -->\n              <a href={{url}} target=\"_blank\">{{url}}</a>\n              <p *ngIf=\"i >= 9\" style=\"margin: 0px; color: maroon;\" > &nbsp;&nbsp;(for production only)</p>\n            </div>\n          </div>\n          <div>\n            <mat-icon class=\"copy-button\" title=\"copy to clipboard\"\n            (click)= \"copyToClipboard(url)\">\n              content_copy\n            </mat-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/compoents/room/room.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compoents/room/room.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCompoentsRoomRoomComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"!roomId || !playerPos\">\n  <div class=\"invalid\">Invalid URL</div>\n</ng-container>\n<ng-container *ngIf=\"roomId && playerPos\">\n  <div id=\"video-wrapper\">\n    <div id=\"agora_local_1\" class=\"video-container\"></div>\n    <div id=\"agora_local_2\" class=\"video-container\"></div>\n    <div id=\"agora_local_3\" class=\"video-container\"></div>\n    <div id=\"agora_local_4\" class=\"video-container\"></div>\n    <div id=\"agora_local_5\" class=\"video-container\"></div>\n    <div id=\"agora_local_6\" class=\"video-container\"></div>\n    <div id=\"agora_local_7\" class=\"video-container\"></div>\n    <div id=\"agora_local_8\" class=\"video-container\"></div>\n    <div id=\"agora_local_9\" class=\"video-container\"></div>\n  </div>\n\n  <div id=\"video-wrapper-production\">\n    <div id=\"agora_local_10\" class=\"video-container\"></div>\n    <div id=\"agora_local_11\" class=\"video-container\"></div>\n    <div id=\"agora_local_12\" class=\"video-container\"></div>\n\n  </div>\n</ng-container>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

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


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
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
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
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
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

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
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
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

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _compoents_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./compoents/login/login.component */
    "./src/app/compoents/login/login.component.ts");
    /* harmony import */


    var _compoents_room_room_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./compoents/room/room.component */
    "./src/app/compoents/room/room.component.ts");

    var routes = [{
      path: 'room',
      component: _compoents_room_room_component__WEBPACK_IMPORTED_MODULE_4__["RoomComponent"]
    }, {
      path: 'login',
      component: _compoents_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: '**',
      redirectTo: 'login'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      declarations: []
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
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


    var _services_agora_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/agora.service */
    "./src/app/services/agora.service.ts"); // import { AgoraService } from './services/agora.service';


    var AppComponent = function AppComponent(agoraService) {
      _classCallCheck(this, AppComponent);

      this.agoraService = agoraService;
      this.title = 'ng8-agora-POC';
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_agora_service__WEBPACK_IMPORTED_MODULE_2__["AgoraService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var angular_agora_rtc_anc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-agora-rtc-anc */
    "./node_modules/angular-agora-rtc-anc/fesm2015/angular-agora-rtc.js");
    /* harmony import */


    var _compoents_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./compoents/login/login.component */
    "./src/app/compoents/login/login.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _compoents_room_room_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./compoents/room/room.component */
    "./src/app/compoents/room/room.component.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var agoraConfig = {
      AppID: src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].appId
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _compoents_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _compoents_room_room_component__WEBPACK_IMPORTED_MODULE_14__["RoomComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], angular_agora_rtc_anc__WEBPACK_IMPORTED_MODULE_6__["AngularAgoraRtcModule"].forRoot(agoraConfig), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/compoents/login/login.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/compoents/login/login.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCompoentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#main-container{\n  width: 90%;\n  height: 100%;\n  padding: 20px;\n}\n\n.header{\n  width: 100%;\n  /* margin: 20px 0px 20px 0px; */\n  background-color: whitesmoke;\n  font-size: 120%;\n  padding: 10px;\n  margin-bottom: 10px;\n  /* display: flex; */\n  /* justify-content: center; */\n}\n\n#login-form{\n  /* padding: ; */\n\n  /* display: flex; */\n  /* justify-content: space-between; */\n}\n\n.s-no{\n  padding: 0px 10px;\n  /* border-right: 1px solid gainsboro; */\n  color: gray;\n  margin-right: 20px;\n}\n\n.player-name{\n  display: flex;\n}\n\n.url-row{\n  display: flex;\n  padding: 10px;\n  justify-content: space-between;\n  /* border-top: 1px solid gainsboro; */\n  /* border-left: 1px solid gainsboro; */\n  border-bottom: 1px solid gainsboro\n}\n\n.url-container{\n  border: 1px solid gainsboro;\n  border-radius: 10px;\n}\n\n.copy-button{\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlOztFQUVmLG1CQUFtQjtFQUNuQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUNBQXVDO0VBQ3ZDLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQ0FBcUM7RUFDckMsc0NBQXNDO0VBQ3RDO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4tY29udGFpbmVye1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5oZWFkZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBtYXJnaW46IDIwcHggMHB4IDIwcHggMHB4OyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBmb250LXNpemU6IDEyMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xufVxuXG4jbG9naW4tZm9ybXtcbiAgLyogcGFkZGluZzogOyAqL1xuXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cbn1cblxuLnMtbm97XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICAvKiBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBnYWluc2Jvcm87ICovXG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5wbGF5ZXItbmFtZXtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnVybC1yb3d7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLyogYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdhaW5zYm9ybzsgKi9cbiAgLyogYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBnYWluc2Jvcm87ICovXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBnYWluc2Jvcm9cbn1cblxuLnVybC1jb250YWluZXJ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdhaW5zYm9ybztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmNvcHktYnV0dG9ue1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/compoents/login/login.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/compoents/login/login.component.ts ***!
    \****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppCompoentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(_snackBar) {
        _classCallCheck(this, LoginComponent);

        this._snackBar = _snackBar;
        this.hide = true;
        this.loggedIn = false;
        this.urls = [];
        this.roomname = '';
        this.players = [];
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          if (!this.username && !this.password) {
            this.openSnackBar("Username or Email not found", "");
          }

          if (this.username == src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].username && this.password == src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].pass) {
            this.loggedIn = true; // this.generateurls();

            this.openSnackBar("Login Successful", "");
          }
        }
      }, {
        key: "openSnackBar",
        value: function openSnackBar(message, action) {
          this._snackBar.open(message, action, {
            duration: 2000
          });
        }
      }, {
        key: "addPlayer",
        value: function addPlayer() {
          if (this.players.length <= 9) {
            this.players.push(this.playername);
            this.playername = '';
          } else {
            this.openSnackBar("Cannot add more players", "");
          }
        }
      }, {
        key: "generateurls",
        value: function generateurls() {
          this.urls = [];
          var roomName = this.makeid(7);

          if (this.roomname) {
            roomName = this.roomname;
          }

          for (var i = 0; i < 12; i++) {
            var data = {
              id: roomName,
              position: i + 1
            };
            var spec = btoa(JSON.stringify(data)); // let spec = JSON.stringify(data);

            this.urls.push("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].host, "room?spec=").concat(spec));
          }

          console.log(this.urls);
        }
      }, {
        key: "makeid",
        value: function makeid(length) {
          var result = '';
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;

          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }

          return result;
        }
      }, {
        key: "copyToClipboard",
        value: function copyToClipboard(item) {
          document.addEventListener('copy', function (e) {
            e.clipboardData.setData('text/plain', item);
            e.preventDefault();
            document.removeEventListener('copy', null);
          });
          document.execCommand('copy');
          this.openSnackBar("URL copied", "");
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/compoents/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/compoents/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/compoents/room/room.component.css":
  /*!***************************************************!*\
    !*** ./src/app/compoents/room/room.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCompoentsRoomRoomComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".video-container{\n  width: 32.4%;\n  height: 32%;\n  border: 2px solid gainsboro;\n  background-color: white;\n  /* border-radius: 20px; */\n}\n\n.invalid{\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n  font-size: 120%;\n  font-weight: bold;\n}\n\n#video-wrapper{\n  padding-top: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 100%;\n  justify-content: space-around;\n  background-color: whitesmoke;\n}\n\n#video-wrapper-production{\n  padding-top: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 100%;\n  justify-content: space-around;\n  background-color: whitesmoke;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9lbnRzL3Jvb20vcm9vbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb2VudHMvcm9vbS9yb29tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW8tY29udGFpbmVye1xuICB3aWR0aDogMzIuNCU7XG4gIGhlaWdodDogMzIlO1xuICBib3JkZXI6IDJweCBzb2xpZCBnYWluc2Jvcm87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAvKiBib3JkZXItcmFkaXVzOiAyMHB4OyAqL1xufVxuXG4uaW52YWxpZHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTIwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiN2aWRlby13cmFwcGVye1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuI3ZpZGVvLXdyYXBwZXItcHJvZHVjdGlvbntcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/compoents/room/room.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/compoents/room/room.component.ts ***!
    \**************************************************/

  /*! exports provided: RoomComponent */

  /***/
  function srcAppCompoentsRoomRoomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomComponent", function () {
      return RoomComponent;
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


    var _services_agora_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/agora.service */
    "./src/app/services/agora.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RoomComponent = /*#__PURE__*/function () {
      function RoomComponent(agoraService, activatedRoute) {
        _classCallCheck(this, RoomComponent);

        this.agoraService = agoraService;
        this.activatedRoute = activatedRoute;
      }

      _createClass(RoomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.queryParams.subscribe(function (params) {
            // let date = params['startdate'];
            var data = atob(params.spec);
            data = JSON.parse(data);
            console.log(data);
            _this.roomId = data.id;
            _this.playerPos = data.position;
            _this.playerName = data.player;
            console.log(params); // Print the parameter to the console.
          });

          if (this.roomId && this.playerPos) {
            this.agoraService.joinClient(this.playerPos, this.roomId);
          }
        }
      }]);

      return RoomComponent;
    }();

    RoomComponent.ctorParameters = function () {
      return [{
        type: _services_agora_service__WEBPACK_IMPORTED_MODULE_2__["AgoraService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    RoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-room',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./room.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/compoents/room/room.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./room.component.css */
      "./src/app/compoents/room/room.component.css"))["default"]]
    })], RoomComponent);
    /***/
  },

  /***/
  "./src/app/services/agora.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/agora.service.ts ***!
    \*******************************************/

  /*! exports provided: AgoraService */

  /***/
  function srcAppServicesAgoraServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgoraService", function () {
      return AgoraService;
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


    var angular_agora_rtc_anc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-agora-rtc-anc */
    "./node_modules/angular-agora-rtc-anc/fesm2015/angular-agora-rtc.js");

    var AgoraService = /*#__PURE__*/function () {
      function AgoraService(agoraService) {
        _classCallCheck(this, AgoraService);

        this.agoraService = agoraService;
        this.rtc = {
          client: null,
          joined: false,
          published: false,
          localStream: null,
          remteStream: [],
          params: {}
        };
        this.muteAudio = false;
        this.remoteCalls = [];
        console.log('------Agora Service--------', 'client has been created'); // this.agoraService.createClient();
      }

      _createClass(AgoraService, [{
        key: "joinClient",
        value: function joinClient(userId, roomName) {
          var _this2 = this;

          this.agoraService.createClient();
          console.log('---------------Joining -------------');
          this.subscribeStreams();
          var uID;
          this.agoraService.client.join(null, roomName, userId, function (uid) {
            console.log('---------------Joined-------------', uid);
            _this2.localStream = _this2.agoraService.createStream(uid, true, null, null, true, false);
            console.log('--------------Joined Stream--------------------\n', typeof _this2.localStream, _this2.localStream);

            _this2.localStream.setVideoProfile('720p_3');

            _this2.localStream.init(function () {
              console.log("----------------getUserMedia successfully----------------");

              _this2.localStream.play("agora_local_".concat(userId));

              _this2.agoraService.client.publish(_this2.localStream, function (err) {
                console.log("-----------Publish local stream error:---------------- " + err);

                _this2.remoteCalls.push(userId);
              });

              _this2.agoraService.client.on('stream-published', function (evt) {
                console.log("------------------Publish local stream successfully--------------------");
              });
            }, function (err) {
              return console.log("getUserMedia failed", err);
            }); // The user has granted access to the camera and mic.


            _this2.localStream.on("accessAllowed", function () {
              console.log("accessAllowed");
            }); // The user has denied access to the camera and mic.


            _this2.localStream.on("accessDenied", function () {
              console.log("accessDenied");
            });
          });
        }
      }, {
        key: "subscribeStreams",
        value: function subscribeStreams() {
          var _this3 = this;

          // this.agoraService.client.on('stream-added', (evt) => {
          //   console.log('-------subscribed&&&-------', evt);
          //   const stream = evt.stream;
          //   if (!this.remoteCalls.includes(`agora_remote${stream.getId()}`)) {
          //     this.remoteCalls.push(`agora_remote${stream.getId()}`);
          //   }
          //   setTimeout(() => stream.play(`agora_remote${stream.getId()}`), 1000);
          // });
          // this.agoraService.client.on('stream-added', (evt) => {
          //   console.log('-------subscribed&&&-------', evt);
          // });
          this.agoraService.client.on('stream-added', function (evt) {
            var streamm = evt.stream;
            console.log('-------added-event-------', streamm.streamId, _this3.remoteCalls);

            if (!_this3.remoteCalls.includes(streamm.streamId)) {
              _this3.agoraService.client.subscribe(streamm, function (stream) {
                console.log('-------subscribed the added event-------', stream);
                stream.play("agora_local_".concat(streamm.streamId));
              }, function (err) {
                console.log("--------------Subscribe stream failed--------------", err);
              });
            }
          });
          this.agoraService.client.on('stream-subscribed', function (evt) {
            var stream = evt.stream;
            console.log('-------subscribed&&&-------', stream.getId());

            if (!_this3.remoteCalls.includes(stream.streanId)) {
              _this3.remoteCalls.push(stream.streanId);
            }

            setTimeout(function () {
              return stream.play("agora_local_".concat(stream.streamId));
            }, 1000);
          });
          this.agoraService.client.on('stream-removed', function (evt) {
            console.log('---------stream stopped-----------', evt);
            var stream = evt.stream;
            stream.stop();

            for (var i = 0; i < _this3.remoteCalls.length; i++) {
              if (_this3.remoteCalls[i] === stream.streamId) {
                _this3.remoteCalls[i].splice(i, 1);
              }
            } // this.remoteCalls = this.remoteCalls.filter(call => call !== `#agora_remote${stream.getId()}`);
            // console.log(`Remote stream is removed ${stream.getId()}`);

          });
          this.agoraService.client.on('peer-leave', function (evt) {
            var stream = evt.stream;
            console.log('---------stream stopped-----------', evt);

            if (stream) {
              stream.stop();

              for (var i = 0; i < _this3.remoteCalls.length; i++) {
                if (_this3.remoteCalls[i] === stream.streamId) {
                  _this3.remoteCalls[i].splice(i, 1);
                }
              } // this.remoteCalls = this.remoteCalls.filter(call => call === `#agora_remote${stream.getId()}`);
              // console.log(`${evt.uid} left from this channel`);

            }
          }); // this.agoraService.client.on('stream-removed', (evt) => {
          //   console.log('---------stream stopped-----------', evt);
          //   const stream = evt.stream;
          //   stream.stop();
          //   // this.remoteCalls = this.remoteCalls.filter(call => call === `#agora_remote${stream.getId()}`);
          //   for (let i = 0; i < this.remoteCalls.length; i++) {
          //     if (this.remoteCalls[i] === stream.streamId) {
          //       this.remoteCalls[i].splice(i, 1);
          //     }
          //   }
          //   console.log(`Remote stream is removed ${stream.getId()}`);
          // });
          // this.agoraService.client.on('peer-leave', (evt) => {
          //   console.log('---------stream stopped-----------', evt);
          //   const stream = evt.stream;
          //   if (stream) {
          //     stream.stop();
          //     this.remoteCalls = this.remoteCalls.filter(call => call === `#agora_remote${stream.getId()}`);
          //     console.log(`${evt.uid} left from this channel`);
          //   }
          // });
        }
      }, {
        key: "disableAudio",
        value: function disableAudio() {
          if (this.localStream) {
            if (!this.muteAudio) {
              this.localStream.muteAudio(); // this.localStream.disableVideo();

              this.muteAudio = true;
              console.log('-------------audio has been disabled ---------------', this.localStream.hasAudio());
            } else {
              this.localStream.unmuteAudio();
              this.muteAudio = false; // this.localStream.enableVideo();

              console.log('-------------audio has been enabled ---------------', this.localStream.hasAudio());
            }
          } // return this.localStream.hasAudio();

        }
      }]);

      return AgoraService;
    }();

    AgoraService.ctorParameters = function () {
      return [{
        type: angular_agora_rtc_anc__WEBPACK_IMPORTED_MODULE_2__["AngularAgoraRtcService"]
      }];
    };

    AgoraService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AgoraService);
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
      username: 'admin',
      pass: '1234',
      host: 'http://localhost:4200/',
      appId: '63383898478748f5a3a0b6dbaa0d12e3'
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


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
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
    /*! /Users/darshan/Projects/video-demo/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
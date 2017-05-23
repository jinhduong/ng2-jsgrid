(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ng2-jsgrid.umd"] = factory(require("@angular/core"), require("@angular/common"));
	else
		root["ng2-jsgrid.umd"] = factory(root["@angular/core"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Common = (function () {
    function Common() {
    }
    Common.gridIsEmpty = function ($grid) {
        if (!$grid)
            return true;
        return $grid.html() === '';
    };
    return Common;
}());
exports.Common = Common;
;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var jsgrid_common_1 = __webpack_require__(0);
var JsGridComponent = (function () {
    function JsGridComponent(elemRef) {
        var _this = this;
        this.elemRef = elemRef;
        this._options = {
            width: '100%',
            autoload: true,
            paging: true,
            sorting: true,
            pageLoading: true,
            pageSize: 15,
            pageIndex: 1,
            controller: {
                loadData: function (filter) {
                    return _this.source(filter);
                }
            },
            useOriginal: false
        };
        this.pageChanged = new core_1.EventEmitter();
    }
    Object.defineProperty(JsGridComponent.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (val) {
            // If it is true, use original options from jsGrid
            if (val.useOriginal)
                this._options = val;
            else {
                // Assign controller object
                if (val.controller)
                    val.controller = Object.assign(this._options.controller, val.controller);
                // Merge options
                this._options = Object.assign(this._options, val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsGridComponent.prototype, "source", {
        get: function () {
            return this._source;
        },
        // @Output() sourceChange = new EventEmitter<Function>();
        set: function (val) {
            var gridIsRendered = !jsgrid_common_1.Common.gridIsEmpty(this._$gridElem);
            this._source = val;
            // this.sourceChange.emit(val);
            if (gridIsRendered) {
                this.reRenderGrid();
            }
            else {
                this.renderGrid();
            }
        },
        enumerable: true,
        configurable: true
    });
    JsGridComponent.prototype.ngOnInit = function () {
    };
    JsGridComponent.prototype.ngAfterViewInit = function () {
    };
    /* Private functions*/
    JsGridComponent.prototype.renderGrid = function () {
        var $nativeElement = $(this.elemRef.nativeElement);
        this._$gridElem = $nativeElement.find('div:first');
        this._$gridElem.jsGrid(this.options);
    };
    JsGridComponent.prototype.reRenderGrid = function () {
        this._$gridElem.jsGrid('loadData', this.source);
    };
    return JsGridComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], JsGridComponent.prototype, "options", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], JsGridComponent.prototype, "pageChanged", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function])
], JsGridComponent.prototype, "source", null);
JsGridComponent = __decorate([
    core_1.Component({
        selector: 'js-grid',
        template: "\n    <div></div>\n    ",
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], JsGridComponent);
exports.JsGridComponent = JsGridComponent;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var common_1 = __webpack_require__(5);
var ng2_jsgrid_component_1 = __webpack_require__(1);
var JsGridModule = (function () {
    function JsGridModule() {
    }
    return JsGridModule;
}());
JsGridModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [ng2_jsgrid_component_1.JsGridComponent],
        exports: [ng2_jsgrid_component_1.JsGridComponent]
    })
], JsGridModule);
exports.JsGridModule = JsGridModule;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(3));
__export(__webpack_require__(1));
__export(__webpack_require__(0));


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=ng2-jsgrid.umd.js.map
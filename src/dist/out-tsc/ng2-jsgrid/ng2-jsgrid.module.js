"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ng2_jsgrid_component_1 = require("./ng2-jsgrid.component");
var JsGridModule = (function () {
    function JsGridModule() {
    }
    return JsGridModule;
}());
JsGridModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule],
                declarations: [ng2_jsgrid_component_1.JsGridComponent],
                exports: [ng2_jsgrid_component_1.JsGridComponent]
            },] },
];
/** @nocollapse */
JsGridModule.ctorParameters = function () { return []; };
exports.JsGridModule = JsGridModule;
//# sourceMappingURL=ng2-jsgrid.module.js.map
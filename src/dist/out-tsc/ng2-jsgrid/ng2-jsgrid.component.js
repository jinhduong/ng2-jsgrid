"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var JsGridComponent = (function () {
    function JsGridComponent(elemRef) {
        this.elemRef = elemRef;
    }
    JsGridComponent.prototype.ngOnInit = function () {
        var $nativeElement = $(this.elemRef.nativeElement);
        this._$gridElem = $nativeElement.find('div:first');
        this._$gridElem.jsGrid(this.options);
    };
    JsGridComponent.prototype.ngAfterViewInit = function () {
    };
    return JsGridComponent;
}());
JsGridComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'js-grid',
                template: "\n    <div></div>\n    ",
            },] },
];
/** @nocollapse */
JsGridComponent.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
JsGridComponent.propDecorators = {
    'options': [{ type: core_1.Input },],
};
exports.JsGridComponent = JsGridComponent;
//# sourceMappingURL=ng2-jsgrid.component.js.map
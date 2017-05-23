"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var jsgrid_common_1 = require("./jsgrid.common");
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
    'pageChanged': [{ type: core_1.Output },],
    'source': [{ type: core_1.Input },],
};
exports.JsGridComponent = JsGridComponent;
//# sourceMappingURL=ng2-jsgrid.component.js.map
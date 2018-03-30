/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { GridHtmlTemplate } from './templates/grid.html';
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
var GridComponent = (function () {
    function GridComponent(elemRef) {
        var _this = this;
        this.elemRef = elemRef;
        this.showButton = true;
        this.pageSize = 10;
        this.inserted = new EventEmitter();
        this.removed = new EventEmitter();
        this.updated = new EventEmitter();
        this._defaultOptions = {
            width: '100%',
            height: 'auto',
            sorting: true,
            paging: true,
            selecting: false,
            filtering: true,
            autoload: true,
            pageSize: this.pageSize,
            pageLoading: true,
            controlClass: 'form-control',
            controller: {
                insertItem: function (item) { return _this.inserted.emit(item); },
                deleteItem: function (item) { return _this.removed.emit(item); },
                updateItem: function (item) { return _this.updated.emit(item); },
                loadData: function (filter) {
                    // data returned from api
                    var /** @type {?} */ promise = _this.api(_this.convertFiltering(filter));
                    // promise will have resolve and reject, just like success and error in ajax
                    return new Promise(function (resolve, reject) {
                        // variables can use 'let', 'var', 'const' to declare
                        // formula to calculate row number is to get (( pgIndex - 1) * 10) + 1
                        var /** @type {?} */ pgIndex = filter.pageIndex;
                        var /** @type {?} */ num = ((pgIndex - 1) * _this.pageSize) + 1;
                        var /** @type {?} */ cnt = 0;
                        // promise.then is the same as ajax aftersend
                        // apiData is the object name, which contains itemsCount & data
                        promise.then(function (apiData) {
                            // .map will create a new array with the results of calling a function for every array element
                            var /** @type {?} */ transformData = apiData.data.map(function (x) {
                                x.no = num;
                                num++;
                                if (apiData.data[cnt].created) {
                                    var /** @type {?} */ str = '';
                                    str = apiData.data[cnt].created.split('T');
                                    x.date = str[0];
                                    cnt++;
                                }
                                return x;
                            });
                            // same as ajax success
                            // resolve will hold 2 items, itemsCount & data
                            resolve({
                                itemsCount: apiData.itemsCount,
                                data: transformData
                            });
                        });
                    });
                }
            },
            fields: []
        };
    }
    Object.defineProperty(GridComponent.prototype, "api", {
        get: /**
         * @return {?}
         */
        function () {
            return this._api;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (this._api && this._$elem) {
                this._api = value;
                this._$elem.jsGrid('loadData', function (filter) {
                    // data returned from api
                    var /** @type {?} */ promise = _this.api(_this.convertFiltering(filter));
                    return promise;
                });
            }
            this._api = value || (function (filter) { return ({ data: {}, itemsCount: 0 }); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this._options;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.mergeOptions(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "refreshButton", {
        get: /**
         * @return {?}
         */
        function () {
            return this._refreshButton;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.showButton = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "fields", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fields;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value === undefined)
                return;
            var /** @type {?} */ that = this;
            this._fields = value;
            this._fields.forEach(function (field) {
                if (field.selectFiltering) {
                    field.filterTemplate = function (_value, _item) {
                        this.$selectControl = GridHtmlTemplate.makeFilterSelectControl(field.selectFiltering);
                        // Trigger auto-filter
                        this.$selectControl.on('change', function (e) {
                            that._$elem.jsGrid('search');
                        });
                        return $('<div>').append(this.$selectControl);
                    };
                    field.filterValue = function () {
                        if (this.$selectControl)
                            return this.$selectControl.val();
                        return '';
                    };
                }
            });
            // Delete hide column
            this._fields = this._fields.filter(function (x) { return x.hide === false || x.hide === undefined; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._$elem = $(this.elemRef.nativeElement.querySelectorAll('div')[0]);
        if (this._options === undefined) {
            this._options = this._defaultOptions;
            this._options.pageSize = this.pageSize;
        }
        this.options.fields = this.fields;
        this.render();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GridComponent.prototype.clicked = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._$elem.jsGrid('search');
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GridComponent.prototype.mergeOptions = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._options = Object.assign({}, this._defaultOptions, value);
    };
    /**
     * @return {?}
     */
    GridComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        this._$elem.jsGrid(this._options);
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    GridComponent.prototype.convertFiltering = /**
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        var /** @type {?} */ _keyProps = ['pageIndex', 'pageSize', 'sortField', 'sortOrder'];
        var /** @type {?} */ _filterKeys = Object.keys(filter);
        var /** @type {?} */ _search = {};
        _filterKeys.forEach(function (k) {
            if (_keyProps.indexOf(k) < 0) {
                if (filter[k])
                    _search[k] = filter[k];
                delete filter[k];
            }
        });
        filter['search'] = JSON.stringify(_search);
        return filter;
    };
    /**
     * @return {?}
     */
    GridComponent.prototype.getGridInstance = /**
     * @return {?}
     */
    function () {
        if (this._$elem) {
            return this._$elem.data('JSGrid');
        }
        return null;
    };
    /**
     * @return {?}
     */
    GridComponent.prototype.reRender = /**
     * @return {?}
     */
    function () {
        this._$elem.jsGrid('search');
    };
    GridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-grid',
                    template: "<div></div>\n  <h3>\n    <button class=\"btn btn-default\" (click)=\"clicked($event);\" *ngIf=\"showButton\">\n      <i class=\"fa fa-refresh\"></i> Refresh\n    </button>\n  </h3>\n  "
                },] },
    ];
    /** @nocollapse */
    GridComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    GridComponent.propDecorators = {
        "pageSize": [{ type: Input },],
        "inserted": [{ type: Output },],
        "removed": [{ type: Output },],
        "updated": [{ type: Output },],
        "api": [{ type: Input },],
        "options": [{ type: Input },],
        "refreshButton": [{ type: Input },],
        "fields": [{ type: Input },],
    };
    return GridComponent;
}());
export { GridComponent };
function GridComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    GridComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    GridComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    GridComponent.propDecorators;
    /** @type {?} */
    GridComponent.prototype._$elem;
    /** @type {?} */
    GridComponent.prototype.showButton;
    /** @type {?} */
    GridComponent.prototype.pageSize;
    /** @type {?} */
    GridComponent.prototype.inserted;
    /** @type {?} */
    GridComponent.prototype.removed;
    /** @type {?} */
    GridComponent.prototype.updated;
    /** @type {?} */
    GridComponent.prototype._api;
    /** @type {?} */
    GridComponent.prototype._options;
    /** @type {?} */
    GridComponent.prototype._refreshButton;
    /** @type {?} */
    GridComponent.prototype._fields;
    /** @type {?} */
    GridComponent.prototype._defaultOptions;
    /** @type {?} */
    GridComponent.prototype.elemRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
var GridModule = (function () {
    function GridModule() {
    }
    /**
     * @return {?}
     */
    GridModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: GridModule
        };
    };
    GridModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        GridComponent
                    ],
                    exports: [
                        GridComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    GridModule.ctorParameters = function () { return []; };
    return GridModule;
}());
export { GridModule };
function GridModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    GridModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    GridModule.ctorParameters;
}

/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './ng2-jsgrid.module';
import * as import2 from '@angular/common';
class JsGridModuleInjector extends import0.ɵNgModuleInjector<import1.JsGridModule> {
  _CommonModule_0:import2.CommonModule;
  _JsGridModule_1:import1.JsGridModule;
  __NgLocalization_2:import2.NgLocaleLocalization;
  constructor(parent:import0.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _NgLocalization_2():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_2 == null)) { (this.__NgLocalization_2 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID))); }
    return this.__NgLocalization_2;
  }
  createInternal():import1.JsGridModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._JsGridModule_1 = new import1.JsGridModule();
    return this._JsGridModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import1.JsGridModule)) { return this._JsGridModule_1; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_2; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const JsGridModuleNgFactory:import0.NgModuleFactory<import1.JsGridModule> = new import0.NgModuleFactory<any>(JsGridModuleInjector,import1.JsGridModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvRElOSCBEVU9ORy9Eb2N1bWVudHMvR2l0aHViL25nMi1qc2dyaWQvc3JjL25nMi1qc2dyaWQvbmcyLWpzZ3JpZC5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvRElOSCBEVU9ORy9Eb2N1bWVudHMvR2l0aHViL25nMi1qc2dyaWQvc3JjL25nMi1qc2dyaWQvbmcyLWpzZ3JpZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
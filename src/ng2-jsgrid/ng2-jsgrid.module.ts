import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsGridComponent } from './ng2-jsgrid.component';

@NgModule({
    imports: [CommonModule],
    declarations: [JsGridComponent],
    exports: [JsGridComponent]
})
export class JsGridModule {
}

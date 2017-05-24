import { Directive } from '@angular/core';
declare var require: any;
declare var $: any;
const datetimepicker = require('../../assets/jquery-ui-datetimepicker/jquery-ui.js');
require('../../assets/jquery-ui-datetimepicker/jquery-ui.css');


@Directive({
    selector: 'js-grid'
})
export class JsGridDateTypeDirective {

    constructor() {
        console.log(datetimepicker);
    }

}

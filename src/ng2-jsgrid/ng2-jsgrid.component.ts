import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
declare var $: any;

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'js-grid',
    template: `
    <div></div>
    `,
})
export class JsGridComponent implements OnInit, AfterViewInit {

    @Input() options;

    private _$gridElem;

    constructor(private elemRef: ElementRef) {
    }

    ngOnInit() {
        const $nativeElement = $(this.elemRef.nativeElement);
        this._$gridElem = $nativeElement.find('div:first');
        this._$gridElem.jsGrid(this.options);
    }

    ngAfterViewInit() {
    }
}

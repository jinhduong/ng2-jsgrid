import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { FilterModel, PageResponse, ODataController } from './jsgrid.models';
import { Common } from './jsgrid.common';
declare var $: any;

@Component({
    selector: 'js-grid',
    template: `
    <div></div>
    `,
})
export class JsGridComponent implements OnInit, AfterViewInit {

    @Input() action: ODataController;
    private _$gridElem;
    private _options = {
        width: '100%',
        autoload: true,
        paging: true,
        sorting: true,
        pageLoading: true,
        pageSize: 15,
        pageIndex: 1,
        controller: {
            loadData: (filter: FilterModel) => {
                return this.source(filter);
            },
            insertItem: this.action ? this.action.insertItem : undefined,
            updateItem: this.action ? this.action.updateItem : undefined,
            deleteItem: this.action ? this.action.deleteItem : undefined
        },
        useOriginal: false
    };
    @Input()
    set options(val) {
        // If it is true, use original options from jsGrid
        if (val.useOriginal) this._options = val;
        else {
            // Assign controller object
            if (val.controller) val.controller = Object.assign(this._options.controller, val.controller);

            // Merge options
            this._options = Object.assign(this._options, val);
        }
    }
    get options() {
        if (this.action) {
            this._options.controller.updateItem = this.action.updateItem;
            this._options.controller.insertItem = this.action.insertItem;
            this._options.controller.deleteItem = this.action.deleteItem;
        }

        return this._options;
    }
    @Output() pageChanged = new EventEmitter<FilterModel>();

    private _source: Function;
    // @Output() sourceChange = new EventEmitter<Function>();
    @Input()
    set source(val: Function) {
        const gridIsRendered = !Common.gridIsEmpty(this._$gridElem);
        this._source = val;
        // this.sourceChange.emit(val);

        if (gridIsRendered) {
            this.reRenderGrid();
        } else {
            this.renderGrid();
        }
    }
    get source(): Function {
        return this._source;
    }



    constructor(private elemRef: ElementRef) {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
    }

    /* Private functions*/
    renderGrid() {
        const $nativeElement = $(this.elemRef.nativeElement);
        this._$gridElem = $nativeElement.find('div:first');
        this._$gridElem.jsGrid(this.options);
    }

    reRenderGrid() {
        this._$gridElem.jsGrid('loadData', this.source);
    }
}

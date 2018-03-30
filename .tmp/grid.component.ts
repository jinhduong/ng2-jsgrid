import { GridHtmlTemplate } from './templates/grid.html';
import { GridOptions } from './interfaces/options.interface';
import { Field } from './interfaces/field.interface';
import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { GridMethods } from './interfaces/grid.methods';

// import './lib/jsgrid-1.5.3/jsgrid';

declare var $: any;

// require('style-loader!./lib/jsgrid-1.5.3/jsgrid-theme.css');
// require('style-loader!./lib/jsgrid-1.5.3/jsgrid.css');
// require('style-loader!./lib/jsgrid-1.5.3/jsgrid.override.css');

@Component({
  selector: 'app-grid',
  template: `<div></div>
  <h3>
    <button class="btn btn-default" (click)="clicked($event);" *ngIf="showButton">
      <i class="fa fa-refresh"></i> Refresh
    </button>
  </h3>
  `
})
export class GridComponent implements OnInit {

  private _$elem;
  showButton = true;

  @Input() pageSize = 10;
  @Output() inserted = new EventEmitter();
  @Output() removed = new EventEmitter();
  @Output() updated = new EventEmitter();

  // Api data and return promise
  private _api: Function;
  @Input() set api(value: Function) {
    if (this._api && this._$elem) {
      this._api = value;
      this._$elem.jsGrid('loadData', (filter) => {
        // data returned from api
        const promise = this.api(this.convertFiltering(filter));
        return promise;
      });
    }
    this._api = value || ((filter) => ({ data: {}, itemsCount: 0 }));
  }
  get api(): Function {
    return this._api;
  }

  // Options
  private _options: any;
  @Input() set options(value: any) {
    this.mergeOptions(value);
  }
  get options(): any {
    return this._options;
  }

  // refreshButton
  private _refreshButton: boolean;
  @Input() set refreshButton(value: boolean) {
    this.showButton = value;
  }
  get refreshButton(): boolean {
    return this._refreshButton;
  }

  // Fields
  private _fields: Field[];
  @Input() set fields(value: Field[]) {
    if (value === undefined) return;

    const that = this;
    this._fields = value;
    this._fields.forEach(field => {
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
    this._fields = this._fields.filter(x => x.hide === false || x.hide === undefined);
  }
  get fields(): Field[] {
    return this._fields;
  }

  private _defaultOptions: GridOptions = {
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
      insertItem: (item) => this.inserted.emit(item),
      deleteItem: (item) => this.removed.emit(item),
      updateItem: (item) => this.updated.emit(item),
      loadData: (filter) => {
        // data returned from api
        const promise = this.api(this.convertFiltering(filter));

        // promise will have resolve and reject, just like success and error in ajax
        return new Promise((resolve, reject) => {

          // variables can use 'let', 'var', 'const' to declare
          // formula to calculate row number is to get (( pgIndex - 1) * 10) + 1
          const pgIndex = filter.pageIndex;
          let num = ((pgIndex - 1) * this.pageSize) + 1;

          let cnt = 0;

          // promise.then is the same as ajax aftersend
          // apiData is the object name, which contains itemsCount & data
          promise.then((apiData: { itemsCount, data: Array<any> }) => {
            // .map will create a new array with the results of calling a function for every array element
            const transformData = apiData.data.map(x => {
              x.no = num;
              num++;

              if (apiData.data[cnt].created) {
                let str = '';
                str = apiData.data[cnt].created.split('T');
                x.date = str[0];
                cnt++;
              }

              return x;
            });

            // same as ajax success
            // resolve will hold 2 items, itemsCount & data
            resolve(
              {
                itemsCount: apiData.itemsCount,
                data: transformData
              });
          });
        });
      }
    },
    fields: []
  };

  constructor(
    private elemRef: ElementRef
  ) {
  }

  ngOnInit() {
    this._$elem = $(this.elemRef.nativeElement.querySelectorAll('div')[0]);
    if (this._options === undefined) {
      this._options = this._defaultOptions;
      this._options.pageSize = this.pageSize;
    }
    this.options.fields = this.fields;
    this.render();
  }

  clicked(value) {
    this._$elem.jsGrid('search');
  }

  mergeOptions(value: any) {
    this._options = Object.assign({}, this._defaultOptions, value);
  }

  private render() {
    this._$elem.jsGrid(this._options);
  }

  convertFiltering(filter) {
    const _keyProps = ['pageIndex', 'pageSize', 'sortField', 'sortOrder'];
    const _filterKeys = Object.keys(filter);
    const _search = {};

    _filterKeys.forEach(k => {
      if (_keyProps.indexOf(k) < 0) {
        if (filter[k]) _search[k] = filter[k];
        delete filter[k];
      }
    });

    filter['search'] = JSON.stringify(_search);
    return filter;
  }

  public getGridInstance(): GridMethods {
    if (this._$elem) {
      return this._$elem.data('JSGrid');
    }
    return null;
  }

  // Re-render grid
  public reRender() {
    this._$elem.jsGrid('search');
  }
}

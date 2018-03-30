import { Field } from './interfaces/field.interface';
import { OnInit, ElementRef, EventEmitter } from '@angular/core';
import { GridMethods } from './interfaces/grid.methods';
export declare class GridComponent implements OnInit {
    private elemRef;
    private _$elem;
    showButton: boolean;
    pageSize: number;
    inserted: EventEmitter<{}>;
    removed: EventEmitter<{}>;
    updated: EventEmitter<{}>;
    private _api;
    api: Function;
    private _options;
    options: any;
    private _refreshButton;
    refreshButton: boolean;
    private _fields;
    fields: Field[];
    private _defaultOptions;
    constructor(elemRef: ElementRef);
    ngOnInit(): void;
    clicked(value: any): void;
    mergeOptions(value: any): void;
    private render();
    convertFiltering(filter: any): any;
    getGridInstance(): GridMethods;
    reRender(): void;
}

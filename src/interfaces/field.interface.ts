export interface Field {
    type?: 'text' | 'number' | 'checkbox' | 'select' | 'textarea' | 'control' | 'selectasync';
    name?: string;
    title?: string;
    align?: string;
    width?: number | string;
    visible?: boolean;
    items?: Array<any>;
    itemsAsync?: any;
    textField?: string;
    valueField?: string;

    css?: string;
    headercss?: string;
    filtercss?: string;
    insertcss?: string;
    editcss?: string;

    filtering?: boolean;
    inserting?: boolean;
    editing?: boolean;
    sorting?: boolean;
    sorter?: string;

    headerTemplate?: any;
    itemTemplate?: any;
    filterTemplate?: any;
    insertTemplate?: any;
    editTemplate?: (value, item) => {};

    filterValue?: any;
    insertValue?: any;
    editValue?: any;
    cellRenderer?: any;
    validate?: any;

    editButton?: boolean;
    modeSwitchButton?: boolean;
    deleteButton?: boolean;
    clearFilterButton?: boolean;

    // Extend
    selectFiltering?: string[][] | Promise<string[][]>;
    hide?: boolean;
}


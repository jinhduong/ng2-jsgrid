type FunctionODataController = (item: any) => Promise<any>;

export interface FilterModel {
    pageSize: number;
    pageIndex: number;
    sortField: string;
    sortOrder: string;
};

export interface PageResponse {
    itemsCount: number;
    data: any[];
};

export class ODataController {
    public insertItem: FunctionODataController;
    public updateItem: FunctionODataController;
    public deleteItem: FunctionODataController;
}


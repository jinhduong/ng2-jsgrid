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


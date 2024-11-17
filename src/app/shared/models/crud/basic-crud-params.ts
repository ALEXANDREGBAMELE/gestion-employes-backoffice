import { ICustomTableActionItem } from "./custom-table-action-item";
import { ICustomTableHeaderItem } from "./custom-table-header-item";
import { ModalType } from "./enums/modal-type";
import { IFormItem } from "./formItem";
import { IPagination } from "./pagination";
import { ITableHeadItem } from "./table-head-item";
import { ITableItem } from "./tableItems";

export interface IBasicCrudParams {
    formItems?: IFormItem[],
    pagination?: IPagination,
    tableHeadItem?: ITableHeadItem,

    cardTitle?: string;
    endPoint?: string;
    getRequestBody?: any;
    canCreate?: boolean;
    canUpdate?: boolean;
    canDelete?: boolean;
    canSearchByStatus?: boolean;
    lockEndPoint?: string;
    tableColumnItem?: any[];
    tableRowItems?: ITableItem[];
    customTableActionItems?: ICustomTableActionItem[];
    customTableHeaderItems?: ICustomTableHeaderItem[];
    actionParam?: any;
    formWidth?: ModalType;

}
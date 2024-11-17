import { TableItemType } from "./enums/table-item-type";

export class ITableItem {
    label!: string;
    type?: TableItemType;
    value?: any;
    booleanParam?: {
        trueValue: string;
        falseValue: string;
        colorSwitch?: boolean;
    }
}

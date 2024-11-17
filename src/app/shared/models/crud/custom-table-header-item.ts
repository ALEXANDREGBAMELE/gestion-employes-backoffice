import { FormsItemType } from "./enums/forms-item-type.enum";
import { TableHeaderItemType } from "./enums/table-header-item-type";
import { IFormItem } from "./formItem";

export class ICustomTableHeaderItem implements IFormItem {
    label?: string | undefined;
    name?: string | undefined;
    type?: FormsItemType | undefined;
    value: any;
    placeholder?: string | undefined;
    required?: boolean | undefined;
    className?: string | undefined;
    isEditable?: boolean | undefined;
    mask?: string | undefined;
    selectParams?: { endPoint?: string; items: any[]; name?: string; action?: string; value: string; hasNotId?: boolean; } | undefined;
    headerItemType!: TableHeaderItemType;
    onClick?: () => void;

}

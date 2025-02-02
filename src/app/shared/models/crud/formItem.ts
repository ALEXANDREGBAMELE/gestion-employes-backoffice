import { FormsItemType } from "./enums/forms-item-type.enum";

export interface IFormItem {
    id?: string;
    label?: string;
    formControlName?: string;
    formControl?: string;
    name?: any;
    type?: FormsItemType;
    value?: any;
    placeholder?: string;
    required?: boolean;
    className?: string;
    isEditable?: boolean;
    isDisable?: boolean;
    mask?: string;
    selectParams?: {
        endPoint?: string;
        items: any[];
        // name?: string;
        action?: string;
        // value: string;
        // hasNotId?: boolean;
    }

}
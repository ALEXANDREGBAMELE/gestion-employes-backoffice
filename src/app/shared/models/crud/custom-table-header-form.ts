// custom-button.model.ts
export interface ITableHeaderFormItem {
    formControlName?: string;
    type?: 'text' | 'select' | 'checkbox' | 'radio' | 'file' | 'search';  // Restriction des types possibles pour plus de contrôle
    label?: string;
    placeholder?: string;
    name?: string;
    value?: any;  // `any` permet plus de flexibilité, ou remplacez par `string | number | boolean` selon les besoins
    key?: string;
    selectParams?: ISelectParams;
    className?: string;  // Utilisation d'une interface séparée pour plus de lisibilité
}

interface ISelectParams {
    endPoint?: string;
    items?: Array<{ key: any; value: string }>;  // Utiliser un tableau d'objets typé pour une structure plus claire
    name?: string;
    action?: string;
    value?: string;
    hasNotId?: boolean;
}

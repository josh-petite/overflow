module ov {

    export interface IAngularFormlyField {
        key: string;
        type: string;

        templateOptions?: {
            type?: string;
            label?: string;
            placeholder?: string;
            focus?: boolean;
            required?: boolean;
        };

        validators?: {};
    }
}
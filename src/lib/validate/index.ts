import {ValidationError} from '../errors/ValidationError'
export * as rules from './rules'

export function validate(schema: ValidateSchema, formDataObj: FormDataObj) {
    let errorStack: {[key: string]: string} = {};

    for(const property in schema) {
        const rules = schema[property] as Array<ValidateRule>
        const validateValue = formDataObj[property] as (FormDataObj[keyof FormDataObj]);
        for(const rule of rules) {
            for(const callbackFn of rule.fns) {
                if(!callbackFn(validateValue, formDataObj)) {
                    errorStack[property] = rule.message;
                    break;
                }
            }
        }
    }

    if(Object.keys(errorStack).length) {
        throw new ValidationError(errorStack);
    }
}

export type ValidateFn = (value: string | number, fields: FormDataObj) => boolean

export interface ValidateRule {
     fns: Array<ValidateFn>;
     message: string
}

export interface ValidateSchema {
    [key: string]: Array<ValidateRule>
}

export interface FormDataObj {
    [key: string]: string | number
}
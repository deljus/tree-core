
export interface ValidateErrorStack {
    [key: string]: string
}

export class ValidationError extends Error {
    constructor(stack: ValidateErrorStack) {
        super('Ошибка валидации');
        this.name = "ValidationError";
        this.stack = JSON.stringify(stack);
    }
}
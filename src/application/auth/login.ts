import {Ports} from "application/ports";
import {validate, ValidateSchema, rules} from "lib/validate";

const schema: ValidateSchema = {
    email: [
        {
            fns: [rules.isRequire],
            message: "Поле email обязательное"
        },
        {
            fns: [rules.isEmail],
            message: "Неправильный email"
        }
    ],
    password: [
        {
            fns: [rules.isPassword],
            message: "Поле password должно содержать от 6 до 20 символов, содержать цифры и буквы в разных регистрах"
        },
        {
            fns: [rules.isRequire],
            message: "Поле password обязательное"
        }
    ]
}

export async function login(data: LoginData, ports: Ports) {
    validate(schema, data)
    await ports.userStorage.login(data.email, data.password);
}

export type LoginData = {
    email: Email;
    password: Password
}
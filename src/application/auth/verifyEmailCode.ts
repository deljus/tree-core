import {Ports} from "../ports";
import {validate, ValidateSchema, rules} from "lib/validate";

const schema: ValidateSchema = {
    code: [
        {
            fns: [rules.isRequire],
            message: 'Поле подтверждения email обязательное'
        }
    ]
}

export async function verifyEmailCode(data: VerifyEmailCodeData, ports: Ports) {
    validate(schema, data)
    await ports.userStorage.verifyEmailCode(data.email, data.code)
}

export type VerifyEmailCodeData = {
    code: string
    email: Email
}
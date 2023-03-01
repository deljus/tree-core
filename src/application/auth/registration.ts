import {UserLastName, UserMiddleName, UserName} from '../../domain/profile'
import {NOTIFICATION_ACTION, NOTIFICATION_TYPE, Ports} from '../ports'
import {validate, rules, ValidateSchema} from '../../lib/validate'
import {createUser} from './createUser';

const schema: ValidateSchema = {
    lastName: [
        {
            fns: [rules.isRequire],
            message: 'Поле фамилия обязательное'
        }
    ],
    name: [
        {
            fns: [rules.isRequire],
            message: 'Поле имя обязательное'
        }
    ],
    email: [
        {
            fns: [rules.isRequire],
            message: 'Поле email обязательное'
        },
        {
            fns: [rules.isEmail],
            message: 'Неправильное email'
        }
    ],
    password: [
        {
            fns: [rules.isRequire],
            message: 'Поле пароля обязательное'
        }
    ],
    confirmPassword: [
        {
            fns: [rules.isRequire],
            message: 'Поле подтверждения пароля обязательное'
        }
    ]
}

export async function registration(data: RegistrationDate, ports: Ports) {
    validate(schema, data)
    const user = await createUser(data, ports)
    await ports.userStorage.create(user);
    await ports.userStorage.checkEmail(data.email)
    ports.notification.send(NOTIFICATION_TYPE.INFO, NOTIFICATION_ACTION.EMAIL_SEND)
}

export type RegistrationDate = {
    lastName: UserLastName,
    name: UserName,
    middleName?: UserMiddleName,
    workSpaceId?: UniqueId
    email: Email
    password: Password
    confirmPassword: Password
}
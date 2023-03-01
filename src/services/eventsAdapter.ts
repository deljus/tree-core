import {Ports} from '../application/ports'
import {registration, RegistrationDate} from '../application/auth/registration'
import {login, LoginData} from '../application/auth/login'
import { verifyEmailCode, VerifyEmailCodeData } from '../application/auth/verifyEmailCode'

export function eventsAdapter(ports: Ports) {
    return {
        registration: (data: RegistrationDate) => registration(data, ports),
        login: (data: LoginData) => login(data, ports),
        verifyEmailCode: (data: VerifyEmailCodeData) => verifyEmailCode(data, ports)
    }
}
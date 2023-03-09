import {Ports} from '../application/ports'
import {registration, RegistrationDate} from '../application/auth/registration'
import {login, LoginData} from '../application/auth/login'
import { verifyEmailCode, VerifyEmailCodeData } from '../application/auth/verifyEmailCode'

export interface EventsAdapterReturned {
    registration: (data: RegistrationDate) => Promise<void>;
    login: (data: LoginData) => Promise<void>;
    verifyEmailCode: (data: VerifyEmailCodeData) => Promise<void>
}

export function eventsAdapter(ports: Ports): EventsAdapterReturned {
    return {
        registration: (data) => registration(data, ports),
        login: (data) => login(data, ports),
        verifyEmailCode: (data) => verifyEmailCode(data, ports)
    }
}
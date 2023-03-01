import {EventsService, Ports} from '../application/ports'
import { registration } from '../application/auth/registration'
import { login } from '../application/auth/login'
import { verifyEmailCode } from '../application/auth/verifyEmailCode'

export function eventsAdapter(ports: Ports): EventsService {
    return {
        registration: (data) => registration(data, ports),
        login: (data) => login(data, ports),
        verifyEmailCode: (data) => verifyEmailCode(data, ports)
    }
}
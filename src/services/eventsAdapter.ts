import {EventsService, Ports} from '../application/ports'
import { registration } from '../application/registration'

export function eventsAdapter(ports: Ports): EventsService {
    return {
        registration: (data) => registration(data, ports)
    }
}
import {Ports} from "./application/ports";
import {eventsAdapter} from "./services/eventsAdapter";

export function buildServices(ports: Ports) {
    return eventsAdapter(ports)
}
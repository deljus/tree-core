import {Ports} from "./application/ports";
import {eventsAdapter} from "./services/eventsAdapter";

function buildServices(ports: Ports) {
    return eventsAdapter(ports)
}

export {
    buildServices
}
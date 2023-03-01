import {Ports} from "./application/ports";
import {eventsAdapter} from "./services/eventsAdapter";

export * as userDomain from "./domain/user"
export * as profileDomain from "./domain/profile"
export * as workspaceDomain from "./domain/workspace"
export * as treeDomain from "./domain/tree"

export type {
    Ports,
    NotificationService,
    EventsService,
    WorkspaceStorageService,
    UserStorageService,
    NOTIFICATION_ACTION
} from './application/ports'

export function buildServices(ports: Ports) {
    return eventsAdapter(ports)
}
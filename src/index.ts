import {Ports} from "./application/ports";
import {eventsAdapter} from "./services/eventsAdapter";

export * as user from "./domain/user"
export * as profile from "./domain/profile"
export * as workspace from "./domain/workspace"
export * as tree from "./domain/tree"

export type { User } from './domain/user'
export type { Profile } from './domain/profile'
export type { Workspace } from './domain/workspace'
export type { EventsAdapterReturned } from './services/eventsAdapter'

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
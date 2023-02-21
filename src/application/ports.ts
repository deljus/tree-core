import {Workspace} from "domain/workspace";
import {User} from "domain/user";
import { RegistrationDate } from './registration'

export interface WorkspaceStorageService {
    getAll(): Workspace[]
    find(uid: UniqueId): Workspace | void
    update(workspace: Workspace): void
}

export interface UserStorageService {
    create(user: User): Promise<User>,
    checkEmail(email: Email): Promise<void>
}

export interface EventsService {
    registration(data: RegistrationDate, ports: Ports): void
}

export enum NOTIFICATION_ACTION {
    EMAIL_SEND,
    WORKSPACE_NOT_FOUND
}

export enum NOTIFICATION_TYPE {
    WARNING,
    ERROR,
    INFO
}

export interface NotificationService {
    send(type: NOTIFICATION_TYPE, action: NOTIFICATION_ACTION, message?: string): void;
}

export interface Ports {
    workspaceStorage: WorkspaceStorageService,
    userStorage: UserStorageService
    notification: NotificationService
}
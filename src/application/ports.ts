import {Workspace} from "domain/workspace";
import {User} from "domain/user";
import type { RegistrationDate } from './auth/registration'
import type { LoginData } from './auth/login'
import type { VerifyEmailCodeData } from './auth/verifyEmailCode'

export interface WorkspaceStorageService {
    getAll(): Workspace[]
    find(uid: UniqueId): Workspace | void
    update(workspace: Workspace): void
}

export interface UserStorageService {
    create(user: User): Promise<User>,
    checkEmail(email: Email): Promise<void>
    verifyEmailCode(email: Email, code: string): Promise<void>
    login(email: Email, password: Password): Promise<void>
}

export interface EventsService {
    registration(data: RegistrationDate, ports: Ports): Promise<void>
    login(data: LoginData, ports: Ports): Promise<void>
    verifyEmailCode(data: VerifyEmailCodeData, ports: Ports): Promise<void>
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
import type { Profile } from './profile'

export enum ROLES {
    ADMIN,
    EDITOR,
    AUTHOR
}

export interface User {
    uid: UniqueId
    email: Email
    isEmailConfirmed: boolean,
    role: ROLES.AUTHOR | ROLES.EDITOR | ROLES.ADMIN
    profile: Profile
}

export function isAdmin(user: User) {
    return user.role === ROLES.ADMIN
}

export function isEditor(user: User) {
    return user.role === ROLES.EDITOR
}

export function isAuthor(user: User) {
    return user.role === ROLES.AUTHOR
}

export function createUser(user: User) {
    return user;
}

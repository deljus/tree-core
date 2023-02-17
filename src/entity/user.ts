///<reference path="../types/global.d.ts"/>

enum ROLES {
    ADMIN,
    EDITOR,
    AUTHOR
}

interface User {
    id: UniqueId
    lastName: UserLastName
    name: UserName
    middleName: UserMiddleName
    role: ROLES.AUTHOR | ROLES.EDITOR | ROLES.ADMIN
    workspace: UniqueId
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

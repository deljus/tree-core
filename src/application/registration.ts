import {Profile, UserLastName, UserMiddleName, UserName} from '../domain/profile'
import {NOTIFICATION_ACTION, NOTIFICATION_TYPE, Ports} from './ports'
import {ROLES, User} from "../domain/user";

function uid() {
    return `${Math.random().toString(36).slice(-8)}-${Math.random().toString(36).slice(-8)}`;
}

async function createUser({ email, workSpaceId }: RegistrationDate, ports: Ports): Promise<User> {
    const workspaces = []
    if(workSpaceId) {
        const workspace = ports.workspaceStorage.find(workSpaceId)
        if(workspace) {
            workspaces.push(workspace)
        } else {
            ports.notification.send(NOTIFICATION_TYPE.WARNING, NOTIFICATION_ACTION.WORKSPACE_NOT_FOUND)
        }
    }

    const profile: Profile = {
        uid: uid(),
        workspaces: workspaces
    }

    const user = {
        uid: uid(),
        isEmailConfirmed: false,
        email,
        role: ROLES.AUTHOR,
        profile,
    };

    await ports.userStorage.create(user);

    return user;
}

function validateUser(data: RegistrationDate) {
    if(data.lastName) {

    }
}

export async function registration(data: RegistrationDate, ports: Ports) {
    validateUser(data)
    await createUser(data, ports)
    await ports.userStorage.checkEmail(data.email)
    ports.notification.send(NOTIFICATION_TYPE.INFO, NOTIFICATION_ACTION.EMAIL_SEND)
}

export type RegistrationDate = {
    lastName: UserLastName,
    name: UserName,
    middleName?: UserMiddleName,
    workSpaceId?: UniqueId
    email: Email
    password: Password
    confirmPassword: Password
}
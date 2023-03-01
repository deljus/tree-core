import {NOTIFICATION_ACTION, NOTIFICATION_TYPE, Ports} from "../ports";
import {ROLES, User} from "../../domain/user";
import {Profile} from "../../domain/profile";
import {RegistrationDate} from "./registration";

function uid() {
    return `${Math.random().toString(36).slice(-8)}-${Math.random().toString(36).slice(-8)}`;
}

export function createUser({ email, workSpaceId }: RegistrationDate, ports: Ports): User {
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

    return {
        uid: uid(),
        isEmailConfirmed: false,
        email,
        role: ROLES.AUTHOR,
        profile,
    };
}
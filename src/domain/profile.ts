import type {Workspace} from "./workspace";

export type UserLastName = string;
export type UserName = string;
export type UserMiddleName = string;

export interface Profile {
    uid: UniqueId
    lastName?: UserLastName
    name?: UserName
    middleName?: UserMiddleName
    birthday?: DateTimeString
    deathDate?: DateTimeString
    about?: Text
    motherId?: UniqueId
    fatherId?: UniqueId
    workspaces: Workspace[]
}

export function addWorkspace(profile: Profile, workspace: Workspace): Profile {
    return {
        ...profile,
        workspaces: [...profile.workspaces, workspace],
    }
}

export function removeWorkspace(profile: Profile, workspace: Workspace): Profile {
    return {
        ...profile,
        workspaces: profile.workspaces.filter(({ uid }) => uid === workspace.uid)
    }
}

export function containWorkspace(profile: Profile, workspace: Workspace): boolean {
    return profile.workspaces.some(({ uid }) => uid === workspace.uid)
}



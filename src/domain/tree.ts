import type {Profile} from "./profile";

interface Tree {
    profiles: Profile[]
}

export function addProfile(tree: Tree, profile: Profile): Tree {
    return { ...tree, profiles: [...tree.profiles, profile] };
}

export function contains(tree: Tree, profile: Profile): boolean {
    return tree.profiles.some(({ uid }) => uid === profile.uid);
}
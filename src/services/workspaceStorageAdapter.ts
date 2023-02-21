import { WorkspaceStorageService } from '../application/ports'
import { Workspace } from '../domain/workspace'

export function workspaceStorageAdapter(): WorkspaceStorageService {
    return {
        find(uid: UniqueId): Workspace | void {

        },
        update(workspace: Workspace) {

        },
        getAll(): Workspace[] {
            return []
        }
    }
}
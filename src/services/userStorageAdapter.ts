import { UserStorageService } from '../application/ports'

export function userStorageAdapter(): UserStorageService {
    return {
        async create(user) {
            return Promise.resolve(user);
        },
        async checkEmail(email) {
            return Promise.resolve()
        }
    }
}
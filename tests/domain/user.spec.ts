import 'mocha';
import { assert } from 'chai';

import { isAdmin, isAuthor, isEditor, ROLES, hasEmailConfirmed } from 'domain/user';
import type { User } from 'domain/user';

const replaceField = (field: keyof User, value: any): User => ({
    uid: '1',
    email: 'alice@gp.com',
    isEmailConfirmed: false,
    role: ROLES.AUTHOR,
    profile: {
        uid: '1',
        workspaces: []
    },
    [field]: value
})

describe('user domain roles', () => {
    it('user role should be admin', () => {
        const user = replaceField('role', ROLES.ADMIN)
        assert.isTrue(isAdmin(user));
        assert.isNotTrue(isEditor(user));
        assert.isNotTrue(isAuthor(user));
    });

    it('user role should be editor', () => {
        const user = replaceField('role', ROLES.EDITOR)
        assert.isNotTrue(isAdmin(user));
        assert.isTrue(isEditor(user));
        assert.isNotTrue(isAuthor(user));
    });

    it('user role should be autor', () => {
        const user = replaceField('role', ROLES.AUTHOR)
        assert.isNotTrue(isAdmin(user));
        assert.isNotTrue(isEditor(user));
        assert.isTrue(isAuthor(user));
    });

    it('user email is not confirmed', () => {
        const user = replaceField('isEmailConfirmed', false)
        assert.isNotTrue(hasEmailConfirmed(user));
    });
});
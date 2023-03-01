import 'mocha';
import { assert } from 'chai';

import { addWorkspace, hasContainWorkspace, removeWorkspace } from '../../src/domain/profile';
import type { Profile } from '../../src/domain/profile';

const profile = {
    uid: '1',
    workspaces: [{
        uid: '2',
        name: "test"
    }]
}

describe('profile domain', () => {
    it('function hasContainWorkspace should return true', () => {
        assert.isTrue(hasContainWorkspace(profile, '2'));
    });
});
import 'mocha';
import { assert } from 'chai';
import {rules} from 'lib/validate'

describe('validate rules', () => {
    it('isRequired should be true ', () => {
        assert.isTrue(rules.isRequire('test', {}))
        assert.isTrue(rules.isRequire(0, {}))
    })
    it('isRequired should be false ', () => {
        assert.isNotTrue(rules.isRequire('', {}))
    })
})
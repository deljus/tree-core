import 'mocha';
import { assert } from 'chai';

import * as npmPackage from '../src/index';

describe('NPM Package', () => {
    it('should be an object', () => {
        assert.isObject(npmPackage);
    });

    // it('should have a helloWorld property', () => {
    //     assert.property(npmPackage, 'helloWorld');
    // });
});
'use strict';

var expect = require('chai').expect;
var videowebgl = require('../dist/VIdeoWebGL.js');

describe('test', () => {
    it('should return empty', () => {
        var result = videowebgl.init();
        expect(result).to.equal('');
    });
});
'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.fontello2js = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },

  testIcons: function (test) {
    var result = require('../tmp/result.js');

    // ensure custom fonts that are not selected do not get included
    test.throws(result['icon-account-r'], 'icon-account-r does not exist');

    test.ok(result['icon-account'], 'icon-account exists');
    test.ok(result['icon-emo-happy'], 'icon-emo-happy exists');
    test.ok(result['icon-glass'], 'icon-glass exists');
    test.ok(result['icon-angellist'], 'icon-angellist exists');
    test.ok(result['icon-play'], 'icon-play exists');
    test.ok(result['icon-pitch'], 'icon-pitch exists');

    test.equal(result['icon-account'].charCodeAt(0), 59397, 'icon-account is correct');
    test.equal(result['icon-emo-happy'].charCodeAt(0), 59392, 'icon-emo-happy is correct');
    test.equal(result['icon-glass'].charCodeAt(0), 59393,  'icon-glass is correct');
    test.equal(result['icon-angellist'].charCodeAt(0), 59394,  'icon-angellist is correct');
    test.equal(result['icon-play'].charCodeAt(0), 59395,  'icon-play is correct');
    test.equal(result['icon-pitch'].charCodeAt(0), 59396,  'icon-pitch is correct');

    test.done();
  }

};

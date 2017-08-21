'use strict';
Promise.all = undefined;
require('./index.js');
var test = require('ava');

test('array', function (assert) {
  assert.plan(1);
  return Promise.all([Promise.resolve(true)])
  .then(function (actual) {
    var expected = [true];
    assert.same(actual, expected);
  });
});

test('non-promise values in array', function (assert) {
  assert.plan(1);
  return Promise.all([false])
  .then(function (actual) {
    var expected = [false];
    assert.same(actual, expected);
  });
});


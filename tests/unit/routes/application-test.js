import { module } from 'qunit'
import test from 'ember-sinon-qunit/test-support/test'

import { setupTest } from 'ember-qunit'

module('Unit | Route | application', function(hooks) {
  setupTest(hooks)

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:application')
    assert.ok(route)
  })
})

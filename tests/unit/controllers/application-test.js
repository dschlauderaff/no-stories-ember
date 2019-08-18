import { module } from 'qunit'
import test from 'ember-sinon-qunit/test-support/test'
import { setupTest } from 'ember-qunit'

module('Unit | Controller | application', function(hooks) {
  setupTest(hooks)

  // Replace this with your real tests.
  test('login() action calls session.authenticate()', function(assert) {
    let controller = this.owner.lookup('controller:application')
    const stub = this.stub(controller.session, 'authenticate')

    controller.send('login')
    assert.ok(stub.calledOnce, 'login called')
  })

  test('logout() action calls session.invalidate()', function(assert) {
    let controller = this.owner.lookup('controller:application')
    const stub = this.stub(controller.session, 'invalidate')

    controller.send('logout')
    assert.ok(stub.calledOnce, 'logout called')
  })
})

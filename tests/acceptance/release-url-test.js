import { find, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | release URL', function(hooks) {
  setupApplicationTest(hooks);

  test('specifying release instead of specific version in URL should go to the latest release', async function (assert) {
    await visit('ember/release/classes/Application');
    assert.equal(find('h1.module-name').textContent.trim(), 'Class Application')
  });
});

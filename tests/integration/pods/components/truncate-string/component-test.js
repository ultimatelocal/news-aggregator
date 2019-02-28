import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('truncate-string', 'Integration | Component | truncate string', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{truncate-string}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#truncate-string}}
      template block text
    {{/truncate-string}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

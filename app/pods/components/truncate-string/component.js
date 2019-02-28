import Component from '@ember/component';
import { computed } from '@ember/object';
import { isEmpty, isPresent } from '@ember/utils';


const TruncateString = Component.extend({
  classNames: ['truncate-string'],

  init() {
    this._super(...arguments);

    if (isEmpty(this.limit)) {
      this.limit = 46;
    }

    if (isEmpty(this.showFullOnHover)) {
      this.showFullOnHover = false;
    }
  },

  truncatedValue: computed('value', function() {
    const value = this.get('value');
    if (isPresent(value)) {
      const limit = this.get('limit');

      if (value.length > limit) {
        return value.substr(0, limit - 3) + '...';
      } else {
        return value;
      }
    }
  }),

  isTruncated: computed('value.length', 'limit', function() {
    return this.get('value.length') > this.get('limit');
  }),

  isFullOnHoverAvailable: computed.and('showFullOnHover', 'isTruncated')
});

TruncateString.reopenClass({
  positionalParams: ['value']
});

export default TruncateString;

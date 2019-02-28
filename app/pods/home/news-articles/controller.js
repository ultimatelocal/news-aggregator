import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  articles: computed.alias('model'),
  newsArticles: computed.filter('articles', (value, index) => index < 3),
});

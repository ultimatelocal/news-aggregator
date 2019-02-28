import Route from '@ember/routing/route';

export default Route.extend({

  beforeModel(){
    this.store.queryRecord('top-headline', {
      'country': 'us'
    });
    this.transitionTo('home.news-articles');
  }

});

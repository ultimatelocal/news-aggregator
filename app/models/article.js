import DS from 'ember-data';

export default DS.Model.extend({
  topHeadline: DS.belongsTo('top-headline', { async:true }),
  author:      DS.attr('string'),
  title:       DS.attr('string'),
  content:     DS.attr('string'),
  description: DS.attr('string'),
  publishedAt: DS.attr('string'),
  url:         DS.attr('string'),
  urlToImage:  DS.attr('string'),
});

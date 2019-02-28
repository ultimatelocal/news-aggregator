import DS from 'ember-data';

export default DS.Model.extend({
  articles:     DS.hasMany('article', { async: true }),
  status:       DS.attr('string'),
  totalResults: DS.attr('number'),
});

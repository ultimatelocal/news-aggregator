import DS from 'ember-data';

const token  = 'a4d6740bddb24859a394a40a2d348384';

export default DS.RESTAdapter.extend({
  host: 'https://newsapi.org/v2',

  headers: {
    'Authorization': `Bearer ${token}`
  },

});

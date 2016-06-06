import Ember from 'ember';

export default Ember.Route.extend({
  model() { // is the same as writing model: function()
    return this.store.findAll('rental'); // find ALL records of the type rental in the store.
  },
});

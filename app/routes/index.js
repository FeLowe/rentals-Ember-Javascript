import Ember from 'ember';

export default Ember.Route.extend({
  model() { // is the same as writing model: function()
    return Ember.RSVP.hash({ //this  Ember RSVP.hash allow us to load multiple JS promises at once
      cities: this.store.findAll('city'),// cities and rentals here are two promises
      rentals: this.store.findAll('rental') // find ALL records of the type rental in the store.
    });
  },


  actions: {

    save3(params){
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    }
  }
});

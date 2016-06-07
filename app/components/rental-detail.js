import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletefromRentalDetailJs(rentalToDelete) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRentalComesFromRentalDetailJs', rentalToDelete); //whenever we have sendAction we send it to the parent hbs file(one level up)
        //this sendAction is like emitter in angular
      }
    },
  }
});

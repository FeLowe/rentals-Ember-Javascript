import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,
  actions:{
    updateRentalForm(){
      this.set('updateRentalForm', true);
    },
    updateFromUserInputForm(rental){
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
      };
      this.set('updateRentalForm', false);
      this.sendAction('updateActionFromUptadeRentalJs', rental, params);
    }
  }
});

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
if(Meteor.isClient) {


Template.companyForm.events({

    'submit #companyForm' : function(event, template) {
    event.preventDefault();
    const companyName = template.find('#companyName').value;
    const phoneNumber = template.find('#phoneNumber').value;
    const faxNumber = template.find('#faxNumber').value;
    const email = template.find('#email').value;
    const street = template.find('#street').value;
    const city = template.find('#city').value;
    const state = template.find('#state').value;
    const zipcode = template.find('#zipcode').value;

  console.log(companyName);

    const newCompany = {
      companyName: companyName,
      phoneNumber: phoneNumber,
      faxNumber: faxNumber,
      email: email, 
      street: street,
      city: city,
      state:state,
      zipcode:zipcode,
      createdBy: Meteor.userId()
    }
    Meteor.call('companies.insert', newCompany);
    alert('You just added your information'+newCompany);
  }


});
}



import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
if(Meteor.isClient) {

// Template.level.helpers({
// 'skillsList':function() {
//    SkillsList =[];
//    SkillsList= Session.get ('SkillsList');
//    return SkillsList

// }
// });

Template.companyForm.events({
    //  'click .skills':function(){
    //   event.preventDefault();
    //     skills = [];
    //     $( "select option:selected" ).each(function(i) {
    //       skills[i]= $( this ).text();
    //     });
    //     skillsList=[];
    //     skillsList= skills;
    //     Session.set( 'SkillsList',skillsList);
    // } ,

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


  //   var skills = []; 
  //   var inputElementslevel =[];
  //    inputElementslevel= document.getElementsByClassName('level0');
  //   console.log(inputElementslevel);
  //   var inputElementsskills =  Session.get ('SkillsList');
  //   console.log(Session.get('SkillsList'));
  // for(i=0; i< inputElementsskills.length; i++){
  //   var level = $("."+inputElementsskills[i]+":checked").val();
  //   skills.push({'skill':inputElementsskills[i], 'level':level});
  // }
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

// Template.newApplicantForm.onRendered(function () {
// $('.ui.dropdown')
//   .dropdown({
//     allowAdditions: true
//   });
// });


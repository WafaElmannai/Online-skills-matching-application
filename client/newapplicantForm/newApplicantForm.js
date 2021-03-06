import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


if(Meteor.isClient) {

Template.level.helpers({
'skillsList':function() {
   SkillsList =[];
   SkillsList= Session.get ('SkillsList');
   return SkillsList
}
});

Template.newApplicantForm.events({
     'click .skills':function(){
      event.preventDefault();
        skills = [];
        $( "select option:selected" ).each(function(i) {
          skills[i]= $( this ).text();
        });
        skillsList=[];
        skillsList= skills;
        Session.set('SkillsList',skillsList);
    } ,

    'submit #applicantForm' : function(event, template) {
    event.preventDefault();
    const applicantName = template.find('#applicantName').value;
    const currentJob = template.find('#currentJob').value;
    const email = template.find('#email').value;
    const phoneNumber = template.find('#phoneNumber').value;
    var skills=[];
    var inputElementslevel =[];
    inputElementslevel= document.getElementsByClassName('level0');
    var inputElementsskills =  Session.get ('SkillsList');
    for(i=0; i< inputElementsskills.length; i++){
        var level = $("."+inputElementsskills[i]+":checked").val();
    skills.push({'skill':inputElementsskills[i], 'level':level});
  }

  
    const newApplicant = {
      applicantName: applicantName,
      currentJob: currentJob,
      email: email, 
      phoneNumber: phoneNumber,
      skills: skills,
      createdBy: Meteor.userId()
    }
    Meteor.call('applicants.insert', newApplicant);
    alert('Just added your information');
  }

});
}

Template.newApplicantForm.onRendered(function () {
$('.ui.dropdown')
  .dropdown({
    allowAdditions: true
  });
});


import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


if(Meteor.isClient) {

Template.level2.helpers({
'skillsList':function() {
   SkillsList =[];
   SkillsList= Session.get ('SkillsList');
   return SkillsList

}
});

Template.newJobForm.events({
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

'submit #jobForm' : function(event, template) {
    event.preventDefault();
    const jobName = template.find('#jobName').value;
    const jobType = template.find('#jobType').value;
    const jobDescription = template.find('#jobDescription').value;
    var jobSkills=[];
    var inputElementslevel =[];
     inputElementslevel= document.getElementsByClassName('level0');
    var inputElementsskills =  Session.get ('SkillsList');
  for(i=0; i< inputElementsskills.length; i++){
    var level = $("."+inputElementsskills[i]+":checked").val();
    jobSkills.push({'skill':inputElementsskills[i], 'level':level});
  }
console.log(jobSkills);
    const newJob = {
      jobName: jobName,
      jobType: jobType,
      jobDescription: jobDescription, 
      skills: jobSkills,
      createdBy: Meteor.userId()
    }
    Meteor.call('jobs.insert', newJob);
    alert('Just added a new job');
  }
 
});
}
Template.newJobForm.onRendered(function () {
$('.ui.dropdown')
  .dropdown({
    allowAdditions: true
  });
});


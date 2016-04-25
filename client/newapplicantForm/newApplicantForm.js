Template.newApplicantForm.events({
  'submit #applicantForm' : function(event, template) {

    event.preventDefault();
    const applicantName = template.find('#applicantName').value;
    const currentJob = template.find('#currentJob').value;
    const email = template.find('#email').value;
    var skills =($('input[name="skills"]:checked'));

    const newApplicant = {
      applicantName: applicantName,
      currentJob: currentJob,
      email: email, 
      skills: skills,
      createdBy: Meteor.userId()
    }
    Meteor.call('applicants.insert', newApplicant);
    alert('You just added');
  }


});

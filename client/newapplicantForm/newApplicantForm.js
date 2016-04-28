Template.newApplicantForm.events({
  'submit #applicantForm' : function(event, template) {

    event.preventDefault();
    const applicantName = template.find('#applicantName').value;
    const currentJob = template.find('#currentJob').value;
    const email = template.find('#email').value;
    //var skills =($('input[name="skills"]:checked'));
    //var skills = $('.skillscheckbox:checked').val();
    var skills = []; 
    var inputElements = document.getElementsByClassName('skillscheckbox');
    for(var i=0; i<inputElements.length; ++i){
    if(inputElements[i].checked){
    skills.push(inputElements[i].value);

  }
}
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

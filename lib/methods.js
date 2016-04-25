Meteor.methods({
  'applicants.insert': function(newApplicantObject) {
  	console.log(newApplicantObject);
    Applicants.insert(newApplicantObject);
  }	
});
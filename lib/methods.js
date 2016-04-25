Meteor.methods({
  'applicants.insert': function(newApplicantObject) {
    Applicants.insert(newApplicantObject);
  }	
});
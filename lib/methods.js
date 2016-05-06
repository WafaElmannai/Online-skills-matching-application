Meteor.methods({
  'applicants.insert': function(newApplicantObject) {
 	var currentUserId = Meteor.userId();
 	if (currentUserId)
 	{
    Applicants.insert(newApplicantObject);
}
else 
 throw new Meteor.Error('not-authorized');
  },	

   'companies.insert': function(newCompanyObject) {
 	var currentUserId = Meteor.userId();
 	if (currentUserId)
 	{
    Companies.insert(newCompanyObject);
}
else 
 throw new Meteor.Error('not-authorized');
  },

   'jobs.insert': function(newJobObject) {
 	var currentUserId = Meteor.userId();
 	 	if (currentUserId)
 	{
    Jobs.insert(newJobObject);
}
else 
 throw new Meteor.Error('not-authorized');
  }

});
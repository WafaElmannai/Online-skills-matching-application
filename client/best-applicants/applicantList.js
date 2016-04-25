
Template.applicantList.helpers({
  'Applicants': function() {
    return Applicants.find();
  },
  'createdByUser': function() {
    return this.createdBy === Meteor.userId();
  }
});

Template.applicantList.onCreated(function (){
  Meteor.subscribe('applicants');
  console.log("ggggg");
});
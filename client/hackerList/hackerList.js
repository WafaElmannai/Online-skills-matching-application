
Template.hackerList.helpers({
  'Hackers': function() {
    return Hackers.find();
  },
  'createdByUser': function() {
    return this.createdBy === Meteor.userId();
  }
});

Template.hackerList.onCreated(function (){
  Meteor.subscribe('hackers');
});
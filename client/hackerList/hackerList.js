
Template.hackerList.helpers({
  'Hackers': function() {
    return Hackers.find();
  }
});

Template.hackerList.onCreated(function (){
  Meteor.subscribe('hackers');
});
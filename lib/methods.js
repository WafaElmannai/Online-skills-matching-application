Meteor.methods({
  'hackers.insert': function(newHackerObject) {
    Hackers.insert(newHackerObject);
  }
})
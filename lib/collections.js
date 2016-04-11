Hackers= new Mongo.Collection('hackers');

if(Meteor.isServer) {
  Meteor.publish('hackers', function hackersPublication(){
    return Hackers.find();
  });
}
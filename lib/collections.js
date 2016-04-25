Applicants= new Mongo.Collection('applicants');

if(Meteor.isServer) {
  Meteor.publish('applicants', function applicantsPublication(){
    return Applicants.find();
  });
}
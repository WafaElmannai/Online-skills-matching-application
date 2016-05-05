Applicants= new Mongo.Collection('applicants');

if(Meteor.isServer) {
  Meteor.publish('applicants', function applicantsPublication(){
  	var user = this.userId;
  	if (user) {
    return Applicants.find();
}
  });
}
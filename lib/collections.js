Applicants= new Mongo.Collection('applicants');
Companies= new Mongo.Collection('companies');
Jobs= new Mongo.Collection('jobs');


if(Meteor.isServer) {
  Meteor.publish('applicants', function applicantsPublication(){
  	var user = this.userId;
  	if (user) {
    return Applicants.find();
}
  });
  
  Meteor.publish('companies', function companiesPublication(){
  	var user = this.userId;
  	if (user) {
    return Companies.find();
}
  });

    Meteor.publish('jobs', function jobsPublication(){
    var user = this.userId;
    if (user) {
    return Jobs.find();
}
  });
}
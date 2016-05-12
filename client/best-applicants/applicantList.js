
if(Meteor.isClient) {
Template.matchApplicant.helpers({
  'Applicants': function() {
    return Applicants.find();
  }
});

Template.matchApplicant.helpers({
  'parseSkills': function(skills) {
  	var skillsString='';
  	for (var i = 0; i < skills.length; i++) {
  		skillsString+=skills[i];
  	}
    return skillsString;
  }
});


Template.applicantList.helpers({
	'JobsList': function() {
   	var currentUserId= Meteor.userId();
	return Jobs.find({createdBy:currentUserId})
  }
  });

Template.applicantList.events({
  'click #match': function() {
          event.preventDefault();

      //inputElementslevel= document.getElementsByClassName('level0');
        var skillApp = [];
        skillApp= Applicants.find().fetch();
        var skillJob=[];
          var jobId= $('#JobName').val();
          var skillJob = Jobs.findOne({_id:jobId}).skills;
          var applicants= Applicants.find().fetch();
          var applicantsSkills = [];
          var validApplicants=[];
          for (var i = 0; i < applicants.length; i++) {
          	// applicantsSkills.push(applicants[i].skills)
          	var currentApplicantSkills=[];
          	for (var j = 0; j < applicants[i].skills.length; j++) {
          		currentApplicantSkills.push(applicants[i].skills[j].skill);          		
          	}
          	//console.log(currentApplicantSkills);
          	for (var k = 0; k< skillJob.length; k++) {
          		for (var m = 0; m < currentApplicantSkills.length; m++) {
          			if(skillJob[k].skill === currentApplicantSkills[m])
          			{
          				validApplicants.push(applicants[i]);
          			}
          		}
          	
}



          }

         console.log(validApplicants);
         // console.log(skillJob);


         
        // console.log(applicantsSkills);
          // if ($('#JobName').val())
          //   {
          //     var JSkills=skillJob.skills;
          //     for (var i = 0; i < JSkills.length; i++) {
          //       score=0;                
          //     }
          //   }
        
  
  }
//     'click .jobName':function(){
//       // event.preventDefault();
//       // //inputElementslevel= document.getElementsByClassName('level0');
//       //   skills = [];
//       //   $( "select option:selected" ).each(function(i) {
//       //       var skillJob = Jobs.find({},{jobName: "$(this).text()"});
//       //      //skills.push({'skill':inputElementsskills[i], 'level':level});
//       //      skills.push(skillJob);
//       //   });
//       //   //
//       //   console.log(skills);
//       }
  });



}
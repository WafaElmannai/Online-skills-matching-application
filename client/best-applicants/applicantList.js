
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
         console.log(skillJob);
          var applicants= Applicants.find().fetch();
          var applicantsSkills = [];
          var validApplicants=[];
          var newMap=new Map();
          var comMap=[];
          for (var i = 0; i < applicants.length; i++) {
          	// applicantsSkills.push(applicants[i].skills)
          	var currentApplicantSkills=[];
          	for (var j = 0; j < applicants[i].skills.length; j++) {
          		currentApplicantSkills.push(applicants[i].skills[j].skill);          		
          	}
          	
          	//console.log(currentApplicantSkills);
          	for (var k = 0; k<skillJob.length; k++) {
          		var level=[];
          		for (var m = 0; m < currentApplicantSkills.length; m++) {
          			//console.log(skillJob[k].skill+" "+applicants[i].applicantName+"  "+currentApplicantSkills[m]);
          			if(skillJob[k].skill == currentApplicantSkills[m]){
          				
          				//console.log(skillJob[k].skill+" "+applicants[i].applicantName+"  "+currentApplicantSkills[m]);
          				//console.log(currentApplicantSkills[m]);
          				comMap.push(currentApplicantSkills[m]);
          				newMap.set(applicants[i]._id,applicants[i].applicantName);
          				//console.log(skillJob[k].skill+" "+applicants[i].applicantName+"  "+currentApplicantSkills[m]);
          			}

          			// if(skillJob[k].skill === currentApplicantSkills[m])
          			// {
          			// 	validApplicants.push(applicants[i]);

          			// }
          		}
          	
			}



          }
          var id=[];
          for(var [key,value] of newMap){
          	id.push(key);
          }
         // console.log(Applicants.find({_id:{$in:id}}).fetch());
         var sorted=new Map();
         var sortScore=[];
           var matches=Applicants.find({_id:{$in:id}}).fetch();
           for(var i=0;i<matches.length;i++){

           //console.log(matches[i].skills);
          		var a=0;
           		for(var k=0;k<matches[i].skills.length;k++){
           				if(comMap.indexOf(matches[i].skills[k].skill)>-1){
           					a+=parseInt(matches[i].skills[k].level);
           				}
           			
           				//console.log(count);
           		}
           		sortScore.push(a);
           		sortScore.sort();
           		sorted.set(a,matches[i]._id);
           		//console.log('break');
          	}
          	sortScore.reverse();
          	var people=[];
          	for(var p=0;p<sortScore.length;p++){
          		people.push(sorted.get(sortScore[p]));	
          	}
          	console.log(people);
          	console.log(sorted);
          
          	var mat=Applicants.find({_id:{$in:people}}).fetch();
          	console.log(mat);
          	document.getElementById('hello').innerHTML="fdshjk";
          	
        // console.log(validApplicants);
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
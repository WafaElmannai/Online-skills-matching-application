
if(Meteor.isClient) {


Template.jobList.helpers({
	'Jobs': function() {
	return Jobs.find()
  }
  });

// Template.applicantList.events({
//   'click #match': function() {
//           event.preventDefault();

//       //inputElementslevel= document.getElementsByClassName('level0');
//         skills = [];
//         var skillJob=[];
//         $( "select option:selected" ).each(function(i) {
//           var jobtext= $(this).text();
//           var userid= Meteor.userId();

//             var skillJob = Jobs.findOne({"jobName":"web developer"});
//             var skillApp = Applicants.findOne();
//             if (skillJob)
//             {
//               var skills=skillJob.skills;
//               for (var i = 0; i < skills.length; i++) {
//                 score=0;                
//               }
//             }

//            console.log(skillJob);

//         });
//         //
        
  
//   },
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
//   });


Meteor.subscribe('applicants');
Meteor.subscribe('jobs');
}
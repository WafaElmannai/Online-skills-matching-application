Router.configure({layoutTemplate: 'layout'});

Router.route('/');
Router.route('/new-applicant', {name: 'newApplicantForm'});
Router.route('/list-applicants', {name: 'applicantList'});

// Router.route ('/new-applicant', function (){
//   this.render('newApplicantForm');
// }); 

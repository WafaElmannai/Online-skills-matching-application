Router.configure({layoutTemplate: 'layout'});

Router.route('/');
Router.route('/new-applicant', {name: 'newApplicantForm'});
Router.route('/new-company', {name: 'companyForm'});
Router.route('/new-job', {name: 'newJobForm'});
Router.route('/list-applicants', {name: 'applicantList'});
Router.route('/list-jobs', {name: 'jobList'});



// Router.route ('/new-applicant', function (){
//   this.render('newApplicantForm');
// }); 

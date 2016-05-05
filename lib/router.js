Router.configure({layoutTemplate: 'layout'});

Router.route('/');
Router.route('/login', {name: 'Login'});
Router.route('/registration', {name: 'Registration'});
Router.route('/signup', {name: 'Signup'});
Router.route('/new-applicant', {name: 'newApplicantForm'});
Router.route('/list-applicants', {name: 'applicantList'});


// Router.route ('/new-applicant', function (){
//   this.render('newApplicantForm');
// }); 

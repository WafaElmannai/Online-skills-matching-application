Router.configure({layoutTemplate: 'layout'});

Router.route('/', {name: 'homePage'});
Router.route('/new-applicant', {name: 'newApplicantForm'});
Router.route('/new-company', {name: 'companyForm'});
Router.route('/new-job', {name: 'newJobForm'});
Router.route('/list-applicants', {name: 'applicantList'});
Router.route('/list-jobs', {name: 'jobList'});
Router.route('/create-account', {name: 'createAccount'});
Router.route('/login', {name: 'login'});
Router.route('/logout', {name: 'Userlogout'});
Router.route('/nav-applicant', {name: 'navbarApplicant'});
Router.route('/nav-company', {name: 'navbarCompany'});



if (Meteor.isClient) {

  Template.createAccount.events({
    'submit .sign-up': function(event, template) {
      event.preventDefault();
      var emailVar = event.target.signupEmail.value;
      var passwordVar = event.target.signupPassword.value;
      const test_checked = template.find('input:radio[name="type"]:checked');
      if (test_checked)
    {
  		var type_value = test_checked.value;
  		if (type_value == "applicant")
  		{
  			var IsApplicant= true;
  		}
  		else if (type_value=="company")
  		{
  			var IsApplicant= false;
  		}
	}
	   else 
	   { 
	   	$('.Message').text("please select the type of the user").css('color','red');
		}
      Accounts.createUser({
        email: emailVar,
        password: passwordVar,
        profile: {
        IsApplicant:IsApplicant
        }
      }, function(err) {
		if (err) {
      	alert("Account creation failed"+err);
    	} else {
        alert("Account created successfully");
        Router.go ('/login');
        }
		});
	}
});

  Template.login.events({
	'submit .login': function(event) {
      event.preventDefault();
      var emailVar = event.target.loginEmail.value;
      var passwordVar = event.target.loginPassword.value;
      Meteor.loginWithPassword(emailVar, passwordVar);

		if (emailVar == "") {
			$('.Message').text("Please enter your email").css('color','red');
		} else if (passwordVar=="")	{
			$('.Message').text("Please enter your password").css('color','red');
		} else {
  		Meteor.loginWithPassword(emailVar, passwordVar, function(err) {
        if (err) {
        	$('.Message').text("Please enter valid username and password").css('color','red');
        } 
        else {
        	// if (this.type)
        	// {
        	$('.Message').text("Successful Login").css('color','green');
					Router.go ('/');
				// }
				// else {
				// 	Router.go ('/navbar-company');
				// }

        }
     	});

  		return false;
  	}
  }
  });

  Template.Userlogout.events({
    'click .logout': function(event) {
      event.preventDefault();
      Meteor.logout();
      Router.go ('/');
    }
  });

}





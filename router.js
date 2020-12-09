var hm = require('header-metadata');
var service = require('service-metadata');

//Read input
session.input.readAsBuffers(function (error, input) {
  if (error) {
    // handle error
    session.output.write (error.errorMessage);
  }
  else {
	
	if (input == '') {
		session.output.write("Please enter name, accounts, or beneficiaries.");
		service.mpgw.skipBackside = true;
	}	
	
	//If input contains "name", route traffic to /profile endpoint.
	if (input.indexOf('name') > -1) {
		service.setVar('var://service/routing-url', 'http://localhost:2000/profile');
	}
	
	//If input contains "accounts", route traffic to /accounts endpoint.
	if (input.indexOf('accounts') > -1) {
		service.setVar('var://service/routing-url', 'http://localhost:2000/accounts');
	}
	
	//If input contains "beneficiaries", route traffic to /beneficiaries endpoint.
	if (input.indexOf('beneficiaries') > -1) {
		service.setVar('var://service/routing-url', 'http://localhost:2000/beneficiaries');
	}
	
  }
});

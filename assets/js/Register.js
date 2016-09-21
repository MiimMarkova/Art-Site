/**
 * 
 */

class Register {
	constructor (email, pass1, pass2) {
		this._email = email;
		this._pass1 = pass1;
		this._pass2 = pass2;
	}
	
	getPass1 (){
		return this._pass1;
	}
	
	getPass2 (){
		return this._pass2;
	}
	
	getEmail (){
		return this._email;
	}
	
	validateEmail() {
		var email = this.getEmail();
		if (email.length > 50 || email.length < 6) {
			$('#emailError').html('Invalid email lenght');
			return false;
		}
		return true;
	}
	
	validatePassword() {
		var pass1 = this.getPass1();
		var pass2 = this.getPass2();
		
		if(pass1 !== pass2) {
			$('#regError').html('Repeat password is not the same;')
			return false;
		}
		if (pass1.length < 6 || pass1.lenght > 20){
			$('#regError').html('Invalid password lenght');
			return false;
		}
		return true;
	}
	checkIfExists(email, password){
	
		$.post("assets/server/checkIfRegistered.php", {
			email1: email,
			password1: password
		}, function(data) {
			console.log(data);
			if (data) {
				if (data == 'wrong password'){
					$('#regError').html("Wrong password.");
			          return;
				}
				$('#emailError').html("Exists Already");
		          return false;
			} else {
				return true;
				 
			}
		});
	}
	
	createRegistry() {
		if(this.validateEmail() ) {
			var email = this.getEmail();
		}
		if(this.validatePassword()) {
			var pass = this.getPass1();
		}
		if (!email) {
			$('#emailError').html('inavalid input');
			return;
		}
		if(!this.checkIfExists(email, pass)) {
			$.post("assets/server/register.php", {
				email1: email,
				password1: pass
			}, function () {
				$('#myModalRegister').modal('hide');
				$('#regError').html("Registry Successfull");
			});
		}
	}
}
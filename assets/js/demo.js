/**
 * 
 */

$().ready(function() {

	
	//adds a new accont to the users database
	$("#btn-register").click(function(e) {
		
		e.preventDefault();
		
		var email = $("#email-rg").val() + '';
		var password = $("#password1-rg").val() + '';
		console.log(email, password);
		
		if (email == '' || password == '') {
		alert("Insertion Failed Some Fields are Blank....!!");
		} else {
			// Returns successful data submission message when the entered information is stored in database.
			$.post("assets/server/register.php", {
				email1: email,
				password1: password
			}, function () {
				$('#myModalRegister').modal('hide');
		          alert("Registry Successfull");
			});
		}
	});

//login - checking if there is such an account already
		$("#submit-login").click(function() {
			e.preventDefault();
			
			var email = $("#email-login").val() + '';
			var password = $("#password1-login").val() + '';
			console.log(email, password);
			
			if (email == '' || password == '') {
			alert("Insertion Failed Some Fields are Blank....!!");
			} else {
				// Returns successful data submission message when the entered information is stored in database.
				
				$.post("assets/server/login-test.php", {
					email1: email,
					password1: password
				}, function(data) {
					if (data) {
						
						//sessionStorage.logged = 1;
						$('#myModalLogin').modal('hide');
				          alert("You've logged in Successfull");
					} else {
						alert('no');
					}
				} );
			}
		});
	
		$("#btn-upload").click(function() {
			
				$.post("assets/server/uploadPost.php", {
					title1: title,
					description1: description,
					image1: image,
					price1: price
				}, function(data) {
					if (data) {
						
						//sessionStorage.logged = 1;
						$('#uploadModal').modal('hide');
				          alert("its done");
					} else {
						alert('no');
					}
				} );
		}
		
		function displayPosts() {
			$('#post-container').
		}
});
/**
 * 
 */

$( document ).ready(function () {
	var array = [];
		var gallery = new Gallery($('#gallery-container'));
		gallery.init();
	
		
		var id = sessionStorage.getItem("id");
		
		$( "#selDir" ).on('change', function() {
			if (id ) {
			sessionStorage.setItem('selDir', $('#selDir').val());
			console.log(sessionStorage.getItem('selDir'));
			$('#selDir').val(sessionStorage.getItem('selDir'));
			}
			location.reload();
		});
		console.log(sessionStorage.getItem('selDir'));
		if (sessionStorage.getItem('selDir')) {
			$('#selDir').val(sessionStorage.getItem('selDir'));
		}
		if(id !== null){
			var profile = new Profile (id);
			console.log(profile);
			profile.init();
			$('#register').hide();
			$('#login').hide();
		} else {
			$('#logout').hide();
			$('#profile').hide();
		}
	
	$("#btn-register").click(function(e) {
		e.preventDefault();
			
			var email = $("#email-rg").val() + '';
			var password1 = $("#password1-rg").val() + '';
			var password2 = $("#password2-rg").val() + '';
			
			
			if (email == '' || password1 == '') {
			alert("Insertion Failed Some Fields are Blank....!!");
			} else {
			var register = new Register (email, password1, password2);
				register.createRegistry();
			}
			
	});
	$("#btn-upload").click(function(e) {
		e.preventDefault;
		
		var select = $('#fileDirectory').val();
		var user_id = sessionStorage.getItem("id");
		console.log(select);

		var formData = new FormData($('#uploadForm')[0]);
		formData.append('selectDir', select);
		formData.append('user_id1', user_id);
		console.log(formData);
		
			$.ajax({
			    url: "assets/server/uploadPost.php",
			    data: formData,
			    cache: false,
			    contentType: false,
			    processData: false,
			    type: 'POST',
			}, function(data){
				console.log('hi')
			    	if (data){
			    		$('#upError').html('Upload failed');
			    	}
			    		$('#uploadModal').modal('hide');
			    	
			    
			});
		$('#upError').html('Upload failed')
		var profile = new Profile;
		profile.init();
	})
	
		
	$("#submit-login").click(function(e) {
		e.preventDefault();
		
		var email = $("#email-login").val() + '';
		var password = $("#password1-login").val() + '';
		
		if (email == '' || password == '') {
		alert("Insertion Failed Some Fields are Blank....!!");
		} else {
			
			$.post("assets/server/login.php", {
				email1: email,
				password1: password
			}, function(data) {
				
					if (data) {
						if (data == 'wrong password'){
							$('#loginError').html('Wrong password.');
							return;
						}
						if (data == "Could not successfully run query") {
							$('#loginError').html('TryAgain.');
						}
						if(data == "No rows found") {
							$('#loginError').html('No such user.');
						}
					} 
						$('#myModalLogin').modal('hide');
						$('#loginError').html("You've logged in Successfull");
						sessionStorage.setItem('id', data);
						var profile = new Profile(data);
						profile.init();
						console.log(sessionStorage.getItem('id'));
					
				
			} );
			location.reload();
		}
		
	});
	$("a#logout").click(function() {
		console.log('in logout');
		sessionStorage.removeItem("id");
	});
	console.log(sessionStorage.getItem("id"));
});


/*$(".delete-btn").click (function () {
	alert('clicked');
	console.log($("#delete-btn"));
	console.log($('#number'));
	
	var target = $(this);
	console.log(target);
	
});
*/
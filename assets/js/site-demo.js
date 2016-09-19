/**
 * 
 */

$( document ).ready(function () {
	
		var gallery = new Gallery($('#gallery-container'));
		gallery.init();
		
		var id = $('#hidden').html();
		
		if(id > 0){
			var profile = new Profile (id);
			profile.init();
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
		console.log('hi');
		
		var title = $("#fileName").val() + '';
		var description = $("#pfileDescription").val() + '';
		var image = $("#fileToUpload").val() + '';
		var directory =  $("#fileDirectory").val() + '';
		
		
		if (title == '' || image == '') {
		alert("Insertion Failed Some Fields are Blank....!!");
		} else {
			$.post("assets/server/uploadPost.php", {
				title1: title,
				description1: description,
				image1: image,
				directory1: directory,
				user_id1: id
			}, function(data) {
				if (!data) {
					$('#uploadModal').modal('hide');
			          alert("its done");
				} 
			});
		}
	});
	
		
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
						$('#myModalLogin').modal('hide');
				          alert("Wrong password.");
				          return;
					}
					
					$('#myModalLogin').modal('hide');
			          alert("You've logged in Successfull");
			          var profile = new Profile(data);
			  		profile.init();
			  		
			  		
				} else {
					alert('no');
					 
				}
				
			} );
		}
		
	});
	
});


/*$(".delete-btn").click (function () {
	alert('clicked');
	console.log($("#delete-btn"));
	console.log($('#number'));
	
	var target = $(this);
	console.log(target);
	
});
*/
<?php
session_start();



?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="node_modules\jquery\dist\jquery.min.js" ></script>
	<!-- Latest compiled and minified CSS -->
	<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script type = "text/javascript" src = "assets/js/Post.js"></script>
<script type = "text/javascript" src = "assets/js/Register.js"></script>
<script type = "text/javascript" src = "assets/js/Gallery.js"></script>
<script type = "text/javascript" src = "assets/js/Profile.js"></script>
<script type = "text/javascript" src = "assets/js/site-demo.js"></script>
	
<link rel = "stylesheet" type = "text/css" href = "assets/css/shop.css">
</head>
<body>

<header id = "header">
	<img  class="bottom" src="assets/images/city-black.png" >
	
	
	<!-----------------------MODAL LOGIN------------------------------------------->
	<div class="modal fade" id="myModalLogin" tabindex="-1" role="dialog" 
	     aria-labelledby="myModalLabel" aria-hidden="true">
	    <div class="modal-dialog">
	        <div class="modal-content">
	        	 <!-- Modal Header -->
	            <div class="modal-header">
	                <button type="button" class="close" 
	                   data-dismiss="modal">
	                       <span aria-hidden="true">&times;</span>
	                       <span class="sr-only">Close</span>
	                </button>
	                <h2 class="modal-title" id="myModalLabel">
	                    Login
	                </h2>
	            </div>
	            <!-- Modal Body -->
	            <div class="modal-body">        
	            <form role = "form"  method = 'post'>
	                <div class="form-group">
	                    <label for="email-login">Email address</label>
	                      <input type="email" class="form-control"
	                      id="email-login" placeholder="Enter email"/>
	                  </div>
	                  <div class="form-group">
	                    <label for="password1-login">Password</label>
	                      <input type="password" class="form-control"
	                          id="password1-login" placeholder="Password"/>
	                  </div>
	             </form>
	            </div>
	            
	            <!-- Modal Footer -->
	            <div class="modal-footer">
	                <button type="button" class="btn btn-default"
	                        data-dismiss="modal">Close</button>
	                <button type="submit" class="btn btn-primary"id = "submit-login">Save</button>
					
	            </div>
	        </div>
	    </div>
	</div>
	
	<!-- -------------------------------------------------REGISTER MODAL----------------------------- -->
	<div class="modal fade" id="myModalRegister" tabindex="-1" role="dialog" 
	     aria-labelledby="myModalLabel" aria-hidden="true">
	    <div class="modal-dialog">
	        <div class="modal-content">
	        	 <!-- Modal Header -->
	            <div class="modal-header">
	                <button type="button" class="close" 
	                   data-dismiss="modal">
	                       <span aria-hidden="true">&times;</span>
	                       <span class="sr-only">Close</span>
	                </button>
	                <h2 class="modal-title" id="myModalLabel">
	                   Register
	                </h2>
	            </div>
	            <!-- Modal Body -->
	            <div class="modal-body">        
	            <form role = "form" method = 'post'>
	            	<div class="form-group">
	                    
	                <div class="form-group">
	                    <label for="email-rg">Email address</label>
	                      <input type="email" class="form-control"
	                      id="email-rg" placeholder="Enter email"/>
	                  </div>
	                  <div class="form-group">
	                    <label for="password1-rg">Password</label>
	                      <input type="password" class="form-control"
	                          id="password1-rg" placeholder="Password"/>
	                  </div>
	                  <div class="form-group">
	                    <label for="password2-rg">Repeat Password</label>
	                      <input type="password" class="form-control"
	                          id="password2-rg" placeholder="Repeat Password"/>
	                  </div>
	                </div>
	             </form>
	            </div>
	            
	            <!-- Modal Footer -->
	            <div class="modal-footer">
	                <button type="button" class="btn btn-default"
	                        data-dismiss="modal">Close</button>
	                <button type="button" class="btn btn-primary" id = "btn-register" >
						Register
					</button>
	
	            </div>
	        </div>
	    </div>
	</div>
	
	
	</header>
	<nav class="navbar">
		<ul>
			<li><a href="index.php" id = "index">What's New</a></li>
			<li><a href="shop.php" id = "shop">Categories</a></li>
			<li><a href="profile.php" id = "profile">Profile</a></li>
			<li ><a href="assets/server/logout.php" id = "logout">Logout</a></li>
			<li><a data-toggle="modal" href="#myModalLogin" id = "login">Login</a></li>
			<li><a data-toggle="modal" href="#myModalRegister"id = "register">Register</a></li>
		</ul>
	</nav>
	<div class="container-fluid">

	   <div class="row fill">
	   	<div class = "col-md-3">
	   		<div class = "row">
	   			
			  <div id="sidebar-wrapper">
		   		<aside>
				   		<ul>
				   			<li>Line Art</li>
				   			<li>Drawings</li>
				   			<li>Paintings</li>
				   			<li>Handmade Jewellery</li>
				   			<li>Handmade Bags</li>
				   			<li>Handmade Other</li>
				   		</ul>
		   		</aside>
	 		</div>
	   		</div>
	   		
	   		</div>
	   		<div class="col-md-9" id = "gallery-container">
		   	</div>
		 </div>
		   	
	</div>
	<footer>
	 <div class="container">
	   <div class="row">
	       <div class="col-md-4">  
	          	<h3>About</h3>
				<ul>
					<li>Consectetur</li>
					<li>Adipiscing</li>
					<li>Qui</li>
					<li>Elit</li>
				</ul>
				</div>
	       <div class="col-md-4">
	          <h3>QA</h3>
				<ul>
					<li>Rorro</li>
					<li>Ipsum</li>
					<li>Dolorem</li>
					<li>Quisquam</li>
				</ul>
	       </div>
	       <div class="col-md-4"> 
	       		<h3>Site Map</h3>
				<ul>
					<li>Est</li>
					<li>Donec</li>
					<li>Rristique</li>
					<li>Du donec</li>
				</ul>
	       </div>
	    </div>
	</div>
	</footer>

</body>
</html>
/**
 * 
 */

class Profile {
	constructor (id) {
		this._id = id;
		this._posts = [];
		this._directories = [];
		this._container = $('#post-container');
		this._this = this;
	}
	getContext() {
		return this._this;
	}
	getId(){
		return this._id;
	}
	
	getPosts() {
		return this._posts;
	}
	setPosts(newPost) {
		this._posts.push(newPost);
	}
	deletePost(post) {
		this._post.splice(post, 1);
	}
	getContainer () {
		return this._container;
	}
	getDirs(){
		return this._directories;
	}
	setDirs(newDirectory) {
		this._directories.push(newDirectory);
	}
	deleteDir(directory) {
		for (var i = 0; i < this._directories.length; i++){
			if (directory == this._directories[i]){
				this._directories.splice(this._directories[i], 1);
			}
		}
	}
	
	displayDirectories(array) {
		for (var i = 0; i < array.length; i++) {
			$("#directoriesList").append("<li><button type = \"button\" class = \"btn-link\" id = \""
				+ array[i] +"\">" + array[i].toUpperCase() +"</button></li>");
			
			
			$('#selDir').append("<option value = \"" + array[i] +"\"> "+ array[i].toUpperCase() +"</option>" );
		}
	}
	
	initPosts(container, postsArray) {
		var posts = postsArray;
		var directories = [];
		for (var i = 0; i < posts.length; i++){
			var title = posts[i].title;
			var description = posts[i].description;
			var directory = posts[i].directory;
			var path = posts[i].picture;
			var userId = posts[i].users_id;
			var id = posts[i].id;
		var post = new Post(userId, id, title, description, path, directory);
		var flag = true;
		for (var y = 0; y < directories.length; y++){
			
			if (post.directory == directories[y] || !post.directory) {
				flag = false;
			}
				}
		if(flag){
			
			directories.push(post.directory);
			
		}
	console.log(sessionStorage.getItem('selDir'));
		if(sessionStorage.getItem('selDir') == post.directory || sessionStorage.getItem('selDir') == "all") {
			
			post.displayPosts(container);
			post.createModal(container);
		}
		
		 
		this.setPosts(post);
		}
		this.displayDirectories(directories);
		console.log(sessionStorage.getItem(this.directory + '') );
	}
	loadPosts(container) {
		var _this = this;
		var id = this.getId() + '';
		
		$.post("assets/server/getUserPosts.php", {id1: id}, function(data) {
			
			if(data) {			
			
				var result = JSON.parse(data);
				_this.initPosts(container, result);
			}
		});

	}
	uploadPost(title, decription, image) {

				$.post("assets/server/uploadPost.php", {
					title1: title,
					description1: description,
					image1: image,
					directory1: directory,
					user_id1: this.getId()
				}, function(data) {
					if (data) {
						$('#uploadModal').modal('hide');
				          alert("its done");
					} else {
						alert('no');
					}
				} );
	}
	init(){
		this.setDirs('common');

		this.loadPosts(this.getContainer());
	}
}
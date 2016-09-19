/**
 * 
 */

class Gallery {
	constructor (container) {
		this._posts = [];
		this._container = container;
	}
	getPosts() {
		return this._posts;
	}
	setPosts(newPost) {
		this._posts.push(newPost);
	}
	
	getContainer() {
		return this._container;
	}

	
	initPosts(container, postsArray) {
		var posts = postsArray;
		
		for (var i = 0; i < posts.length; i++){
			var title = posts[i].title;
			var description = posts[i].description;
			var directory = posts[i].directory;
			var path = posts[i].picture;
			var userId = posts[i].users_id;
			var id = posts[i].id;
		var post = new Post(userId, id, title, description, path, directory);
		
		$.ajax({
		    url: "http://localhost/Mid-project/shop.php",
		    success: function (data) {  
		    	post.displayPosts(container);
				post.createModal(container);
		    },
		    dataType: 'html'
		});
		this.setPosts(post);
		
		}
	}
	loadPosts(container) {
		var _this = this;
		$.get("assets/server/posts.php", function(data) {
			var result = JSON.parse(data);
			
			_this.initPosts(container, result);
		});

	}
	init() {
		this.loadPosts(this.getContainer());
	}
}
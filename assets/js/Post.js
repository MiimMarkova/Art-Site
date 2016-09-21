/**
 * 
 */

class Post {
	
	 constructor (userId, id, title, description, path, directory){
		 this.userId = userId;
		 this.id = id;
		 this.title = title;
		 this.description = description;
		 this.path = path;
		 this.directory = directory;
		 
	 }
	 
	 createModal(container){
		
		 container.append(" <div class=\"modal fade\" id=" + this.id + " dir = " +this.directory +" tabindex=\"-1\" role=\dialog\"" +
		 		" aria-hidden=\"true\"><div class=\"modal-dialog modal-md\"><div class=\"modal-content\">" +
		 			"<div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\"" +
		 				" aria-hidden=\"true\">&times;</button><h4 class=\"modal-title\" id = \"ArticleTitle\">" +
		 				this.title + "</h4></div><div class=\"modal-body\" ><div class = \"modPicWrapper\"><img class = \"modImage\" src = "
		 				+ this.path +"></div><p id =\"ModalInformation\">" +this.description + "</p></div>" +
		 				"<div class=\"modal-footer\">" +
		 				"<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">" +
		 				"Close</button> </div></div></div></div>");
		 
	 }
	 
	 displayPosts(container) {
		
		 container.append(
					"<div class=\"col-sm-6 col-md-4\"><article class = \"profileArticle\"><h2>"+ this.title+ 
					"<a data-toggle=\"modal\" href = \"#" + this.id+ "\">" +
					"<div class = \"picWrapper\"><img class = \"artImage\"src = " + this.path + "></div></a></article></div>");
		}
	 
	 deletePost(id) {
		 $().post("../server/deleteAPost.php", {id: this.id}, function (data) {
			 console.log(data);
		 })
	 }

}
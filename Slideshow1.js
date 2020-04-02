/*## Exercise: This

Create a single object named `slideshow` that represents the data and functionality of a picture slideshow. There should be NO VARIABLES OUTSIDE THE OBJECT. The object should have properties for:

1. An array called `photoList` that contains the names of the photos as strings
2. An integer `currentPhotoIndex` that represents which photo in the `photoList` is currently displayed
3. A `nextPhoto()` function that moves `currentPhotoIndex` to the next index `if `there is one, and:
 4. logs the current photo name.
 5. Otherwise, log "End of slideshow";
4. A `prevPhoto()` function that does the same thing, but backwards.
5. A function `getCurrentPhoto()` that returns the current photo from the list.*/ 


var slideshow = {

	photoList: ['photo1', 'photo2', 'photo3', 'photo4'],

	currentPhotoIndex: 0,

	nextPhoto: function(){
		if (this.currentPhotoIndex < this.photoList.length-1){
		 	this.currentPhotoIndex = this.currentPhotoIndex + 1;
			return this.photoList[this.currentPhotoIndex];
		}else {
			console.log("End of Slideshow");
		}
			
	},


	prevPhoto: function(){
		if (this.currentPhotoIndex < this.photoList.length && this.currentPhotoIndex !==0){
			this.currentPhotoIndex = this.currentPhotoIndex -1;
			return (this.photoList[this.currentPhotoIndex]);
		}else {
			console.log("End of Slideshow");
		}
	},
	getCurrentPhoto: function(){
		return (this.photoList[this.currentPhotoIndex]);

	}
 

}	

// console.log(slideshow.currentPhotoIndex);
// console.log(slideshow.nextPhoto());
// console.log(slideshow.nextPhoto());
// console.log(slideshow.prevPhoto());
// console.log(slideshow.getCurrentPhoto());
// console.log(slideshow.nextPhoto());
// console.log(slideshow.nextPhoto());
// console.log(slideshow.nextPhoto());
// console.log(slideshow.nextPhoto());
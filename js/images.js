// Get the modal
		var image1 = document.getElementById('myImage1');
	
		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img1 = document.getElementById('myImg1');
		var modalImg1 = document.getElementById("img01");
		var captionText1 = document.getElementById("caption1");
		img1.onclick = function(){
			image1.style.display = "block";
			modalImg1.src = this.src;
			captionText1.innerHTML = this.alt;
		}
		
		// Get the <span> element that closes the modal
		var span1 = document.getElementsByClassName("close1")[0];

		// When the user clicks on <span> (x), close the modal
		span1.onclick = function() { 
			image1.style.display = "none";
		}

		var image2 = document.getElementById('myImage2');
		
		var img2 = document.getElementById('myImg2');
		var modalImg2 = document.getElementById("img02");
		var captionText2 = document.getElementById("caption2");
		img2.onclick = function(){
			image2.style.display = "block";
			modalImg2.src = this.src;
			captionText2.innerHTML = this.alt;
		}
		
		// Get the <span> element that closes the modal
		var span2 = document.getElementsByClassName("close2")[0];

		// When the user clicks on <span> (x), close the modal
		span2.onclick = function() { 
			image2.style.display = "none";
		}
		
		var image3 = document.getElementById('myImage3');
		
		var img3 = document.getElementById('myImg3');
		var modalImg3 = document.getElementById("img03");
		var captionText3 = document.getElementById("caption3");
		img3.onclick = function(){
			image3.style.display = "block";
			modalImg3.src = this.src;
			captionText3.innerHTML = this.alt;
		}
		
		// Get the <span> element that closes the modal
		var span3 = document.getElementsByClassName("close3")[0];

		// When the user clicks on <span> (x), close the modal
		span3.onclick = function() { 
			image3.style.display = "none";
		}
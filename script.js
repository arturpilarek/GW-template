const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.navigation')
const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active')
}

hamburger.addEventListener('click', handleClick);


var slider_content = document.getElementById('box');

// contain images in an array
var image = ['slideshow1','slideshow2', 'slideshow3'];

var i = image.length;


// function for next slide 

function nextImage(){
  if (i<image.length) {
      i= i+1;
  }else{
      i = 1;
  }
    slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
}


// function for prev slide

function prevImage(){

  if (i<image.length+1 && i>1) {
      i= i-1;
  }else{
      i = image.length;
  }
    slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";

}

// script for auto image slider

setInterval(nextImage , 4000);

// Get the modal
var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


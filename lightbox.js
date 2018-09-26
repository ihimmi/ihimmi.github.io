var imgIndex = 1;
images(imgIndex);

function openGallery()
{
  document.getElementById('gallery').style.display = "block";
}

function closeGallery()
{
  document.getElementById('gallery').style.display = "none";
}

function images(a) {
  var i;
  var images = document.getElementsByClassName("galleryimg");
  if (a > images.length)
  {
	  imgIndex = 1
  }
  if (a < 1)
  {
	  imgIndex = images.length
  }
  for (i = 0; i < images.length; i++)
  {
    images[i].style.display = "none";
  }
  images[imgIndex-1].style.display = "block";
}

//Functionality for the previous/next buttons
function buttons(i)
{
  images(imgIndex = imgIndex + i);
}

//Thumbnail image controls
function currentImg(i)
{
  images(imgIndex = i);
}


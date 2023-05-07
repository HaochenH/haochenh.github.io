document.addEventListener('DOMContentLoaded', function() {
  // set image directory
  var imageDir = '../assets/images/slides/';
  
  // get image element
  var img = document.getElementById('auto-change-image');
  
  // set image list
  var images = [
    'photo-1639762681057-408e52192e55.png',
    'photo-1666875753105-c63a6f3bdc86.png',
    'photo-1510511459019-5dda7724fd87.png',
    'photo-1517976487492-5750f3195933.png',
    'photo-1531297484001-80022131f5a1.png',
    'photo-1625535163131-9d1fc30ea5f5.png',
    'photo-1653179241553-891d33f05410.png'
  ];

  // preload images
  var imageObjects = [];
  for (var i = 0; i < images.length; i++) {
    var imgObj = new Image();
    imgObj.src = imageDir + images[i];
    imageObjects.push(imgObj);
  }
  
  // set index and timer
  var currentIndex = 0;
  var timer = setInterval(changeImage, 5500);
  
  // change image function
  function changeImage() {
    // fade-out
    img.style.opacity = 0;
    img.style.transition = 'opacity 0.8s ease-out';
    setTimeout(function() {
      // increment index and loop back to start if at end
      currentIndex = (currentIndex + 1) % images.length;
      img.src = imageDir + images[currentIndex];
      // fade-in
      img.style.opacity = 1;
      img.style.transition = 'opacity 0.8s ease-in';
    }, 800);
  }
});
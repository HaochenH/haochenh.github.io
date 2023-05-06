document.addEventListener('DOMContentLoaded', function() {
  // set image directory
  var imageDir = '../assets/images/slides/';
  
  // get image element
  var img = document.getElementById('auto-change-image');

  // fetch all images in the directory
  var images = [];
  fetch(imageDir)
    .then(response => response.text())
    .then(html => {
      var doc = new DOMParser().parseFromString(html, "text/html");
      var links = doc.querySelectorAll("a");
      links.forEach(link => {
        var href = link.getAttribute("href");
        if (href.endsWith(".jpg") || href.endsWith(".png")) {
          images.push(href);
        }
      });
    })
    .catch(error => console.log(error));
  
  // preload images
  var imageObjects = [];
  for (var i = 0; i < images.length; i++) {
    var imgObj = new Image();
    imgObj.src = imageDir + images[i];
    imageObjects.push(imgObj);
  }
  
  // set index and timer
  var currentIndex = 0;
  var timer = setInterval(changeImage, 5800);
  
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

function switchLanguage(lang) {
  var url = window.location.pathname;
  var langUrl = url.replace(/\/(en|zh|ja)\//, '/' + lang + '/');
  window.location.href = langUrl;
}
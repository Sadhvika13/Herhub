function playVideo(videoId, description) {
    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videoId;
    iframe.frameborder = "0";
    iframe.allowfullscreen = true;
    iframe.width = "100%";
    iframe.height = "100%";
  
    var videoDescription = document.getElementById("videoDescription");
    videoDescription.innerHTML = "<h4>Description:</h4><p>" + description + "</p>";
    videoDescription.appendChild(iframe);
  }
  
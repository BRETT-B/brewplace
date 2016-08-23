var video = document.getElementById("background-video");
var pauseButton = document.querySelector("#pause button");

function videoFade() {
  video.classList.add("fade");
}

video.addEventListener('ended', function()
{
video.pause();
videoFade();
}); 


pauseButton.addEventListener("click", function() {
  video.classList.toggle("fade");
  if (video.paused) {
    video.play();
    pauseButton.innerHTML = "Pause Video";
  } else {
    video.pause();
    pauseButton.innerHTML = "Beer Me";
  }
})
$(document).ready(function() {
	function verifyAge() {
		var month = $('#month').val();
		var day = $('#day').val();
		var year = $('#year').val();
		var dob = 
	}
});

// ============================================
// jQuery to verify user is 21 or older in age.
// ============================================ 
$(document).ready(function(){
    $("#form-submit").click(function(){
    	event.preventDefault();
        var month = $("#month").val();
        var day = $("#day").val();
        var year = $("#year").val();
        var age = 21;
        var d = new Date();
        d.setFullYear(year, month - 1, day);
        var currentDate = new Date();
        currentDate.setFullYear(currentDate.getFullYear() - age);
        if(currentDate === NaN){
            $('#validate-date').addClass("visibility: visibile");
            return false;
        }
        else if((currentDate - d) < 0) {
            $("#validate-underage").addClass("visibility: visible");
            return false;
        }
        return true;
    })
});
// ============================================================
// Allow the user to pause and/or (re)play the video backgrond.
// ============================================================
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
});

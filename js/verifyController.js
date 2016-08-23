brewApp.controller('verifyController', function($scope) {

    $scope.pauseBtn = 'Pause Video';

    var video = document.getElementById("background-video");

    function videoFade() {
        video.classList.add('fade');
    }

    video.addEventListener('ended', function() {
        video.pause();
        videoFade();
    }); 

    $scope.pauseClick = function() {
        video.classList.toggle('fade');

        if (video.paused) {
            $scope.pauseBtn = 'Pause Video';
            video.play();
        } else {
            $scope.pauseBtn = 'Beer Me';
            video.pause();
        }
    };
    
    $scope.verifySubmit = function() {
        var month = $scope.month;
        var day = $scope.day;
        var year = $scope.year;

        var age = 21;
        var d = new Date();
        d.setFullYear(year, month - 1, day);
        var currentDate = new Date();
        currentDate.setFullYear(currentDate.getFullYear() - age);
        
        if(isNaN(currentDate)) {
            $scope.dateNotValid = true;
        }
        else if((currentDate - d) < 0) {
            $scope.ageNotValid = true;
        } else {
            return true;
        }
    };
});
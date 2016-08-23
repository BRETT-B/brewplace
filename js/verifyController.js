brewApp.controller('verifyController', function($location, $scope) {

    $scope.pauseBtn = 'Pause Video';

    var video = document.getElementById('background-video');

    video.addEventListener('ended', function() {
        video.pause();
        $scope.fade = true;
    });

    $scope.pauseClick = function() {
        $scope.fade = !$scope.fade;

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
        
        if((currentDate - d) < 0) {
            $scope.ageNotValid = true;
        } else {
            $location.path('/menu');
        }
    };
});
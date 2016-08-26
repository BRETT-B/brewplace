brewApp.controller('verifyController', function($scope, $location, $localStorage) {
    $scope.storage = $localStorage;
    // if you've already verified your age, proceed to the brew page
    if ($scope.storage.verified) $location.path('/brew');

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
            
        var validDate = (Number($scope.month) > 0) && (Number($scope.day) > 0) && $scope.year;

        if(!validDate || (currentDate - d) < 0) {
            $scope.ageNotValid = true;
        } else {
            // add localStorage variable
            $scope.storage.verified = true;
            $location.path('/brew');
        }
    };
});
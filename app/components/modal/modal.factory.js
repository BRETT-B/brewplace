brewApp.factory('modalFactory', function($uibModal) {
  return {
    open: function(options) {
      return $uibModal.open({
        animation: true,
        templateUrl: 'app/components/modal/modalView.html',
        controller: 'modalController',
        size: 'md',
        resolve: {
          params: function() {
            return options;
          }
        }
      });
    }
  };
});
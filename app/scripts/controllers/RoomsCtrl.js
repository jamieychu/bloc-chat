(function() {
  function RoomsCtrl($scope, Room) {
    $scope.list = Room.all;
  }

  angular
    .module('blocChat')
    .controller('RoomsCtrl', ['$scope', 'Room', RoomsCtrl]);
})();

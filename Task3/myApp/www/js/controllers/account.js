'use strict';

app.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };

  $scope.logout = function(){
    Auth.logout();
  }

});

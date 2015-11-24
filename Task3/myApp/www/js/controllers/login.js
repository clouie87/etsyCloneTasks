'use strict';

app.controller('LoginCtrl', function($scope, $state, $ionicPopup) {
  $scope.emailLogin = function () {
    console.log('button was clicked on login');
    $scope.user = {};
    console.log('showing popup');

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      templateUrl: 'templates/partials/login.html',
      title: 'Signin',
      scope: $scope,
      buttons: [
        { text: '<b>Login</b>',
          type: 'button-energized',
          onTap: function(user) {
            user = $scope.user;
            //Log the user in
          }
        },
        {
          text: '<b>Register</b>',
          type: 'button-calm',
          onTap: function(user) {
            user = $scope.user;
            //register the user

          }
        }
      ]
    });
  };
});

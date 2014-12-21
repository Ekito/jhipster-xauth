'use strict';

angular.module('xauthApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });

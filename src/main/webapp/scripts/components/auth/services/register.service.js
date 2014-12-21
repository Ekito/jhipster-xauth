'use strict';

angular.module('xauthApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });



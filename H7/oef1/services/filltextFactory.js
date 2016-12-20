(function () {
    'use strict';
    angular.module('personApp')
        .factory('filltextFactory', filltextFactory);

    filltextFactory.$inject = ['$http'];

    function filltextFactory($http) {
        var factory = {};

        factory.getPersons = function () {
            return $http({
                method: 'GET',
                url: 'http://www.filltext.com/?rows=20&id={index}&fname={firstName}&lname={lastName}&email={email|format}&phone={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}'
            })
        };

        return factory;
    }
})();
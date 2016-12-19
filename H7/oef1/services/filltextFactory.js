(function () {
    'use strict';
    angular.module('personApp')
        .factory('filltextFactory', filltextFactory);

    function vehicleFactory() {
        var factory = {};

        factory.getPersons = function () {
            return $http({
                method: 'GET',
                url: 'http://www.filltext.com/?rows=20&fname={firstName}&lname={lastName}&email={email|format}&phone={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}'
            })
        };

        return factory;
    }
})();
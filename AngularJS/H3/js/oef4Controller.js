(function() {
    angular.module('oef4App')
        .controller('Oef4Controller', [personsController]);

    function personsController() {
        var vm = this;

        vm.persons = [
            {firstname: 'Peter', lastname: 'Kassenaar'}
        ];

        vm.addPerson = function() {
            var newPerson = {
                firstname: vm.iFirstname,
                lastname: vm.iLastname
            };
            vm.persons.push(newPerson);
            vm.iFirstname = vm.iLastname = '';
        }
    }
}) ();
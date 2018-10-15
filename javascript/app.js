var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope) {
    var events = [];
    var myEvent = {
        title: '',
        venue: '',
        date: '',
        datestamp: ''
    };

    $scope.push = function(myEvent) {
        events.myEvent.datestamp = Date.now();
        events.push(myEvent);
        events.myEvent = {
            title: '',
            venue: '',
            date: '',
            datestamp: ''
        };

        $scope.events = events;
    };

});
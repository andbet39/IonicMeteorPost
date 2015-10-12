/**
 * Created by andreaterzani on 12/10/15.
 */
angular.module("starter")
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'client/main/views/main.ng.html',
                controller: 'MainCtrl'
            });

        $urlRouterProvider.otherwise('/main');
    });

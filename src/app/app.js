const main = angular.module("main", [
    "ngRoute"
]);

/**
 *  @type config
 *  @extends routes, route provider
 */
main.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
        .when("/", {
            templateUrl: "app/layout/view-layout.html"
        })
        .otherwise({
            redirectTo: "/"
        });
});

/**
 *  @type view component
 *  @params (component:string, Object:{templateUrl:string, controller:callback})
 *  @constructs component
 */
main.component("welcome", {
    templateUrl: "app/views/welcome/view-welcome.html",
    controller: function ($scope, AppServiceSvc) {
        var nav = {
            remove: function(){
                swal("DEMO", "NOT AVAILABLE IN DEMO VERSION CONTACT DEVELOPER 082 632-5761", "error");
            }
        }
        $scope.nav = nav;
        $scope.welcomeModel = AppServiceSvc.welcomeModel;
    }
})


/**
 *  @type service
 *  @description provider contact list
 *  @exports guests list
 */
function AppServiceSvc() {
    this.welcomeModel = {
        title: "Housing Database",
        logo : "./img/logo.png",
        version: "1.0.0",
        guests: [
            {
                title: "Mr",
                fullNames: "Phillip Masite",
                surname: "Makume",
                id: "6603115713088",
                gender: "Male",
                race: "African",
                street_address: "1048 Zone 13",
                city: "Sebokeng Zone 13",
                phone: "076 984 9201",
                nationality: "South African",
                disability: "No",
                province: "Gauteng",
                status: "FORM C"
            },
            {
                title: "Miss",
                fullNames: "Sibongile Alinah",
                surname: "Ntloeakhabo",
                id: "8102021977083",
                gender: "Female",
                race: "African",
                street_address: "86A Buffalo Street",
                city: "Vereeniging",
                phone: "083 998 7714",
                nationality: "South African",
                disability: "No",
                province: "Gauteng",
                status: "Demand Database Application"
            } 
        ]
    }
}

/**
 *  @access service 
 */
main.service("AppServiceSvc", AppServiceSvc);

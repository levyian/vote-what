'use strict';

angular.module('workspaceApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.features = [
        {
          img: "glyphicon glyphicon-globe",
          title: "Works Everywhere",
          description: "Traditional desktop computers now represent only 30% of Internet traffic. Your poll must work on the tablets, smart phones, netbooks and notebooks that your visitors are using. Our responsive designs do just that."
        },
        {
          img: "glyphicon glyphicon-flash",
          title: "Live Results",
          description: "Live graphs show your poll results immediately in an easy to understand format. One graph will not provide the whole picture, that's why we provide multiple graph types to better describe your results."
        },
        {
          img: "",
          title: "Social Integration",
          description: "Free integrated facebook or traditional comments allow your poll voters to provide immediate feedback and discuss results. Social share buttons encourage your poll voters to help spread the word."
        }
      ];
  });

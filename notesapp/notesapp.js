// Note Taking application.  Uses Angular.js 1.6.
var NotesStored = "";

var app = angular.module("notetakingApp", []); 
app.controller("notetakingCtrl", function($scope) {
    $scope.message = "";
    $scope.charactersLeft = function() {
        return 90 - $scope.message.length;
    };
    $scope.clear = function() {
        $scope.message = "";
    };
    $scope.save = function() {
        // Save then clear the message
		NotesStored = NotesStored + $scope.message + "<br>";		
		document.getElementById("notesArchived").innerHTML = NotesStored;
		//  alert("Your note has been saved!");
		swal("Saved", "Your note has been saved!", "success");
		$scope.message = "";
    };
});

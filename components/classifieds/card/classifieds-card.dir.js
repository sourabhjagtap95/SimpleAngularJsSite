(function() {

	"use strict";

	angular
		.module("ngClassifieds")
		.directive("classifieds", function(){
			return {
				templateUrl: "components/classifieds/card/classified-card.tpl.html",
				scope: {

				},
				controller: classifiedCardController,
				controllerAs: "vm"
			}

			function classifiedCardController(){
				
			}
		});
})();
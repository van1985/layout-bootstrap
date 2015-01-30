'use strict';

angular.module('storeManagerApp')
	.directive('donutChart', function() {
		return {
            restrict: 'A',
            controller: function ($scope, $attrs) {

				$scope.chart = new CanvasJS.Chart($attrs.id, {
					theme: 'theme2',
					height: 150,
					width: 500,
					backgroundColor: null,
		            animationEnabled: true,
		            axisY: {
		                tickThickness: 0,
		                lineThickness: 5,
		                valueFormatString: " ",
		                gridThickness: 0                 
		            },
		            axisX: {
		                tickThickness: 0,
		                lineThickness: 0,
		                labelFontSize: 20,
		                labelFontColor: "Peru",
		                interval: 1
		            },
		            data: [
						{
							type: "doughnut",
							dataPoints: [
								{  y: 32, indexLabel: "Books & Magazines" },
								{  y: 36, indexLabel: "Gifts" },		
								{  y: 17, indexLabel: "Clothing, Shoes & Jewelry" },						
								{  y: 2, indexLabel: "All Other Departament" }
							]
						}
					]
				});

				$scope.chart.render(); //render the chart for the first time
			}
		};
	});
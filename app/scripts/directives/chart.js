'use strict';

angular.module('storeManagerApp')
	.directive('chart', function() {
		return {
            restrict: 'A',
            controller: function ($scope, $attrs) {

				$scope.chart = new CanvasJS.Chart($attrs.id, {
					theme: 'theme2',
					height: 240,
					width: 500,
					backgroundColor: null,
		            animationEnabled: true,
		            axisY: {
		                tickThickness: 0,
		                lineThickness: 3,
		                valueFormatString: " ",
		                gridThickness: 0           
		            },
		            axisX: {
		                tickThickness: 0,
		                lineThickness: 0,
		                labelFontSize: 15,
		                labelFontColor: "black"
		            },
		            data: [
			            {
			                indexLabelFontSize: 20,
			                indexLabelPlacement: "inside",
			                indexLabelFontColor: "white",
			                indexLabelFontFamily: "Arial",
			                labelFontColor: "black",
			                indexLabelFontWeight: 300,
			                type: "bar",
			                dataPoints: [
			                    { y: 21, label: "Missed", indexLabel: "15" },
			                    { y: 25, label: "Transferred", indexLabel: "6" },
			                    { y: 33, label: "Answered", indexLabel: "32" },
			                    { y: 36, label: "Incoming", indexLabel: "78" }
			                ]
			            }
		            ]
				});

				$scope.chart.render(); //render the chart for the first time
			}
		};
	});
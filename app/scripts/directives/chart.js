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
							indexLabelFontSize: 16,
					        indexLabelFontFamily: "helvetica",
					        indexLabelFontColor: "#999999",
					        indexLabelFontWeight: "normal",
					        indexLabelFontStyle: "normal",
			                type: "bar",
			                dataPoints: [
			                    { y: 15, label: "Missed", color: "#339966"},
			                    { y: 6, label: "Transferred", color: "#99CC66" },
			                    { y: 32, label: "Answered", color: "#3399CC" },
			                    { y: 78, label: "Incoming", color: "#99CCCC", indexLabelFontFamily:"helvetica",indexLabelFontColor:"white", indexLabel:"78" }
			                ]
			            }
		            ]
				});

				$scope.chart.render(); //render the chart for the first time
			}
		};
	});
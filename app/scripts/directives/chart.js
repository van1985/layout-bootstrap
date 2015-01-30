'use strict';

angular.module('storeManagerApp')
	.directive('chart', function() {
		return {
            restrict: 'A',
            scope: {
            	stats: '='
            },
            controller: function ($scope, $attrs) {

            	$scope.$watch('stats', function() {
            		if ($scope.stats) {
            			$scope.chartData = $scope.stats;
            			initializeChart();
            		}
            	});

            	var getIndexLabel = function (label) {
            		var indexLabel = label;

            		for (var i = 6; i < label; i++) {
            			indexLabel += " ";
            		}

            		return indexLabel;
            	};

            	var initializeChart = function() {
					$scope.chart = new CanvasJS.Chart($attrs.id, {
						theme: 'theme2',
						height: 250,
						width: 500,
						backgroundColor: null,
			            animationEnabled: true,
			            axisY: {
			                tickThickness: 0,
			                lineThickness: 0,
			                valueFormatString: " ",
			                gridThickness: 0         
			            },
			            axisX: {
			                tickThickness: 0,
			                lineThickness: 0,
			                labelFontSize: 20,
			                labelFontColor: "#999999",
			                labelFontFamily: "helvetica",
			                gridThickness: 0 
			            },
			            data: [
				            {
				                type: "bar",
				                dataPoints: [
				                    { y: $scope.chartData.missed, label: "Missed", color: "#339966", indexLabelFontFamily:"helvetica",indexLabelFontColor:"white", indexLabel: getIndexLabel($scope.chartData.missed), indexLabelPlacement: "inside" },
				                    { y: $scope.chartData.transferred, label: "Transferred", color: "#99CC66", indexLabelFontFamily:"helvetica",indexLabelFontColor:"white", indexLabel:getIndexLabel($scope.chartData.transferred), indexLabelPlacement: "inside" },
				                    { y: $scope.chartData.answered, label: "Answered", color: "#3399CC", indexLabelFontFamily:"helvetica",indexLabelFontColor:"white", indexLabel:getIndexLabel($scope.chartData.answered), indexLabelPlacement: "inside" },
				                    { y: $scope.chartData.incoming, label: "Incoming", color: "#99CCCC", indexLabelFontFamily:"helvetica",indexLabelFontColor:"white", indexLabel:getIndexLabel($scope.chartData.incoming), indexLabelPlacement: "inside" }
				                ]
				            }
			            ]
					});


					$scope.chart.render(); //render the chart for the first time
				}
			}
		};
	});
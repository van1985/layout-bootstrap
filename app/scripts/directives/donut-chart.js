'use strict';

angular.module('storeManagerApp')
	.directive('donutChart', function() {
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

            	var initializeChart = function() {
            		var dataPoints = [];

            		for (var i = 0; i < $scope.chartData.length; i++) {
            			var dataPoint = {
            				y: $scope.chartData[i].callsAmount,
            				indexLabel: $scope.chartData[i].departmentId,
            				indexLabelMaxWidth: 120
            			};

            			var color;
            			switch (i%4) {
            				case 0:
            					color = "66CCCC";
            					break;
            				case 1:
            					color = "339966";
            					break;
            				case 2:
            					color = "666666";
            					break;
            				default:
            					color = "99CC66";
            			}

            			dataPoint.color = "#" + color;
            			dataPoint.indexLabelLineColor = color;

            			dataPoints.push(dataPoint);
            		}

					$scope.chart = new CanvasJS.Chart($attrs.id, {
						backgroundColor: null,
			            animationEnabled: true,
			            data: [
							{
								type: "doughnut",
								indexLabelFontSize: 16,
						        indexLabelFontFamily: "helvetica",
						        indexLabelFontColor: "#999999",
						        indexLabelFontWeight: "normal",
						        indexLabelFontStyle: "normal",
								dataPoints: dataPoints
							}
						]
					});

					$scope.chart.render(); //render the chart for the first time
				}
			}
		};
	});
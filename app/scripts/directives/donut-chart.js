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
            				indexLabelMaxWidth: 120,
            				indexLabelWrap: true
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
						theme: 'theme2',
						height: 250,
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
								indexLabelFontSize: 16,
						        indexLabelFontFamily: "helvetica",
						        indexLabelFontColor: "#999999",
						        indexLabelFontWeight: "normal",
						        indexLabelFontStyle: "normal",
								/*dataPoints: [
									{  y: 32, indexLabel: "Books & Magazines",color: "#66CCCC", indexLabelLineColor: "66CCCC", indexLabelMaxWidth: 120, indexLabelWrap: true },
									{  y: 36, indexLabel: "Gifts", color: "#339966", indexLabelLineColor: "339966", indexLabelMaxWidth: 120, indexLabelWrap: true },		
									{  y: 17, indexLabel: "Clothing, Shoes & Jewelry", color: "#666666", indexLabelLineColor: "666666", indexLabelMaxWidth: 120, indexLabelWrap: true },						
									{  y: 2, indexLabel: "All Other Departament", color: "#99CC66", indexLabelLineColor: "99CC66", indexLabelMaxWidth: 120, indexLabelWrap: true }
								]*/
								dataPoints: dataPoints
							}
						]
					});

					$scope.chart.render(); //render the chart for the first time
				}
			}
		};
	});
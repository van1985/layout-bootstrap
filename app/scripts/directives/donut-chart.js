'use strict';

angular.module('storeManagerApp')
	.directive('donutChart', function() {
		return {
            restrict: 'A',
            controller: function ($scope, $attrs) {

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
							dataPoints: [
								{  y: 32, indexLabel: "Books & Magazines",color: "#66CCCC", indexLabelLineColor: "66CCCC", indexLabelMaxWidth: 120, indexLabelWrap: true },
								{  y: 36, indexLabel: "Gifts", color: "#339966", indexLabelLineColor: "339966", indexLabelMaxWidth: 120, indexLabelWrap: true },		
								{  y: 17, indexLabel: "Clothing, Shoes & Jewelry", color: "#666666", indexLabelLineColor: "666666", indexLabelMaxWidth: 120, indexLabelWrap: true },						
								{  y: 2, indexLabel: "All Other Departament", color: "#99CC66", indexLabelLineColor: "99CC66", indexLabelMaxWidth: 120, indexLabelWrap: true }
							]
						}
					]
				});

				$scope.chart.render(); //render the chart for the first time
			}
		};
	});
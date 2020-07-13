(function () {

var chart = new CanvasJS.Chart("chart_comparative", {
    animationEnabled: true,
    title:{
        text: "Vitamin Profile"
    },
    axisX: {
        valueFormatString: "DD MMM,YY"
    },
    axisY: {
        title: "Value",
        includeZero: false,
        suffix: " ng/mL"
    },
    legend:{
        cursor: "pointer",
        fontSize: 16,
        itemclick: toggleDataSeries
    },
    toolTip:{
        shared: true
    },
    data: [{
        name: "Vitamin D",
        type: "spline",
        yValueFormatString: "#0.## ng/mL",
        showInLegend: true,
        dataPoints: [
            { x: new Date(2017,1,24), y: 8.2 },
            { x: new Date(2017,3,25), y: 9.8 },
            { x: new Date(2017,5,26), y: 9.9 },
            { x: new Date(2017,7,27), y: 10.2 },
            { x: new Date(2017,9,28), y: 42.7 },
            { x: new Date(2017,11,29), y: 53.8 },
            { x: new Date(2018,3,30), y: 54.2 }
        ]
    },
    {
        name: "Vitamin C",
        type: "spline",
        yValueFormatString: "#0.## ng/mL",
        showInLegend: true,
        dataPoints: [
            { x: new Date(2017,1,24), y: 19.1 },
            { x: new Date(2017,3,25), y: 22.4 },
            { x: new Date(2017,5,26), y: 26.7 },
            { x: new Date(2017,7,27), y: 27.2 },
            { x: new Date(2017,9,28), y: 56.3 },
            { x: new Date(2017,11,29), y: 46.2 },
            { x: new Date(2018,3,30), y: 49.2 }
        ]
    }

    ],

});
chart.render();

function toggleDataSeries(e){
    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
    }
    else{
        e.dataSeries.visible = true;
    }
    chart.render();
}

})();
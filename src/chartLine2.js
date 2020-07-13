(function () {

var chart2 = new CanvasJS.Chart("chart_simple2", {
    animationEnabled: true,
    title:{
        text: "Lipid Profile"
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
        name: "Good lipid(LDL)",
        type: "spline",
        yValueFormatString: "#0.## mg/dL",
        showInLegend: true,
        dataPoints: [
            { x: new Date(2017,1,24), y: 53 },
            { x: new Date(2018,3,25), y: 62 },
            { x: new Date(2019,3,26), y: 45 }
            //{ x: new Date(2017,7,27), y: 10.2 },
            //{ x: new Date(2017,9,28), y: 42.7 },
            //{ x: new Date(2017,11,29), y: 53.8 },
            //{ x: new Date(2018,3,30), y: 54.2 }
        ]
    },
    {
        name: "Bad lipid(HDL)",
        type: "spline",
        yValueFormatString: "#0.## mg/dL",
        showInLegend: true,
        dataPoints: [
            { x: new Date(2017,1,24), y: 100 },
            { x: new Date(2018,3,25), y: 130 },
            { x: new Date(2019,3,26), y: 140 }
            //{ x: new Date(2017,7,27), y: 27.2 },
            //{ x: new Date(2017,9,28), y: 56.3 },
            //{ x: new Date(2017,11,29), y: 46.2 },
            //{ x: new Date(2018,3,30), y: 49.2 }
        ]
    }
    /*
    {
        name: "Nantucket",
        type: "spline",
        yValueFormatString: "#0.## °C",
        showInLegend: true,
        dataPoints: [
            { x: new Date(2017,6,24), y: 22 },
            { x: new Date(2017,6,25), y: 19 },
            { x: new Date(2017,6,26), y: 23 },
            { x: new Date(2017,6,27), y: 24 },
            { x: new Date(2017,6,28), y: 24 },
            { x: new Date(2017,6,29), y: 23 },
            { x: new Date(2017,6,30), y: 23 }
        ]
    }
    */
    ],

});
chart2.render();

function toggleDataSeries(e){
    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
    }
    else{
        e.dataSeries.visible = true;
    }
    chart2.render();
}

})();
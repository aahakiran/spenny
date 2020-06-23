import React from 'react';
import CanvasJSReact from '../../chartjs/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export function Chart (props) {
    const { graphData: { datasets } } = props;   
    const options = {
        theme: "light2",
        backgroundColor: "#f8f9f9",
        axisX: {
            lineDashType: "dot",
        tickLength: 0,
            lineThickness: 2,
        stripLines: [
            {
                value: 5,
                color: "#77869e",
            }
            ]
        },
        axisY: {
        tickLength: 0,
        gridDashType: "dot",
        gridThickness: 2,
        gridColor: "#77869e",
        margin: 0
        },
        data: [
        {
            type: "area",
            color: datasets[0].borderColor,
            dataPoints: datasets[0].data
        },
        {
            type: "area",
            color: datasets[1].borderColor,
            dataPoints: datasets[1].data
        }
        ]          
    }
    return (
        <div>
        <CanvasJSChart options = {options}/>
        </div>
    );
}

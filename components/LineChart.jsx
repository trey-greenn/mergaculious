// ./components/LineChart.js

import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";



const labels = ["January", "February", "March", "April", "May", "June"];

const LineChart = () => {
    
    // data[1]['PRICE']
    // data[1]['DATE']


    
var [data, setData] = useState([{_id:'trey', DATE:['2023-10-19'], PRICE:['100']}]);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
var trey = {_id:'trey', DATE:['2023-10-19'], PRICE:['100']}
  if(!data){
    data = trey
  }
let kim = data[0]['DATE']
let him = data[0]['PRICE']
console.log(data)

  const pata = {
    labels: kim,
    datasets: [
      {
        label: "Producer Price Index by Industry: Deep Sea Freight Transportation",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(0,0,255)",
        data: him,
      },
    ],
    
  };




  return (
    <div className="h-96">
      <Line data={pata} 
                    />
      
    </div>
  );
};

export default LineChart;
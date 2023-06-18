/* eslint-disable no-unused-vars */
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const series = [
    {
      name: 'Jami o’quvchilar',
      data: [261, 296, 305, 255]
    },
    {
      name: 'Tark etganlar',
      data: [46, 30, 46, 90]
    },
   
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: true,
      position: 'bottom',
      style: {
        colors: ['#080808']
      },
      
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
        categories: ['1-hafta', '2-hafta', '3-hafta', '3-hafta'],
      },
    
    fill: {
      opacity: 1,
      colors: ['#2F49D1', '#E13468']
    },
    
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default ApexChart;

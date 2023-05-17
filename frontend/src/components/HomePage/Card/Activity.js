import React from 'react'
import  { generateActivityDummyData } from './dummyDataGenerator'
import ReactEcharts from 'echarts-for-react';
import Card from './Card';
const activityData = generateActivityDummyData();
const userActivityData = activityData[0].weekData.map(weekData => weekData.userActivity);
const guestActivityData = activityData[0].weekData.map(weekData => weekData.guestActivity);

const option = {
    xAxis: {
      type: 'category',
      data: ['week 1','week 2','week 3','week 4'],
      axisLine: {
        show: false, 
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 17,
        },
      }  
    },
    yAxis: {
      type: 'value',
      data: [0,100,200,300,400,500],
      splitLine: {
        lineStyle: {
          color: '#EAEAEA', 
        },
      },
      axisLabel: {
        textStyle: {
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 17,
        },
      }
    },
    legend: {
        data: ['user','guest'],
        orient: 'vertical',
        right: 20,
        itemWidth: 10,
        itemHeight: 10,
        formatter: function (name) {
            return `${name}`
        }
    },
    series: [
      {
        data: userActivityData,
        type: 'line',
        smooth: true,
        color:"#E9A0A0"
      },
      {
        data: guestActivityData,
        type: 'line',
        smooth: true,
        color:"#9BDD7C"

      }
    ]
  };


const ActivityChart = () => {
    return (
        <Card>
        <ReactEcharts option={option}  />
        </Card>
    );
  };

export default ActivityChart
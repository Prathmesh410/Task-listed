import React, { useState } from 'react'
import  { generateActivityDummyData } from './dummyDataGenerator'
import ReactEcharts from 'echarts-for-react';
import Card from './Card';
import Dropdown from './DropDown';
const activityData = generateActivityDummyData();
console.log(activityData);
const userActivityData = activityData[0].weekData.map(weekData => weekData.userActivity);
const guestActivityData = activityData[0].weekData.map(weekData => weekData.guestActivity);



const option = {
  title: {
    text: 'Activities',
    textStyle: {
      fontSize: 20,
      fontWeight: 700,
      color:'#000000',
    }
  },
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
        },
      }
    },
    series: [
  
      {
        lineStyle: {
          width: 3,
        },
        data: userActivityData,
        type: 'line',
        smooth: true,
        color:"#E9A0A0",
        showSymbol: false,
      },
      {
        lineStyle: {
          width: 3,
        },
        data: guestActivityData,
        type: 'line',
        smooth: true,
        color:"#9BDD7C",
        showSymbol: false,

      }
    ],
    grid: {
        left: '2%',
        right: '2%',
        bottom:'4%',
        containLabel: true,
      }
    
  };


const ActivityChart = () => {
  const [selectedMonth,setSelectedMonth] = useState("");
  const [months,setMonths] = useState([]);

  
    return (
        <Card >
          <span className='absolute mt-5'><Dropdown /></span>
          <span className='absolute right-0 mr-8 mt-5 flex align-middle '>
            <div className='activity-legendl-dots rounded-full mr-4 ' style={{background:"#E9A0A0"}}></div>
            <div className='font-normal text-base mr-8'>User</div>
            <div className='activity-legendl-dots rounded-full mr-4' style={{background:"#9BDD7C"}}></div>
            <div>Guest</div>
          </span>
        <ReactEcharts option={option} />
        </Card>
    );
  };

export default ActivityChart
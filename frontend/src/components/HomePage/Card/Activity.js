import React, { useEffect, useState } from 'react'
import  { generateActivityDummyData } from './dummyDataGenerator'
import ReactEcharts from 'echarts-for-react';
import Card from './Card';
import Dropdown from './DropDown';
const activityData = generateActivityDummyData();
console.log(activityData);





const ActivityChart = () => {
  const [selectedMonth,setSelectedMonth] = useState('0');
  const cur = activityData[selectedMonth];
  const months = [];
  console.log("curr is " , cur);
  const userActivityData = cur.weekData.map(weekData => weekData.userActivity);
  const guestActivityData = cur.weekData.map(weekData => weekData.guestActivity);
  const option = {
    title: {
      text: 'Activities',
      top: '0px',
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

  activityData.map(data => {
        months.push(`${data?.month?.month} ${data?.month?.year}`);
  })
      // console.log(months);
console.log(selectedMonth);
    return (
        <Card >
          <span className='absolute mt-6 mb'><Dropdown months = {months} setSelectedMonth = {setSelectedMonth}/></span>
          <span className='absolute right-10 mr-12 mt-5 flex align-middle '>
            <div className='activity-legendl-dots rounded-full mr-3 ' style={{background:"#E9A0A0"}}></div>
            <div className='font-normal text-base mr-8'>User</div>
            <div className='activity-legendl-dots rounded-full mr-3' style={{background:"#9BDD7C"}}></div>
            <div>Guest</div>
          </span>
        <ReactEcharts option={option}  />
        </Card>
    );
  };

export default ActivityChart
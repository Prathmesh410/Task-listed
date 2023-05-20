import ReactEcharts from 'echarts-for-react';
import { useState } from 'react';
import Card from './Card';
import "./Card.css"
import Dropdown from './DropDown';
import  { generatePieDummyData } from './dummyDataGenerator';
const pieData = generatePieDummyData();


const PieChart = () => {
  const colors = ["#98D89E" ,"#EE8484" ,"#F6DC7D"];
  
  const [selectedMonth,setSelectedMonth] = useState('0');
  const cur = pieData[selectedMonth]
  const months = [];
  pieData.map(data => {
    months.push(`${data?.month?.month} ${data?.month?.year}`);
})

const option = {
  title: {
    text: 'Top products',
    textStyle: {
      fontSize: 20,
      fontWeight: 700,
      color:'#000000',
    }
  },
  tooltip: {},
  legend: {
    orient: 'vertical',
    right: 10,
    top: 'middle',
    icon : 'circle',
    textStyle: {
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 17,
    },
    formatter: function (name) {
      const item = cur.topProducts.find((item) => item.name === name);
      return ` ${name} \n\t${item.value}%`;
    },


  },

  series: [
    {
      type: 'pie',
      radius:"50%",
      left:"0",
      right:'40%',
      data: cur.topProducts,colors,
      label: {
        show: false,
      },
      // emphasis: {
      //   label: {
      //     show: true,
      //     formatter: '{b}: {d}%',
      //   },
      // },
      itemStyle: {
        color: function (params) {
          const dataIndex = params.dataIndex % colors.length;
          return colors[dataIndex];
        },
      },
    },
  ],
  };
  return (
    <Card className = 'card flex'>
     <span className='absolute  pie-dropdown'><Dropdown  months = {months} setSelectedMonth = {setSelectedMonth} selectedMonth = {selectedMonth}/></span>

    <ReactEcharts option={option} className = 'max-h-60' />
    </Card>
  );
};

export default PieChart;

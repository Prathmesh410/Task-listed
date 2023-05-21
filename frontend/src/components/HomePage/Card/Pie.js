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

const Legend =() => {

  return(
    <div>
      
    </div>
  )
}

const option = {

  tooltip: {},
  series: [
    {
      type: 'pie',
      radius:"50%",
      left:0,
      data: cur.topProducts,colors,
      label: {
        show: false,
      },
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
      <div className='flex justify-between'>
          <div>Top Products</div>
          <div className='flex mr-7'><Dropdown months = {months} setSelectedMonth = {setSelectedMonth} selectedMonth = {selectedMonth} /></div>
         </div>

    <ReactEcharts option={option}  />
    </Card>
  );
};

export default PieChart;

import ReactEcharts from 'echarts-for-react';
import Card from './Card';
import "./Card.css"
import Dropdown from './DropDown';
import  { generatePieDummyData } from './dummyDataGenerator';
const pieData = generatePieDummyData();

const colors = ["#98D89E" ,"#EE8484" ,"#F6DC7D"];
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
      const item = pieData[0].topProducts.find((item) => item.name === name);
      return ` ${name} \n\t${item.value}%`;
    },


  },

  series: [
    {
      type: 'pie',
      radius:"50%",
      left:"0",
      right:'40%',
      data: pieData[0].topProducts,colors,
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

const PieChart = () => {
  return (
    <Card className = 'card flex'>
     <span className='absolute  mr-12 mt-5 flex align-middle '>data</span>

    <ReactEcharts option={option} className = 'max-h-60' />
    </Card>
  );
};

export default PieChart;

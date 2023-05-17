import ReactEcharts from 'echarts-for-react';
import  { generateDummyData } from './dummyDataGenerator'

const pieData = generateDummyData();

console.log(pieData);

const colors = ["#98D89E" ,"#EE8484" ,"#F6DC7D"];
const option = {
  tooltip: {},
  legend: {
    orient: 'vertical',
    left: '50%',
    top:'20%',
    itemWidth: 10,
    itemHeight: 25,
    itemGap:30,
    icon: 'circle',
    
    textStyle: {
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: 14,
      lineHeight: 17,
    },
    formatter: function (name) {
      const item = pieData[0].topProducts.find((item) => item.name === name);
      return ` ${name} \n(${item.value}%)`;
    },


  },

  series: [
    {
      type: 'pie',
      right: '60%',
      data: pieData[0].topProducts,colors,
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: true,
          formatter: '{b}: {d}%',
        },
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

const PieChart = () => {
  return (
    <ReactEcharts option={option}  />
  );
};

export default PieChart;

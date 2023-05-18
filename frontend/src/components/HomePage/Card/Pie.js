import ReactEcharts from 'echarts-for-react';
import Card from './Card';
import  { generatePieDummyData } from './dummyDataGenerator'
const pieData = generatePieDummyData();

const colors = ["#98D89E" ,"#EE8484" ,"#F6DC7D"];
const option = {
  title: {
    text: 'Top products',
    left: 'left',
    textStyle: {
      fontSize: 20,
      fontWeight: 700,
      color:'#000000',
    }
  },
  tooltip: {},
  legend: {
    orient: 'vertical',
    left: '20%',
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
      return ` ${name} \n\t${item.value}%`;
    },


  },

  series: [
    {
      type: 'pie',
      left:"0%",
      right:"80%",
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
    <Card >
    <ReactEcharts option={option}  />
    </Card>
  );
};

export default PieChart;

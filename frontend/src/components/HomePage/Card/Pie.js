import ReactEcharts from 'echarts-for-react';

const data = [  { value: 20, name: 'Entry 1', color: '#98D89E' },  
{ value: 30, name: 'Entry 2', color: '#EE8484' }, 
 { value: 50, name: 'Entry 3', color: '#F6DC7D' },];

const option = {
  tooltip: {},
  legend: {
    orient: 'vertical',
    left: '80%',
    top:'30%',
    align: 'left',
    itemWidth: 10,
    itemHeight: 10,
    formatter: function (name) {
      const item = data.find((item) => item.name === name);
      return ` ${name}`;
    },
    textStyle: {
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 14,
        lineHeight: 17
    },
  },
  series: [
    {
      type: 'pie',
      data: data,
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: true,
          formatter: '{b}: {d}%',
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

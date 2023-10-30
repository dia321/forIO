import React from 'react';
import { Line } from 'react-chartjs-2';
import { DataPoints, DataPoint } from '../@type';
import 'chartjs-adapter-date-fns';
import {
  Chart as ChartJS, LineController, LineElement, 
  LinearScale, PointElement, Tooltip, Legend, TimeScale
} from 'chart.js'

ChartJS.register(
  LineController, LineElement, LinearScale, PointElement, Tooltip, Legend, TimeScale
)

interface Props {
  chartData: DataPoints[];
  width?: number;
  height?: number;
}
export const ChartjsChart: React.FC<Props> = ({ chartData }) => {
  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          parser: 'YYYY-MM-DD HH:mm',
          tooltipFormat: 'll HH:mm',
        },
        title: {
          display: true,
          text: '시간',
        },
      },
      y: {
        title: {
          display: true,
          text: '값',
        },
      },
    },
  } as any;

  const data = {
    labels: chartData[0].map((data: DataPoint) => new Date(data.date)), // 날짜 라벨 추출
    datasets: chartData.map((data: DataPoints,index:number) => {
      console.log(data)
      return {
        type: 'line',
        label: `Dataset ${index}`,
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
        data: data.map(item => item.value),
      }
    }),
  } as any;

  return <Line data={data} options={options} />;
};
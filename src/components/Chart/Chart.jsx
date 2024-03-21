import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { StyledChartContainer, StyledDiv } from '../../styles/chart.jsx';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Chart = ({ data, categories }) => {
  const screenWidth = window.innerWidth;
  const colorCallback = context => {
    const index = context.dataIndex;
    return index % 3 === 0 ? 'rgba(255, 117, 29, 1)' : 'rgba(255, 218, 192, 1)';
  };

  const otherOptions = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: 'none',
      },
      title: {
        display: true,
        text: `${categories}`,
      },
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: 'rgba(82, 85, 95, 1)',
      },
    },
    scales: {
      x: {
        grid: {
          color: 'transparent',
        },
        ticks: {
          color: 'rgba(82, 85, 95, 1)',
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          color: `rgba(245, 246, 251, 1)`,
          width: '2px',
        },
      },
    },
  };
  const mobileOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'none',
      },
      title: {
        display: true,
        text: `${categories}`,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        color: 'rgba(82, 85, 95, 1)',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
    indexAxis: 'y',
  };

  const determineOptions = () => {
    return screenWidth < 768 ? mobileOptions : otherOptions;
  };

  const determineBarThickness = () => {
    return screenWidth < 768 ? 15 : 38;
  };
  const dataSettings = {
    labels: data.map(item => item.label),
    datasets: [
      {
        label: `${categories}`,
        data: data.map(item => item.value),
        backgroundColor: colorCallback,
        borderRadius: 10,
        barThickness: determineBarThickness(),
      },
    ],
  };

  return (
    <StyledDiv>
      <StyledChartContainer>
        <Bar
          options={determineOptions()}
          data={dataSettings}
          plugins={[ChartDataLabels]}
          height={400}
        />
      </StyledChartContainer>
    </StyledDiv>
  );
};

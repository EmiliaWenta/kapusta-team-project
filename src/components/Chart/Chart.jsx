import { Bar } from 'react-chartjs-2';
import React, { useState, useEffect } from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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
          drawBorder: false,
        },

        ticks: {
          color: 'rgba(82, 85, 95, 1)',
        },
      },
      y: {
        display: false,
        ticks: {
          display: false,
        },
        grid: {
          color: `rgba(245, 246, 251, 1)`,
          width: '2px',
          drawBorder: false,
        },
      },
    },
  };
  const mobileOptions = {
    layout: {
      padding: {
        right: 15,
        left: 15,
      },
    },
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
        display: true,
        anchor: 'end',
        color: 'rgba(82, 85, 95, 1)',
        align: 'top',
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        ticks: {
          labelOffset: -16,
        },
        position: 'left',
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  };

  const determineOptions = () => {
    return screenWidth < 768
      ? { ...mobileOptions, indexAxis: 'y' }
      : { ...otherOptions, indexAxis: 'x' };
  };

  const determineBarThickness = () => {
    return screenWidth < 768 ? 15 : 38;
  };
  const dataSettings = {
    labels: Object.keys(data),
    datasets: [
      {
        label: categories,
        data: Object.values(data),
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

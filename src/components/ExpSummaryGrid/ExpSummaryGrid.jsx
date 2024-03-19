import { GridBox, GridList, GridListItem } from 'styles/ExpSummaryGrid';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { colors } from 'styles/globalStyles';
import expenses from '../../../src/expenses.json';
import { useState, useEffect } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const data1 = {
  labels: ['Products'],
  datasets: [
    {
      label: 'Products',
      data: [expenses.products],
      backgroundColor: `${colors.brandOrange}`,
      barPercentage: 0.7,
      borderRadius: 10,
    },
  ],
};

const data2 = {
  labels: ['Alcohol'],
  datasets: [
    {
      label: ['alcohol'],
      data: [expenses.alcohol],
      backgroundColor: `${colors.brandOrange}`,
      barPercentage: 0.7,
      borderRadius: 10,
    },
  ],
};
const data3 = {
  labels: ['Enter.'],
  datasets: [
    {
      label: ['alcohol'],
      data: [expenses.entertainment],
      backgroundColor: `${colors.brandOrange}`,
      barPercentage: 0.7,
      borderRadius: 10,
    },
  ],
};
const data4 = {
  labels: ['Health'],
  datasets: [
    {
      label: ['alcohol'],
      data: [expenses.health],
      backgroundColor: `${colors.brandOrange}`,
      barPercentage: 0.7,
      borderRadius: 10,
    },
  ],
};
const data5 = {
  labels: ['Transport'],
  datasets: [
    {
      label: ['Transport'],
      data: [expenses.transport],
      backgroundColor: `${colors.brandOrange}`,
      barPercentage: 0.7,
      borderRadius: 10,
    },
  ],
};
const data6 = {
  labels: ['Housing'],
  datasets: [
    {
      label: ['Housing'],
      data: [expenses.housing],
      backgroundColor: `${colors.brandOrange}`,
      barPercentage: 0.7,
      borderRadius: 10,
    },
  ],
};
const data7 = {
  labels: ['Technique'],
  datasets: [
    {
      label: ['Technique'],
      data: [expenses.technique],
      backgroundColor: `${colors.brandOrange}`,
      barPercentage: 0.7,
      borderRadius: 10,
    },
  ],
};
const data8 = {
  labels: ['Communal'],
  datasets: [
    {
      label: ['Communal'],
      data: [expenses.communal],
      backgroundColor: `${colors.brandOrange}`,
      barPercentage: 0.7,
      borderRadius: 10,
    },
  ],
};
const data9 = {
  labels: ['Hobbies'],
  datasets: [
    {
      label: ['Hobbies'],
      data: [expenses.hobbies],
      backgroundColor: `${colors.brandOrange}`,
      barPercentage: 0.7,
      borderRadius: 10,
    },
  ],
};
const data10 = {
  labels: ['Education'],
  datasets: [
    {
      label: ['Education'],
      data: [expenses.education],
      backgroundColor: `${colors.brandOrange}`,
      barPercentage: 0.7,
      borderRadius: 10,
    },
  ],
};
const data11 = {
  labels: ['Other'],
  datasets: [
    {
      label: ['Other'],
      data: [expenses.other],
      backgroundColor: `${colors.brandOrange}`,
      barPercentage: 0.7,
      borderRadius: 10,
    },
  ],
};

export function ExpSummaryGrid() {
  const [indexAxis, setIndexAxis] = useState('y');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIndexAxis('x');
      } else {
        setIndexAxis('y');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const options = {
    maintainAspectRatio: false,
    // aspectRatio: 0.5,
    indexAxis: indexAxis,
    responsive: true,
    scales: {
      x: {
        display: indexAxis === 'x',
        // position: 'top',
        grid: {
          display: false,
        },
        ticks: {
          display: true,
        },
      },
      y: {
        display: indexAxis === 'y',
        // position: 'top',
        grid: {
          display: false,
        },
        ticks: {
          display: true,
        },
      },
    },
  };

  return (
    <GridBox>
      <GridList>
        <GridListItem>
          <Bar options={options} data={data1} />
        </GridListItem>
        <GridListItem>
          <Bar options={options} data={data2} />
        </GridListItem>
        <GridListItem>
          <Bar options={options} data={data3} />
        </GridListItem>
        <GridListItem>
          <Bar options={options} data={data4} />
        </GridListItem>
        <GridListItem>
          <Bar options={options} data={data5} />
        </GridListItem>
        <GridListItem>
          <Bar options={options} data={data6} />
        </GridListItem>
        <GridListItem>
          <Bar options={options} data={data7} />
        </GridListItem>
        <GridListItem>
          <Bar options={options} data={data8} />
        </GridListItem>
        <GridListItem>
          <Bar options={options} data={data9} />
        </GridListItem>
        <GridListItem>
          <Bar options={options} data={data10} />
        </GridListItem>
        <GridListItem>
          <Bar options={options} data={data11} />
        </GridListItem>
      </GridList>
    </GridBox>
  );
}

export default ExpSummaryGrid;

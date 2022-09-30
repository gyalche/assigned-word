import React, { useEffect, useState } from 'react';
import './piestyle.scss';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from 'chart.js';

ChartJS.register(Tooltip, ArcElement, Legend);

// const data = {};

const Chart = () => {
  const [data, setData] = useState({
    datasets: [
      {
        data: [2, 3, 4],
        backgroundColor: [
          'rgba(159,63,176,0.1)',
          'rgba(78,63,176,0.2)',
          'rgba(156,0,60,0.3)',
        ],
        borderColor: ['rgb(159,63,176)', 'rgb(78,63,176)', 'rgb(156,0,60)'],
        borderWidth: 1,
        label: '# no of orders',
      },
    ],
    labels: ['Preparing', 'Shipping', 'Delivered'],
  });

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://jsonplaceholder.typicode.com/users')
        .then((data) => {
          // setData(data);
          const res = data.json();
          return res;
        })
        .then((res) => {
          console.log(res);
          const label = [];
          const data = [];
          for (var i of res) {
            label.push(i.name);
            data.push(i.id);
          }
          setData({
            datasets: [
              {
                data: data,
                backgroundColor: [
                  'rgba(159,63,176,0.1)',
                  'rgba(78,63,176,0.2)',
                  'rgba(156,0,60,0.3)',
                  'rgba(188,133,127,1.00)',
                  'rgba(147,163,127,1.00)',
                  'rgba(77,148,127,1.00)',
                  'rgba(44,101,127,1.00)',
                  'rgba(137,105,127,1.00)',
                  'rgba(165,71,127,1.00)',
                  'rgba(28,87,127,1.00)',
                ],
                borderColor: [
                  'rgb(159,63,176)',
                  'rgb(78,63,176)',
                  'rgb(156,0,60)',
                ],
                borderWidth: 1,
                label: '# no of orders',
              },
            ],
            labels: label,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  return (
    <>
      <main className='piechart'>
        <h1>Task 1 Pie chart</h1>
        <section>
          <Doughnut data={data} />
        </section>
      </main>
    </>
  );
};

export default Chart;

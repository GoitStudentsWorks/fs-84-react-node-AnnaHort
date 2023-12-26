import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Container = styled.div`
  margin-left: 10px;
  margin-bottom: 40px;
  overflow-x: auto;

  @media (min-width: 834px) {
    margin-left: unset;
    overflow-y: unset;
  }

  @media (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 9px;

  @media (min-width: 834px) {
    margin-top: 40px;
  }

  @media (min-width: 1440px) {
    margin-top: 0;
  }
`;

const WaterTitle = styled.h2`
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  color: var(--color-primary-white);
  margin-right: 40px;
`;

const WaterDesc = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-primary-white);
`;

const ChartsContainer = styled.div`
  display: flex;
  min-width: 676px;
  width: 100%;
  margin: 0 auto;
  border-radius: 12px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  @media (min-width: 834px) {
    min-width: 780px;
    overflow-x: unset;
    overflow-y: unset;
  }

  @media (min-width: 1440px) {
    min-width: 676px;
  }
`;

const WaterDashboar = ({ data, selectedMonth }) => {
  const [chartData, setChartData] = useState([]);
  const [averageWater, setAverageWater] = useState(0);

  useEffect(() => {
    console.log('Entering useEffect for rendering days...');
    const renderDays = () => {
      if (!data || !Array.isArray(data)) {
        console.error(`Invalid or missing 'data' array`);
        return;
      }
      const formatDate = new Date(2023, selectedMonth, 0);
      const daysInMonth = formatDate.getDate();
      const days = Array.from({ length: daysInMonth }, (_, index) => 0);

      try {
        data.forEach((day) => {
          if (day.data) {
            const daysIndex = Number(day.data.split(',')[0]) - 1;
            if (daysIndex >= 0 && daysIndex < daysInMonth) {
              days[daysIndex] = day.water || 0;
            } else {
              console.error(`Invalid day index: ${daysIndex}`);
            }
          } else {
            console.error(`Missing 'data' property in day object`);
          }
        });
      } catch (error) {
        console.error(`Error during rendering days: ${error}`);
      }

      setChartData(days);
    };

    renderDays();
  }, [data, selectedMonth]);

  const formatDate = new Date(2023, selectedMonth, 0).getDate();
  const labels = Array.from({ length: formatDate }, (_, index) => index + 1);

  // вычисление среднего колличесвта употребляемых каллорий
  useEffect(() => {
    console.log('Entering useEffect for calculating average food...');
    if (data && data.length > 0) {
      // Получаем текущую дату
      const currentDate = new Date();
      const filteredData = data.filter((item) => {
        const [day, month] = item.data.split(', ');
        const itemDate = new Date(2023, getMonthNumber(month), day);
        return (
          itemDate.getMonth() === currentDate.getMonth() &&
          itemDate.getFullYear() === currentDate.getFullYear()
        );
      });

      console.log('Filtered Data:', filteredData);
      if (chartData.length > 0) {
        // Вычисляем среднее количество воды для текущего месяца
        const filteredChartData = chartData.filter(
          (water) => !isNaN(water)
        );
        if (filteredChartData.length > 0) {
          const total = filteredChartData.reduce(
            (acc, water) => acc + water,
            0
          );
          const calculatedAveragewater = total / filteredChartData.length;
          setAverageWater(Math.floor(calculatedAveragewater));
        } else {
          // если данных нет, среднее значение устанавливаем в 0
          setAverageWater(0);
        }
      }
      if (chartData.length === 0) {
        console.error(`No data for the current month`);
        return;
      }
    }
  }, [chartData]);

  // Функция для преобразования названия месяца в числовой формат
  function getMonthNumber(monthName) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months.indexOf(monthName);
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: false,
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: true,
          color: '#292928',
          borderColor: '#292928',
        },
      },
      y: {
        position: 'left',
        ticks: {
          beginAtZero: true,
          stepSize: 1000,
          callback: function (value) {
            if (value >= 1000) {
              return (value / 1000).toLocaleString() + 'K';
            }
            return value;
          },
        },
        grid: {
          display: true,
          color: '#292928',
          borderColor: '#292928',
        },
      },
    },
    layout: {
      padding: {
        left: 14,
        right: 31,
        top: 25,
        bottom: 40,
      },
    },
  };

  return (
    <Container>
      <TitleContainer>
        <WaterTitle>Water</WaterTitle>
        <WaterDesc>Average value: {averageWater}</WaterDesc>
      </TitleContainer>

      <ChartsContainer>
        <Line
          options={options}
          data={{
            labels,
            datasets: [
              {
                label: 'Water',
                data: chartData,
                borderColor: '#e3ffa8',
                backgroundColor: '#0F0F0F',
                pointBackgroundColor: '#e3ffa8',
                borderWidth: 1,
              },
            ],
          }}
          style={{ backgroundColor: '#0F0F0F', borderRadius: '12px' }}
        />
      </ChartsContainer>
    </Container>
  );
};

export default WaterDashboar;

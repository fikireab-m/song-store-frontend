import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface DataSet {
  label: string,
  data: number[],
  borderColor: string,
  backgroundColor: string,
  lineTension: 0.5,

}
interface ChartProps {
  title: string;
  dataset: DataSet[];
}

const SimpleBarChart = ({ title, dataset }: ChartProps) => {
  const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const data = { labels, datasets: dataset };
  return (
    <Bar
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "top",
            align: "start",
          },
          title: { display: true, text: title, position: "top" },
        },
      }}
      data={data}
    />
  );
};

export default SimpleBarChart
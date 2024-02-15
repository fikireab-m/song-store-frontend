import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Songs", "Artists", "Albums", "Genres"];
const barColors = [
  "#7360DF",
  "#de32f5",
  "#00bbbb",
  "#00ff9d",
];
const borderColors = [
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
];


interface PieProps {
  dataValue: number[];
}
const PieChart = ({ dataValue }: PieProps) => {
  const data = {
    labels,
    datasets: [
      {
        data: dataValue,
        backgroundColor: barColors,
        borderColor: borderColors,
      }
    ]
  };
  return (
    <Pie
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "top",
            align: "start",
          },
          title: { position: "top", padding: 16, text: "All Time Analysis", display: false,color:"#7360df" }
        },
      }}
      data={data}
    />
  );
};

export default PieChart;

import {} from "./styles";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export const Graph: React.FC = () => {
  const series = [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ];
  const options: ApexOptions = {
    title: {
      text: "Barras",
      align: "left",
      margin: 0,
      offsetX: -6,
      offsetY: 20,
      floating: false,
      style: {
        fontSize: "16px",
        fontWeight: "700",
        fontFamily: "Montserrat",
        color: "#5D405C",
      },
    },

    chart: {
      type: "bar",
      height: 350,
      offsetX: 33,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
  };
  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
        width={610}
      />
    </div>
  );
};

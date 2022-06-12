import {} from "./styles";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export const BarGraph: React.FC = () => {
  const series = [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ];

  const options: ApexOptions = {
    title: {
      text: "Barras",
      align: "left",
      margin: 5,
      offsetX: -10,
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
      toolbar: {
        show: true,
        offsetX: 18,
        offsetY: 20,
        tools: {
          download:
            '<img src="https://i.imgur.com/FNKAoCC.png" class="" width="25">',
          selection: true,
          zoom: false,
          zoomin: true,
          zoomout: true,
          pan: true,
          customIcons: [],
        },
      },
    },
    responsive: [
      {
        breakpoint: 721,
        options: {
          chart: {
            width: "90%",
          },
        },
      },
    ],
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
        "Coreia do Sul",
        "Canadá",
        "Reino Unido",
        "Holanda",
        "Itália",
        "França",
        "Japão",
        "Estados Unidos",
        "China",
        "Alemanha",
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

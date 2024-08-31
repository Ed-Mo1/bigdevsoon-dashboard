import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const RaderChart = () => {
  const data = [
    { region: "Asia", value: 2201 },
    { region: "Europe", value: 2865 },
    { region: "Pacific", value: 2475 },
    { region: "Americans", value: 1762 },
    { region: "Middle East", value: 1749 },
    { region: "Africa", value: 1591 },
  ];

  return (
    <ResponsiveContainer height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid stroke="#374151" floodColor={"696FFB"} fill="#000" />
        <PolarAngleAxis dataKey="region"  stroke="#9CA3AF" />
        <PolarRadiusAxis
          angle={30}
          domain={[0, 2865]}
          stroke="#9CA3AF"
          dataKey={"value"}
        />
        <Radar
          dataKey="value"
          stroke="#696FFB"
          fill="#696FFB"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RaderChart;

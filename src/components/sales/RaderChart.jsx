import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

import { radarData } from "../../constants";
const RaderChart = () => {
 

  return (
    <ResponsiveContainer height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
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

import { useContext } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ThemeContext } from "../../context/ThemeProvider";
const SalesChart = ({ salesData }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ResponsiveContainer height={300}>
      <LineChart data={salesData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" orientation="bottom" />
        <YAxis orientation="right" />
        <Tooltip
          label={"fd"}
          contentStyle={{
            borderRadius: "8px",
            backgroundColor: "#000",
            color: "#e5e7eb",
            borderColor: "#4b5563",
          }}
          itemStyle={{ color: "#e5e7eb" }}
        />
        <Line
          type="monotone"
          dot={{
            fill: theme === "dark" ? "#1F214A" : "#fff",
            strokeWidth: 2,
            r: 6,
          }}
          dataKey="revenue"
          stroke="#FF9E2B"
          fill="#FF9E2B"
        />
        <Line
          type="monotone"
          dot={{
            fill: theme == "dark" ? "#1F214A" : "#fff",
            strokeWidth: 2,
            r: 6,
          }}
          dataKey="target"
          stroke="#696FFB"
          fill="#696FFB"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;

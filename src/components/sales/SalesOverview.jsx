import { salesData } from "../../constants";
import SalesChart from "./SalesChart";
import SalesHeader from "./SalesHeader";
const SalesOverview = () => {
  return (
    <div className="p-5 rounded space-y-8 dark:bg-dark-blue bg-white shadow-lg border border-white-16 dark:border-black-16">
      <SalesHeader
        totalRevenue={salesData.totalRevenue}
        totalTarget={salesData.totalTarget}
      />

      <SalesChart salesData={salesData.salesOverview} />
    </div>
  );
};

export default SalesOverview;

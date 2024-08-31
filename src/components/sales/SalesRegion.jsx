import RaderChart from "./RaderChart";

const SalesRegion = () => {
  return (
    <div className="dark:bg-dark-blue shadow-lg bg-white p-8 max-sm:p-4 overflow-auto h-full  space-y-8 rounded">
      <h2 className="header-s">Sales by Region</h2>
      <RaderChart />
    </div>
  );
};

export default SalesRegion;

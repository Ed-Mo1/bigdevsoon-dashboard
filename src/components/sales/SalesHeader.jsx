
const SalesHeader = ({ totalRevenue, totalTarget }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-between items-center">
      <h2 className="header-s">Sales Overview</h2>

      <div className="flex max-sm:gap-5 gap-10 flex-wrap justify-end max-sm:w-full items-center">
        <div className="space-y-1">
          <h4 className="text-[14px] relative before:absolute before:left-[-12%] before:top-1/2 before:-translate-y-[50%] before:aspect-square before:w-[8px] before:rounded-full before:bg-blue dark:text-white-60 text-black-60">
            Total Revenge
          </h4>

          <h3 className="text-black font-bold text-[14px]  dark:text-white">
            ${totalRevenue}
          </h3>
        </div>
        <div className="space-y-1">
          <h4 className="text-[14px] relative before:absolute before:left-[-12%] before:top-1/2 before:-translate-y-[50%] before:aspect-square before:w-[8px] before:rounded-full before:bg-orange dark:text-white-60 text-black-60">
            Total Revenge
          </h4>

          <h3 className="text-black font-bold text-[14px]  dark:text-white">
            ${totalTarget}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SalesHeader;

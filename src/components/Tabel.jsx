import { useState } from "react";
import { tabelData } from "../constants";

const Tabel = () => {
  const [selecetAll, setSelectAll] = useState(false);
  return (
    <div className="p-5 space-y-3 min-h-full overflow-auto rounded bg-white dark:bg-dark-blue shadow-lg">
      <h2 className="header-s text-black dark:text-white">
        List of Integration
      </h2>
      <table cellPadding={10} cellSpacing={10} className="w-full h-full">
        <thead className="dark:bg-white-8 bg-blue-8 rounded capitalize text-black-60 dark:text-white-60">
          <th>
            <input
              checked={selecetAll}
              onChange={() => setSelectAll(!selecetAll)}
              type="checkbox"
              className="size-4 outline-none bg-transparent"
            />
          </th>
          <th>Application</th>
          <th>type</th>
          <th>rate</th>
          <th>Profit</th>
        </thead>

        <tbody className="divide-y  divide-black-16 dark:divide-white-16 space-y-2">
          {tabelData.map((d, i) => {
            return (
              <tr
                key={i}
                className="text-center  text-black-60 dark:text-white-60 py-5"
              >
                <td>
                  <input
                    checked={selecetAll || undefined}
                    type="checkbox"
                    className="size-4 outline-none bg-transparent"
                  />
                </td>
                <td>
                  <img
                    src={d.logo}
                    alt={d.type}
                    className="w-[30px] mx-auto aspect-square"
                  />
                </td>
                <td>{d.type}</td>
                <td className="flex relative h-fit items-center gap-2">
                  <div
                    className={`w-full  py-1 relative rounded-full bg-blue-20`}
                  >
                    <div
                      style={{ width: `${d.rate}%` }}
                      className="absolute top-0 left-0 rounded-full bg-blue h-full"
                    />
                  </div>

                  <span>{d.rate}%</span>
                </td>
                <td>${d.profit}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tabel;

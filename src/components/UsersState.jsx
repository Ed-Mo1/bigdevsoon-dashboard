import { PiUsers } from "react-icons/pi";

const Details = ({ total, name, type, reverse = false }) => {
  return (
    <div
    style={{direction:reverse?'rtl':'ltr'}}
      className={`relative space-y-2  before:h-full before:absolute ${
        reverse ? "before:right-[-12%]" : "before:left-[-12%]"
      } before:top-1/2 before:-translate-y-[50%] before:aspect-square before:w-[5px] before:rounded-full ${
        type == "premium" ? " before:bg-blue" : "before:bg-blue-60"
      } `}
    >
      <h3 className="text-black font-bold text-[14px] lg:text-base dark:text-white">
        {total}
      </h3>
      <h3 className="text-black-60 font-bold text-[14px] lg:text-base  dark:text-white-60">
        {name}
      </h3>
    </div>
  );
};

const UsersState = () => {
  return (
    <div className="p-5 shadow-lg rounded bg-white dark:bg-dark-blue">
      <h2 className="header-s">Registered Users</h2>

      <div className="users space-y-1 relative mt-8 p-10 max-sm:max-w-[200px] max-w-[300px] mx-auto aspect-square grid place-content-center ">
        <div className="p-3 max-sm:p-2 w-fit mx-auto rounded-full bg-blue-20 shadow-lg">
          <div className="p-1 rounded-full bg-white-20 dark:bg-blue-12">
            <PiUsers className="text-blue text-xl max-sm:text-base" />
          </div>
        </div>

        <h2 className="header-xl text-center max-sm:text-sm">3,201</h2>

        <h5 className="dark:text-white-60 max-sm:text-sm text-center text-black-60">Total users</h5>
      </div>

      <div className="flex mt-10 flex-wrap px-5 gap-5 justify-between items-center">
        <Details total="2,201" name="Premium Users" type="premium" />
       <div className="ms-auto">
       <Details total="397" name="Basic Users" reverse={true} type="basi" />
       </div>
      </div>
    </div>
  );
};

export default UsersState;

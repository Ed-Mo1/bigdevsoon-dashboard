import { useLayoutEffect } from "react";
import SideBar from "./components/sidebar/SideBar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  useLayoutEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-shrink-0 overflow-auto sidebar">
        <SideBar />
      </div>

      <div className="flex-grow overflow-x-hidden overflow-y-auto">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;

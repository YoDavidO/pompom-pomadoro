
import { useState } from "react";
import clsx from "clsx";

import { AppHeader, AppNavigation } from "./components";
import { PomView } from "./views/PomView";

import './App.css';



function App() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="App w-full h-full bg-pomDark px-6 py-16 relative overflow-hidden">
      <AppNavigation className={clsx(navOpen && "open")} />
      <div className={clsx("app-wrapper relative", navOpen && "open")}>
        <AppHeader onMenuClick={() => setNavOpen(!navOpen)} open={navOpen} />
        <PomView />
      </div>
    </div>
  );
}

export default App;

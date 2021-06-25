
import { useState } from "react";
import clsx from "clsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot, useRecoilValue } from "recoil";

import { AppHeader, AppNavigation, Modal } from "./components";
import { PomView } from "./views/PomView";
import { PomsView } from "./views/PomsView";
 
import './App.css';



function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <RecoilRoot>
      <div className="App w-full h-full bg-pomDark px-6 py-16 relative overflow-hidden relative">
        <Router>
          <AppNavigation className={clsx(navOpen && "open")} onNavClick={setNavOpen} />
          <div className={clsx("app-wrapper relative", navOpen && "open")}>
            <AppHeader onMenuClick={() => setNavOpen(!navOpen)} open={navOpen} />
            <Switch>
              <Route exact path="/">
                <PomView />
              </Route>
              <Route path="/poms">
                <PomsView />
              </Route>
            </Switch>
          </div>

          <Modal />
        </Router>
      </div>
    </RecoilRoot>
  );
}

export default App;

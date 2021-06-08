
import { AppHeader } from "./components/AppHeader";

import { PomView } from "./views/PomView";
import './App.css';

function App() {
  return (
    <div className="App w-full h-full bg-pomDark px-6 py-16">
      <AppHeader />
      <PomView />
    </div>
  );
}

export default App;

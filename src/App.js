import React, { useState } from 'react';
import Tabs from './Tabs';
import Content from './Content';
import "./App.css";

let dataVal = [
  {
    name: "Step 1",
    description:
      "STEP ONE: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    name: "Step 2",
    description:
      "STEP TWO: Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui id est."
  },
  {
    name: "Step 3",
    description:
      "STEP THREE: Sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
  }
];


function App() {
  const [activeTab, setActiveTab] = useState('Step 1');

  const clickHandle = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="App">
      <div>
        <button onClick={() => clickHandle('Step 2')}>Go to Step 2</button>
      </div>
      <Tabs data={dataVal} activeTab={activeTab} onTabClick={clickHandle} />
      <Content data={dataVal} activeTab={activeTab} />
    </div>
  );
}

export default App;

import React from 'react';

const Tabs = ({ data, activeTab, onTabClick }) => {
  return (
    <div className="tabs">
      {data.map((val, index) => (
        <div 
          key={index} 
          className={activeTab === val.name ? 'active' : ''} 
          onClick={() => onTabClick(val.name)}
        >
          {val.name}
        </div>
      ))}
    </div>
  );
};

export default Tabs;

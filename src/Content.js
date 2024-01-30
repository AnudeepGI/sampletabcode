import React from 'react';

const Content = ({ data, activeTab }) => {
  return (
    <div className="content">
      {data.map((val, index) => (
        <div 
          key={index} 
          className={`tab-content ${activeTab === val.name ? 'active' : ''}`}
        >
          {val.description}
        </div>
      ))}
    </div>
  );
};

export default Content;

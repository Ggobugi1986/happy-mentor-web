// Import React
import React from 'react';

const Menu = () => {
  // Set Data
  const menu = [
    {
      label: '비전 & 미션',
    },
    {
      label: '경영목표 & 전략목표',
    },
    {
      label: '연혁조직',
    },
    {
      label: '수상 & 협력기관',
    },
  ];

  return (
    <div className="flex flex-wrap p-3 mb-4">
      {menu.map((menuItem, index) => (
        <div key={index} className="flex-none w-1/2 h-12 p-1">
          <div className="h-full flex items-center justify-center border border-gray-300 rounded bg-gray-200">
            <div className="font-semibold text-slate-900">{menuItem.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;

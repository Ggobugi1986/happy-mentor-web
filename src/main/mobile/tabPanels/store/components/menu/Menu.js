import React from 'react';

const Menu = () => {
  // Set Data
  const menu = [
    {
      label: '네이버 쇼핑',
    },
    {
      label: '11번가',
    },
    {
      label: '36.5 이스토어',
    },
    {
      label: '쿠팡',
    },
  ];

  return (
    <div className="flex flex-wrap p-3">
      {menu.map((menuItem, index) => (
        <div key={index} className="flex-none w-1/2 h-12 p-1">
          <div className="h-full flex items-center justify-center border border-gray-200 rounded bg-gray-100">
            <div className="font-semibold text-gray-900">{menuItem.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;

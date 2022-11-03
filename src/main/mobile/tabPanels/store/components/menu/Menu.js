import React from 'react';

const Menu = () => {
  const menu = [
    {
      icon: 'naver.png',
      label: '네이버 스토어',
    },
    {
      icon: 'coupang.png',
      label: '쿠팡 스토어',
    },
    {
      icon: '11.png',
      label: '11번가 스토어',
    },
    {
      icon: '365.png',
      label: '36.5 이스토어',
    },
  ];

  return (
    <div className="flex flex-wrap p-3">
      {menu.map((menuItem, index) => (
        <div key={index} className="flex-none w-1/2 h-12 p-1">
          <div className="h-full flex items-center pl-4 space-x-4 border border-slate-100 rounded bg-slate-50">
            <img
              src={`/assets/stores/${menuItem.icon}`}
              alt=""
              className="h-5"
            />
            <div className="font-semibold text-slate-900">{menuItem.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;

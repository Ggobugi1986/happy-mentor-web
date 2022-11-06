import React from 'react';

const Menu = () => {
  const menu = [
    {
      icon: 'naver.png',
      label: '네이버 스토어',
      url: 'https://smartstore.naver.com/starzone0171/products/6610859847?',
    },
    {
      icon: 'coupang.png',
      label: '쿠팡 스토어',
      url: 'https://www.coupang.com/np/search?q=%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%8A%A4%20%ED%86%A0%ED%83%88%EC%BC%80%EC%96%B4%20%EC%86%94%EB%A3%A8%EC%85%98%20%27%ED%9D%AC%EB%A7%9D%EA%B3%BC%20%EC%9A%A9%EA%B8%B0%27&channel=auto',
    },
    {
      icon: '11.png',
      label: '11번가 스토어',
      url: 'https://www.11st.co.kr/products/4640653651?trTypeCd=21&trCtgrNo=585021',
    },
    {
      icon: '365.png',
      label: '36.5 이스토어',
      url: 'https://www.sepp.or.kr/products/view/031LPSE202209060000101400',
    },
  ];

  return (
    <div className="flex flex-wrap p-3">
      {menu.map((menuItem, index) => (
        <div key={index} className="flex-none w-1/2 h-12 p-1">
          <div
            className="h-full flex items-center pl-4 space-x-4 border border-slate-100 rounded bg-slate-50"
            onClick={() => window.open(menuItem.url, '_blank')}
          >
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

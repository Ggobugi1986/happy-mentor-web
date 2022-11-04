import React from 'react';

const Footer = () => {
  return (
    <div className="px-4">
      <div className="mb-4 bg-slate-300" style={{ height: 1 }} />
      <div className="mb-4">
        <div className="text-sm font-bold text-slate-900">해피멘토협동조합</div>
      </div>
      <div className="mb-4">
        <div className="text-xs text-slate-500">대표: 박서후</div>
        <div className="text-xs text-slate-500">
          주소: 경기도 화성시 동탄반석로124 센타프라자 6층 602호
        </div>
        <div className="text-xs text-slate-500">
          사업자등록번호: 135-86-43857
        </div>
        <div className="text-xs text-slate-500">전화번호: 031-8003-1390</div>
        <div className="text-xs text-slate-500">팩스: 031-8003-1391</div>
        <div className="text-xs text-slate-500">
          이메일: happymentor1390@gmail.com
        </div>
        <div className="text-xs text-slate-500">
          Copyrights © 2020 by happy-mentor. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;

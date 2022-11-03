import React, { useContext } from 'react';
import { systemContext } from 'contexts';

const HeaderA = () => {
  const { appBarTitle } = useContext(systemContext);

  return (
    <div className="fixed inset-x-0 top-0 h-14 flex items-center px-2 bg-white z-50">
      <div className="w-10 h-10" />
      <div className="flex-1 flex justify-center px-2">
        <div className="text-lg font-bold text-slate-900">{appBarTitle}</div>
      </div>
      <div className="w-10 h-10" />
    </div>
  );
};

export default HeaderA;

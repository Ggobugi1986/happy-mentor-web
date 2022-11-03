import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const SectionHeader = ({ title, more }) => {
  return (
    <div className="flex items-center justify-between mb-2 px-4">
      <div className="text-lg font-semibold text-slate-900">{title}</div>

      {more && (
        <div className="flex items-center space-x-2" onClick={more}>
          <div className="text-sm font-semibold text-slate-900">더보기</div>
          <HiOutlineArrowNarrowRight className="text-slate-900" />
        </div>
      )}
    </div>
  );
};

export default SectionHeader;

import React from 'react';
import programs from 'data/programs';
import { useLinkClick } from 'hooks/mobile';
import { Programs, SectionHeader } from 'ui/mobile';

const PastPrograms = () => {
  const handleLinkClick = useLinkClick();

  const sectionHeaderProps = {
    title: '지난 프로그램',
    more: () => handleLinkClick(`/programs/learning2`, '프로그램', 'up'),
  };

  return (
    <div className="mb-8">
      <SectionHeader {...sectionHeaderProps} />
      <Programs {...programs['learning2']} />

      <div className="px-4 pt-4">
        <div
          className="h-8 flex items-center justify-center border border-slate-500 rounded"
          onClick={() =>
            handleLinkClick(`/programs/learning2`, '프로그램', 'up')
          }
        >
          <div className="font-semibold text-slate-500">+ 모두 보기</div>
        </div>
      </div>
    </div>
  );
};

export default PastPrograms;

import React from 'react';
import programs from 'data/programs';
import { useLinkClick } from 'hooks/mobile';
import { Posters, SectionHeader } from 'ui/mobile';

const PastPrograms = () => {
  const handleLinkClick = useLinkClick();

  const sectionHeaderProps = {
    title: '지난 프로그램',
    more: () => handleLinkClick(`/articles`, '언론 기사', 'up'),
  };

  return (
    <div className="mb-4">
      <SectionHeader {...sectionHeaderProps} />

      <Posters type="learning" posters={programs['learningPrograms']} />
    </div>
  );
};

export default PastPrograms;

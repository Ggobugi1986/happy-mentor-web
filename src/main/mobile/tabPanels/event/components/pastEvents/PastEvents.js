import React from 'react';
import programs from 'data/programs';
import { useLinkClick } from 'hooks/mobile';
import { Posters, SectionHeader } from 'ui/mobile';

const PastEvents = () => {
  const handleLinkClick = useLinkClick();

  const sectionHeaderProps = {
    title: '지난 행사',
    more: () => handleLinkClick(`/articles`, '언론 기사', 'up'),
  };

  return (
    <div className="mb-8">
      <SectionHeader {...sectionHeaderProps} />
      <Posters {...programs['event']} />
    </div>
  );
};

export default PastEvents;

import React from 'react';
import news from 'data/news';
import { useLinkClick } from 'hooks/mobile';
import { News, SectionHeader } from 'ui/mobile';

const LearningNews = () => {
  const handleLinkClick = useLinkClick();

  const sectionHeaderProps = {
    title: '배움 소식',
    more: () => handleLinkClick(`/articles`, '언론 기사', 'up'),
  };

  return (
    <div className="mb-8">
      <SectionHeader {...sectionHeaderProps} />
      <News type="event" news={news['eventNews']} />
    </div>
  );
};

export default LearningNews;

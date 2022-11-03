import React from 'react';
import news from 'data/news';
import { useLinkClick } from 'hooks/mobile';
import { News, SectionHeader } from 'ui/mobile';

const EventNews = () => {
  const handleLinkClick = useLinkClick();

  const sectionHeaderProps = {
    title: '행사 소식',
    more: () => handleLinkClick(`/articles`, '언론 기사', 'up'),
  };

  return (
    <div className="mb-8">
      <SectionHeader {...sectionHeaderProps} />
      <News type="event" news={news['eventNews']} />
    </div>
  );
};

export default EventNews;

import React from 'react';
import news from 'data/news';
import { useLinkClick } from 'hooks/mobile';
import { News, SectionHeader } from 'ui/mobile';

const HappyMentorNews = () => {
  const handleLinkClick = useLinkClick();

  const sectionHeaderProps = {
    title: '해피멘토 소식',
    more: () => handleLinkClick(`/articles`, '언론 기사', 'up'),
  };

  return (
    <div className="mb-8">
      <SectionHeader {...sectionHeaderProps} />
      <News {...news['happyMentor']} />
    </div>
  );
};

export default HappyMentorNews;

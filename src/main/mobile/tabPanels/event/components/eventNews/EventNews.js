import React from 'react';
import news from 'data/news';
import { useLinkClick } from 'hooks/mobile';
import { News, SectionHeader } from 'ui/mobile';

const EventNews = () => {
  const handleLinkClick = useLinkClick();

  const sectionHeaderProps = {
    title: '행사 소식',
    more: () => handleLinkClick(`/news/event`, '소식', 'up'),
  };

  return (
    <div className="mb-8">
      <SectionHeader {...sectionHeaderProps} />
      <News {...news['event']} />

      <div className="px-4 pt-4">
        <div
          className="h-8 flex items-center justify-center border border-slate-500 rounded"
          onClick={() => handleLinkClick(`/news/event`, '소식', 'up')}
        >
          <div className="font-semibold text-slate-500">+ 모두 보기</div>
        </div>
      </div>
    </div>
  );
};

export default EventNews;

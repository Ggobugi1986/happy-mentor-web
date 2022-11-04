import React, { useContext } from 'react';
import { mobileLayoutContext } from 'contexts';
import { useLinkClick } from 'hooks/mobile';

const News = ({ category, news }) => {
  const { clientWidth } = useContext(mobileLayoutContext);

  const handleLinkClick = useLinkClick();

  let title;

  if (category === 'happyMentor') {
    title = '해피멘토 소식';
  } else if (category === 'event') {
    title = '활동 소식';
  } else if (category === 'learnng') {
    title = '배움 소식';
  } else {
    title = '소식';
  }

  return news.map((newsItem) => (
    <div
      key={newsItem.id}
      className="flex mb-2 px-4 space-x-4"
      onClick={() =>
        handleLinkClick(`/news/${category}/${newsItem.id}`, title, 'up')
      }
    >
      <div style={{ width: clientWidth - 128 }}>
        <div className="mb-1">
          <div className="text-sm font-medium text-slate-700">
            {newsItem.type === 'partner' && '업무협약'}
            {newsItem.type === 'review' && '후기'}
          </div>
        </div>

        <div className="mb-1">
          <div className="font-semibold text-slate-900 truncate">
            {newsItem.title}
          </div>
        </div>

        <div className="text-xs text-slate-500">{newsItem.date}</div>
      </div>

      <div
        style={{
          backgroundImage: `url(/assets/news/${category}/${newsItem.id}/1.jpeg)`,
        }}
        className="w-20 h-20 rounded bg-cover bg-center"
      />
    </div>
  ));
};

export default News;

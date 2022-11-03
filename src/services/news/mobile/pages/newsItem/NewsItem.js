import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import news from 'data/news';
import { useLinkClick, usePage } from 'hooks/mobile';
import { HeaderB, PaperB } from 'ui/mobile';

const NewsItem = () => {
  const { category, id } = useParams();

  const newsItem = news[category].news.find((newsItem) => newsItem.id === id);

  const initializePage = usePage();
  const handleLinkCliek = useLinkClick();

  useEffect(() => {
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

    initializePage(title);
  }, [category, initializePage]);

  const headerBProps = {
    title: '해피멘토 소식 보기',
    leftButton: {
      icon: 'FiChevronDown',
      action: () => handleLinkCliek('/', '해피멘토협동조합', 'down'),
    },
  };

  let type;

  if (newsItem.type === 'partner') {
    type = '업무협약';
  } else if (newsItem.type === 'review') {
    type = '후기';
  } else {
    type = '기타';
  }

  return (
    <PaperB>
      <HeaderB {...headerBProps} />
      <div className="absolute inset-0 top-14 overflow-y-scroll">
        <div
          style={{
            backgroundImage: `url('/assets/news/${category}/${newsItem.id}/1.jpeg')`,
          }}
          className="h-60 mb-4 bg-cover bg-center"
        />

        <div className="mb-4 px-4">
          <div className="mb-2">
            <div className="font-medium text-slate-700">{type}</div>
          </div>

          <div className="mb-2">
            <div className="text-lg font-semibold text-slate-900">
              {newsItem.title}
            </div>
          </div>

          <div className="flex justify-end mb-4">
            <div className="text-sm text-slate-500">{newsItem.date}</div>
          </div>

          <div className="text-slate-900 text-justify">
            <div dangerouslySetInnerHTML={{ __html: newsItem.description }} />
          </div>
        </div>
      </div>
    </PaperB>
  );
};

export default NewsItem;

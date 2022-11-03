import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import news from 'data/news';
import { useLinkClick, usePage } from 'hooks/mobile';
import { HeaderB, PaperB } from 'ui/mobile';

const NewsItem = () => {
  const { type, id } = useParams();

  const newsItem = news[`${type}News`].find((newsItem) => newsItem.id === id);

  const initializePage = usePage();
  const handleLinkCliek = useLinkClick();

  useEffect(() => {
    initializePage('소식');
  }, [initializePage]);

  const headerBProps = {
    leftButton: {
      icon: 'FiChevronDown',
      action: () => handleLinkCliek('/', '해피멘토협동조합', 'down'),
    },
  };

  return (
    <PaperB>
      <HeaderB {...headerBProps} />
      <div className="absolute inset-0 top-14">
        <div className="px-4 mb-4">
          <div className="text-lg font-semibold text-slate-900">
            {newsItem.title}
          </div>
        </div>

        <div className="mb-4">
          <div
            style={{
              backgroundImage: `url('/assets/${type}NewsImages/${newsItem.id}/1.jpeg')`,
            }}
            className="w-full h-60 bg-cover bg-center"
          />
        </div>

        <div className="px-4">
          <div className="font-medium text-slate-900">
            {newsItem.description}
          </div>
        </div>
      </div>
    </PaperB>
  );
};

export default NewsItem;

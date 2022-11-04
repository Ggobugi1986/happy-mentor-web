import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { mobileLayoutContext } from 'contexts';
import news from 'data/news';
import { useLinkClick, usePage } from 'hooks/mobile';
import { HeaderB, PaperB } from 'ui/mobile';
import { Content } from '../../sharedComponents';

const News = () => {
  const { category } = useParams();

  const { clientWidth } = useContext(mobileLayoutContext);

  const [idSelected, setIdSelected] = useState(null);

  const initializePage = usePage();
  const handleLinkClick = useLinkClick();

  useEffect(() => {
    initializePage('소식');
  }, [initializePage]);

  let title;

  if (category === 'happyMentor') {
    title = '해피멘토 소식';
  } else if (category === 'event') {
    title = '행사 소식';
  } else if (category === 'learning') {
    title = '배움 소식';
  } else {
    title = '소식';
  }

  const headerBProps1 = {
    title: title,
    leftButton: {
      icon: 'FiChevronDown',
      action: () => handleLinkClick('/', '해피멘토협동조합', 'down'),
    },
  };

  const headerBProps2 = {
    title: '뒤로',
    leftButton: {
      icon: 'FiChevronLeft',
      action: () => setIdSelected(null),
    },
  };

  return (
    <PaperB>
      {!idSelected ? (
        <>
          <HeaderB {...headerBProps1} />
          <div className="absolute inset-0 top-14 pt-8 overflow-y-scroll">
            {news[category].news.map((newsItem) => (
              <div
                key={newsItem.id}
                className="flex mb-2 px-4 space-x-4"
                onClick={() => setIdSelected(newsItem.id)}
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
            ))}
          </div>
        </>
      ) : (
        <>
          <HeaderB {...headerBProps2} />
          <div className="absolute inset-0 top-14 overflow-y-scroll">
            <Content category={category} id={idSelected} />
          </div>
        </>
      )}
    </PaperB>
  );
};

export default News;

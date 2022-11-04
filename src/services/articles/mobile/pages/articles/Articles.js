import React, { useEffect } from 'react';
import articles from 'data/articles';
import { useLinkClick, usePage } from 'hooks/mobile';
import { HeaderB, PaperB } from 'ui/mobile';

const Articles = () => {
  const initializePage = usePage();
  const handleLinkClick = useLinkClick();

  useEffect(() => {
    initializePage('언론 기사');
  }, [initializePage]);

  const headerBProps = {
    title: '해피멘토 언론 기사',
    leftButton: {
      icon: 'FiChevronDown',
      action: () => handleLinkClick('/', '해피멘토협동조합', 'down'),
    },
  };

  return (
    <PaperB>
      <HeaderB {...headerBProps} />
      <div className="absolute inset-0 top-14 pt-8 overflow-y-scroll">
        {articles.map((article) => (
          <div
            key={article.id}
            className="flex mb-4 px-4"
            onClick={() => window.open(article.url, '_blank')}
          >
            <div className="flex-1 flex flex-col justify-between">
              <div className="font-semibold text-slate-900">
                {article.title}
              </div>

              <div className="text-sm text-slate-500">
                {article.press} · {article.date}
              </div>
            </div>

            <div className="ml-4">
              <img
                src={`/assets/articles/${article.id}/1.jpeg`}
                alt=""
                className="flex-none w-32 h-24 rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </PaperB>
  );
};

export default Articles;

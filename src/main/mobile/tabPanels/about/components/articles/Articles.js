import React from 'react';
import articles from 'data/articles';
import { useLinkClick } from 'hooks/mobile';
import { SectionHeader } from 'ui/mobile';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Articles = () => {
  const handleLinkClick = useLinkClick();

  const sectionHeaderProps = {
    title: '언론에 소개된 해피멘토',
    more: () => handleLinkClick(`/articles`, '언론 기사', 'up'),
  };

  return (
    <div className="mb-4">
      <SectionHeader {...sectionHeaderProps} />
      <div className="flex pl-4 space-x-4 overflow-x-scroll">
        {articles.map((article) => (
          <div
            key={article.id}
            className="flex-none w-48 p-2 border border-slate-300 rounded bg-slate-100"
            onClick={() => window.open(article.url, '_blank')}
          >
            <div className="flex justify-center mb-2">
              <div className="text-xs font-bold text-slate-900">
                {article.press}
              </div>
            </div>

            <div className="h-16 mb-2 overflow-hidden">
              <img
                src={`/assets/articleImages/${article.id}/1.jpeg`}
                alt=""
                className="grayscale"
              />
            </div>

            <div className="mb-1">
              <div className="text-sm font-bold text-slate-900 truncate">
                {article.title}
              </div>
            </div>

            <div className="mb-4">
              <div className="text-xs font-semibold text-slate-500 truncate">
                {article.subtitle}
              </div>
            </div>

            <div className="flex items-center justify-end space-x-2">
              <div className="text-xs font-semibold text-slate-900">더보기</div>
              <HiOutlineArrowNarrowRight className="text-slate-900" />
            </div>
          </div>
        ))}

        <div className="flex-none w-2" />
      </div>
    </div>
  );
};

export default Articles;

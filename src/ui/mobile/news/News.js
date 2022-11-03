import React, { useContext } from 'react';
import { mobileLayoutContext } from 'contexts';
import { useLinkClick } from 'hooks/mobile';

const News = ({ type, news }) => {
  const { clientWidth } = useContext(mobileLayoutContext);

  const handleLinkClick = useLinkClick();

  return (
    <div>
      {news.map((newsItem) => (
        <div
          className="flex py-2 px-4 space-x-4"
          onClick={() =>
            handleLinkClick(`/news/${type}/${newsItem.id}`, '언론 기사', 'up')
          }
        >
          <div className="flex-1">
            <div className="flex mb-1">
              <div className="text-sm font-semibold text-slate-700">
                {newsItem.type === 'partner' && '업무혁약'}
              </div>
            </div>

            <div className="mb-1" style={{ width: clientWidth - 128 }}>
              <div className="text-lg font-semibold text-slate-900 truncate">
                {newsItem.title}
              </div>
            </div>

            <div className="text-xs text-slate-500">{newsItem.date}</div>
          </div>

          <img
            src={`/assets/${type}NewsImages/${newsItem.id}/${newsItem.thumbnail}`}
            alt=""
            className="flex-none w-20 h-20 rounded"
          />
        </div>
      ))}
    </div>
  );
};

export default News;

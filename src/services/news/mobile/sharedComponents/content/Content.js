import React from 'react';
import news from 'data/news';

const Content = ({ category, id }) => {
  const newsItem = news[category].news.find((newsItem) => newsItem.id === id);

  let type;

  if (newsItem.type === 'partner') {
    type = '업무협약';
  } else if (newsItem.type === 'review') {
    type = '후기';
  } else {
    type = '기타';
  }

  return (
    <>
      <div className="mb-8">
        <img
          src={`/assets/news/${category}/${newsItem.id}/1.jpeg`}
          alt=""
          className="w-full"
        />
      </div>

      <div className="mb-4 px-4">
        <div className="flex">
          <div className="mb-2 px-3 border border-slate-900 rounded-full">
            <div className="text-sm font-semibold text-slate-900">{type}</div>
          </div>
        </div>

        <div className="mb-1">
          <div className="text-lg font-semibold text-slate-900">
            {newsItem.title}
          </div>
        </div>

        <div className="mb-4">
          <div className="text-sm text-slate-500">{newsItem.date}</div>
        </div>

        <div className="text-slate-900 text-justify">
          <div dangerouslySetInnerHTML={{ __html: newsItem.description }} />
        </div>
      </div>
    </>
  );
};

export default Content;

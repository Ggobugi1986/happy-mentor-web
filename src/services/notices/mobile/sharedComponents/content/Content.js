import React from 'react';
import notices from 'data/notices';

const Content = ({ category, id }) => {
  const notice = notices[category].notices.find((notice) => notice.id === id);

  return (
    <>
      <div className="mb-4">
        <img src={`/assets/notices/${category}/${notice.id}/1.jpeg`} alt="" />
      </div>

      <div className="px-4 mb-4">
        <div className="mb-2">
          <div className="text-lg font-semibold text-slate-900">
            {notice.title}
          </div>
        </div>

        <div className="text-slate-900 text-justify">
          <div dangerouslySetInnerHTML={{ __html: notice.description }} />
        </div>
      </div>
    </>
  );
};

export default Content;

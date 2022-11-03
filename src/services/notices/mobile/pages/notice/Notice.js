import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import notices from 'data/notices';
import { useLinkClick, usePage } from 'hooks/mobile';
import { HeaderB, PaperB } from 'ui/mobile';

const NewsItem = () => {
  const { category, id } = useParams();

  const notice = notices[category].notices.find((notice) => notice.id === id);

  const initializePage = usePage();
  const handleLinkCliek = useLinkClick();

  useEffect(() => {
    initializePage('공지사항');
  }, [initializePage]);

  const headerBProps = {
    title: '공지사항 보기',
    leftButton: {
      icon: 'FiChevronDown',
      action: () => handleLinkCliek('/', '해피멘토협동조합', 'down'),
    },
  };

  return (
    <PaperB>
      <HeaderB {...headerBProps} />
      <div className="absolute inset-0 top-14 overflow-y-scroll">
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
      </div>
    </PaperB>
  );
};

export default NewsItem;

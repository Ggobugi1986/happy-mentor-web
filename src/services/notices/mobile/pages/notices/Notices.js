import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import notices from 'data/notices';
import { useLinkClick, usePage } from 'hooks/mobile';
import { HeaderB, PaperB } from 'ui/mobile';
import { FiChevronRight } from 'react-icons/fi';
import { Content } from '../../sharedComponents';

const Notices = () => {
  const { category } = useParams();

  const [idSelected, setIdSelected] = useState(null);

  const initializePage = usePage();
  const handleLinkClick = useLinkClick();

  useEffect(() => {
    initializePage('공지사항');
  }, [initializePage]);

  const headerBProps1 = {
    title: '해피멘토 공지사항',
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
            {notices['happyMentor'].notices.map((notice) => (
              <div
                key={notice.id}
                className="flex justify-between mb-2 px-4"
                onClick={() => setIdSelected(notice.id)}
              >
                <div className="text-slate-900 truncate">{notice.title}</div>
                <FiChevronRight className="text-slate-500" />
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

export default Notices;

import React from 'react';
import { SectionHeader } from 'ui/mobile';

const Notices = () => {
  const notices = [
    {
      id: 1,
      title: 'AR/메타버스 개념이해교육',
    },
    {
      id: 2,
      title: '평생교육사 실습생 모집',
    },
    {
      id: 3,
      title: '도시재생큐레이터 2급 자격증 과정',
    },
  ];

  const sectionHeaderProps = {
    title: '공지사항',
    more: () => {},
  };

  return (
    <div className="mb-8">
      <SectionHeader {...sectionHeaderProps} />

      {notices.map((notice) => (
        <div key={notice.id} className="px-4">
          <div className="mb-2">
            <div className="text-slate-900">{notice.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notices;

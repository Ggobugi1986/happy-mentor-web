import React from 'react';
import notices from 'data/notices';
import { useLinkClick } from 'hooks/mobile';
import { SectionHeader } from 'ui/mobile';
import { FiChevronRight } from 'react-icons/fi';

const Notices = () => {
  const handleLinkClick = useLinkClick();

  const sectionHeaderProps = {
    title: '공지사항',
    more: () => {},
  };

  return (
    <div className="mb-8">
      <SectionHeader {...sectionHeaderProps} />

      {notices['happyMentor'].notices.map((notice) => (
        <div
          key={notice.id}
          className="flex justify-between mb-2 px-4"
          onClick={() =>
            handleLinkClick(
              `/notices/happyMentor/${notice.id}`,
              '공지사항',
              'up'
            )
          }
        >
          <div className="text-slate-900 truncate">{notice.title}</div>
          <FiChevronRight className="text-slate-500" />
        </div>
      ))}
    </div>
  );
};

export default Notices;

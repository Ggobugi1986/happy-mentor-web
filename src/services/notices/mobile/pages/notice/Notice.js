import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLinkClick, usePage } from 'hooks/mobile';
import { HeaderB, PaperB } from 'ui/mobile';
import { Content } from '../../sharedComponents';

const NewsItem = () => {
  const { category, id } = useParams();

  const initializePage = usePage();
  const handleLinkClick = useLinkClick();

  useEffect(() => {
    initializePage('공지사항');
  }, [initializePage]);

  const headerBProps = {
    title: '공지사항 보기',
    leftButton: {
      icon: 'FiChevronDown',
      action: () => handleLinkClick('/', '해피멘토협동조합', 'down'),
    },
  };

  return (
    <PaperB>
      <HeaderB {...headerBProps} />
      <div className="absolute inset-0 top-14 pt-8 overflow-y-scroll">
        <Content category={category} id={id} />
      </div>
    </PaperB>
  );
};

export default NewsItem;

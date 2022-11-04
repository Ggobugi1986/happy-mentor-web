import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLinkClick, usePage } from 'hooks/mobile';
import { HeaderB, PaperB } from 'ui/mobile';
import { Content } from '../../sharedComponents';

const NewsItem = () => {
  const { category, id } = useParams();

  const initializePage = usePage();
  const handleLinkCliek = useLinkClick();

  useEffect(() => {
    let title;

    if (category === 'happyMentor') {
      title = '해피멘토 소식';
    } else if (category === 'event') {
      title = '활동 소식';
    } else if (category === 'learnng') {
      title = '배움 소식';
    } else {
      title = '소식';
    }

    initializePage(title);
  }, [category, initializePage]);

  const headerBProps = {
    title: '해피멘토 소식 보기',
    leftButton: {
      icon: 'FiChevronDown',
      action: () => handleLinkCliek('/', '해피멘토협동조합', 'down'),
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

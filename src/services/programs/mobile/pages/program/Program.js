import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLinkClick, usePage } from 'hooks/mobile';
import { HeaderB, PaperB } from 'ui/mobile';
import { Content } from '../../sharedComponents';

const Program = () => {
  const { category, id } = useParams();

  const initializePage = usePage();
  const handleLinkCliek = useLinkClick();

  useEffect(() => {
    initializePage('프로그램');
  }, [initializePage]);

  const headerBProps = {
    title: '프로그램 보기',
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

export default Program;

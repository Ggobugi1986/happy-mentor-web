import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLinkClick, usePage } from 'hooks/mobile';
import { HeaderB, PaperB } from 'ui/mobile';
import {
  AwardAndPartners,
  Goal,
  HistoryAndOrganization,
  VisionAndMission,
} from './components';

const About = () => {
  const { category } = useParams();

  const initializePage = usePage();
  const handleLinkClick = useLinkClick();

  useEffect(() => {
    initializePage('해피멘토 소개');
  }, [initializePage]);

  let title;

  if (category === 'awardAndPartners') {
    title = '수상 & 협력기관';
  } else if (category === 'goal') {
    title = '경영목표 & 전략목표';
  } else if (category === 'historyAndOrganization') {
    title = '연혁 & 조직';
  } else if (category === 'visionAndMission') {
    title = '비전 & 미션';
  } else {
    title = '해피멘토 소개';
  }

  const headerBProps = {
    title: title,
    leftButton: {
      icon: 'FiChevronDown',
      action: () => handleLinkClick('/', '해피멘토협동조합', 'down'),
    },
  };

  return (
    <PaperB>
      <HeaderB {...headerBProps} />
      <div className="absolute inset-0 top-14 pt-8 overflow-y-scroll">
        {category === 'awardAndPartners' && <AwardAndPartners />}
        {category === 'goal' && <Goal />}
        {category === 'historyAndOrganization' && <HistoryAndOrganization />}
        {category === 'visionAndMission' && <VisionAndMission />}
      </div>
    </PaperB>
  );
};

export default About;

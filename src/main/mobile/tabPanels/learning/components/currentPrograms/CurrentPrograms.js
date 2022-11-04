import React from 'react';
import programs from 'data/programs';
import { Programs, SectionHeader } from 'ui/mobile';

const CurrentPrograms = () => {
  const sectionHeaderProps = {
    title: '진행중인 프로그램',
  };

  return (
    <div className="mb-8">
      <SectionHeader {...sectionHeaderProps} />
      <Programs {...programs['learning1']} />
    </div>
  );
};

export default CurrentPrograms;

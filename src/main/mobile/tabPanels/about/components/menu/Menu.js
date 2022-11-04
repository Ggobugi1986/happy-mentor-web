import React from 'react';
import { useLinkClick } from 'hooks/mobile';

const Menu = () => {
  const handleLinkClick = useLinkClick();

  const menu = [
    {
      id: 'visionAndMission',
      label: '비전 & 미션',
    },
    {
      id: 'goal',
      label: '경영목표 & 전략목표',
    },
    {
      id: 'historyAndOrganization',
      label: '연혁조직',
    },
    {
      id: 'awardAndPartners',
      label: '수상 & 협력기관',
    },
  ];

  return (
    <div className="flex flex-wrap p-3 mb-4">
      {menu.map((menuItem, index) => (
        <div key={index} className="flex-none w-1/2 h-12 p-1">
          <div
            className="h-full flex items-center justify-center border border-slate-200 rounded bg-slate-100"
            onClick={() =>
              handleLinkClick(`/about/${menuItem.id}`, '해피멘토 소개', 'up')
            }
          >
            <div className="font-semibold text-slate-900">{menuItem.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;

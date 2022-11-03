import React from 'react';
import { SectionHeader } from 'ui/mobile';

const Partners = () => {
  const partners = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
    {
      id: 12,
    },
    {
      id: 13,
    },
    {
      id: 14,
    },
    {
      id: 15,
    },
    {
      id: 16,
    },
    {
      id: 17,
    },
    {
      id: 18,
    },
    {
      id: 19,
    },
    {
      id: 20,
    },
  ];

  const sectionHeaderProps = {
    title: '협력기관',
  };

  return (
    <div className="mb-8">
      <SectionHeader {...sectionHeaderProps} />
      <div className="flex flex-wrap">
        {partners.map((partner) => (
          <div key={partner.id} className="w-1/2 h-20 p-4">
            <img src={`/assets/partners/${partner.id}.jpeg`} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;

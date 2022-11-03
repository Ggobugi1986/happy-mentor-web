import React from 'react';
import { useLinkClick } from 'hooks/mobile';

const Posters = ({ type, posters }) => {
  const postersFiltered = posters.filter((poster, index) => index < 4);

  const handleLinkClick = useLinkClick();

  return (
    <div className="flex pl-4 space-x-4 overflow-x-scroll">
      {postersFiltered.map((poster) => (
        <div
          key={poster.id}
          className="flex-none w-32 flex flex-col"
          onClick={() =>
            handleLinkClick(`/programs/${type}/${poster.id}`, '행사', 'up')
          }
        >
          <div className="mb-2">
            <img
              src={`/assets/${type}Posters/${poster.id}.jpeg`}
              alt=""
              className="w-32 h-44 rounded"
            />
          </div>
          <div className="font-semibold text-slate-900 truncate">
            {poster.title}
          </div>
        </div>
      ))}

      <div className="flex-none w-2" />
    </div>
  );
};

export default Posters;

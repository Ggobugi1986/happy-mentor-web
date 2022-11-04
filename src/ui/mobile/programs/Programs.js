import React from 'react';
import { useLinkClick } from 'hooks/mobile';

const Programs = ({ category, programs }) => {
  const programsFiltered = programs.filter((program, index) => index < 4);

  const handleLinkClick = useLinkClick();

  return (
    <div className="flex pl-4 space-x-3 overflow-x-scroll">
      {programsFiltered.map((program) => (
        <div
          key={program.id}
          className="flex-none w-32 flex flex-col"
          onClick={() =>
            handleLinkClick(
              `/programs/${category}/${program.id}`,
              '프로그램',
              'up'
            )
          }
        >
          <div className="mb-2">
            <img
              src={`/assets/programs/${category}/${program.id}/1.jpeg`}
              alt=""
              className="w-32 h-44 rounded"
            />
          </div>
          <div className="font-semibold text-slate-900 truncate">
            {program.title}
          </div>
        </div>
      ))}

      <div className="flex-none w-1" />
    </div>
  );
};

export default Programs;

import React from 'react';
import programs from 'data/programs';

const Content = ({ category, id }) => {
  const program = programs[category].programs.find(
    (program) => program.id === id
  );

  return (
    <>
      <div className="mb-4">
        <img
          src={`/assets/programs/${category}/${program.id}/1.jpeg`}
          alt=""
          className="w-full"
        />
      </div>

      {program.description && (
        <div className="px-4">
          <div className="font-medium text-slate-900">
            {program.description}
          </div>
        </div>
      )}
    </>
  );
};

export default Content;

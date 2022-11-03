import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import programs from 'data/programs';
import { useLinkClick, usePage } from 'hooks/mobile';
import { HeaderB, PaperB } from 'ui/mobile';

const Program = () => {
  const { type, id } = useParams();

  const program = programs[`${type}Programs`].find(
    (program) => program.id === id
  );

  const initializePage = usePage();
  const handleLinkCliek = useLinkClick();

  useEffect(() => {
    initializePage('소식');
  }, [initializePage]);

  const headerBProps = {
    title: program.title,
    leftButton: {
      icon: 'FiChevronDown',
      action: () => handleLinkCliek('/', '해피멘토협동조합', 'down'),
    },
  };

  return (
    <PaperB>
      <HeaderB {...headerBProps} />
      <div className="absolute inset-0 top-14 overflow-y-scroll">
        <div className="mb-4">
          <img src={`/assets/${type}Posters/${program.id}.jpeg`} alt="" />
        </div>

        {program.description && (
          <div className="px-4">
            <div className="font-medium text-slate-900">
              {program.description}
            </div>
          </div>
        )}
      </div>
    </PaperB>
  );
};

export default Program;

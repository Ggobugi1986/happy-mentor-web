import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import programs from 'data/programs';
import { useLinkClick, usePage } from 'hooks/mobile';
import { HeaderB, PaperB } from 'ui/mobile';
import { Content } from '../../sharedComponents';

const Programs = () => {
  const { category } = useParams();

  const [idSelected, setIdSelected] = useState(null);

  const initializePage = usePage();
  const handleLinkClick = useLinkClick();

  useEffect(() => {
    initializePage('프로그램');
  }, [initializePage]);

  let title;

  if (category === 'event') {
    title = '행사 프로그램';
  } else if (category === 'learning2') {
    title = '배움 프로그램';
  } else {
    title = '프로그램';
  }

  const headerBProps1 = {
    title: title,
    leftButton: {
      icon: 'FiChevronDown',
      action: () => handleLinkClick('/', '해피멘토협동조합', 'down'),
    },
  };

  const headerBProps2 = {
    title: '뒤로',
    leftButton: {
      icon: 'FiChevronLeft',
      action: () => setIdSelected(null),
    },
  };

  return (
    <PaperB>
      {!idSelected ? (
        <>
          <HeaderB {...headerBProps1} />
          <div className="absolute inset-0 top-14 pt-8 overflow-y-scroll">
            {programs[category].programs.map((program) => (
              <div
                className="flex mb-4 px-4"
                onClick={() => setIdSelected(program.id)}
              >
                <img
                  src={`/assets/programs/${category}/${program.id}/1.jpeg`}
                  alt=""
                  className="flex-none w-24 h-32 rounded"
                />

                <div className="ml-4">
                  <div className="font-semibold text-slate-900">
                    {program.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <HeaderB {...headerBProps2} />
          <div className="absolute inset-0 top-14 overflow-y-scroll">
            <Content category={category} id={idSelected} />
          </div>
        </>
      )}
    </PaperB>
  );
};

export default Programs;

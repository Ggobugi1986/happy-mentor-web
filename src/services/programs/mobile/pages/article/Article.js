// Import React
import React, { useEffect } from 'react';

// Import Hooks
import { useLinkClick, usePage } from 'hooks/mobile';

// Import UI
import { HeaderB, PaperB } from 'ui/mobile';

const Article = () => {
  // Set Custom Hooks
  const initializePage = usePage();
  const handleLinkCliek = useLinkClick();

  // Set UseEffect Hooks
  useEffect(() => {
    initializePage('언론 기사');
  }, [initializePage]);

  // Set UI Props
  const headerBProps = {
    title: '용인시민신문',
    leftButton: {
      icon: 'FiChevronDown',
      action: () => handleLinkCliek('/', '뮤코 하우스', 'down'),
    },
    rightButtons: [
      {
        icon: 'FiShare2',
        action: () => {},
      },
    ],
  };

  return (
    <PaperB>
      <HeaderB {...headerBProps} />
      <div className="absolute inset-0 top-12 overflow-scroll">
        <div className="h-40 m-4 rounded-md bg-gray-300 overflow-hidden">
          <img
            src="/assets/images/0c3ad174-1491-42fd-b564-4c7eefc6af50.jpeg"
            alt=""
          />
        </div>
        <div className="p-4">
          <div className="mb-4">
            <div className="text-xl font-bold text-slate-900">
              커뮤니티를 일구는 ‘마음토닥토닥 합창단’
            </div>
          </div>
          <div className="text-lg font-medium text-slate-900 text-justify">
            <p className="mb-4">
              대한민국은 현재, 코로나19로 이웃과 소통이 단절되고 있다. 꼭 필요한
              경우가 아니라면 만남의 자리를 만들지 않는 것이 당연한 듯
              지역사회에 퍼져가고 있다.
            </p>
            <p className="mb-4">
              그러다 보니 사회적, 인간적 관계성이 약한 사람들은 더욱 고립된
              생활로 이어지고 있으며, 고독과 우울감을 병리적으로 호소하는
              사람들이 늘어가고 있다. 인간은 본래 사람과의 좋은 관계를 가지고
              살아갈 때 정서적 안정감과 행복감을 느끼며 장수한다는 것은 이미 잘
              알려진 사실이다.
            </p>
            <p>
              이러한 활동을 선구적으로 하고 있는 독일의 경우, 지역민들은 좋은
              관계망 속에 정서적으로 안정된 지역사회를 만들기 위해 지역 커뮤니티
              활동을 매우 중요시 한다.
            </p>
          </div>
        </div>
      </div>
    </PaperB>
  );
};

export default Article;

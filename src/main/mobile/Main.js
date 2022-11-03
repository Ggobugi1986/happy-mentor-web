import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePage } from 'hooks/mobile';
import { HeaderA, TabsA } from 'ui/mobile';
import { changeActiveTab } from 'store/slices/uiSlice';
import { About, Event, Learning, Now, Store } from './tabPanels';

const Main = () => {
  const { activeTab } = useSelector((state) => state.ui);

  const initializePage = usePage();

  const dispatch = useDispatch();

  useEffect(() => {
    initializePage('해피멘토협동조합');
  }, [initializePage]);

  const tabsAProps = {
    activeTab: activeTab,
    tabs: [
      {
        id: 'now',
        label: 'NOW',
        action: () => dispatch(changeActiveTab('now')),
      },
      {
        id: 'event',
        label: '행사',
        action: () => dispatch(changeActiveTab('event')),
      },
      {
        id: 'learning',
        label: '배움',
        action: () => dispatch(changeActiveTab('learning')),
      },
      {
        id: 'counseling',
        label: '상담',
        action: () => dispatch(changeActiveTab('counseling')),
      },
      {
        id: 'store',
        label: '스토어',
        action: () => dispatch(changeActiveTab('store')),
      },
      {
        id: 'about',
        label: '소개',
        action: () => dispatch(changeActiveTab('about')),
      },
    ],
    layoutId: 'mainTabsIndicator',
  };

  return (
    <>
      <HeaderA />
      <TabsA {...tabsAProps} />
      {activeTab === 'about' && <About />}
      {activeTab === 'event' && <Event />}
      {activeTab === 'learning' && <Learning />}
      {activeTab === 'now' && <Now />}
      {activeTab === 'store' && <Store />}
    </>
  );
};

export default Main;

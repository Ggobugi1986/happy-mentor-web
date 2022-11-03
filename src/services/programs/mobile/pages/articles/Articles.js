// Import React
import React, { useContext, useEffect, useState } from 'react';

// Import React-Router-Dom
import { useNavigate } from 'react-router-dom';

// Import Contexts
import { mobileLayoutContext } from 'contexts';

// Import Hooks
import { useLinkClick, usePage } from 'hooks/mobile';

// Import UI
import { HeaderB, PaperB } from 'ui/mobile';

// Import Components
import { ArticleList } from './components';

// Import Other Modules
import { motion } from 'framer-motion';

const Articles = () => {
  // Set UseContext Hooks
  const { clientWidth } = useContext(mobileLayoutContext);

  // Set UseState Hooks
  const [isSelected, setIsSelected] = useState(false);

  // Set Custom Hooks
  const initializePage = usePage();
  const handleLinkCliek = useLinkClick();

  // Set UseEffect Hooks
  useEffect(() => {
    initializePage('언론 기사');
  }, [initializePage]);

  // Set UseNavigate Hook
  const navigate = useNavigate();

  // Set UI Props
  const headerBPropsA = {
    title: '언론이 소개한 뮤코',
    leftButton: {
      icon: 'FiChevronDown',
      action: () => handleLinkCliek('/', '뮤코 하우스', 'down'),
    },
  };

  const headerBPropsB = {
    leftButton: {
      icon: 'FiChevronLeft',
      action: () => {
        navigate('/articles');
        setIsSelected(false);
      },
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
      <motion.div
        className="absolute inset-0"
        animate={{
          left: isSelected ? -clientWidth : 0,
          right: isSelected ? clientWidth : 0,
        }}
        transition={{ duration: 0.25 }}
      >
        <HeaderB {...headerBPropsA} />
        <div className="absolute inset-0 top-14">
          <ArticleList setIsSelected={setIsSelected} />
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-y-0"
        style={{ left: clientWidth, right: -clientWidth }}
        animate={{
          left: isSelected ? 0 : clientWidth,
          right: isSelected ? 0 : -clientWidth,
        }}
        transition={{ duration: 0.25 }}
      >
        <HeaderB {...headerBPropsB} />
      </motion.div>
    </PaperB>
  );
};

export default Articles;

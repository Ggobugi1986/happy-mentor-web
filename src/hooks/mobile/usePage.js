import { useContext } from 'react';
import { systemContext } from 'contexts';

const usePage = () => {
  const { setAppBarTitle } = useContext(systemContext);

  const initializePage = (title) => {
    setAppBarTitle(title);
  };

  return initializePage;
};

export default usePage;

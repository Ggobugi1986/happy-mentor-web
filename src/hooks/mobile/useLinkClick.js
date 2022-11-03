import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { mobileLayoutContext, systemContext } from 'contexts';

const useLinkClick = () => {
  const { setTransitionDirection, setIsTransitionCompleted } =
    useContext(mobileLayoutContext);
  const { setAppBarTitle } = useContext(systemContext);

  const navigate = useNavigate();

  const handleLinkClick = (path, title, direction) => {
    navigate(path);

    if (title) {
      setAppBarTitle(title);
    }

    if (direction) {
      setTransitionDirection(direction);
      setIsTransitionCompleted(false);
    }
  };

  return handleLinkClick;
};

export default useLinkClick;

import React from 'react';
import loadable from '@loadable/component';

const Image = ({ image }) => {
  const Image = loadable(() => import(`./images/${image}`));

  return <Image />;
};

export default Image;

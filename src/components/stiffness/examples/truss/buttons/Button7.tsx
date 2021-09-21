import React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

export const Button7: React.FC<{}> = () => {
  const Button7 = <TeX math='\theta_{3}' />;

  return <>Element 3 ({Button7})</>;
};

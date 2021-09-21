import React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

export const Button8: React.FC<{}> = () => {
  const Button8 = <TeX math='\theta_{4}' />;

  return <>Element 4 ({Button8})</>;
};

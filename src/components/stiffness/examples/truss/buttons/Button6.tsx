import React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

export const Button6: React.FC<{}> = () => {
  const Button6 = <TeX math='\theta_{2}' />;

  return <>Element 2 ({Button6})</>;
};

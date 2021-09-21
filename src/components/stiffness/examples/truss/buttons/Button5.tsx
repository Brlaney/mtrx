import React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

export const Button5: React.FC<{}> = () => {
  const Button5 = <TeX math='\theta_{1}' />;

  return <>Element 1 ({Button5})</>;
};

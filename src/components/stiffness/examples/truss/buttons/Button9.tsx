import React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

export const Button9: React.FC<{}> = () => {
  const Button9 = <TeX math='\theta_{5}' />;

  return <>Element 5 ({Button9})</>;
};

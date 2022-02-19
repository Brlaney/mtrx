import React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

export const Button1: React.FC<{}> = () => {
  const Button1 = <TeX math='\Delta_{V1}' />;

  return <>{Button1}</>
};

import React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

export const Button2: React.FC<{}> = () => {
  const Button2 = <TeX math='\Delta_{V2}' />;

  return <>{Button2}</>;
};

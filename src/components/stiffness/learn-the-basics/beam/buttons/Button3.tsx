import React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

export const Button3: React.FC<{}> = () => {
  const Button31 = <TeX math='\theta_{12}' />;
  const Button32 = <TeX math='\theta_{22}' />;

  return <> {Button31} & {Button32} </>;
};

export interface Choice1 {
  id: number;
  link: string;
  name: string;
  path: string;
  width: number;
  height: number;
};

export interface ITopicS {
  id: number;
  title: string;
  sections?: any | null | undefined;
};

export interface Isection {
  key: number;
  name: string;
  link: string;
};

export interface NodeCoordinates {
  xn: number;
  yn: number;
};

export interface IDispl {
  id: number;
  text: string;
};

export interface INav {
  id: number;
  name: string;
  link: string;
  active: number;
};

export interface ISteps {
  id: number;
  title: string;
};

export interface IPhase {
  id: number; 
  state: string;
  txt: string;
  tip: string;
  n1?: number;
  n2?: number;
  theta?: number;
};

export interface INode {
  index: number;
  id: string;
  cx: string;
  cy: string;
  r: string;
  activeAt: number[];
};

export interface IElement {
  index: number;
  id: string;
  d: string;
  activeAt: number[];
};

export interface IRod {
  id: number;
  name: string;
  d: string;
  index: number;
};

export interface IRodLine {
  id: number;
  name: string;
  d: string;
  color: string;
};

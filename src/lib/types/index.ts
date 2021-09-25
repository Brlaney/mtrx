export interface Choice1 {
  id: number;
  link: string;
  name: string;
  path: string;
  width: number;
  height: number;
};

export interface IBridgeComponents {
  id: number;
  component: string;
  path: string;
  source: string;
  name: string;
};

export interface ITopicB {
  id: number;
  title: string;
  sections?: any | null | undefined;
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

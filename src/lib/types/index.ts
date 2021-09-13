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

export interface IBridge {
  id: number;
  title: string;
  lower: string;
  content?: any | null | undefined;
};

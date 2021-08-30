export interface Location {
  id: number;
  name: string;
  abbr: string;
};

export interface IData {
  id: number;
  State: string;
  Number: number;
  Percent: number;
};

export interface IApi {
  id: number;
  cat1?: number | null;
  cat2?: number | null;
  cat3?: number | null;
  cat4?: number | null;
  cat5?: number | null;
  cat6?: number | null;
  cat7?: number | null;
  cat8?: number | null;
  cat9?: number | null;
};

export interface IApi1 {
  id: number;
  link: string;
  name: string;
};

export interface Choice {
  id: number;
  link: string;
  name: string;
};

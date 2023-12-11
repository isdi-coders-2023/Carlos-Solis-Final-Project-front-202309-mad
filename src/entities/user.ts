import { Monument } from './monuments';

export type LoginUser = {
  email: string;
  passwd: string;
};

export type User = LoginUser & {
  id: string;
  username: string;
  monuments: Monument[];
};

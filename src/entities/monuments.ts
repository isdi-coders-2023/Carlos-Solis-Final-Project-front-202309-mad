import { ImgData } from '../types/img.data';
import { User } from './user';

export type Monument = {
  id: string;
  name: string;
  description: string;
  category: '' | '';
  img: ImgData;
  author: User;
};

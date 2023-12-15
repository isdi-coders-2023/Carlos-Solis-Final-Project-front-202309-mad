import { ImgData } from '../types/img.data';
import { User } from './user';

export type Monument = {
  id: string;
  name: string;
  description: string;
  category: 'Arab' | 'Roman';
  img: ImgData;
  author: User;
  culture: string;
};

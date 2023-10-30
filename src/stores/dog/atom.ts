import { atom, RecoilState } from 'recoil';

export type DogState = RecoilState<{ src: string; alt: string }>;

export const dogState = atom({
  key: 'dog',
  default: {
    src: '',
    alt: 'none'
  }
});

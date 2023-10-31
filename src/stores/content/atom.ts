import { atom, RecoilState } from 'recoil';

export type ContentState = RecoilState<{ visible: boolean; type: string }>;

export const contentState = atom({
  key: 'content',
  default: {
    visible: false,
    type: '',
    appear: false
  }
});

import { DefaultValue, selectorFamily } from 'recoil';
import { contentState } from '.';

export const contentSelectorState = selectorFamily({
  key: 'c',
  get:
    (param: 'visible' | 'appear' | 'type' | 'contentInfo') =>
    ({ get }) =>
      get(contentState)[param],
  set:
    (param: 'visible' | 'appear' | 'type' | 'contentInfo') =>
    ({ set }, newValue) => {
      if (newValue instanceof DefaultValue) return;
      set(contentState, (prev) => ({ ...prev, [param]: newValue }));
    }
});

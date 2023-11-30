import { DefaultValue, selector } from 'recoil';
import { menuState } from '.';

export const menuListState = selector({
  key: 'menuList',
  get: ({ get }) => get(menuState)['menuList'],
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) return;
    set(menuState, (prev) => ({ ...prev, ['menuList']: newValue }));
  }
});

export const activeState = selector({
  key: 'active',
  get: ({ get }) => get(menuState)['active'],
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) return;
    set(menuState, (prev) => ({ ...prev, ['active']: newValue }));
  }
});

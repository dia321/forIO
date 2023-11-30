import { DefaultValue, selectorFamily } from 'recoil';
import { layoutState } from '.';

export const layoutElementState = selectorFamily({
  key: 'lmf',
  get:
    (param: 'notificationPopupVisible' | 'searchVisible' | 'sideMenuExpanded' | 'size') =>
    ({ get }) =>
      get(layoutState)[param],
  set:
    (param: 'notificationPopupVisible' | 'searchVisible' | 'sideMenuExpanded' | 'size') =>
    ({ set }, newValue) => {
      if (newValue instanceof DefaultValue) return;
      set(layoutState, (prev) => ({ ...prev, [param]: newValue }));
    }
});

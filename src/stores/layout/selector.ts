import { DefaultValue, selectorFamily } from 'recoil';
import { layoutState } from '.';

export const navBarElementState = selectorFamily({
  key: 'lmf',
  get:
    (param: 'notificationPopupVisible' | 'searchVisible' | 'sideMenuExpanded') =>
    ({ get }) =>
      get(layoutState)[param],
  set:
    (param: 'notificationPopupVisible' | 'searchVisible' | 'sideMenuExpanded') =>
    ({ set }, newValue) => {
      if (newValue instanceof DefaultValue) return;
      set(layoutState, (prev) => ({ ...prev, [param]: newValue }));
    }
});

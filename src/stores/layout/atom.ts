import { atom, RecoilState } from 'recoil';

export type LayoutState = RecoilState<{ src: string; alt: string }>;

export const layoutState = atom({
  key: 'layout',
  default: {
    sideMenuExpanded: true,
    notificationPopupVisible: false,
    position: { top: 0, bottom: 0 },
    size: 'laptop'
  }
});

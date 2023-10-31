import { atom, RecoilState } from 'recoil';

export type LayoutState = RecoilState<{
  sideMenuExpanded: boolean;
  notificationPopupVisible: boolean;
  position: { x: number; y: number };
  size: string;
}>;

export const layoutState = atom({
  key: 'layout',
  default: {
    sideMenuExpanded: true,
    notificationPopupVisible: false,
    position: { x: 0, y: 0 },
    size: 'laptop'
  }
});

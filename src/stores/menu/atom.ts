import { atom } from 'recoil';

export const menuState = atom({
  key: 'menu',
  default: {
    menuList: [
      { menu: 'home', name: '홈' },
      { menu: 'shorts', name: '??' },
      { menu: 'subscribe', name: 'Contact' }
    ],
    active: 0
  }
});

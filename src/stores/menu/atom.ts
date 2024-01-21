import { atom } from 'recoil';

export const menuState = atom({
  key: 'menu',
  default: {
    menuList: [
      { menu: 'home', name: 'Home' },
      { menu: 'shorts', name: '볼거리' },
      { menu: 'subscribe', name: 'Contact' }
    ],
    active: 0
  }
});

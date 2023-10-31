import styled from 'styled-components';
import styles from './SideMenu.module.scss';
import HomeIcon from '../assets/home-icon.svg?react';
import HomeIconUnfocused from '../assets/home-icon-unfocused.svg?react';
import ShortsIcon from '../assets/shorts-icon.svg?react';
import SubscribeIcon from '../assets/subscribe-icon.svg?react';
import { useState } from 'react';
import { layoutState as loState } from '@stores/layout';
import { useRecoilValue } from 'recoil';

interface SideMenuProps {
  expanded: boolean;
}
const SideMenuArea = styled.div``;
const MenuContainer = styled.div``;
const IconContainer = styled.div``;
const IconWrapper = styled.div``;

export const SideMenu = (sideMenuProps: SideMenuProps) => {
  const { expanded = true } = sideMenuProps;
  const layoutState = useRecoilValue(loState);
  const menuList = [
    { menu: 'home', name: '홈' },
    { menu: 'shorts', name: 'Shorts' },
    { menu: 'subscribe', name: '구독' }
  ];
  const [selected, setSelected] = useState<{ [key: string]: boolean }>(
    menuList.reduce(
      (accumulator, value, index) => ({ ...accumulator, [value.menu]: index ? false : true }),
      {}
    )
  );
  const handleClick = (idx: number) => {
    setSelected(
      menuList.reduce(
        (accumulator, value, index) => ({
          ...accumulator,
          [value.menu]: index === idx ? true : false
        }),
        {}
      )
    );
  };
  return (
    <SideMenuArea className={`${styles['side-menu']} ${expanded && styles['expanded']}`}>
      {menuList.map((_, index) => (
        <MenuContainer
          className={styles['menu-container']}
          key={_.menu}
          data-selected={selected[_.menu]}
          onClick={() => handleClick(index)}
        >
          <IconWrapper className={styles['icon-wrapper']}>
            <IconContainer className={styles['icon-container']}>
              {_.menu === 'home' ? (
                selected[_.menu] || layoutState.size === 'laptop' ? (
                  <HomeIcon />
                ) : (
                  <HomeIconUnfocused />
                )
              ) : _.menu === 'shorts' ? (
                <ShortsIcon />
              ) : (
                <SubscribeIcon />
              )}
            </IconContainer>
          </IconWrapper>
          <div className={styles['menu-tab']}>{_.name}</div>
        </MenuContainer>
      ))}
    </SideMenuArea>
  );
};

import styled from 'styled-components';
import styles from './SideMenu.module.scss';
import HomeIcon from '@assets/home-icon.svg?react';
import HomeBlackIcon from '@assets/home-black-icon.svg?react';
import ShortsIcon from '@assets/shorts-icon.svg?react';
import ShortsBlackIcon from '@assets/shorts-black-icon.svg?react';
import SubscribeIcon from '@assets/subscribe-icon.svg?react';
import SubscribeBlackIcon from '@assets/subscribe-black-icon.svg?react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { activeState, menuListState } from '@stores/menu';

interface SideMenuProps {
  expanded: boolean;
}
const SideMenuArea = styled.div``;
const MenuContainer = styled.div``;
const IconContainer = styled.div``;
const IconWrapper = styled.div``;

const SideMenu = (sideMenuProps: SideMenuProps) => {
  const { expanded = true } = sideMenuProps;

  const menuList = useRecoilValue(menuListState);
  const [active, setActive] = useRecoilState(activeState);

  const handleClick = (idx: number) => {
    setActive(idx);
  };
  return (
    <SideMenuArea className={`${styles['side-menu']} ${expanded && styles['expanded']}`}>
      {menuList.map((_, index) => (
        <MenuContainer
          className={styles['menu-container']}
          key={_.menu}
          data-selected={active === index}
          onClick={() => handleClick(index)}
        >
          <IconWrapper className={styles['icon-wrapper']}>
            <IconContainer className={styles['icon-container']}>
              {_.menu === 'home' ? (
                active === 0 ? (
                  <HomeBlackIcon />
                ) : (
                  <HomeIcon />
                )
              ) : _.menu === 'shorts' ? (
                active === 1 ? (
                  <ShortsBlackIcon />
                ) : (
                  <ShortsIcon />
                )
              ) : _.menu === 'subscribe' ? (
                active === 2 ? (
                  <SubscribeBlackIcon />
                ) : (
                  <SubscribeIcon />
                )
              ) : (
                ''
              )}
            </IconContainer>
          </IconWrapper>
          <div className={styles['menu-tab']}>{_.name}</div>
        </MenuContainer>
      ))}
    </SideMenuArea>
  );
};

export { SideMenu };

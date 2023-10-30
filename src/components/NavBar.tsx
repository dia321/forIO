import { useEffect, useRef, useState } from 'react';

import NameLogo from '../assets/name-logo.svg?react';
import smPhoto from '../assets/sm.jpg';
import BurgerIcon from '../assets/hamburger-menu.svg?react';
import SearchIcon from '../assets/search-icon.svg?react';
import SpeackIcon from '../assets/speak-icon.svg?react';
import NewVideoIcon from '../assets/new-video-icon.svg?react';
import NotificationIcon from '../assets/notification-icon.svg?react';

import styled from 'styled-components';
import styles from './NavBar.module.scss';

import Tooltip from './Tooltip';
import { layoutState as loState } from '@stores/layout';
import { useRecoilState } from 'recoil';

const NavBarArea = styled.div``;
const Partition = styled.div``;
const BurgerContainer = styled.div``;
const SearchContainer = styled.div``;
const SearchInputContainer = styled.div``;
const SearchButtonContainer = styled.div``;
const SpeakContainer = styled.div``;
const NewVidContainer = styled.div``;
const NotificationContainer = styled.div``;
const UserContainer = styled.div``;

interface EventTargetWithId extends EventTarget {
  id: string;
}

export const NavBar = () => {
  const [focused, setFocused] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState<{ [key: string]: boolean }>({
    search: false,
    speak: false,
    newVid: false,
    notification: false
  });
  const [layoutState, setLayoutState] = useRecoilState(loState);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleMouseEnter: React.MouseEventHandler = (e) => {
    const { id } = e.currentTarget as EventTargetWithId;
    const newObj: { [key: string]: boolean } = {};
    newObj[id] = true;
    for (const key in tooltipVisible) {
      if (key !== id) {
        newObj[key] = false;
      }
    }
    setTooltipVisible(newObj);
  };
  const handleMouseLeave: React.MouseEventHandler = (e) => {
    const { id } = e.currentTarget as EventTargetWithId;
    console.log(id, e.type);
    setTooltipVisible({ ...tooltipVisible, [id]: false });
  };

  const handleMenuClick = () => {
    setLayoutState({ ...layoutState, sideMenuExpanded: !layoutState.sideMenuExpanded });
  };

  const handleInputClick = (e: MouseEvent) => {
    const { id } = e.target as EventTargetWithId;
    if (
      (inputRef.current && inputRef.current.contains(e.target as Node)) ||
      id === 'search-input-area'
    ) {
      // 클릭 이벤트가 input 요소 외부에서 발생한 경우
      inputRef.current?.focus();
    } else setFocused(false);
  };
  const handleNotificationClick: React.MouseEventHandler = (e) => {
    e.stopPropagation();
    setLayoutState((prev) => ({
      ...prev,
      notificationPopupVisible: !prev.notificationPopupVisible
    }));
  };
  useEffect(() => {
    // 컴포넌트가 마운트될 때 document에 클릭 이벤트 리스너 추가
    document.addEventListener('click', handleInputClick);

    return () => {
      // 컴포넌트가 언마운트될 때 클릭 이벤트 리스너 제거
      document.removeEventListener('click', handleInputClick);
    };
  }, []);
  return (
    <>
      <NavBarArea className={styles['nav-bar']}>
        <Partition className={styles['partition']}>
          <BurgerContainer className={`${styles['burger-container']}`} onClick={handleMenuClick}>
            <BurgerIcon className={styles['burger-menu']} />
          </BurgerContainer>
          <div className="flex cursor-pointer">
            <img src={smPhoto} className={styles['photo']} />
            <NameLogo />
            <span className={styles['korea']}>KR</span>
          </div>
        </Partition>
        <Partition className={styles['partition']}>
          <SearchContainer className={styles['search-container']} onClick={() => setFocused(true)}>
            <SearchInputContainer
              className={styles['search-input-container']}
              data-focused={focused}
              id="search-input-area"
            >
              <SearchIcon
                className={`${styles['search-icon']} ${styles['front']}`}
                data-focused={focused}
              />
              <div className="flex w-full justify-between">
                <input
                  className={styles['search-input']}
                  placeholder="검색"
                  type="text"
                  onFocus={() => setFocused(true)}
                  // onBlur={() => setFocused(false)}
                  ref={inputRef}
                />
                <a href="" className="p-1">
                  <img
                    className={styles['keyboard']}
                    src="//www.gstatic.com/inputtools/images/tia.png"
                  />
                </a>
              </div>
            </SearchInputContainer>
            <SearchButtonContainer
              className={styles['search-button-container']}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              id="search"
            >
              <SearchIcon
                className={`${styles['search-icon']} ${styles['back']}`}
                data-focused={focused}
              />
              <Tooltip content="검색" visible={tooltipVisible.search} />
            </SearchButtonContainer>
            <SpeakContainer>
              <div
                className={`${styles['speak-icon-container']}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                id="speak"
              >
                <SpeackIcon />
              </div>
              <Tooltip content="음성으로 검색" visible={tooltipVisible.speak} />
            </SpeakContainer>
          </SearchContainer>
        </Partition>
        <Partition className={`${styles['partition']} ${styles['shortcut-container']}`}>
          <NewVidContainer
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            id="newVid"
            onClick={() => alert('soon')}
          >
            <div className={styles['new-video-container']}>
              <NewVideoIcon />
            </div>
            <Tooltip content="만들기" visible={tooltipVisible.newVid} />
          </NewVidContainer>
          <NotificationContainer
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            id="notification"
            onClick={handleNotificationClick}
          >
            <div className={styles['notification-container']}>
              <NotificationIcon />
            </div>
            <span className={styles['red']}>2</span>
            <Tooltip content="알림" visible={tooltipVisible.notification} />
          </NotificationContainer>
          <UserContainer className={styles['user-container']}>b</UserContainer>
        </Partition>
      </NavBarArea>
    </>
  );
};

import { useEffect, useRef, useState } from 'react';

import NameLogo from '@assets/name-logo.svg?react';
import smPhoto from '@assets/sm.jpg';
import BurgerIcon from '@assets/hamburger-menu.svg?react';
import SearchIcon from '@assets/search-icon.svg?react';
import SpeackIcon from '@assets/speak-icon.svg?react';
import NewVideoIcon from '@assets/new-video-icon.svg?react';
import NotificationIcon from '@assets/notification-icon.svg?react';
import BackArrowIcon from '@assets/back-arrow-icon.svg?react';

import styles from './NavBar.module.scss';

import { Tooltip } from '@component/.';
import { layoutState as loState, notificationState } from '@stores/layout';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Search } from '@component/Search';
import { layoutElementState } from '@stores/layout/selector';

interface EventTargetWithId extends EventTarget {
  id: string;
}
interface EventTargetWithValue extends EventTarget {
  value: string;
}

const NavBar = () => {
  const [focused, setFocused] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState<{ [key: string]: boolean }>({
    search: false,
    speak: false,
    newVid: false,
    notification: false
  });
  const [notificationPopupState, setNotificationPopupState] = useRecoilState(
    layoutElementState('notificationPopupVisible')
  );
  const setSearchState = useSetRecoilState(layoutElementState('searchVisible'));
  const [sideMenuState, setSideMenuState] = useRecoilState(layoutElementState('sideMenuExpanded'));
  const [layoutState] = useRecoilState(loState);
  const [noteCountState, setNoteCountState] = useState(0);
  const noteState = useRecoilValue(notificationState);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const searchList = [
    'Profile',
    '프로필',
    '기술',
    '기술 스택',
    'Skill',
    'Stack',
    '개인정보',
    'Tech Stack',
    'Project',
    'Project experience',
    'Tech'
  ];
  const [suggestions, setSuggestions] = useState<string[]>(searchList.slice(0, 8));

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
    setTooltipVisible({ ...tooltipVisible, [id]: false });
  };

  const handleMenuClick = () => {
    setSideMenuState(!sideMenuState);
  };

  const handleInputClick = (e: MouseEvent) => {
    e.stopPropagation();
    const { id } = e.target as EventTargetWithId;
    console.log(id, 'handleInputCLick');
    if (
      (inputRef.current && inputRef.current.contains(e.target as Node)) ||
      id === 'search-input-area' ||
      id === 'search-icon-in-input-area' ||
      id === 'responsive-search-icon'
    ) {
      // 클릭 이벤트가 input 요소 외부에서 발생한 경우
      inputRef.current?.focus();
      setFocused(true);
      setSearchState(true);
    } else {
      setFocused(false);
      setSearchState(false);
    }
  };
  const handleInputChange: React.ChangeEventHandler = (e) => {
    const { value } = e.target as unknown as EventTargetWithValue;

    const filteredSuggestions = searchList.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions.slice(0, 8));
  };

  const handleNotificationClick: React.MouseEventHandler = (e) => {
    e.stopPropagation();
    setNotificationPopupState(!notificationPopupState);
  };
  useEffect(() => {
    // 컴포넌트가 마운트될 때 document에 클릭 이벤트 리스너 추가
    document.addEventListener('click', handleInputClick);

    return () => {
      // 컴포넌트가 언마운트될 때 클릭 이벤트 리스너 제거
      document.removeEventListener('click', handleInputClick);
    };
  }, []);
  useEffect(() => {
    let count = 0;
    for (const n of noteState.note) if (n.on) count++;
    setNoteCountState(count);
  }, [noteState]);

  return (
    <>
      <div className={styles['nav-bar']}>
        <div
          className={`${styles['partition']} ${styles['front']} ${
            focused ? styles['input-focused'] : ''
          }`}
        >
          <div className={`${styles['burger-container']}`} onClick={handleMenuClick}>
            <div className={styles['burger-menu']}>
              <BurgerIcon />
            </div>
          </div>
          <div className="flex cursor-pointer">
            <img src={smPhoto} className={styles['photo']} />
            <NameLogo />
            <span className={styles['korea']}>KR</span>
          </div>
        </div>
        <div
          className={`${styles['back-arrow-container']} ${focused ? styles['input-focused'] : ''}`}
        >
          <div className={styles['icon-container']}></div>
          <BackArrowIcon />
        </div>
        <div className={styles['partition']}>
          <div
            className={`${styles['search-container']} ${focused ? styles['input-focused'] : ''}`}
            onClick={() => setFocused(true)}
          >
            <div
              className={styles['search-input-container']}
              data-focused={focused}
              id="search-input-area"
            >
              <div
                className={`${styles['search-icon-container']} ${styles['front']}`}
                data-focused={focused}
              >
                <SearchIcon id="search-icon-in-input-area" />
              </div>
              <div className="flex w-full justify-between">
                <input
                  className={styles['search-input']}
                  placeholder="검색"
                  type="text"
                  onFocus={() => setFocused(true)}
                  ref={inputRef}
                  onChange={handleInputChange}
                />
                <a href="" className="p-1">
                  <img
                    className={styles['keyboard']}
                    src="//www.gstatic.com/inputtools/images/tia.png"
                  />
                </a>
              </div>
              {layoutState.searchVisible && <Search suggestions={suggestions} />}
            </div>
            <div
              className={styles['search-button-container']}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              id="search"
            >
              <div className={`${styles['search-icon-container']}`}>
                <SearchIcon />
              </div>
              <Tooltip content="검색" visible={tooltipVisible.search} />
            </div>
            <div>
              <div
                className={`${styles['speak-icon-container']}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                id="speak"
              >
                <SpeackIcon />
              </div>
              <Tooltip content="음성으로 검색" visible={tooltipVisible.speak} />
            </div>
          </div>
        </div>
        <div
          className={`${styles['partition']} ${styles['shortcut-container']} ${
            layoutState.size !== 'laptop' ? (focused ? styles['input-focused'] : '') : ''
          }`}
        >
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            id="newVid"
            onClick={() => alert('soon')}
            className={styles['new-video-container']}
          >
            <div className={styles['new-video-icon-container']}>
              <NewVideoIcon />
            </div>
            <Tooltip content="만들기" visible={tooltipVisible.newVid} />
          </div>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            id="notification"
            onClick={handleNotificationClick}
            className={styles['notification-container']}
          >
            <div className={styles['notification-icon-container']}>
              <NotificationIcon />
            </div>
            {noteCountState > 0 && <span className={styles['red']}>{noteCountState}</span>}
            {layoutState.size === 'laptop' && (
              <Tooltip content="알림" visible={tooltipVisible.notification} />
            )}
          </div>
          <div className={styles['user-container']}>b</div>
          <div className={styles['responsive-search-container']} onClick={() => handleInputClick}>
            <div className={styles['responsive-search-icon-container']}>
              <SearchIcon id="responsive-search-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { NavBar };

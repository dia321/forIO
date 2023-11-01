import { useEffect, useRef, useState } from 'react';
import s from './NotificationPopup.module.scss';
import { layoutState as loState } from '@stores/layout';
import { useRecoilState } from 'recoil';
import XButtonBlackIcon from '@assets/x-button-black-icon.svg?react';
import smPhoto from '@assets/sm.jpg';
import ThreeDotIcon from '@assets/three-dot-icon.svg?react';
import EyeHideIcon from '@assets/eye-hide-icon.svg?react';
import EyeIcon from '@assets/eye-icon.svg?react';
import { EventTargetWithId } from 'src/@type';

export const NotificationPopup = () => {
  const [layoutState, setLayoutState] = useRecoilState(loState);
  const notList = [
    { content: '???님이 좋아요를 눌렀습니다.', date: '1주 전' },
    { content: '김성민님이 정보처리기사 자격증을 획득하였습니다.', date: '2달 전' }
  ];
  const [clicked, setClicked] = useState(-1);
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 이벤트 핸들러 함수를 만들어 배경을 클릭했을 때 팝업을 숨깁니다.
    const handleBackgroundClick = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setLayoutState((prev) => ({ ...prev, notificationPopupVisible: false }));
      }
    };

    // 배경 클릭 이벤트를 추가합니다.
    if (layoutState.notificationPopupVisible) {
      document.addEventListener('click', handleBackgroundClick);
    } else {
      document.removeEventListener('click', handleBackgroundClick);
    }

    // 컴포넌트가 언마운트될 때 이벤트 핸들러를 제거합니다.
    return () => {
      document.removeEventListener('click', handleBackgroundClick);
    };
  }, []);
  return (
    <div ref={popupRef} className={`${s['wrapper']}`}>
      <div className={s['header']}>
        <span>알림</span>
        <div
          className={s['x-button-container']}
          onClick={() => setLayoutState((prev) => ({ ...prev, notificationPopupVisible: false }))}
        >
          <XButtonBlackIcon />
        </div>
      </div>
      {notList.map((_, i) => (
        <div className={s['not-container']} key={`-${i}`}>
          <div className={s['dot']}></div>
          <div className={s['sticker-area']}>
            <div className={s['sticker-container']}>
              <img src={smPhoto} className={s['photo']} />
            </div>
          </div>
          <div className={s['description']}>
            <div className={s['content']}>{_.content}</div>
            <div className={s['date']}>{_.date}</div>
          </div>
          <div
            className={`${s['three-dot-wrapper']} ${clicked === i ? s['clicked'] : ''}`}
            onClick={() => setClicked(i)}
          >
            <div className={s['three-dot-container']}>
              <ThreeDotIcon />
            </div>
          </div>
          {clicked === i && (
            <div className={s['menu-wrapper']}>
              <div className={s['menu-container']}>
                <div className={s['icon']}>
                  <EyeHideIcon />
                </div>
                <div>이 알림 숨기기</div>
              </div>
              <div className={s['menu-container']}>
                <div className={s['icon']}>
                  <EyeIcon />
                </div>
                <div>이 알림 보이기</div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

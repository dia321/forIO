import { useEffect, useRef } from 'react';
import s from './NotificationPopup.module.scss';
import { layoutState as loState } from '@stores/layout';
import { useRecoilState } from 'recoil';
import XButtonBlackIcon from '@assets/x-button-black-icon.svg?react';

export const NotificationPopup = () => {
  const [layoutState, setLayoutState] = useRecoilState(loState);

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
    </div>
  );
};

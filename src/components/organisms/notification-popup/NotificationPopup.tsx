import { useEffect, useRef, useState } from 'react';
import s from './NotificationPopup.module.scss';
import { layoutState as loState, notificationState } from '@stores/layout';
import { useRecoilState } from 'recoil';
import XButtonBlackIcon from '@assets/x-button-black-icon.svg?react';
import smPhoto from '@assets/sm.jpg';
import ThreeDotIcon from '@assets/three-dot-icon.svg?react';
import EyeHideIcon from '@assets/eye-hide-icon.svg?react';
import EyeIcon from '@assets/eye-icon.svg?react';
import { EventTargetWithId } from '@type';

const NotificationPopup = () => {
  const [, setLayoutState] = useRecoilState(loState);
  const [noteState, setNoteState] = useRecoilState(notificationState);
  const [clicked, setClicked] = useState(-1);
  const [animation, setAnimation] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleMenuClick: React.MouseEventHandler = (e) => {
    e.stopPropagation();
    const { id } = e.currentTarget as EventTargetWithId;
    setNoteState((prev) => ({
      note: prev.note.map((n, idx) => {
        if (String(idx) === id) return { ...n, on: !n.on };
        else return n;
      })
    }));
    setClicked(-1);
  };
  console.log(noteState);
  useEffect(() => {
    const handleBackgroundClick = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setLayoutState((prev) => ({ ...prev, notificationPopupVisible: false }));
      }
    };
    document.addEventListener('click', handleBackgroundClick);

    return () => {
      document.removeEventListener('click', handleBackgroundClick);
    };
  }, []);
  useEffect(() => {
    const handleMenuOffClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setClicked(-1);
      }
    };
    document.addEventListener('click', handleMenuOffClick);

    return () => {
      document.removeEventListener('click', handleMenuOffClick);
    };
  }, [clicked >= 0]);
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
      {noteState.note.map((_, i) => (
        <div className={s['not-container']} key={`-${i}`}>
          <div className={`${s['dot']} ${_.on ? s['blue'] : ''}`}></div>
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
            className={`${s['three-dot-wrapper']} ${clicked === i ? s['clicked'] : ''} ${
              animation ? s['click-animation'] : ''
            }`}
            onClick={(e) => {
              e.stopPropagation();
              if (clicked === i) setClicked(-1);
              else setClicked(i);
              if (animation) setAnimation(false);
              setTimeout(() => setAnimation(true), 10);
            }}
          >
            <div className={s['three-dot-container']}>
              <ThreeDotIcon />
            </div>
          </div>
          {clicked === i && (
            <div className={s['menu-wrapper']} ref={menuRef}>
              <div className={s['menu-container']} id={`${i}`} onClick={handleMenuClick}>
                <div className={s['icon']}>{_.on ? <EyeHideIcon /> : <EyeIcon />}</div>
                <div>이 알림 {_.on ? '숨기기' : '보이기'}</div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export { NotificationPopup };

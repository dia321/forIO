import { useRecoilState } from 'recoil';
import { contentState as ctState } from '@stores/content';
import s from '../styles/Player.module.scss';
import XButtonIcon from '@assets/x-button-icon.svg?react';
import { useRef } from 'react';

export const Player = () => {
  const [contentState, setContentState] = useRecoilState(ctState);

  const popupRef = useRef<HTMLDivElement | null>(null);

  const handleBackgroundClick: React.MouseEventHandler = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
      setContentState((prev) => ({ ...prev, visible: false }));
      setTimeout(() => setContentState((prev) => ({ ...prev, appear: false })), 500);
    }
  };

  return (
    <div
      className={`${s['player-area']} 
      ${!contentState.visible ? s['pop-out'] : ''}`}
      onClick={handleBackgroundClick}
    >
      <div className={s['player-wrapper']} ref={popupRef}>
        <div className={s['video']}>{contentState.type}</div>
        <div className={s['description']}></div>
        <div className={s['info']}></div>
        <div
          className={s['x-button-container']}
          onClick={() => {
            setContentState((prev) => ({ ...prev, visible: false }));
            setTimeout(() => setContentState((prev) => ({ ...prev, appear: false })), 500);
          }}
        >
          <XButtonIcon />
        </div>
      </div>
      ;
    </div>
  );
};

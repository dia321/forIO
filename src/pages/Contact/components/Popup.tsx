import s from '../styles/Popup.module.scss';
import XButtonBlackIcon from '@assets/x-button-black-icon.svg?react';
import GlobeIcon from '@assets/globe-icon.svg?react';
import SubscriberIcon from '@assets/subscriber-icon.svg?react';
import VideoIcon from '@assets/video-icon.svg?react';
import ViewIcon from '@assets/view-icon.svg?react';
import InfoIcon from '@assets/info-icon.svg?react';
import ShareIcon from '@assets/share-icon.svg?react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { layoutElementState } from '@stores/layout';

interface PopupProps {
  handleClickX: () => void;
}

const Popup = (props: PopupProps) => {
  const { handleClickX } = props;
  const [animation, setAnimation] = useState(false);
  const setPopupVisible = useSetRecoilState(layoutElementState('channelInfoPopupVisible'));
  const setPopAlert = useSetRecoilState(layoutElementState('popAlert'));
  const popupRef = useRef<HTMLDivElement | null>(null);

  const detail = [
    { icon: <GlobeIcon />, text: 'dia321.github.io' },
    { icon: <SubscriberIcon />, text: '생년월일: 1991. 11. 18.' },
    { icon: <VideoIcon />, text: '동영상 3개' },
    { icon: <ViewIcon />, text: '방문수 142회' }
  ];

  useEffect(() => {
    const handleBackgroundClick = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setPopupVisible(false);
      }
    };
    document.addEventListener('click', handleBackgroundClick);

    return () => {
      document.removeEventListener('click', handleBackgroundClick);
    };
  }, []);
  return (
    <>
      <div className={s['bg']}>
        <div className={s['popup']} ref={popupRef}>
          <div className={s['header']}>
            <div className={s['header-title']}>정보</div>
            <div className={s['x-button-container']} onClick={handleClickX}>
              <XButtonBlackIcon />
            </div>
          </div>
          <div className={s['detail-area']}>
            <div className={s['detail-header']}>채널 세부 정보</div>
            <ol>
              {detail.map((d, i) => (
                <Fragment key={`detail${i}`}>
                  <li className={s['detail-list']}>
                    <span className={s['icon-container']}>{d.icon}</span>
                    <span>{d.text}</span>
                  </li>
                </Fragment>
              ))}
            </ol>
          </div>
          <div className="text-xs mb-2 bg-orange-50">
            <span className="inline-block h-4 w-4 align-middle mr-1">
              <InfoIcon />
            </span>
            문의 또는 버그제보는 010-2054-2959로 연략 부탁드립니다.
          </div>
          <button
            className={`${s['share-button']} ${animation ? s['click-animation'] : ''}`}
            onClick={() => {
              if (animation) setAnimation(false);
              setTimeout(() => setAnimation(true), 10);
              navigator.clipboard.writeText('dia321.github.io');
              setPopAlert({ visible: true, content: '사이트 주소가 클립보드에 복사되었습니다.' });
            }}
          >
            <div className={s['icon-container']}>
              <ShareIcon />{' '}
            </div>
            <div>채널 공유</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Popup;

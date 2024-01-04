import s from '../styles/Popup.module.scss';
import XButtonBlackIcon from '@assets/x-button-black-icon.svg?react';
import GlobeIcon from '@assets/globe-icon.svg?react';
import SubscriberIcon from '@assets/subscriber-icon.svg?react';
import VideoIcon from '@assets/video-icon.svg?react';
import ViewIcon from '@assets/view-icon.svg?react';
import InfoIcon from '@assets/info-icon.svg?react';
import ShareIcon from '@assets/share-icon.svg?react';
import { Fragment, useState } from 'react';

interface PopupProps {
  handleClickX: () => void;
}

const Popup = (props: PopupProps) => {
  const { handleClickX } = props;
  const [animation, setAnimation] = useState(false);

  const detail = [
    { icon: <GlobeIcon />, text: 'dia321.github.io' },
    { icon: <SubscriberIcon />, text: '구독자 5명' },
    { icon: <VideoIcon />, text: '동영상 4개' },
    { icon: <ViewIcon />, text: '조회수 142회' },
    { icon: <InfoIcon />, text: '생년월일: 1991. 11. 18.' }
  ];

  return (
    <>
      <div className={s['bg']}>
        <div className={s['popup']}>
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
          <button
            className={`${s['share-button']} ${animation ? s['click-animation'] : ''}`}
            onClick={() => {
              if (animation) setAnimation(false);
              setTimeout(() => setAnimation(true), 10);
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

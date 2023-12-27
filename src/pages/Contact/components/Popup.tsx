import s from '../styles/Popup.module.scss';
import XButtonBlackIcon from '@assets/x-button-black-icon.svg?react';

const Popup = () => {
  return (
    <>
      <div className={s['bg']}>
        <div className={s['popup']}>
          <div className="flex justify-between">
            <div className={s['header']}>정보</div>
            <div className={s['x-button-container']}>
              <XButtonBlackIcon />
            </div>
          </div>
          <div>채널 세부 정보</div>
          <ol>
            <li></li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Popup;

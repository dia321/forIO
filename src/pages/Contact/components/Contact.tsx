import s from '../styles/Contact.module.scss';
import smPhoto from '@assets/sm.jpg';
import smPhoto1 from '@assets/sm2.jpg';
import smPhoto2 from '@assets/sm3.jpg';
import smPhoto3 from '@assets/sm4.jpg';
import AngleLeftIcon from '@assets/angle-left-icon.svg?react';
import AngleRightIcon from '@assets/angle-right-icon.svg?react';
import ThinAngleRightIcon from '@assets/thin-angle-right-icon.svg?react';
import { Fragment, useEffect, useRef, useState } from 'react';
import Popup from './Popup';
import { useRecoilState } from 'recoil';
import { layoutElementState } from '@stores/layout';

const Contact = () => {
  const photoRef = useRef<HTMLDivElement>(null);
  const photoList = [smPhoto, smPhoto1, smPhoto2, smPhoto3, smPhoto];
  const [slide, setSlide] = useState({
    ing: false,
    direction: '',
    idx: 0
  });
  const [popup, setPopup] = useRecoilState(layoutElementState('channelInfoPopupVisible'));
  const handlePopup = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPopup(true);
  };
  const handleClickX = () => {
    setPopup(false);
  };

  useEffect(() => {
    if (slide.ing)
      setTimeout(() => {
        setSlide({ ...slide, ing: false });
      }, 300);
  }, [slide.ing]);

  return (
    <div className={s['contact']}>
      {popup && <Popup handleClickX={handleClickX} />}
      <div className={s['info-card']}>
        <div></div>
        <div className={s['card-inner']}>
          <div
            className={`${s['angle-zone']} ${s['left']}`}
            onClick={(e) => {
              e.stopPropagation();
              if (slide.ing) return;
              setSlide({ idx: slide.idx === 0 ? 3 : slide.idx - 1, direction: 'left', ing: true });
            }}
          >
            <AngleLeftIcon />
          </div>
          <div className={s['photo-zone']}>
            <div
              className={`${s['ref-control']} ${s[`i-${slide.idx}`]} ${s[`${slide.direction}`]}`}
              ref={photoRef}
            >
              {photoList.map((p, idx) => (
                <Fragment key={`photo${idx}`}>
                  <img src={p} className={s['photo-container']} />
                </Fragment>
              ))}
            </div>
          </div>
          <div
            className={`${s['angle-zone']} ${s['right']}`}
            onClick={(e) => {
              e.stopPropagation();
              if (slide.ing) return;
              setSlide({ idx: slide.idx === 3 ? 0 : slide.idx + 1, direction: 'right', ing: true });
            }}
          >
            <AngleRightIcon />
          </div>
        </div>
        <div className={s['info']}>
          <div className="text-4xl font-bold text-black">김성민</div>
          <div className={s['description']}>@Frontend Developer</div>
          <div className={`${s['description']} flex cursor-pointer`} onClick={handlePopup}>
            채널 자세히 알아보기 <ThinAngleRightIcon className="h-6" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;

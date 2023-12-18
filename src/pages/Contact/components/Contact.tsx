import s from '../styles/Contact.module.scss';
import smPhoto from '@assets/sm.jpg';
import exPhoto1 from '@assets/project-image.png';
import exPhoto2 from '@assets/skill-image.png';
import exPhoto3 from '@assets/profile-image.png';
import AngleLeftIcon from '@assets/angle-left-icon.svg?react';
import AngleRightIcon from '@assets/angle-right-icon.svg?react';
import { Fragment, useRef, useState } from 'react';

const Contact = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const photoRef = useRef<HTMLDivElement>(null);
  const photoList = [smPhoto, exPhoto1, exPhoto2, exPhoto3];
  const handleSlide = (idx: number) => {
    if (photoRef.current) {
      photoRef.current.style['marginLeft'] = `${idx * -224}px`;
    }
  };
  return (
    <div className={s['contact']}>
      <div className={s['info-card']}>
        <div></div>
        <div className={s['card-inner']}>
          <div
            className={`${s['angle-zone']} ${s['left']}`}
            onClick={() => {
              const nextIdx = photoIndex <= 0 ? 3 : photoIndex - 1;
              handleSlide(nextIdx);
              setPhotoIndex(nextIdx);
            }}
          >
            <AngleLeftIcon />
          </div>
          <div className={s['photo-zone']}>
            <div className={s['ref-control']} ref={photoRef}>
              {photoList.map((p, idx) => (
                <Fragment key={`photo${idx}`}>
                  <img src={p} className={s['photo-container']} />
                </Fragment>
              ))}
            </div>
          </div>
          <div
            className={`${s['angle-zone']} ${s['right']}`}
            onClick={() => {
              const nextIdx = photoIndex <= 0 ? 3 : photoIndex - 1;
              handleSlide(nextIdx);
              setPhotoIndex(nextIdx);
            }}
          >
            <AngleRightIcon />
          </div>
        </div>
        <div className={s['right']}>
          <div>김성민</div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;

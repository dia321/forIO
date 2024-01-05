import { useRecoilValue, useSetRecoilState } from 'recoil';
import s from './PopAlert.module.scss';
import { layoutElementState } from '@stores/layout';
import { useEffect } from 'react';

export const PopAlert = () => {
  const popAlert = useRecoilValue(layoutElementState('popAlert')) as {
    visible: boolean;
    content: string;
  };
  const setPopAlert = useSetRecoilState(layoutElementState('popAlert'));
  useEffect(() => {
    if (popAlert.visible)
      setTimeout(() => {
        setPopAlert({ ...popAlert, visible: false });
      }, 1900);
  }, [popAlert.visible]);
  return (
    <>
      <div className={`${s['pop-alert']} ${popAlert.visible ? s['visible'] : ''}`}>
        {popAlert.content}
      </div>
    </>
  );
};

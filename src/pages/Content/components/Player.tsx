import { useRecoilState, useRecoilValue } from 'recoil';
import s from '../styles/Player.module.scss';
import XButtonIcon from '@assets/x-button-icon.svg?react';
import ClipIcon from '@assets/clip-icon.svg?react';
import { useRef } from 'react';
import { contentSelectorState } from '@stores/content/selector';
import Profile from './Profile';
import Skills from './Skills';

export const Player = () => {
  const [visible, setVisible] = useRecoilState(contentSelectorState('visible'));
  const [appear, setAppear] = useRecoilState(contentSelectorState('appear'));
  const type = useRecoilValue(contentSelectorState('type')) as string;

  const popupRef = useRef<HTMLDivElement | null>(null);

  const handleBackgroundClick: React.MouseEventHandler = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
      setVisible(false);
      setTimeout(() => setAppear(false), 500);
    }
  };

  return (
    <div
      className={`${s['player-area']} 
      ${!visible ? s['pop-out'] : ''}`}
      onClick={handleBackgroundClick}
    >
      <div className={s['player-wrapper']} ref={popupRef}>
        <div className={s['info']}>{type}</div>
        <div className={s['description']}>
          {type === 'Profile' && (
            <>
              상세한 경력기술서는
              {
                <span className={s['file-download']}>
                  <span className={s['icon-container']}>
                    <ClipIcon />
                  </span>
                  <span className={s['file-name']}>경력기술서</span>
                </span>
              }
              를 확인해주세요
            </>
          )}
          {type === 'Skills' && (
            <>
              직무에 필요한 구체적 기술(Hard Skills), 대인관계 기술(Soft Skills), 다룰 수 있는
              툴(Tool)로 분류해보았습니다
            </>
          )}
          {type === '참여 프로젝트' && <>담당한 프로젝트를 최신순으로 구성했습니다</>}
          {type === '개인 프로젝트' && (
            <>
              webpack 기반의 Vanilla Javascript로 만든 포스트잇 메모 생성기입니다
              <hr />
              Github: <a>~~~</a>
            </>
          )}
        </div>
        <div className={s['content']}>
          {appear && type === 'Profile' ? <Profile /> : type === 'Skills' ? <Skills /> : ''}
        </div>
        <div
          className={s['x-button-container']}
          onClick={() => {
            setVisible(false);
            setTimeout(() => setAppear(false), 500);
          }}
        >
          <XButtonIcon />
        </div>
      </div>
      ;
    </div>
  );
};

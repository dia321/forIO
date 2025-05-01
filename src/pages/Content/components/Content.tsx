import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import s from '../styles/Content.module.scss';

import profileImage from '@assets/profile-image.png';
import UserIcon from '@assets/user-icon.svg?react';
import skillImage from '@assets/skill-image.png';
import ReactIcon from '@assets/react-icon.svg?react';
import projectImage from '@assets/project-image.png';
import ProjectIcon from '@assets/project-icon.svg?react';
import toyProjectImage from '@assets/toy-project-image.png';
import ToyProjectIcon from '@assets/toy-project-icon.svg?react';
import { Player } from './Player';
import { contentSelectorState } from '@stores/content/selector';

const Content = () => {
  const contentList = [
    { content: 'profile', name: 'Profile' },
    { content: 'skill', name: 'Skills' },
    { content: 'project', name: '참여 프로젝트' },
    // { content: 'toy', name: '개인 프로젝트' }
  ];

  const setVisible = useSetRecoilState(contentSelectorState('visible'));
  const [appear, setAppear] = useRecoilState(contentSelectorState('appear'));
  const setType = useSetRecoilState(contentSelectorState('type'));
  const info = useRecoilValue(contentSelectorState('contentInfo')) as {
    views: string;
    time: string;
  }[];

  return (
    <>
      <div className={s['content']}>
        {contentList.map((c, i) => (
          <div
            className={s['card']}
            key={`_${i}`}
            onClick={() => {
              setVisible(true);
              setAppear(true);
              setType(c.name);
            }}
          >
            <div className={s['thumbnail']}>
              <div className={s['img-container']}>
                <img
                  src={
                    c.content === 'profile'
                      ? profileImage
                      : c.content === 'skill'
                      ? skillImage
                      : c.content === 'project'
                      ? projectImage
                      : c.content === 'toy'
                      ? toyProjectImage
                      : ''
                  }
                  alt=""
                />
              </div>
            </div>
            <div className={s['card-content']}>
              <div className={s['sticker-area']}>
                <div
                  className={`${s['sticker-container']} ${
                    s[
                      c.content === 'profile'
                        ? 'profile'
                        : c.content === 'skill'
                        ? 'skill'
                        : c.content === 'project'
                        ? 'project'
                        : c.content === 'toy'
                        ? 'toy'
                        : ''
                    ]
                  }`}
                >
                  {c.content === 'profile' ? (
                    <UserIcon />
                  ) : c.content === 'skill' ? (
                    <ReactIcon />
                  ) : c.content === 'project' ? (
                    <ProjectIcon />
                  ) : c.content === 'toy' ? (
                    <ToyProjectIcon />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className={s['description']}>
                <div className={s['title']}>{c.name}</div>
                <div className={s['name']}>김성민</div>
                <div className={s['info']}>
                  조회수 {info[i].views}회 · {info[i].time} 전
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {appear && <Player />}
    </>
  );
};

export default Content;

import { Fragment } from 'react';
import s from '../styles/Project.module.scss';

const Project = () => {
  const projects = [
    {
      title: 'LLM Data Readiness Demo 개발',
      period: '2023. 01. 02 ~ 진행중',
      description: ['사내 지식 데이터를 벡터DB에 모아둔 후 해당 데이터를 통한 RAG 기능 제공 Demo']
    },
    {
      title: 'LLM 채팅 중개 플랫폼 Demo 개발',
      period: '2023. 11. 21 ~ 2023. 12. 26',
      description: [
        'ChatGPT 3.5, ChatGPT 3.5-16k, ChatGPT 4, DALL·E 3 등 LLM 모델을 선택하여 LLM 채팅과 이미지 생성 가능',
        '사용자가 업로드한 pdf 파일 기반의 검색증강생성(RAG) 기능 제공',
        'Vite 환경으로 구성한 React-ts 프로젝트, Recoil과 React query를 사용하여 상태 관리'
      ]
    },
    { title: '~~플젝', period: '2022. 02. 02 ~ 2022. 03. 03', description: ['블라블라'] },
    { title: '~~플젝', period: '2022. 02. 02 ~ 2022. 03. 03', description: ['블라블라'] },
    { title: '~~플젝', period: '2022. 02. 02 ~ 2022. 03. 03', description: ['블라블라'] }
  ];
  return (
    <>
      <div className={s['project-wrapper']}>
        {projects.map((p, i) => (
          <div className={s['bundle']} key={`project${i}`}>
            <div className={s['title']}>{p.title}</div>
            <div className="mb-4 flex justify-end">
              <div className={s['period']}>{p.period}</div>
            </div>
            <div className={s['description']}>
              {p.description.map((d, idx) => (
                <Fragment key={`description${idx}`}>
                  <li className={s['li']}>{d}</li>
                </Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;

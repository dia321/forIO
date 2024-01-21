import { Fragment } from 'react';
import s from '../styles/Project.module.scss';

const Project = () => {
  const projects = [
    {
      title: 'LLM Platform MVP 기능 개선 개발',
      period: '2024. 01 ~ 진행중',
      description: [
        '사내 지식 데이터를 벡터DB에 모아둔 후 해당 데이터를 통한 RAG 기능을 추가한 서비스 제공'
      ],
      corp: 'KB데이타시스템'
    },
    {
      title: 'LLM Chat 및 검색증강생성 Chat 중개 Platform MVP 개발',
      period: '2023. 11 ~ 2023. 12',
      description: [
        'ChatGPT 3.5, ChatGPT 3.5-16k, ChatGPT 4, DALL·E 3 등 LLM 모델을 선택하여 LLM 채팅과 이미지 생성 가능한 Platform의 MVP 개발',
        '사용자가 업로드한 pdf 파일 기반의 검색증강생성(RAG) 기능 제공',
        'Vite 환경으로 구성한 React-ts 프로젝트, Recoil과 React query를 사용하여 상태 관리'
      ],
      corp: 'KB데이타시스템'
    },
    {
      title: 'KB SaaS Platform 고도화(SaaS 상품관리, 계약, 정산 기능 추가)',
      period: '2023. 03 ~ 2023. 05',
      description: [
        '계약과 요금 미터링 화면 및 기능을 추가하여 고도화',
        '이후 내부망 배포하여 운영하며 리포트된 버그 수정'
      ],
      corp: 'KB데이타시스템'
    },
    {
      title: 'KB SaaS Platform 개발',
      period: '2022. 08 ~ 2023. 01',
      description: [
        'KB 계열사에 제공할 수 있는 SaaS 상품 포탈 개발',
        '기존의 서비스요청(SR) 관리 시스템의 백오피스 기능, SR 요청 기능을 그대로 활용하고 추가적으로 고객용 SaaS 상품 소개 페이지, 데모 신청 페이지 등을 추가',
        '기존의 Vue-ts 프로젝트는 관리자 페이지, React-ts 프로젝트로 상태관리 라이브러리 Mobx 사용하여 새롭게 고객용 페이지를 개발'
      ],
      corp: 'KB데이타시스템'
    },
    {
      title: '서비스 요청(Service Request) 관리 시스템 `Alfred`의 프론트오피스, 백오피스 개발',
      period: '2022. 03 ~ 2022. 07',
      description: [
        '기존에 Vanilla Javascript로 개발중이던 프로젝트를 Vue.js 기반의 SPA 웹페이지로 전환 개발',
        '인증, 메뉴관리, 권한관리 등의 기본 백오피스 화면과 서비스요청 등록 및 관리, Jira 티켓 연동 기능이 포함된 프론트 오피스 화면 개발'
      ],
      corp: 'KB데이타시스템'
    },
    {
      title: '신한저축은행 인터넷 뱅킹 및 모바일 뱅킹 대출 서비스 개선 프로젝트',
      period: '2021. 10 ~ 2022. 01',
      description: [
        '비대면 대출 서비스 개선 프로젝트에 참여',
        'JQuery 기반 Javascript 개발, Spring MVC에서 서비스 추가, DTO 추가 등의 간단한 Java 개발, Jsp 화면 개발 및 간단한 퍼블리싱'
      ],
      corp: '대보정보통신'
    },
    {
      title: '농협저축은행 모바일 고도화 프로젝트(단말 인증 MO 서비스 개발)',
      period: '2021. 06 ~ 2021. 09',
      description: [
        '모바일 뱅킹 서비스 이용 전 단말기 인증 프로세스 추가',
        'Javascript 개발, Spring MVC에서 서비스 추가, DTO 추가 등의 간단한 Java 개발, Jsp 화면 개발'
      ],
      corp: '대보정보통신'
    },
    {
      title: 'NH투자증권 홈페이지 리뉴얼 프로젝트',
      period: '2021. 01 ~ 2021. 06',
      description: ['홈페이지 개편에 따른 추가 화면 개발', 'JQuery 기반 Javascript 개발'],
      corp: '대보정보통신'
    }
  ];
  return (
    <>
      <div className={s['project-wrapper']}>
        {projects.map((p, i) => (
          <div className={s['bundle']} key={`project${i}`}>
            <div className={s['corp']}>{p.corp}</div>
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

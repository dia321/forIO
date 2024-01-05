import dayjs from 'dayjs';
import s from '../styles/Profile.module.scss';
const Profile = () => {
  const career = [
    {
      company: 'KB데이타시스템',
      from: '202201',
      to: dayjs(),
      li: [
        'LLM 중개 Platform Demo 개발',
        'KB Saas Platform 고도화(계약, 정산, 미터링 기능 추가개발)',
        'KB Saas Platform 개발'
      ]
    },
    {
      company: '대보정보통신',
      from: '202010',
      to: '202112',
      li: [
        '신한저축은행 비대면 대출 서비스 개선 프로젝트 참여',
        'NH저축은행 모바일 뱅킹 고도화 프로젝트 참여',
        'NH투자증권 홈페이지 리뉴얼 프로젝트 참여'
      ]
    }
  ];
  const careerPeriod = () => {
    const monthDiff = dayjs(career[0].to).diff(dayjs(career[career.length - 1].from), 'month');
    if (monthDiff % 12) return `${Math.floor(monthDiff / 12)}년 ${monthDiff % 12}개월`;
    else return `${monthDiff / 12}년`;
  };
  const language = [
    { type: '비즈니스 회화', name: 'Toeic Speaking', grade: 'IH', date: '2023. 09' },
    { type: '비즈니스 영어', name: 'Toeic', grade: '915', date: '2023. 09' }
  ];
  const license = [
    { name: '정보처리기사', date: '2023. 09' },
    { name: 'SQLD', date: '2020. 12' }
  ];
  return (
    <>
      <div className={s['profile-wrapper']}>
        <div className={s['left']}>
          <div className={s['bundle']}>
            <div className={s['bundle-title']}>
              경력 <span className={s['grey']}>(총 {careerPeriod()})</span>
            </div>
            {career.map((c, i) => (
              <div key={`c_${i}`} className={s['item']}>
                <div className={`${s['company-info']}`}>
                  <div>{c.company}</div>
                  <div className={`${s['grey']} font-normal`}>{`${dayjs(c.from).format(
                    'YYYY. MM'
                  )} - ${i ? dayjs(c.to).format('YYYY. MM') : '현재'}`}</div>
                </div>
                <ol>
                  {c.li.map((li, i) => (
                    <li key={`li_${i}`} className={s['li']}>
                      {li}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          <div className={s['bundle']}>
            <div className={`${s['bundle-title']}`}>
              개발 외 경력 <span className={s['grey']}>(1년 10개월)</span>
            </div>
            <div className={s['item']}>
              <div className={`${s['company-info']}`}>
                <div>효성첨단소재</div>
                <div className={`${s['grey']} font-normal`}>2018. 01 - 2019.11</div>
              </div>
              <ol>
                <li className={s['li']}>연구소 재직</li>
              </ol>
            </div>
          </div>
        </div>
        <div className={s['right']}>
          <div className={s['bundle']}>
            <div className={s['bundle-title']}>학력</div>
            <div className={`${s['item']} ${s['education-info']}`}>
              <div>연세대학교 신소재공학</div>
              <div className={s['grey']}>2011. 03 - 2018. 02</div>
            </div>
          </div>
          <div className={s['bundle']}>
            <div className={s['bundle-title']}>외국어</div>
            {language.map((l, i) => (
              <div key={`l_${i}`} className={`${s['item']} ${s['language-info']}`}>
                <div>{l.type}</div>
                <div>{l.name}</div>
                <div className={s['grey']}>{l.grade}</div>
                <div className={s['grey']}>{l.date}</div>
              </div>
            ))}
          </div>
          <div className={s['bundle']}>
            <div className={s['bundle-title']}>자격증</div>
            {license.map((l, i) => (
              <div key={`license_${i}`} className={`${s['item']} ${s['license-info']}`}>
                <div>{l.name}</div>
                <div className={s['grey']}>{l.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

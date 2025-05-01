import dayjs from 'dayjs';
import { atom } from 'recoil';

export const layoutState = atom({
  key: 'layout',
  default: {
    sideMenuExpanded: true,
    notificationPopupVisible: false,
    channelInfoPopupVisible: false,
    searchVisible: false,
    position: { x: 0, y: 0 },
    size: 'laptop',
    popAlert: {
      visible: false,
      content: ''
    }
  }
});
const dateDiff = (day: string) => {
  const m = dayjs().diff(dayjs(day).format('YYYY-MM-DD'), 'M');
  console.log(m);
  if (m >= 12) return `${Math.floor(m / 12)}년 전`;
  return `${m}달 전`;
};

export const notificationState = atom({
  key: 'not',
  default: {
    note: [
      { content: '???님이 좋아요를 눌렀습니다.', date: '1주 전', on: true },
      {
        content: '여의도로 근무지가 변경되었습니다',
        date: dateDiff('2024-08-19'),
        on: true
      },
      {
        content: '김성민님이 정보처리기사 자격증을 획득하였습니다.',
        date: dateDiff('2023-09-01'),
        on: true
      },
      {
        content: '김성민님이 KB데이타시스템에 입사하였습니다.',
        date: dateDiff('2022-01-17'),
        on: false
      }
    ]
  }
});

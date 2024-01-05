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

export const notificationState = atom({
  key: 'not',
  default: {
    note: [
      { content: '???님이 좋아요를 눌렀습니다.', date: '1주 전', on: true },
      { content: '김성민님이 정보처리기사 자격증을 획득하였습니다.', date: '2달 전', on: false }
    ]
  }
});

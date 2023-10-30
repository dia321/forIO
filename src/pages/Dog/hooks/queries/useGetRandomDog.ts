import { getRandomDog } from '@hooks/dogServices/queries/dog';
import { useRecoilState } from 'recoil';
import { dogState } from '@stores/dog';

// 페이지마다 필요한 옵션 넣어줌
export const useGetRandomDog = () => {
  const [, setState] = useRecoilState(dogState);

  return getRandomDog({
    queryKey: ['getRandomDog'],
    options: {
      enabled: false, //선언과 동시에 데이터 get 방지
      staleTime: 10000,
      cacheTime: 5000,
      onSuccess: ({ data }) => {
        //받은 데이터를 변경해주는 작업해주기
        const { message } = data;
        setState({ alt: message.split('/')[message.split('/').length - 2], src: message });
      }
    }
  });
};

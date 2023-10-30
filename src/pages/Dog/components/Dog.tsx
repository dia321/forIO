import { useRecoilValue } from 'recoil';
import { dogState } from '@stores/dog';
import { useGetRandomDog } from '../hooks/queries';

const Dog = () => {
  const dogObj = useRecoilValue(dogState);
  const { refetch } = useGetRandomDog();

  const handleBtn = () => {
    refetch();
  };
  return (
    <>
      <button onClick={handleBtn}>api call</button>
      <div style={{ border: '1px solid black' }}>
        <img src={dogObj.src} alt={dogObj.alt} />
      </div>
    </>
  );
};

export default Dog;

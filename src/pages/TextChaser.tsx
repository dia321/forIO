import { useRecoilState } from 'recoil';
import { textState } from '@stores/example';

const TextChaser = () => {
  const [text] = useRecoilState(textState);
  return <div>{text}</div>;
};

export default TextChaser;

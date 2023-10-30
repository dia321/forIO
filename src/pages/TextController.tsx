import { useRecoilState } from 'recoil';
import { textState } from '@stores/example';

const TextController = () => {
  const [text, setText] = useRecoilState(textState);

  const add = () => {
    setText(text + 'a');
  };

  const subtract = () => {
    if (text) setText(text.slice(0, text.length - 1));
  };

  return (
    <>
      <div>{text}</div>
      <button onClick={add}>추가</button>
      <button onClick={subtract}>지우기</button>
    </>
  );
};
export default TextController;

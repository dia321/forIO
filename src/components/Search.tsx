import TimePastIcon from '@assets/time-past-icon.svg?react';
import s from './Search.module.scss';
import { useSetRecoilState } from 'recoil';
import { contentState as ctState } from '@stores/content';

interface SearchProps {
  suggestions?: string[];
}

export const Search = (props: SearchProps) => {
  const { suggestions } = props;
  const setContentState = useSetRecoilState(ctState);

  return (
    <div className={s['search-wrapper']}>
      <ul>
        {suggestions?.map((suggestion, i) => (
          <li
            className={s['record-container']}
            key={`search${i}`}
            onClick={() => setContentState((prev) => ({ ...prev, visible: true, appear: true }))}
          >
            <div className={s['icon-container']}>
              <TimePastIcon />
            </div>
            <div className={s['tab']}>{suggestion}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

import TimePastIcon from '@assets/time-past-icon.svg?react';
import s from './Search.module.scss';
import { useSetRecoilState } from 'recoil';
import { contentState as ctState } from '@stores/content';
import React from 'react';

interface SearchProps {
  suggestions?: string[];
}
interface EventTargetWithId extends EventTarget  {
  id: string
}
export const Search = (props: SearchProps) => {
  const { suggestions } = props;
  const setContentState = useSetRecoilState(ctState);

  const handleClickSuggestion = (e: React.MouseEvent) => {
    e.stopPropagation();
    const et = e.currentTarget as EventTargetWithId;
    console.log(et.id);
    // setContentState((prev) => ({ ...prev, visible: true, appear: true }))
  }

  return (
    <div className={s['search-wrapper']}>
      <ul>
        {suggestions?.map((suggestion, i) => (
          <li
            className={s['record-container']}
            key={`search${i}`}
            onClick={handleClickSuggestion}
            id={suggestion}
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

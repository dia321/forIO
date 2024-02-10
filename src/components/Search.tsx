import TimePastIcon from '@assets/time-past-icon.svg?react';
import s from './Search.module.scss';
import React from 'react';

interface SearchProps {
  suggestions?: string[];
  hoverIdx: number;
  // eslint-disable-next-line no-unused-vars
  handleClickSuggestion: (e: React.MouseEvent) => void;
  // eslint-disable-next-line no-unused-vars
  handleMouseOver: (idx: number) => void;
}
export const Search = (props: SearchProps) => {
  const { suggestions, handleClickSuggestion, hoverIdx, handleMouseOver } = props;

  return (
    <div className={s['search-wrapper']}>
      <ul>
        {suggestions?.map((suggestion, i) => (
          <li
            className={s['record-container']}
            key={`search${i}`}
            onClick={handleClickSuggestion}
            id={suggestion}
            onMouseOver={() => handleMouseOver(i)}
            data-hovering={hoverIdx === i}
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

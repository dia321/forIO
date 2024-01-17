import TimePastIcon from '@assets/time-past-icon.svg?react';
import s from './Search.module.scss';
import React from 'react';

interface SearchProps {
  suggestions?: string[];
  // eslint-disable-next-line no-unused-vars
  handleClickSuggestion: (e: React.MouseEvent) => void;
}
export const Search = (props: SearchProps) => {
  const { suggestions, handleClickSuggestion } = props;

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

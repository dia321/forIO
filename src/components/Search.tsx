import TimePastIcon from '@assets/time-past-icon.svg?react';
import s from './Search.module.scss';

interface SearchProps {
  suggestions?: string[];
}

export const Search = (props: SearchProps) => {
  const { suggestions } = props;
  return (
    <div className={s['search-wrapper']}>
      <ul>
        {suggestions?.map((suggestion, i) => (
          <li className={s['record-container']} key={`search${i}`}>
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

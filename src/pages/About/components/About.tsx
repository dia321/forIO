import YouTube from 'react-youtube';

import s from '../styles/About.module.scss';

const About = () => {
  return (
    <div className={s['about']}>
      <div className={s['youtube-container']}>
        <div className={s['frame']}>
          <YouTube videoId="JHIE_oi_qOs" opts={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default About;

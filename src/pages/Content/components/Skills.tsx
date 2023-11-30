import s from '../styles/Skills.module.scss';

const Skills = () => {
  return (
    <>
      <div className={s['skills-wrapper']}>
        <div className={s['hard-skills']}>
          <div className={`${s['classification']}`}>
            <div>Hard Skills</div>
            <div className={s['level']}>
              <span className={s['high']}>상</span>
              <span className={s['middle']}>중</span>
              <span className={s['low']}>하</span>
            </div>
          </div>
          <div className={s['hard-children']}>
            <div className={s['bundle']}>
              <div className={`${s['semi-classification']}`}>Language </div>
              <ol>
                <li className={s['high']}>Javascript</li>
                <li className={s['high']}>Typescript</li>
                <li className={s['middle']}>Python</li>
                <li className={s['low']}>Java</li>
              </ol>
            </div>
            <div className={s['bundle']}>
              <div className={s['semi-classification']}>Framework / Library</div>
              <ol>
                <li className={s['high']}>React - Recoil, React query, Mobx</li>
                <li className={s['high']}>Vue - Vuex, Composition api</li>
                <li className={s['middle']}>Webpack, Vite</li>
                <li className={s['low']}>Django</li>
                <li className={s['low']}>SpringBoot</li>
              </ol>
            </div>
            <div className={s['bundle']}>
              <div className={s['semi-classification']}>Markup</div>
              <ol>
                <li className={s['middle']}>HTML</li>
                <li className={s['middle']}>CSS</li>
                <li className={s['middle']}>SCSS, Styled component, Tailwind</li>
              </ol>
            </div>
          </div>
        </div>
        <div className={s['others']}>
          <div className={s['bundle']}>
            <div className={s['classification']}>Soft Skills</div>
            <ol>
              <li>커뮤니케이션</li>
              <li>꼼꼼함</li>
              <li>책임감</li>
              <li>스케쥴링</li>
            </ol>
          </div>
          <div className={s['bundle']}>
            <div className={s['classification']}>Tools</div>
            <ol>
              <li>Git</li>
              <li>Jenkins</li>
              <li>Jira/Confluence</li>
              <li>Figma</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

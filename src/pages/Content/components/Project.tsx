import s from '../styles/Project.module.scss';

const Project = () => {
  const projects = [
    { title: '~~플젝', period: '2022. 02. 02 ~ 2022. 03. 03', description: '블라블라' },
    { title: '~~플젝', period: '2022. 02. 02 ~ 2022. 03. 03', description: '블라블라' },
    { title: '~~플젝', period: '2022. 02. 02 ~ 2022. 03. 03', description: '블라블라' }
  ];
  return (
    <>
      <div className={s['project-wrapper']}>
        {projects.map((p, i) => (
          <div className={s['bundle']} key={`project${i}`}>
            <div className={s['title']}>{p.title}</div>
            <div className="mb-4 flex justify-end">
              <div className={s['period']}>{p.period}</div>
            </div>
            <div className={s['description']}>{p.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;

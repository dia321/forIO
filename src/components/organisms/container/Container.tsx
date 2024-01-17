import { useRecoilValue } from 'recoil';
import { layoutState as loState } from '@stores/layout';
import s from './Container.module.scss';
interface ContainerProps {
  children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
  const layoutState = useRecoilValue(loState);
  const { children } = props;
  return (
    <div className={`${s['container']} ${layoutState.sideMenuExpanded && s['expanded']}`}>
      {children}
    </div>
  );
};

export { Container };

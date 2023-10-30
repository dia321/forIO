import styled from 'styled-components';
import styles from './Tooltip.module.scss';

interface TooltipProps {
  content: string;
  visible: boolean;
  top?: number;
  nowrap?: boolean;
  onClick?: () => void;
}

const ToolTipContainer = styled.div<{ top?: number }>`
  top: ${(props) => (props.top ? props.top + 'px' : '60px')};
`;
const Tooltip = (props: TooltipProps) => {
  const { content, visible, nowrap = true, top = 60 } = props;
  // ${right &&
  // css`
  //   right: ${right}px;
  //   transform: translateX(-50%);
  // `}
  return (
    <>
      <ToolTipContainer
        className={`${styles['tooltip-container']} ${
          visible ? styles['fade-in'] : styles['fade-out']
        }`}
        top={top}
      >
        <p className={nowrap ? 'whitespace-nowrap' : ''}>{content}</p>
      </ToolTipContainer>
    </>
  );
};

export default Tooltip;

import { YoutubeLayout } from '@component/.';
import s from '../styles/Chart.module.scss';
import styled from 'styled-components';
import { useState } from 'react';
import { Cube } from 'src/pages/Chart/modules/Cube';
import Tyranno from '../modules/Tyranno';

const TabContainer = styled.div``;
const Content = styled.div``;
const CanvasContainer = styled.div`
  width: 30%;
  border: 1px solid lightgray;
`;
const Chart = () => {
  const tabList = ['total', 'cube', 'tyranno'];
  const [selected, setSelected] = useState<{ [key: string]: boolean }>(
    tabList.reduce(
      (accumulator, value, index) => ({ ...accumulator, [value]: index ? false : true }),
      {}
    )
  );
  const handleClick = (idx: number) =>
    setSelected(
      tabList.reduce(
        (accumulator, value, index) => ({ ...accumulator, [value]: idx === index ? true : false }),
        {}
      )
    );
  return (
    <div>
      <YoutubeLayout />
      <div className={`${s['content-wrapper']} ${true && s['expanded']}`}>
        <TabContainer className={s['tab-container']}>
          {tabList.map((tab, index) => (
            <div
              className={s['tab-button']}
              data-selected={selected[tab]}
              key={`${tab}_`}
              onClick={() => handleClick(index)}
            >
              {tab === 'total'
                ? '전체'
                : tab === 'cube'
                ? 'Cube'
                : tab === 'tyranno'
                ? '티라노'
                : ''}
            </div>
          ))}
        </TabContainer>
        <Content className={s['content']}>
          {selected.total && (
            <>
              <CanvasContainer>
                <Cube />
              </CanvasContainer>
              <CanvasContainer>
                <Tyranno />
              </CanvasContainer>
            </>
          )}
          {!selected.total && selected.cube && (
            <CanvasContainer>
              <Cube />
            </CanvasContainer>
          )}
          {!selected.total && selected.tyranno && (
            <CanvasContainer>
              <Tyranno />
            </CanvasContainer>
          )}
        </Content>
      </div>
    </div>
  );
};

export default Chart;

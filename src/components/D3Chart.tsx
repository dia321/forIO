/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { DataPoints, DataPoint } from '../@type';

interface Props {
  chartData: DataPoints[];
  width?: number;
  height?: number;
}

export const D3Chart: React.FC<Props> = ({ chartData, width = 300, height = 300 }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);

    const margin = { top: 20, right: 30, bottom: 60, left: 40 };

    // 날짜 데이터를 파싱하여 형식 변경
    const parseDate = d3.timeParse('%Y-%m-%d %H:%M');

    const x = d3
      .scaleTime()
      .domain(d3.extent(chartData[0], (d) => parseDate(d.date) as Date) as [Date, Date])
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(chartData[0], (d) => d.value)!])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const line = d3
      .line<DataPoint>()
      .x((d) => x(parseDate(d.date) as Date))
      .y((d) => y(d.value));

    // Line 그리기
    chartData.forEach((seriesData, index) => {
      svg
        .append('path')
        .datum(seriesData)
        .attr('class', 'line')
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 1.5)
        .attr('d', line);

      // 데이터 포인트에 툴팁 추가
      svg
        .selectAll(`.datapoint-circle-${index}`)
        .data(seriesData)
        .enter()
        .append('circle')
        .attr('class', `datapoint-circle-${index}`)
        .attr('cx', (d) => x(parseDate(d.date) as Date))
        .attr('cy', (d) => y(d.value))
        .attr('r', 4)
        .attr('fill', 'steelblue')
        .on('mouseover', (d, event: any) => {
          const [xPos, yPos] = [event.pageX, event.pageY];
          const tooltip = svg.append('g').attr('class', 'tooltip');
          tooltip
            .append('rect')
            .attr('x', xPos - 30)
            .attr('y', yPos - 40)
            .attr('width', 60)
            .attr('height', 30)
            .attr('fill', 'white')
            .attr('stroke', 'steelblue')
            .attr('stroke-width', 1);
          tooltip
            .append('text')
            .attr('x', xPos)
            .attr('y', yPos - 20)
            .attr('dy', -10)
            .attr('text-anchor', 'middle')
            .text(`Value: ${d.value}`);
        })
        .on('mouseout', () => {
          svg.select('.tooltip').remove();
        });
    });

    // x, y 축 그리기
    svg
      .append('g')
      .call(d3.axisBottom(x))
      .attr('transform', `translate(0, ${height - margin.bottom})`);
    svg.append('g').call(d3.axisLeft(y)).attr('transform', `translate(${margin.left}, 0)`);
  }, [chartData, width, height]);

  return <svg width={width} height={height} ref={svgRef}></svg>;
};

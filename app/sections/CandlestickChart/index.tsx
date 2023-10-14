'use client';

import React from 'react';
import { CandlestickSeries, Chart, ChartCanvas } from 'react-financial-charts';
import { scaleTime } from 'd3-scale';

function CandlestickChart() {
  const candlestickData = [
    {
      date: new Date('2023-10-10'),
      open: 120,
      high: 130,
      low: 115,
      close: 125,
    },
    {
      date: new Date('2023-10-11'),
      open: 125,
      high: 135,
      low: 120,
      close: 130,
    },
    {
      date: new Date('2023-10-12'),
      open: 130,
      high: 140,
      low: 125,
      close: 135,
    },
    {
      date: new Date('2023-10-13'),
      open: 135,
      high: 145,
      low: 130,
      close: 140,
    },
    // Add more data for additional days as needed
  ];
  return (
    <ChartCanvas
      width={800}
      height={400}
      ratio={1}
      margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
      seriesName="Price"
      data={candlestickData}
      xAccessor={(d) => d.date}
      xScale={scaleTime()}
      xExtents={[new Date(2023, 0, 1), new Date(2023, 11, 31)]}
    >
      <Chart id={1} yExtents={(d) => [d.high, d.low]}>
        <CandlestickSeries />
      </Chart>
    </ChartCanvas>
  );
}

export default CandlestickChart;

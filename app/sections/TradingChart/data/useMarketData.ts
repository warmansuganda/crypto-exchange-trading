import { useEffect, useRef, useState } from 'react';
import { tsvParse } from 'd3-dsv';
import { timeParse } from 'd3-time-format';

import { IOHLCData } from './types';

const parseDate = timeParse('%Y-%m-%d');

const parseData =
  () =>
  (d: any): IOHLCData => {
    const date = parseDate(d.date);
    date ? (d.date = new Date(date)) : (d.date = new Date(Number(d.date)));

    for (const key in d) {
      if (key !== 'date' && Object.prototype.hasOwnProperty.call(d, key)) {
        d[key] = +d[key];
      }
    }

    return d;
  };

const useInterval = (callback: () => void, delay: number | null) => {
  const intervalRef = useRef<number | null>(null);
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };

    if (typeof delay === 'number') {
      intervalRef.current = window.setInterval(tick, delay);
      return () => {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
        }
      };
    }

    return undefined;
  }, [delay]);

  return intervalRef;
};

export function useMarketData(dataSet = 'MINUTES', updating = false) {
  const [data, setData] = useState<IOHLCData[]>();
  const [length, setLength] = useState(500);

  useEffect(() => {
    if (!data) {
      fetch(
        `https://raw.githubusercontent.com/reactivemarkets/react-financial-charts/master/packages/stories/src/data/${dataSet}.tsv`,
      )
        .then((response) => response.text())
        .then((data) => tsvParse(data, parseData()))
        .then((data) => {
          setData(data);
        });
    }
  }, [data, dataSet, setData]);

  useInterval(() => {
    if (data && updating) setLength(length + 1);
  }, 1000);

  return {
    data: updating ? data?.slice(0, length + 1) : data,
    loaded: Boolean(data),
  };
}

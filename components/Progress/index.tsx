import React from 'react';
import classNames from 'classnames';

import { ProgressProps } from './types';

function Progress({ value = 0 }: ProgressProps) {
  const progress = value > 100 ? 100 : value;
  return (
    <div className="h-1.5 w-full relative">
      <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
        <div
          className="bg-gray-400 dark:bg-gray-200 h-1.5 absolute top-0"
          style={{ width: `${progress}%` }}
        />
      </div>
      {[0, 25, 50, 75, 100].map((item) => (
        <div
          key={item}
          className={classNames(
            'h-2.5 w-2.5 absolute -top-0.5 rotate-45 bg-gray-200 dark:bg-gray-700 overflow-hidden rounded-full',
            item <= progress && 'dark:!bg-gray-200 !bg-gray-400',
          )}
          style={item === 100 ? { right: `0%` } : { left: `${item}%` }}
        >
          <div className="bg-white dark:bg-slate-900 inset-0 m-[3px] absolute top-0 left-0 rounded-full" />
        </div>
      ))}
      <div
        className="h-3 w-3 absolute -top-1/2 rotate-45 border-2 border-white dark:border-slate-900"
        style={progress === 100 ? { right: `0%` } : { left: `${progress}%` }}
      >
        <div className="dark:bg-slate-900 inset-0 absolute top-0 left-0 border-2 bg-white border-gray-400 dark:border-gray-200" />
      </div>
    </div>
  );
}

export default Progress;

import classNames from 'classnames';
import React, { InputHTMLAttributes, forwardRef } from 'react';

import { InputProps } from './types';

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & InputProps
>((props, ref) => {
  const { className, leftAccessory, rightAccessory, ...otherProps } = props;
  return (
    <div className="relative">
      {leftAccessory && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
          {leftAccessory}
        </div>
      )}
      <input
        ref={ref}
        className={classNames(
          'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
          className,
          leftAccessory && 'pl-10',
          rightAccessory && 'pr-10',
        )}
        {...otherProps}
      />
      {rightAccessory && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
          {rightAccessory}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;

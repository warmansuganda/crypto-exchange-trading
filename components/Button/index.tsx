import classNames from 'classnames';
import React, { ButtonHTMLAttributes, forwardRef, useMemo } from 'react';

import { ButtonProps } from './types';

const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
>((props, ref) => {
  const { children, className, variant, ...otherProps } = props;
  const classVariant = useMemo(() => {
    switch (variant) {
      case 'green':
        return 'text-white bg-green-700 hover:bg-green-600 shadow-green-700/60';
      case 'red':
        return 'text-white bg-red-700 hover:bg-red-600 shadow-red-700/60';
      default:
        return 'text-white bg-purple-700 hover:bg-purple-600 shadow-purple-700/60';
    }
  }, [variant]);
  return (
    <button
      ref={ref}
      className={classNames(
        'tracking-wide font-semibold w-full py-2 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none shadow-[0px_0px_15px_0px_var(--tw-shadow-color)]',
        classVariant,
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;

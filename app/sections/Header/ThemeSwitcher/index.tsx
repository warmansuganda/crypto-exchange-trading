'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import classNames from 'classnames';

import { ComputerDesktopIcon, MoonIcon, SunIcon } from '@/icons/outline';
import { ThemeSwitherProps } from './types';

function ThemeSwither({ style }: ThemeSwitherProps) {
  const { theme, setTheme } = useTheme();
  const themes = [
    {
      theme: 'light',
      icon: <SunIcon className="w-6 h-6" />,
    },
    {
      theme: 'dark',
      icon: <MoonIcon className="w-6 h-6" />,
    },
    {
      theme: 'system',
      icon: <ComputerDesktopIcon className="w-6 h-6" />,
    },
  ];

  return (
    <ul
      className="bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300"
      style={style}
    >
      {themes.map((item) => (
        <li
          key={item.theme}
          className={classNames(
            'py-1 px-2 flex gap-3 items-center cursor-pointer',
            theme === item.theme && 'text-sky-500',
          )}
          onClick={() => setTheme(item.theme)}
        >
          {item.icon}
          <span className="capitalize">{item.theme}</span>
        </li>
      ))}
    </ul>
  );
}

export default ThemeSwither;

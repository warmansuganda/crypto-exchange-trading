'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import classNames from 'classnames';

import { ComputerDesktopIcon, MoonIcon, SunIcon } from '@/icons/outline';
import { ThemeSwitherProps } from './types';

function ThemeSwither({ style }: ThemeSwitherProps) {
  const { theme, setTheme } = useTheme();

  return (
    <ul
      className="bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300"
      aria-labelledby="headlessui-listbox-label-:Rpkcr6:"
      aria-orientation="vertical"
      id="headlessui-listbox-options-:R1pkcr6:"
      role="listbox"
      tabIndex={0}
      data-headlessui-state="open"
      style={style}
    >
      <li
        className={classNames(
          'py-1 px-2 flex gap-3 items-center cursor-pointer',
          theme === 'light' && 'text-sky-500',
        )}
        id="headlessui-listbox-option-:re:"
        role="option"
        tabIndex={-1}
        aria-selected="false"
        data-headlessui-state=""
        onClick={() => setTheme('light')}
      >
        <SunIcon className="w-6 h-6" />
        Light
      </li>
      <li
        className={classNames(
          'py-1 px-2 flex gap-3 items-center cursor-pointer',
          theme === 'dark' && 'text-sky-500',
        )}
        id="headlessui-listbox-option-:rf:"
        role="option"
        tabIndex={-1}
        aria-selected="true"
        data-headlessui-state="selected"
        onClick={() => setTheme('dark')}
      >
        <MoonIcon className="w-6 h-6" />
        Dark
      </li>
      <li
        className={classNames(
          'py-1 px-2 flex gap-3 items-center cursor-pointer',
          theme === 'system' && 'text-sky-500',
        )}
        id="headlessui-listbox-option-:rg:"
        role="option"
        tabIndex={-1}
        aria-selected="false"
        data-headlessui-state=""
        onClick={() => setTheme('system')}
      >
        <ComputerDesktopIcon className="w-6 h-6" />
        System
      </li>
    </ul>
  );
}

export default ThemeSwither;

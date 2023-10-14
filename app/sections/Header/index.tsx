'use client';

import React, { useCallback, useMemo } from 'react';
import { useTheme } from 'next-themes';

import { MoonIcon, SunIcon } from '@/icons/outline';
import { GithubIcon } from '@/icons/social';
import Dropdown from '@/components/Dropdown';
import ThemeSwither from './ThemeSwitcher';
import useHasMounted from '@/hooks/useHasMounted';

function Header() {
  const { theme, systemTheme } = useTheme();
  const hasMounted = useHasMounted();
  const currentTheme = useMemo(() => {
    if (theme === 'system') return systemTheme;
    return theme;
  }, [theme, systemTheme]);

  const renderThemeIcon = useCallback(
    () =>
      currentTheme === 'light' ? (
        <SunIcon className="w-6 h-6" />
      ) : (
        <MoonIcon className="w-6 h-6" />
      ),
    [currentTheme],
  );

  return (
    <div className="h-10 bg-white dark:bg-gray-900 p-0.5 flex gap-0.5 justify-between items-center">
      <div className="flex items-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
        >
          <path d="M7.5 3.5V6.5" stroke="#65a30d" strokeLinecap="round" />
          <path d="M7.5 14.5V18.5" stroke="#65a30d" strokeLinecap="round" />
          <path
            d="M6.8 6.5C6.08203 6.5 5.5 7.08203 5.5 7.8V13.2C5.5 13.918 6.08203 14.5 6.8 14.5H8.2C8.91797 14.5 9.5 13.918 9.5 13.2V7.8C9.5 7.08203 8.91797 6.5 8.2 6.5H6.8Z"
            stroke="#65a30d"
          />
          <path d="M16.5 6.5V11.5" stroke="#dc2626" strokeLinecap="round" />
          <path d="M16.5 16.5V20.5" stroke="#dc2626" strokeLinecap="round" />
          <path
            d="M15.8 11.5C15.082 11.5 14.5 12.082 14.5 12.8V15.2C14.5 15.918 15.082 16.5 15.8 16.5H17.2C17.918 16.5 18.5 15.918 18.5 15.2V12.8C18.5 12.082 17.918 11.5 17.2 11.5H15.8Z"
            stroke="#dc2626"
          />
        </svg>
        <span className="text-sm font-semibold">Crypto Exchange Trading</span>
      </div>
      <div className="flex gap-2">
        {hasMounted && (
          <Dropdown overlay={<ThemeSwither />} placement="bottom-end">
            <button className="rounded-sm hover:text-sky-500 flex items-center justify-center gap-1 px-1 text-sm">
              {renderThemeIcon()}
            </button>
          </Dropdown>
        )}
        <a
          href="https://github.com/warmansuganda/crypto-exchange-trading"
          target="_blank"
          className="rounded-sm hover:text-sky-500 flex items-center justify-center gap-1 px-1 text-sm"
        >
          <GithubIcon className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}

export default Header;

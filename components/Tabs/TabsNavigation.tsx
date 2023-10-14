'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { animated, useSpring } from '@react-spring/web';

import { TabsNavigationProps } from './types';

function TabsNavigation({ items, activeKey, onChange }: TabsNavigationProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [offsetIndicator, setOffsetIndicator] = useState({
    offsetWidth: 0,
    offsetLeft: 0,
  });
  const tabRef = useRef<Array<HTMLButtonElement | null>>([]);

  const updateOffsetIndicator = useCallback((index: number) => {
    const activeTab = tabRef.current[index];
    if (activeTab) {
      setOffsetIndicator({
        offsetWidth: activeTab.offsetWidth,
        offsetLeft: activeTab.offsetLeft,
      });
    }
  }, []);

  const springIndicator = useSpring({
    from: { left: 0, width: 0 },
    to: {
      left: offsetIndicator.offsetLeft,
      width: offsetIndicator.offsetWidth,
    },
  });

  useEffect(() => {
    updateOffsetIndicator(selectedIndex);
  }, [selectedIndex, updateOffsetIndicator]);

  useEffect(() => {
    let index = 0;
    if (activeKey) {
      index = items.findIndex((item) => item.key === activeKey);
    }
    setSelectedIndex(index > 0 ? index : 0);
  }, [activeKey, items]);

  const handleChange = useCallback(
    (index: number) => {
      setSelectedIndex(index);
      if (onChange) {
        const item = items[index];
        onChange(item.key ?? index, index);
      }
    },
    [items, onChange],
  );

  return (
    <div className="mb-3 border-b border-gray-200 dark:border-gray-700 relative">
      <ul className="flex flex-wrap -mb-px font-medium text-center gap-1">
        {items.map((item, index) => (
          <li key={index}>
            <button
              className={classNames(
                'inline-block py-2 px-1 mx-3 text-sm',
                index === selectedIndex && ' text-sky-500',
              )}
              type="button"
              ref={(e) => (tabRef.current[index] = e)}
              onClick={() => {
                handleChange(index);
              }}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
      <animated.div
        className="bg-sky-500 h-[3px] -bottom-0.5 rounded-full w-4 absolute"
        style={springIndicator}
      />
    </div>
  );
}

export default TabsNavigation;

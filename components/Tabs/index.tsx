'use client';

import React, { useCallback, useState } from 'react';
import { animated, useTransition } from '@react-spring/web';

import { TabsNavigationItem, TabsProps } from './types';
import TabsNavigation from './TabsNavigation';

function Tabs({ items, className, activeKey, onChange }: TabsProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const transitions = useTransition(selectedIndex, {
    from: { opacity: 0, transform: 'translate3d(0,25%,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
  });

  const handleChange = useCallback(
    (key?: TabsNavigationItem['key'], index?: number) => {
      setSelectedIndex(index ?? 0);
      if (onChange) {
        onChange(key);
      }
    },
    [onChange],
  );

  return (
    <div className={className}>
      <TabsNavigation
        items={items}
        activeKey={activeKey}
        onChange={handleChange}
      />
      <div>
        {transitions((style, i) => {
          const { content } = items[i];
          return (
            <animated.div style={{ ...style, transformStyle: 'preserve-3d' }}>
              {content}
            </animated.div>
          );
        })}
      </div>
    </div>
  );
}

export default Tabs;

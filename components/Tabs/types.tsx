import { ReactNode } from 'react';

export interface TabsNavigationItem {
  key?: string | number;
  title: ReactNode;
}

export interface TabsItem extends TabsNavigationItem {
  content: ReactNode;
}

export interface TabsNavigationProps {
  items: TabsNavigationItem[];
  className?: string;
  activeKey?: TabsNavigationItem['key'];
  onChange?: (key?: TabsNavigationItem['key'], index?: number) => void;
}

export interface TabsProps {
  items: TabsItem[];
  className?: string;
  activeKey?: TabsItem['key'];
  onChange?: (key?: TabsItem['key'], index?: number) => void;
}

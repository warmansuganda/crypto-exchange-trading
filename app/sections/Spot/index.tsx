import React from 'react';

import Tabs from '@/components/Tabs';
import { TabsItem } from '@/components/Tabs/types';
import SpotForm from './SpotForm';

function Spot() {
  const renderContent = () => (
    <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-gray-700 py-3">
      <div className="px-3">
        <SpotForm type="buy" />
      </div>
      <div className="px-3">
        <SpotForm type="sell" />
      </div>
    </div>
  );
  const tabs: TabsItem[] = [
    {
      title: 'Limit',
      content: renderContent(),
    },
    {
      title: 'Market',
      content: renderContent(),
    },
    {
      title: 'Stop Limit',
      content: renderContent(),
    },
    {
      title: 'Stop Market',
      content: renderContent(),
    },
  ];
  return <Tabs items={tabs} />;
}

export default Spot;

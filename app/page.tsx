import Spot from './sections/Spot';
import Header from './sections/Header';
import OrderBook from './sections/OrderBook';
import TradingChart from './sections/TradingChart';
import Market from './sections/Market';

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col gap-1">
      <Header />
      <div className="flex-1 flex gap-1">
        <div className="bg-white dark:bg-gray-900 rounded-r w-80">
          <OrderBook />
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <div className="bg-white dark:bg-gray-900 flex-1 rounded">
            <TradingChart />
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-t overflow-hidden">
            <Spot />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-l w-80">
          <Market />
        </div>
      </div>
    </main>
  );
}

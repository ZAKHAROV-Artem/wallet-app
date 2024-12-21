import CardBalance from "../components/CardBalance";
import DailyPoints from "../components/DailyPoints";
import NoPaymentsDue from "../components/NoPaymentsDue";
import TransactionsList from "../components/TransactionsList";
import transactions from "../data/transactions.json";
import { Transaction } from "../types";

export default function HomePage() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid grid-rows-2 gap-4">
          <CardBalance balance={123.45} maxLimit={1500} />
          <DailyPoints />
        </div>
        <NoPaymentsDue />
      </div>
      <TransactionsList transactions={transactions as Transaction[]} />
    </div>
  );
}

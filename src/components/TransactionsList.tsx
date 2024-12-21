import { Transaction } from "../types";
import TransctionItem from "./TransactionItem";

interface TransactionsListProps {
  transactions: Transaction[];
}
export default function TransactionsList({
  transactions,
}: TransactionsListProps) {
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold">Latest Transactions</h2>
      <ul className="overflow-hidden rounded-lg bg-neutral">
        {transactions.map((txn, i) => (
          <div key={txn.id}>
            <TransctionItem transaction={txn} />
            {i < transactions.length - 1 && <div className="divider m-0 p-0" />}
          </div>
        ))}
      </ul>
    </div>
  );
}

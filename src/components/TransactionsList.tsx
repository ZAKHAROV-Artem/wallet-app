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
      <ul className="space-y-4 overflow-hidden rounded-lg bg-neutral">
        {transactions.map((txn) => (
          <TransctionItem key={txn.id} transaction={txn} />
        ))}
      </ul>
    </div>
  );
}

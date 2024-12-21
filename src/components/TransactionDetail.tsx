import { Transaction } from "../types";

interface TransactionDetailProps {
  transaction: Transaction;
}
export default function TransactionDetail({
  transaction,
}: TransactionDetailProps) {
  return (
    <div className="rounded-lg bg-neutral p-4">
      <h2 className="text-lg font-bold">Transaction Details</h2>
      <p>{transaction.name}</p>
      <p>{transaction.description}</p>
      <p>{transaction.amount}</p>
      <p>{transaction.date}</p>
    </div>
  );
}

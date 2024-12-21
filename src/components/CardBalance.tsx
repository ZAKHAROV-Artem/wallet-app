interface CardBalanceProps {
  balance: number;
  maxLimit: number;
}
export default function CardBalance({ balance, maxLimit }: CardBalanceProps) {
  const available = maxLimit - balance;

  return (
    <div className="space-y-2 rounded-lg bg-neutral p-4">
      <h2 className="text-lg">Card Balance</h2>
      <p className="text-2xl font-bold text-white">${balance.toFixed(2)}</p>
      <p className="text-lg text-neutral-content">{`$${available.toFixed(2)} Available`}</p>
    </div>
  );
}

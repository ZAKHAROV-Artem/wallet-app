import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { useNavigate, useParams } from "react-router";

import transactions from "../data/transactions.json";

export default function TransactionDetailsPage() {
  const params = useParams();
  const navigate = useNavigate();
  const transaction = transactions.find((txn) => txn.id === Number(params.id));

  if (!transaction) {
    return (
      <div className="rounded-lg bg-red-100 p-4 text-red-700">
        <h2 className="text-lg font-bold">Transaction Not Found</h2>
        <p>The transaction you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <button className="text-blue-500" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="grid place-content-center gap-3 text-center">
        <p className="text-6xl font-bold">
          {transaction.type === "Credit" && "-"}${transaction.amount.toFixed(2)}
        </p>
        <div className="text-neutral-content">
          <p>{transaction.authorizedUser}</p>
          <p>{format(new Date(transaction.date), "MM/dd/yyyy, HH:mm")}</p>
        </div>
      </div>
      <div>
        <div className="space-y-2 rounded-lg bg-neutral p-4">
          <div>
            <strong>
              Status: {transaction.pending ? "Pending" : "Completed"}
            </strong>{" "}
            <div className="text-neutral-content">
              {transaction.description}
            </div>
          </div>
          <div className="divider" />
          <div className="flex justify-between">
            <strong>Total amount:</strong>
            <strong>
              {transaction.type === "Credit" && "-"}$
              {transaction.amount.toFixed(2)}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

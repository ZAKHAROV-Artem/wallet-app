import {
  faAppleWhole,
  faCar,
  faChevronRight,
  faCoffee,
  faCreditCard,
  faFilm,
  faGift,
  faMoneyBill,
  faMusic,
  faShoppingCart,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format, isWithinInterval, subDays } from "date-fns";
import { useNavigate } from "react-router";

import { Transaction } from "../types";

interface TransctionItemProps {
  transaction: Transaction;
}

const iconMap: Record<string, IconDefinition> = {
  Amazon: faShoppingCart,
  Apple: faAppleWhole,
  Netflix: faFilm,
  PayPal: faCreditCard,
  Spotify: faMusic,
  Starbucks: faCoffee,
  Target: faGift,
  Uber: faCar,
  Venmo: faMoneyBill,
};

export default function TransctionItem({ transaction }: TransctionItemProps) {
  const navigate = useNavigate();

  return (
    <li
      className="flex cursor-pointer items-center justify-between px-4 py-2 duration-200 hover:bg-base-200"
      key={transaction.id}
      onClick={() => navigate(`/transactions/${transaction.id}`)}
    >
      <div className="flex items-center space-x-4">
        <div
          className="grid h-10 w-10 place-content-center rounded-md"
          style={{ background: transaction.icon.bgGradient }}
        >
          <FontAwesomeIcon
            className="rounded-full bg-gray-700 p-2 text-white"
            icon={iconMap[transaction.name] || faCreditCard}
          />
        </div>
        <div>
          <p className="font-bold">{transaction.name}</p>
          <p className="text-sm text-neutral-content">
            {transaction.pending && "Pending - "}
            {transaction.description}
          </p>
          <p className="text-sm text-neutral-content">
            {transaction.authorizedUser && `${transaction.authorizedUser} - `}
            {isWithinInterval(new Date(transaction.date), {
              end: new Date(),
              start: subDays(new Date(), 7),
            })
              ? format(new Date(transaction.date), "EEEE")
              : format(new Date(transaction.date), "dd/MM/yyyy")}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <p
          className={`font-bold ${
            transaction.type === "Payment" ? "text-success" : "text-error"
          }`}
        >
          {transaction.type === "Payment" ? "+" : "-"}$
          {transaction.amount.toFixed(2)}
        </p>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </li>
  );
}

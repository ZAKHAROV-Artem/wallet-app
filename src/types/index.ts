export interface Transaction {
  amount: number;
  authorizedUser: null | string;
  date: string;
  description: string;
  icon: {
    bgGradient: string;
  };
  id: number;
  name: string;
  pending: boolean;
  type: "Credit" | "Payment";
}

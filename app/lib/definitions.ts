export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  status: string;
  date: "pending" | "paid";
};

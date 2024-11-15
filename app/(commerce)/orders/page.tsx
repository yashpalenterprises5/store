import OrderList from "./_components/order-list";

export default function DynamicOrderHistory() {
  return (
    <div className="body">
      <div>
        <h1 className="text-2xl font-bold">Order history</h1>
        <p className="text-gray-600">
          Check the status of recent orders, manage returns, and discover
          similar products.
        </p>
      </div>
      <OrderList />
    </div>
  );
}

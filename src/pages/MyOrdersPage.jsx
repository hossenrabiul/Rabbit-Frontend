import { useNavigate } from "react-router-dom";

const MyOrdersPage = ({ orders }) => {
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/orderDetails/${id}`);
  };
  // console.log(orders)
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">My Orders</h1>

      <div className="shadow-lg rounded-lg overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="py-3 px-4">Order ID</th>
              <th className="py-3 px-4">Created</th>
              <th className="py-3 px-4">City</th>
              <th className="py-3 px-4">Items</th>
              <th className="py-3 px-4">Total</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders?.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b hover:bg-gray-50 cursor-pointer"
                >
                  <td className="px-4 py-3 font-medium">
                    #{order.orderNumber}
                  </td>

                  <td className="px-4 py-3">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>

                  <td className="px-4 py-3">
                    {order.customer.city}
                  </td>

                  <td className="px-4 py-3">
                    {order.items.length}
                  </td>

                  <td className="px-4 py-3 font-semibold">
                    ${order.total}
                  </td>

                  <td className="px-4 py-3">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 text-sm rounded-full">
                      {order.status}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => handleRowClick(order._id)}
                      className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-8">
                  You have no orders
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdersPage;
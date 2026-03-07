const checkOut = {
  _id: 2345,
  createdAt: new Date(),
  orderIterms: [
    {
      productId: 1,
      name: "T-Shirt",
      size: "Xl",
      color: "white",
      price : 200,
      quantity: 1,
      image: "https://picsum.photos/200/300/?random=200",
    },
    {
      productId: 2,
      name: "Jhaket",
      size: "Xl",
      color: "white",
      price : 200,
      quantity: 2,
      image: "https://picsum.photos/200/300/?random=500",
    },
  ],
  address : '123 Fashion Street',
  city : "New York",
  country : "USA"
};

const OrderConfirmation = () => {
  const calculateEstimitedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate());

    return orderDate.toLocaleDateString();
  };
  return (
    <div className="mt-[124px] max-w-4xl mx-auto p-6 bg-white">
      <h2 className="text-4xl font-bold text-center text-emerald-600 mb-8">
        Thank You For Your Order
      </h2>
      {checkOut && (
        <div className="rounded-lg border p-6">
          <div className="flex justify-between mb-20">
            <div>
              <h2 className="text-xl font-semibold">
                Order Id: {checkOut._id}
              </h2>
              <p className="text-gray-500">
                Order Date: {new Date(checkOut.createdAt).toLocaleDateString()}
              </p>
            </div>
            {/* Estimited Date */}
            <div>
              <p className="text-sm text-emerald-600 font-semibold">
                Estimated Date :{" "}
                {calculateEstimitedDelivery(checkOut.createdAt)}
              </p>
            </div>
          </div>

          <div className="mb-10">
            {checkOut.orderIterms.map((item, idx) => (
              <div key={idx} className="mb-3 flex">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-md mr-3 object-cover"
                />
                <div>
                  <p className="text-[16px] font-semibold">Size: {item.size}</p>
                  <p>Color : {item.color}</p>
                </div>
                <div className="ml-auto text-right">
                    <p className="text-[16px]">${item.price}</p>
                    <p className="text-sm text-gray-600">Qty : {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment and order info */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h1 className="text-lg font-semibold">Payment</h1>
              <p className="text-gray-600">Paypal</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Delivery</h4>
              <p className="text-gray-600">{checkOut.address}</p>
              <p className="text-gray-600">{checkOut.city}, {" "} {checkOut.country}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;

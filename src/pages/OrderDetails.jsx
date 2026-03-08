import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOrder } from "../services/order.service";
import {
  Package,
  MapPin,
  CreditCard,
  Calendar,
  CheckCircle2,
} from "lucide-react";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const data = await getOrder(id);
      setOrder(data);
    };

    fetchOrder();
  }, [id]);
  console.log(order);
  if (!order)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center">
          <div className="inline-block animate-spin mb-4">
            <Package className="w-10 h-10 text-slate-400" />
          </div>
          <p className="text-slate-600 font-medium">Loading order details...</p>
        </div>
      </div>
    );

  const getStatusColor = (status) => {
    const colors = {
      pending: "bg-amber-50 text-amber-700 border-amber-200",
      confirmed: "bg-blue-50 text-blue-700 border-blue-200",
      shipped: "bg-indigo-50 text-indigo-700 border-indigo-200",
      delivered: "bg-emerald-50 text-emerald-700 border-emerald-200",
      cancelled: "bg-rose-50 text-rose-700 border-rose-200",
    };
    return colors[status.toLowerCase()] || colors.pending;
  };

  const getPaymentStatusColor = (status) => {
    return status.toLowerCase() === "paid"
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : "bg-amber-50 text-amber-700 border-amber-200";
  };

  const KeyValue = ({ label, value, icon: Icon }) => (
    <div className="flex items-start gap-4 py-3.5 border-b border-slate-100 last:border-b-0 group hover:bg-slate-50 px-2 rounded transition-colors">
      {Icon && (
        <div className="flex-shrink-0 mt-0.5">
          <Icon className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-500 mb-1">{label}</p>
        <p className="text-base text-slate-900 font-medium break-words">
          {value}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-12 px-4 mt-[124px]">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1 h-8 bg-gradient-to-b from-slate-800 to-slate-600 rounded-full"></div>
          <h1 className="text-4xl font-light text-slate-900 tracking-tight">
            Order <span className="font-semibold">#{order?.orderNumber}</span>
          </h1>
        </div>
        <p className="text-slate-500 ml-4">
          Order placed on{" "}
          <span className="font-medium text-slate-700">
            {new Date(order?.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Status Bar */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div
            className={`flex-1 rounded-lg border-2 p-4 ${getStatusColor(
              order?.status,
            )}`}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-1">
              Order Status
            </p>
            <p className="text-lg font-semibold capitalize flex items-center gap-2">
              {order?.status === "delivered" && (
                <CheckCircle2 className="w-5 h-5" />
              )}
              {order?.status}
            </p>
          </div>

          <div
            className={`flex-1 rounded-lg border-2 p-4 ${getPaymentStatusColor(
              order?.paymentStatus,
            )}`}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-1">
              Payment Status
            </p>
            <p className="text-lg font-semibold capitalize">
              {order?.paymentStatus}
            </p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Order Information */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
              <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-slate-600" />
                Order Information
              </h2>
            </div>
            <div className="p-6">
              <KeyValue
                label="Payment Method"
                value={order?.paymentMethod}
                icon={CreditCard}
              />
              <KeyValue
                label="Order Date"
                value={new Date(order?.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                icon={Calendar}
              />
              <KeyValue
                label="Total Amount"
                value={`$${order?.total?.toFixed(2)}`}
              />
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
              <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-slate-600" />
                Shipping Address
              </h2>
            </div>
            <div className="p-6">
              <KeyValue label="Full Name" value={order?.customer?.firstName} />
              <KeyValue label="Email" value={order?.customer?.email} />
              <KeyValue label="Phone" value={order?.customer?.number} />
              <KeyValue label="Street Address" value={order?.customer?.address} />
              <KeyValue label="City" value={order?.customer?.city} />
              <KeyValue label="Country" value={order?.customer?.country} />
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
            <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <Package className="w-5 h-5 text-slate-600" />
              Order Items
            </h2>
          </div>

          <div className="divide-y divide-slate-200">
            {order.items.map((item, index) => (
              <div
                key={index}
                className="p-6 hover:bg-slate-50 transition-colors flex items-center gap-6 group"
              >
                {/* Product Image */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-slate-100 rounded-lg overflow-hidden border border-slate-200 group-hover:border-slate-300 transition-colors">
                    <img
                      src={item?.productId?.image}
                      alt={item?.productId?.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-slate-900 mb-2">
                    {item?.productId?.name}
                  </h3>
                  <div className="flex items-center gap-6 text-sm text-slate-600">
                    <span className="flex items-center gap-2">
                      <span className="font-medium">Quantity:</span>
                      <span className="bg-slate-100 px-3 py-1 rounded-md font-semibold text-slate-700">
                        {item.quantity}
                      </span>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="font-medium">Unit Price:</span>
                      <span className="text-slate-900 font-semibold">
                        {item?.productId?.price.toFixed(2)}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex-shrink-0 text-right">
                  <p className="text-2xl font-bold text-slate-900">
                    {(item?.productId?.price * item?.quantity).toFixed(2)}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">Subtotal</p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-slate-50 border-t border-slate-200 px-6 py-6">
            <div className="flex justify-end">
              <div className="w-full sm:w-80">
                {/* Itemized Total */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-slate-700">
                    <span className="font-medium">Subtotal</span>
                    <span>{(order?.total * 0.9).toFixed(2)}</span>
                  </div>
                 
                  <div className="border-t border-slate-300 pt-3 mt-3 flex justify-between items-center">
                    <span className="text-lg font-semibold text-slate-900">
                      Total
                    </span>
                    <span className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                      {order?.total?.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;

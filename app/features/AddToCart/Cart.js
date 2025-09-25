import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  removeTicket,
  clearCart,
} from '@/features/AddToCart/cartSlice';
import { Trash2, X } from 'lucide-react';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [selectedDraw, setSelectedDraw] = useState(null);

  // subtotal = sum of all tickets across all draws
  const subtotal = cartItems.reduce(
    (sum, draw) => sum + draw.price * draw.tickets.length,
    0,
  );

  return (
    <div className="bg-black text-white px-4 md:px-8 py-12 font-poppins flex flex-col lg:flex-col gap-8">
      {/* Left Side - Cart Table */}
      <div className="w-full lg:w-3/4 overflow-x-auto">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-400">Your cart is empty.</p>
        ) : (
          <table className="w-full text-left border-collapse text-sm md:text-base">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="pb-3 pr-2">Draw Name</th>
                <th className="pb-3 pr-2">Date/Time</th>
                <th className="pb-3 pr-2">Your Sequence</th>
                <th className="pb-3 pr-2">Price</th>
                <th className="pb-3"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((draw) => {
                const firstTicket = draw.tickets[0];
                return (
                  <tr
                    key={draw.drawId}
                    className="border-b border-gray-700 hover:bg-gray-900"
                  >
                    <td className="py-3">{draw.drawName}</td>
                    <td className="py-3 text-xs md:text-sm text-gray-300">
                      {new Date(firstTicket.id).toLocaleString()}
                    </td>
                    <td className="py-3 flex flex-wrap gap-2">
                      {firstTicket.mainNumbers.map((num, i) => (
                        <span
                          key={i}
                          className="bg-[#d4ac54] text-black font-semibold px-2 md:px-3 py-1 rounded-md border border-black"
                        >
                          {num.toString().padStart(2, '0')}
                        </span>
                      ))}
                      {firstTicket.megaNumber && (
                        <span className="bg-red-600 text-white px-2 md:px-3 py-1 rounded-md border border-black">
                          {firstTicket.megaNumber.toString().padStart(2, '0')}
                        </span>
                      )}
                      {/* View Tickets Button */}
                      <button
                        onClick={() => setSelectedDraw(draw.drawId)}
                        className="ml-2 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-xs md:text-sm"
                      >
                        View Tickets
                      </button>
                    </td>
                    <td className="py-3 font-semibold">
                      ₹{draw.price * draw.tickets.length}.00
                    </td>
                    <td className="py-3 text-center">
                      <button
                        onClick={() =>
                          dispatch(removeFromCart({ drawId: draw.drawId }))
                        }
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* Right Side - Cart Total */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-11/12 md:w-1/2 lg:w-[60%] bg-[#d4ac54] text-black rounded-xl p-6 shadow-lg h-auto lg:h-[60vh]">
          <h3 className="text-lg font-bold mb-4">Cart Total</h3>

          <div className="space-y-3 text-sm md:text-base">
            {cartItems.map((draw) =>
              draw.tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="flex justify-between border-b border-black pb-1"
                >
                  <span>
                    {draw.drawName} / {new Date(ticket.id).toLocaleTimeString()}
                  </span>
                  <span>₹{draw.price}.00</span>
                </div>
              )),
            )}
          </div>

          <div className="flex justify-between font-bold text-base md:text-lg mt-4 border-t border-black pt-2">
            <span>Subtotal</span>
            <span>₹{subtotal}.00</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center space-y-4 mt-6">
            <button className="w-60 bg-white text-black font-semibold py-2 rounded-md shadow hover:bg-gray-200 text-sm md:text-base">
              Checkout
            </button>
            <button className="w-60 bg-black text-white font-semibold py-2 rounded-md shadow hover:bg-gray-800 text-sm md:text-base">
              Buy More Tickets
            </button>
            <button
              onClick={() => dispatch(clearCart())}
              className="w-60 bg-red-600 text-white font-semibold py-2 rounded-md shadow hover:bg-red-700 text-sm md:text-base"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>

      {/* Ticket Modal */}
      {selectedDraw && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-white text-black rounded-xl p-6 w-full max-w-md relative shadow-xl">
            {/* Close modal button */}
            <button
              onClick={() => setSelectedDraw(null)}
              className="absolute top-3 left-3 text-gray-500 hover:text-black"
            >
              <X size={22} />
            </button>

            <h3 className="text-xl text-center font-bold mb-4">Your Tickets</h3>

            {cartItems
              .find((d) => d.drawId === selectedDraw)
              ?.tickets.map((ticket) => (
                <div key={ticket.id} className="mb-4 border-b pb-3">
                  <p className="text-sm text-gray-600 mb-2">
                    {new Date(ticket.id).toLocaleString()}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {ticket.mainNumbers.map((num, i) => (
                      <span
                        key={i}
                        className="bg-[#d4ac54] text-black px-3 py-1 rounded-md border border-black"
                      >
                        {num.toString().padStart(2, '0')}
                      </span>
                    ))}
                    {ticket.megaNumber && (
                      <span className="bg-red-600 text-white px-3 py-1 rounded-md border border-black">
                        {ticket.megaNumber.toString().padStart(2, '0')}
                      </span>
                    )}
                  </div>
                  <p className="font-semibold mt-1">
                    Price: ₹{ticket.price}.00
                  </p>
                  {/* Delete single ticket */}
                  <button
                    onClick={() =>
                      dispatch(
                        removeTicket({
                          drawId: selectedDraw,
                          ticketId: ticket.id,
                        }),
                      )
                    }
                    className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                  >
                    Delete Ticket
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

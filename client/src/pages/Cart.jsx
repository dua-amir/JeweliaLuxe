
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Cart = () => {
  const { products, currency, cartItems, removeFromCart, addToCart, decreaseCart } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const navigate = useNavigate();
  const shippingFee = 15;

  // Update cart data and save to DB
  useEffect(() => {
    const tempData = [];
    let tempSubtotal = 0;

    for (const itemId in cartItems) {
      const quantity = cartItems[itemId];
      if (quantity > 0) {
        const product = products.find(p => p._id === itemId || p.id === itemId);

        if (product) {
          tempData.push({
            productId: itemId,
            quantity,
            price: product.price,
          });

          tempSubtotal += product.price * quantity;
        }
      }
    }

    setCartData(tempData);
    setSubtotal(tempSubtotal);

    // Save cart to DB if user is logged in
    const userId = localStorage.getItem('userId');
    if (userId) {
      fetch('http://localhost:5000/api/cart/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, items: tempData }),
      })
      .then(res => res.json())
      .then(data => console.log('Cart saved:', data))
      .catch(err => console.error('Failed to save cart:', err));
    }

  }, [cartItems, products]);

  const handleDelete = (itemId) => {
    removeFromCart(itemId);
    alert('Item deleted from cart');
  };

  const total = subtotal + shippingFee;

  return (
    <div className='pt-10 px-4 md:px-10'>
      <div className="flex items-center justify-center gap-4 mb-8">
        <h2 className="text-2xl font-medium">
          Your <strong className="font-bold text-yellow-800">Cart</strong>
        </h2>
      </div>

      {cartData.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div className='flex flex-col gap-8'>
          {/* Cart Products Section */}
          <div className='space-y-4'>
            <hr className="border-gray-300 mb-2" />

            {cartData.map((item, index) => {
              const product = products.find(p => p._id === item.productId || p.id === item.productId);
              if (!product) return null;

              return (
                <div key={index} className='border-b border-gray-200 py-4 flex items-center justify-between gap-6'>
                  {/* Product Info */}
                  <div className='flex items-center gap-4 w-1/3'>
                    <img
                      className='w-20 h-20 object-cover rounded-md'
                      src={product.image?.main || product.image[0]}
                      alt={product.name}
                    />
                    <div className='flex flex-col'>
                      <p className='font-semibold text-gray-900'>{product.name}</p>
                      {/* Size removed */}
                      <p className='text-lg font-bold text-gray-800 mt-1'>{currency}{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>

                  {/* Quantity Input */}
                  <div className='w-1/3 flex justify-center'>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => {
                        const newQty = parseInt(e.target.value) || 1;
                        const diff = newQty - item.quantity;
                        if (diff > 0) {
                          for (let i = 0; i < diff; i++) addToCart(item.productId);
                        } else if (diff < 0) {
                          for (let i = 0; i < Math.abs(diff); i++) decreaseCart(item.productId);
                        }
                      }}
                      className="w-16 text-center border rounded-md px-2 py-1"
                    />
                  </div>

                  {/* Delete Button */}
                  <div className='w-1/3 flex justify-end'>
                    <button
                      onClick={() => handleDelete(item.productId)}
                      className='text-red-500 text-2xl hover:text-red-600 transition'
                      title="Delete"
                      aria-label="Remove item from cart"
                    > 🗑️ </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cart Total Section */}
          <div className='w-full lg:w-1/3 lg:ml-auto p-5'>
            <div className="flex items-center justify-center gap-4 mb-8">
              <h2 className="text-2xl font-medium">
                CONTACT <strong className="font-bold">US</strong>
              </h2>
            </div>

            <div className='space-y-3 text-sm'>
              <div className='flex justify-between'>
                <span className='font-medium'>Subtotal</span>
                <span>{currency}{subtotal.toFixed(2)}</span>
              </div>
              <div className='flex justify-between'>
                <span className='font-medium'>Shipping Fee</span>
                <span>{currency}{shippingFee.toFixed(2)}</span>
              </div>

              <hr className='my-2 border-gray-300' />

              <div className='flex justify-between text-base font-bold'>
                <span>Total</span>
                <span>{currency}{total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => alert("This feature will be available soon!")}
              className='mt-6 w-full bg-black text-white py-3 text-sm font-semibold hover:opacity-90 transition-all duration-200'
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Cart = () => {
  const { products, currency, cartItems, removeFromCart, addToCart, decreaseCart } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const navigate = useNavigate();
  const shippingFee = 15;

  // 🔄 Update cart data and send to DB
  useEffect(() => {
    const tempData = [];
    let tempSubtotal = 0;

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          const product = products.find(p => p._id === itemId || p.id === itemId);
          const quantity = cartItems[itemId][size];

          if (product) {
            tempData.push({
              productId: itemId,
              size,
              quantity,
              price: product.price,
            });

            tempSubtotal += product.price * quantity;
          }
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
      .then(data => console.log('🛒 Cart saved:', data))
      .catch(err => console.error('❌ Failed to save cart:', err));
    }

  }, [cartItems, products]);

  const handleDelete = (itemId, size) => {
    removeFromCart(itemId, size);
  };

  const total = subtotal + shippingFee;

  return (
    <div className='pt-10 px-4 md:px-10'>
      <div className='text-2xl mb-6'>
        <Title text1={'YOUR'} text2={'CART'} />
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
                <div key={index} className='border-b border-gray-200 py-4 flex justify-between items-center'>
                  {/* Product Info */}
                  <div className='flex items-center gap-4 w-1/3'>
                    <img
                      className='w-20 h-20 object-cover'
                      src={product.image?.main || product.image[0]}
                      alt={product.name}
                    />
                    <div className='space-y-1 text-sm'>
                      <p className='font-semibold'>{product.name}</p>
                      <p>Size: {item.size}</p>
                      <p>Price: {currency}{item.price * item.quantity}</p>
                    </div>
                  </div>

                  {/* Quantity Input */}
                  <div className='w-1/3 flex justify-center'>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => {
                        const newQty = parseInt(e.target.value);
                        const diff = newQty - item.quantity;
                        if (diff > 0) {
                          for (let i = 0; i < diff; i++) addToCart(item.productId, item.size);
                        } else if (diff < 0) {
                          for (let i = 0; i < Math.abs(diff); i++) decreaseCart(item.productId, item.size);
                        }
                      }}
                      className="w-16 text-center border px-2 py-1"
                    />
                  </div>

                  {/* Delete Button */}
                  <div className='w-1/3 flex justify-end'>
                    <button
                      onClick={() => handleDelete(item.productId, item.size)}
                      className='text-red-500 text-lg'
                      title='Delete'
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cart Total Section */}
          <div className='w-full lg:w-1/3 lg:ml-auto p-5'>
            <div className='mb-4'>
              <Title text1={'CART'} text2={'TOTAL'} />
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
                <span>{currency}{(subtotal + shippingFee).toFixed(2)}</span>
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

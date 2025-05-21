const Cart = require('../models/Cart');

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id }).populate('items.productId');
    res.json(cart || { userId: req.user.id, items: [] });
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addToCart = async (req, res) => {
  const { productId } = req.body;

  try {
    let cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) {
      cart = new Cart({ userId: req.user.id, items: [{ productId, quantity: 1 }] });
    } else {
      const item = cart.items.find(i => i.productId == productId);
      if (item) item.quantity += 1;
      else cart.items.push({ productId, quantity: 1 });
    }

    await cart.save();
    res.json(cart);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.removeFromCart = async (req, res) => {
  const { productId } = req.body;

  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.items = cart.items.filter(item => item.productId != productId);
    await cart.save();

    res.json(cart);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
};

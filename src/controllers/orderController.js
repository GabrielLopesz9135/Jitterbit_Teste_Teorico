const Order = require('../models/orderModel');
const { mapInputToOrder } = require('../utils/mapper');
const { createOrderSchema } = require('../validators/orderValidator');

const createOrder = async (req, res) => {
  const { error } = createOrderSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.message });

  const mapped = mapInputToOrder(req.body);

  // checar se orderId existe
  const exists = await Order.findOne({ orderId: mapped.orderId });
  if (exists) return res.status(409).json({ error: 'orderId já existe' });

  const order = await Order.create(mapped);
  return res.status(201).json(order);
};

const getOrder = async (req, res) => {
  const { id } = req.params; // /order/:id
  const order = await Order.findOne({ orderId: id });
  if (!order) return res.status(404).json({ error: 'Pedido não encontrado' });
  return res.json(order);
};

const listOrders = async (req, res) => {
  const orders = await Order.find().sort({ creationDate: -1 });
  return res.json(orders);
};

const updateOrder = async (req, res) => {
  const { id } = req.params;
  const mapped = mapInputToOrder(req.body);
  const updated = await Order.findOneAndUpdate({ orderId: id }, mapped, { new: true });
  if (!updated) return res.status(404).json({ error: 'Pedido não encontrado' });
  return res.json(updated);
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  const removed = await Order.findOneAndDelete({ orderId: id });
  if (!removed) return res.status(404).json({ error: 'Pedido não encontrado' });
  return res.status(204).send();
};

module.exports = { createOrder, getOrder, listOrders, updateOrder, deleteOrder };

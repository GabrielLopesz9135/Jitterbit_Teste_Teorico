const Joi = require('joi');

const itemSchema = Joi.object({
  idItem: Joi.alternatives().try(Joi.string(), Joi.number()).required(),
  quantidadeItem: Joi.number().integer().min(1).required(),
  valorItem: Joi.number().required(),
});

const createOrderSchema = Joi.object({
  numeroPedido: Joi.string().required(),
  valorTotal: Joi.number().required(),
  dataCriacao: Joi.string().isoDate().required(),
  items: Joi.array().items(itemSchema).min(1).required(),
});

module.exports = { createOrderSchema };

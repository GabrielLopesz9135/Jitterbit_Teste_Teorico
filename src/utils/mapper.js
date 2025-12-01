const mapInputToOrder = (input) => {
  return {
    orderId: input.numeroPedido,
    value: input.valorTotal,
    creationDate: new Date(input.dataCriacao),
    items: (input.items || []).map(i => ({
      productId: Number(i.idItem),
      quantity: i.quantidadeItem,
      price: i.valorItem,
    })),
  };
};

module.exports = { mapInputToOrder };
